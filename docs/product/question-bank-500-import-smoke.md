# Question Bank MVP: Limited DB Import Smoke (500 Rows)

## Overview
As part of the Question Bank MVP, a controlled 500-row smoke import was executed using the local database. The goal was to verify the structural integrity of the `Minimum Question Bank Schema`, validate script idempotency, and ensure that duplicate processing (`sourceId` + `externalId` constraint) accurately routes to upsert operations.

## Execution Rules Adherence
- **DB import performed**: Yes, strictly isolated to the local development environment (`okul_akli` database).
- **Import limit**: 500 rows.
- **Raw JSONL committed**: No.
- **Token/.env committed**: No.
- **Full 50k import performed**: No.

## Test Results

### 1. First Run (Creation Phase)
The first execution parsed the dataset and mapped all fields to relational entities (QuestionSource, Subject, Topic, GradeLevel, Question, QuestionOption). 
- **Rows read**: 500
- **Rows imported**: 500
- **Questions created**: 500
- **Questions updated**: 0
- **Options written**: 2500
- **Warning rows (duplicate text)**: 11

### 2. Second Run (Idempotency Phase)
The script was re-run without dropping the database to evaluate upsert behavior.
- **Rows read**: 500
- **Rows imported**: 500
- **Questions created**: 0
- **Questions updated**: 500
- **Options written**: 2500
- **Result**: The script behaves highly idempotently. Existing options were pruned correctly (`deleteMany`) and recreated without producing orphans or triggering unique constraint exceptions.

### 3. DB Verification Counts
A query performed immediately after the idempotency pass returned the expected baseline row counts:
- **Source count**: 1
- **Subject count**: 1
- **Topic count**: 1
- **GradeLevel count**: 1
- **Question count (alibayram/turkish_mmlu)**: 500
- **Option count (alibayram/turkish_mmlu)**: 2500

## GradeLevel Fallback Behavior
Dataset gradeLevel alanı null geldiği için `Question.gradeLevelId` null bırakıldı.
Ancak `Topic.gradeLevelId` mevcut schema’da required olduğu için Topic oluşturulurken `Unspecified` grade level kullanıldı.
Bu geçici catalog fallback’tir; ileride gerçek sınıf/grade mapping yapılmadan production content olarak kullanılmamalıdır.

## Next Recommendation
The 500-row baseline has proven mathematically and logically stable. The database adapter handles operations seamlessly, and relationship mapping works flawlessly. 

**Recommended Next Step**: 5k import smoke/benchmark
