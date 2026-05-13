# Question Bank Import Performance Audit

## 1. Executive Summary
This document analyzes the current state of the `import-normalized-questions-smoke.ts` script to assess its readiness for a full 50,000-row dataset import. While the script operates correctly and safely in a 5k row benchmark (idempotent, no memory leaks), its sequential database operation model presents significant latency bottlenecks for large-scale imports.

## 2. Bottleneck Analysis

### Database Query Frequency
- **Per-Question Operations:** The current script performs a `findUnique` query followed by either a `create` or an `update` for every single question. 
- **Options Loop Cost:** When updating, it executes `deleteMany` for options, and then runs individual `prisma.questionOption.create()` for each option in a `for...of` loop. For a 5-option question, this means 1 delete + 5 inserts = 6 queries just for options.
- **Overall Volume:** For 50k questions with 5 options each, the script will execute between **300,000 to 400,000 sequential database queries**.

### Cache Utilization
- **Topic/Subject/Source:** The script implements an in-memory `Map` cache for reference data. This is highly effective at reducing redundant `findUnique`/`upsert` calls for catalog entities after the first miss.
- **Cache Strategy:** Currently, it lazily fills the cache inside the loop. While acceptable, pre-loading all existing catalog entities before the loop could save the initial UPSERT roundtrips.

### Transaction Management
- **No `$transaction` Used:** Queries are executed individually. This prevents connection pool exhaustion (because it is strictly sequential and doesn't fire parallel unawaited promises), but it maximizes network round-trip latency.

### Fallback Risks (`Unspecified` GradeLevel)
- **Production Risk:** The dataset provides `null` for `gradeLevel`, but `Topic` requires a `gradeLevelId` by schema design. The script mitigates this by assigning an `Unspecified` grade level. In production, this will cluster all topics into an ambiguous grade level, breaking grade-based filtering. This schema-dataset mismatch must be handled at the product level before releasing to students.

## 3. Estimated 50k Import Duration

Based on the 5k benchmark results:
- **Current Estimate:** The 5k import took ~71 seconds (~70 rows/sec). Extrapolating linearly, 50k rows will take **~710 seconds (~12 minutes)**.
- **Best-case after batching:** By using `createMany` for options and grouping operations in transactions, we could achieve 500-1000 rows/sec, reducing the time to **1-2 minutes**.
- **Worst-case risk:** Network latency fluctuations or Postgres index update overhead as the table grows could slow down the sequential inserts, pushing the time to **15+ minutes**.

## 4. Recommended Optimization Path

### Must Do Before 50k
1. **Option Bulk Insertion:** Replace the `for...of` loop over options with a single `prisma.questionOption.createMany({ data: optionsArray })`. This immediately eliminates 200,000 redundant queries.
2. **Limit/Guard:** Implement an explicit `DRY_RUN` mode to test the parsing of all 50k rows without executing DB writes.

### Nice to Have
1. **Transaction Chunking:** Wrap every 250 or 500 question upserts in a `prisma.$transaction()` to batch the network commits.
2. **Pre-load Caches:** Load `Subject` and `Source` dictionaries into memory before the loop starts.

### Do Not Do Now
1. **Schema Refactoring:** Do not remove the `Topic.gradeLevelId` requirement yet; keep the `Unspecified` fallback until a real taxonomy mapping is defined.
2. **Complex Upsert SQL:** Do not write raw `INSERT ... ON CONFLICT` SQL queries. Keep using Prisma for type safety and maintainability during this MVP phase.

## 5. Next Narrow Implementation Slice
For the next development slice, we propose a highly scoped refactor of the import script without touching the schema:
1. Replace option inserts with `createMany`.
2. Add a `DRY_RUN=false` environment flag.
3. Keep schema and boundaries unchanged.
4. Execute a 10k row benchmark to verify performance gains before attempting the full 50k.
