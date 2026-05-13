# Question Bank 10k Import Benchmark

## Context
- **Date**: 2026-05-13
- **Branch**: feat/question-bank-import-10k-optimization
- **Dataset Source**: `alibayram-turkish-mmlu-normalized-50k.jsonl` (Local dataset)

## Environment Safety Notes
- **Raw JSONL Committed?** No
- **Token/.env Committed?** No
- **Schema/Migration Touched?** No
- **Protected Core Touched?** No
- **Full 50k Import Performed?** No (Intentionally blocked via limit guard)

## Optimization Summary
Identified that `prisma.questionOption.create()` inside a `for...of` loop caused massive latency during question updates and inserts. Extracted the options generation into an array and replaced the sequential inserts with a single `prisma.questionOption.createMany({ data: optionsData })` call per question. Additionally, a `DRY_RUN` mode was implemented to validate JSON parsing and dataset health without making database writes. The safe `IMPORT_LIMIT` guard was raised to 15,000 to allow the 10k benchmark.

## Benchmark Results

### 1. Typecheck
Command: `pnpm --filter okul-akli-backend typecheck`
- Result: **CLEAN / SUCCESS**

### 2. DRY_RUN 10k Pass
Command: `$env:IMPORT_LIMIT="10000"; $env:DRY_RUN="true"; npx tsx scripts/question-bank/import-normalized-questions-smoke.ts`
- **dryRun**: true
- **Duration**: 0.06s
- **Rows per second**: 155,485.93
- **Parsed/Processed**: 10,000 rows
- **Skipped/Malformed**: 0
- **Total Options (Mocked)**: 50,000

### 3. First Import 10k Pass
Command: `$env:IMPORT_LIMIT="10000"; $env:DRY_RUN="false"; npx tsx scripts/question-bank/import-normalized-questions-smoke.ts`
- **Duration**: 72.51s
- **Rows per second**: 137.92
- **Parsed/Processed**: 10,000 rows
- **Questions Created/Updated**: 5,000 created / 5,000 updated (first 5,000 existed from prior smoke test)
- **Options Written**: 50,000

### 4. Idempotency Second Pass 10k
Command: `$env:IMPORT_LIMIT="10000"; $env:DRY_RUN="false"; npx tsx scripts/question-bank/import-normalized-questions-smoke.ts`
- **Duration**: 81.53s
- **Rows per second**: 122.65
- **Parsed/Processed**: 10,000 rows
- **Questions Created/Updated**: 0 created / 10,000 updated
- **Options Written**: 50,000

## Verification Counts
- Source count: 2
- Subject count: 6
- Topic count: 18
- GradeLevel count: 4
- Question count (alibayram/turkish_mmlu): 10000
- Option count (alibayram/turkish_mmlu): 50000

## Known Risks
- **GradeLevel Unspecified fallback unresolved**: Topics are still falling back to `Unspecified` grade level due to the raw dataset missing grade levels. This schema-level dependency remains untouched as part of the core isolation strategy for this slice.
- **Full 50k not yet validated**: While the 10k benchmark demonstrates linear scaling and safety, network or DB pool fluctuations may still occur at 50,000 rows.
- **Transaction strategy still not introduced**: To maintain extreme safety and simplicity in error recovery, transaction chunking was deferred. Each question upsert is its own commit, which limits ultimate speed but maximizes script stability.
