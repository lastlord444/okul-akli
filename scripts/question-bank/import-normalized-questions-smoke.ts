import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const DATA_FILE = path.join(process.cwd(), '.local-data', 'question-bank', 'alibayram-turkish-mmlu-normalized-50k.jsonl');
const LIMIT = parseInt(process.env.IMPORT_LIMIT || '500', 10);
const DRY_RUN = process.env.DRY_RUN === 'true';

if (LIMIT > 15000) {
  console.error("Error: IMPORT_LIMIT cannot exceed 15000 on this branch to prevent accidental full imports.");
  console.error("full 50k import is intentionally blocked in this slice.");
  process.exit(1);
}

if (!process.env.DATABASE_URL) {
  console.error("Error: DATABASE_URL environment variable is not set.");
  process.exit(1);
}

import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  if (!fs.existsSync(DATA_FILE)) {
    console.error(`Error: Normalized JSONL file not found at ${DATA_FILE}`);
    process.exit(1);
  }

  // We need a default GradeLevel for Topics because Topic.gradeLevelId is required in schema, 
  // but the dataset has gradeLevel = null.
  let defaultGradeLevel: any = null;
  if (!DRY_RUN) {
    defaultGradeLevel = await prisma.gradeLevel.findUnique({ where: { name: "Unspecified" } });
    if (!defaultGradeLevel) {
      defaultGradeLevel = await prisma.gradeLevel.create({
        data: { name: "Unspecified", levelOrder: 999 }
      });
    }
  }

  console.log(`[Smoke Import] Starting import with limit: ${LIMIT}`);
  const startTime = performance.now();
  
  const fileStream = fs.createReadStream(DATA_FILE);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let rowsRead = 0;
  let rowsImported = 0;
  let questionsCreated = 0;
  let questionsUpdated = 0;
  let optionsWritten = 0;
  let skippedRows = 0;
  let warningRows = 0;
  let duplicateQuestionTextWarnings = 0;
  let gradeLevelFallbackCount = 0;

  let sourcesCreatedOrFound = 0;
  let subjectsCreatedOrFound = 0;
  let topicsCreatedOrFound = 0;

  const seenQuestionTexts = new Set<string>();

  // Caches to avoid excessive DB queries for catalog
  const sourceCache = new Map<string, string>();
  const subjectCache = new Map<string, string>();
  const topicCache = new Map<string, string>(); // key: name_subjectId_gradeLevelId
  

  for await (const line of rl) {
    if (rowsImported >= LIMIT) break;
    if (!line.trim()) continue;
    rowsRead++;

    let parsed: any;
    try {
      parsed = JSON.parse(line);
    } catch (err) {
      skippedRows++;
      continue;
    }

    // Basic validation
    if (!parsed.externalId || !parsed.sourceName || !parsed.questionText || !parsed.options || parsed.options.length < 2) {
      skippedRows++;
      continue;
    }

    // Warn duplicate text
    if (seenQuestionTexts.has(parsed.questionText)) {
      warningRows++;
      duplicateQuestionTextWarnings++;
    } else {
      seenQuestionTexts.add(parsed.questionText);
    }

    if (DRY_RUN) {
      if (!parsed.gradeLevel) gradeLevelFallbackCount++;
      optionsWritten += parsed.options.length;
      questionsCreated++; // mock counter for dry run visibility
      rowsImported++;
      continue;
    }

    // Process Source
    let sourceId = sourceCache.get(parsed.sourceName);
    if (!sourceId) {
      const source = await prisma.questionSource.upsert({
        where: { sourceName: parsed.sourceName },
        update: {},
        create: {
          sourceName: parsed.sourceName,
          sourceUrl: parsed.sourceUrl || null,
          license: parsed.license || null,
          devOnly: parsed.devOnly ?? true,
        }
      });
      sourceId = source.id;
      sourceCache.set(parsed.sourceName, sourceId);
      sourcesCreatedOrFound++;
    }

    // Process Subject
    let subjectId: string | null = null;
    if (parsed.subject) {
      subjectId = subjectCache.get(parsed.subject) || null;
      if (!subjectId) {
        const subject = await prisma.subject.upsert({
          where: { name: parsed.subject },
          update: {},
          create: { name: parsed.subject }
        });
        subjectId = subject.id;
        subjectCache.set(parsed.subject, subjectId);
        subjectsCreatedOrFound++;
      }
    }

    // Process GradeLevel
    let gradeLevelId: string | null = null;
    if (parsed.gradeLevel) {
      const order = parseInt(parsed.gradeLevel, 10) || 0;
      const gl = await prisma.gradeLevel.upsert({
        where: { name: parsed.gradeLevel },
        update: {},
        create: { name: parsed.gradeLevel, levelOrder: order }
      });
      gradeLevelId = gl.id;
    }

    // Process Topic
    let topicId: string | null = null;
    if (parsed.topic && subjectId) {
      // Topic requires gradeLevelId in schema, fallback to default if dataset is null
      if (!gradeLevelId) {
        gradeLevelFallbackCount++;
      }
      const topicGlId = gradeLevelId || defaultGradeLevel.id;
      const cacheKey = `${parsed.topic}_${subjectId}_${topicGlId}`;
      topicId = topicCache.get(cacheKey) || null;
      if (!topicId) {
        let topic = await prisma.topic.findUnique({
          where: {
            name_subjectId_gradeLevelId: {
              name: parsed.topic,
              subjectId: subjectId,
              gradeLevelId: topicGlId,
            }
          }
        });
        if (!topic) {
          topic = await prisma.topic.create({
            data: {
              name: parsed.topic,
              subjectId: subjectId,
              gradeLevelId: topicGlId,
            }
          });
        }
        topicId = topic.id;
        topicCache.set(cacheKey, topicId);
        topicsCreatedOrFound++;
      }
    }

    // Process Question (Idempotent by sourceId + externalId)
    const existingQuestion = await prisma.question.findUnique({
      where: {
        sourceId_externalId: {
          sourceId: sourceId,
          externalId: parsed.externalId,
        }
      }
    });

    let question;
    if (existingQuestion) {
      // Delete existing options before update
      await prisma.questionOption.deleteMany({
        where: { questionId: existingQuestion.id }
      });

      question = await prisma.question.update({
        where: { id: existingQuestion.id },
        data: {
          questionText: parsed.questionText,
          explanation: parsed.explanation || null,
          difficulty: parsed.difficulty || null,
          gradeLevelId: gradeLevelId, // user: GradeLevel null ise gradeLevelId null bırak
          subjectId: subjectId,
          topicId: topicId,
          reviewStatus: 'DRAFT',
          devOnly: parsed.devOnly ?? true,
        }
      });
      questionsUpdated++;
    } else {
      question = await prisma.question.create({
        data: {
          externalId: parsed.externalId,
          sourceId: sourceId,
          questionText: parsed.questionText,
          explanation: parsed.explanation || null,
          difficulty: parsed.difficulty || null,
          gradeLevelId: gradeLevelId, // null allowed here
          subjectId: subjectId,
          topicId: topicId,
          reviewStatus: 'DRAFT',
          devOnly: parsed.devOnly ?? true,
        }
      });
      questionsCreated++;
    }

    // Process Options
    const optionsData = parsed.options.map((opt: any) => ({
      questionId: question.id,
      label: opt.label,
      text: opt.text,
      isCorrect: (parsed.correctOptionLabel === opt.label) || (opt.isCorrect === true)
    }));

    await prisma.questionOption.createMany({
      data: optionsData
    });
    optionsWritten += optionsData.length;

    rowsImported++;
  }

  const endTime = performance.now();
  const durationMs = endTime - startTime;
  const rowsPerSec = rowsImported > 0 ? (rowsImported / (durationMs / 1000)).toFixed(2) : 0;

  // DB Verification Queries
  let finalSourceCount = 0, finalSubjectCount = 0, finalTopicCount = 0, finalGradeLevelCount = 0, finalQuestionCount = 0, finalOptionCount = 0;
  
  if (!DRY_RUN) {
    finalSourceCount = await prisma.questionSource.count();
    finalSubjectCount = await prisma.subject.count();
    finalTopicCount = await prisma.topic.count();
    finalGradeLevelCount = await prisma.gradeLevel.count();
    finalQuestionCount = await prisma.question.count({
      where: { source: { sourceName: "alibayram/turkish_mmlu" } }
    });
    finalOptionCount = await prisma.questionOption.count({
      where: { question: { source: { sourceName: "alibayram/turkish_mmlu" } } }
    });
  }

  console.log(`\n[Smoke Import] Run Completed`);
  console.log(` - dryRun: ${DRY_RUN}`);
  console.log(` - requested limit: ${LIMIT}`);
  console.log(` - Duration: ${(durationMs / 1000).toFixed(2)}s`);
  console.log(` - Rows per second: ${rowsPerSec}`);
  console.log(` - processed rows count (read): ${rowsRead}`);
  console.log(` - parsed rows count (imported): ${rowsImported}`);
  console.log(` - skipped/malformed count: ${skippedRows}`);
  console.log(` - Warning rows (duplicate text): ${warningRows}`);
  console.log(` - Questions created/processed: ${questionsCreated}`);
  console.log(` - Questions updated: ${questionsUpdated}`);
  console.log(` - total options that would be written (optionsWritten): ${optionsWritten}`);
  console.log(` - GradeLevel fallbacks applied: ${gradeLevelFallbackCount}`);
  
  console.log(`\n[Verification Counts]`);
  console.log(` - Source count: ${finalSourceCount}`);
  console.log(` - Subject count: ${finalSubjectCount}`);
  console.log(` - Topic count: ${finalTopicCount}`);
  console.log(` - GradeLevel count: ${finalGradeLevelCount}`);
  console.log(` - Question count (alibayram/turkish_mmlu): ${finalQuestionCount}`);
  console.log(` - Option count (alibayram/turkish_mmlu): ${finalOptionCount}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
