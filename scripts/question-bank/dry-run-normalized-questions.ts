import fs from 'fs';
import path from 'path';
import readline from 'readline';

const DATA_FILE = path.join(process.cwd(), '.local-data', 'question-bank', 'alibayram-turkish-mmlu-normalized-50k.jsonl');
const OUTPUT_FILE = path.join(process.cwd(), 'docs', 'product', 'question-bank-50k-import-dry-run.md');

async function main() {
  if (!fs.existsSync(DATA_FILE)) {
    console.error("50k normalized JSONL not found. Run HF normalize script first.");
    process.exit(1);
  }

  const fileStream = fs.createReadStream(DATA_FILE);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let totalRowsSeen = 0;
  let importableRows = 0;
  let hardInvalidRows = 0;
  let warningRows = 0;
  let duplicateExternalIdCount = 0;
  let duplicateQuestionTextWarningCount = 0;

  const seenExternalIds = new Set<string>();
  const seenQuestionTexts = new Set<string>();

  const subjectCount = new Map<string, number>();
  const topicCount = new Map<string, number>();
  const optionCountDistribution = new Map<number, number>();
  const correctLabelDistribution = new Map<string, number>();
  const rejectedReasonSummary = new Map<string, number>();

  const first5Valid: any[] = [];
  const first5Invalid: { data: any, reasons: string[] }[] = [];

  function addReason(reason: string) {
    rejectedReasonSummary.set(reason, (rejectedReasonSummary.get(reason) || 0) + 1);
  }

  for await (const line of rl) {
    if (!line.trim()) continue;
    totalRowsSeen++;

    let parsed: any;
    try {
      parsed = JSON.parse(line);
    } catch (err) {
      hardInvalidRows++;
      addReason("Invalid JSON format");
      if (first5Invalid.length < 5) first5Invalid.push({ data: line, reasons: ["Invalid JSON format"] });
      continue;
    }

    const reasons: string[] = [];
    const warnings: string[] = [];

    // Validations
    if (!parsed.externalId) reasons.push("externalId is missing or empty");
    if (!parsed.sourceName) reasons.push("sourceName is missing or empty");
    if (!parsed.questionText) reasons.push("questionText is missing or empty");
    if (!parsed.subject) reasons.push("subject is missing or empty");
    if (!parsed.topic) reasons.push("topic is missing or empty");
    
    if (!Array.isArray(parsed.options)) {
      reasons.push("options is not an array");
    } else {
      if (parsed.options.length < 2) reasons.push("options length < 2");
      
      const optionLabels = new Set<string>();
      let hasMissingLabel = false;
      let hasMissingText = false;

      for (const opt of parsed.options) {
        if (!opt.label) hasMissingLabel = true;
        else optionLabels.add(opt.label);
        
        if (!opt.text) hasMissingText = true;
      }

      if (hasMissingLabel) reasons.push("One or more options missing label");
      if (hasMissingText) reasons.push("One or more options missing text");

      if (parsed.correctOptionLabel && !optionLabels.has(parsed.correctOptionLabel)) {
        reasons.push("correctOptionLabel is not found in options labels");
      }
    }

    // Uniqueness
    if (parsed.externalId) {
      if (seenExternalIds.has(parsed.externalId)) {
        reasons.push("Duplicate externalId");
        duplicateExternalIdCount++;
      } else {
        seenExternalIds.add(parsed.externalId);
      }
    }

    if (parsed.questionText) {
      if (seenQuestionTexts.has(parsed.questionText)) {
        warnings.push("Duplicate questionText");
        duplicateQuestionTextWarningCount++;
      } else {
        seenQuestionTexts.add(parsed.questionText);
      }
    }

    const redactedParsed = { ...parsed };
    if (redactedParsed.questionText) redactedParsed.questionText = "[redacted sample question]";
    if (Array.isArray(redactedParsed.options)) {
      redactedParsed.options = redactedParsed.options.map((o: any) => ({ ...o, text: "[redacted]" }));
    }

    if (reasons.length > 0) {
      hardInvalidRows++;
      reasons.forEach(addReason);
      if (first5Invalid.length < 5) first5Invalid.push({ data: redactedParsed, reasons });
    } else {
      importableRows++;
      if (warnings.length > 0) {
        warningRows++;
      }

      if (first5Valid.length < 5) first5Valid.push(redactedParsed);

      // Aggregations only for importable rows
      if (parsed.subject) {
        subjectCount.set(parsed.subject, (subjectCount.get(parsed.subject) || 0) + 1);
      }
      if (parsed.topic) {
        const fullTopic = `${parsed.subject} > ${parsed.topic}`;
        topicCount.set(fullTopic, (topicCount.get(fullTopic) || 0) + 1);
      }
      if (parsed.options) {
        const optLen = parsed.options.length;
        optionCountDistribution.set(optLen, (optionCountDistribution.get(optLen) || 0) + 1);
      }
      if (parsed.correctOptionLabel) {
        correctLabelDistribution.set(parsed.correctOptionLabel, (correctLabelDistribution.get(parsed.correctOptionLabel) || 0) + 1);
      }
    }
  }

  // Formatting report
  const sortedSubjects = Array.from(subjectCount.entries()).sort((a, b) => b[1] - a[1]).slice(0, 20);
  const sortedTopics = Array.from(topicCount.entries()).sort((a, b) => b[1] - a[1]).slice(0, 20);
  const sortedReasons = Array.from(rejectedReasonSummary.entries()).sort((a, b) => b[1] - a[1]);

  let md = `# Question Bank 50k Import Dry-Run Report

- DB import performed: no
- Raw JSONL committed: no
- Duplicate questionText is a warning, not a hard invalid
- Import recommendation: "Proceed with limited DB import smoke after review, starting with 500 rows."

## Overview
- **Total Rows Seen**: ${totalRowsSeen}
- **Importable Rows**: ${importableRows}
- **Hard Invalid Rows**: ${hardInvalidRows}
- **Warning Rows**: ${warningRows}
- **Duplicate externalId count**: ${duplicateExternalIdCount}
- **Duplicate questionText warning count**: ${duplicateQuestionTextWarningCount}

## Aggregations (from importable rows)

### Option Count Distribution
${Array.from(optionCountDistribution.entries()).map(([k, v]) => `- ${k} options: ${v}`).join('\n')}

### Correct Label Distribution
${Array.from(correctLabelDistribution.entries()).map(([k, v]) => `- ${k}: ${v}`).join('\n')}

### Top 20 Subjects
${sortedSubjects.map(([k, v]) => `- **${k}**: ${v}`).join('\n')}

### Top 20 Topics
${sortedTopics.map(([k, v]) => `- **${k}**: ${v}`).join('\n')}

## Rejected Reason Summary (across all rows)
${sortedReasons.map(([k, v]) => `- **${k}**: ${v}`).join('\n')}

## First 5 Valid Samples
\`\`\`json
${JSON.stringify(first5Valid, null, 2)}
\`\`\`

## First 5 Invalid Samples
\`\`\`json
${JSON.stringify(first5Invalid, null, 2)}
\`\`\`
`;

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, md, 'utf-8');
  console.log(`Dry-run audit complete. Report saved to: ${OUTPUT_FILE}`);
}

main().catch(err => {
  console.error("Dry-run script failed:", err);
  process.exit(1);
});
