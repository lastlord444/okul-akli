import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const fixturePath = path.join(__dirname, 'fixtures', 'smoke-questions.json');
  const fileContent = fs.readFileSync(fixturePath, 'utf-8');
  const questions = JSON.parse(fileContent);

  console.log(`Bắt đầu xử lý ${questions.length} soru...`); // Wait, let's use Turkish
  console.log(`[Smoke Import] Starting to process ${questions.length} questions...`);

  let createdCount = 0;
  let updatedCount = 0;
  let optionsWrittenCount = 0;

  for (const q of questions) {
    // 1. Ensure Catalog (GradeLevel, Subject, Topic) exists
    let gradeLevel = await prisma.gradeLevel.findUnique({ where: { name: q.gradeLevelName } });
    if (!gradeLevel) {
      const order = parseInt(q.gradeLevelName) || 9;
      gradeLevel = await prisma.gradeLevel.create({
        data: { name: q.gradeLevelName, levelOrder: order }
      });
    }

    let subject = await prisma.subject.findUnique({ where: { name: q.subjectName } });
    if (!subject) {
      subject = await prisma.subject.create({ data: { name: q.subjectName } });
    }

    let topic = await prisma.topic.findUnique({
      where: {
        name_subjectId_gradeLevelId: {
          name: q.topicName,
          subjectId: subject.id,
          gradeLevelId: gradeLevel.id,
        }
      }
    });
    if (!topic) {
      topic = await prisma.topic.create({
        data: {
          name: q.topicName,
          subjectId: subject.id,
          gradeLevelId: gradeLevel.id,
        }
      });
    }

    // 2. Ensure QuestionSource exists (Upsert)
    const source = await prisma.questionSource.upsert({
      where: { name: q.sourceName },
      update: {},
      create: { name: q.sourceName },
    });

    // 3. Upsert Question using sourceId + externalId
    // Because we need to delete existing options if it already exists, let's check first.
    const existingQuestion = await prisma.question.findUnique({
      where: {
        sourceId_externalId: {
          sourceId: source.id,
          externalId: q.externalId,
        }
      }
    });

    let question;
    if (existingQuestion) {
      // Delete existing options
      await prisma.questionOption.deleteMany({
        where: { questionId: existingQuestion.id }
      });
      
      question = await prisma.question.update({
        where: { id: existingQuestion.id },
        data: {
          text: q.text,
          topicId: topic.id,
          status: 'DRAFT',
        }
      });
      updatedCount++;
    } else {
      question = await prisma.question.create({
        data: {
          externalId: q.externalId,
          text: q.text,
          topicId: topic.id,
          sourceId: source.id,
          status: 'DRAFT',
        }
      });
      createdCount++;
    }

    // 4. Insert QuestionOptions
    for (const opt of q.options) {
      await prisma.questionOption.create({
        data: {
          text: opt.text,
          isCorrect: opt.isCorrect,
          questionId: question.id,
        }
      });
      optionsWrittenCount++;
    }
  }

  console.log(`[Smoke Import] Summary:`);
  console.log(` - Total questions processed: ${questions.length}`);
  console.log(` - Created questions: ${createdCount}`);
  console.log(` - Updated questions: ${updatedCount}`);
  console.log(` - Options written: ${optionsWrittenCount}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
