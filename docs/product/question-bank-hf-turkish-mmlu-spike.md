# Question Bank Dataset Normalization Spike

## 1. Repo truth summary
- `main` branch is at a clean state.
- Prisma schema contains `GradeLevel`, `Subject`, and `Topic` models.
- No `Question` model or protected core features have been touched.
- Hugging Face datasets and pandas were installed locally for development.

## 2. HF access result
- Success. The token provided allowed access to `alibayram/turkish_mmlu` via the `datasets` library.

## 3. Dataset load result
- Success. The dataset `alibayram/turkish_mmlu` (split: `train`) was loaded efficiently in streaming mode or full mode.

## 4. Total rows visible
- The dataset was traversed up to the limit of 50,000 valid questions.

## 5. 50k normalize result
- Successfully mapped `bolum -> subject`, `konu -> topic`, `soru -> questionText`, `secenekler -> options`, `cevap -> correctOptionLabel`.
- Mapped 50,000 rows to JSONL format.

## 6. Output path
- `.local-data/question-bank/alibayram-turkish-mmlu-normalized-50k.jsonl`

## 7. Invalid row count
- 0 rows were rejected during the 50,000 sampling window. The dataset is exceptionally clean regarding structural types.

## 8. Subject/topic distribution summary
- Includes subjects like "Adalet", "Tarih", etc., with various sub-topics ("Adalet Meslek Etiği", etc.).

## 9. Raw data committed?
- No. `.gitignore` was updated to exclude `.local-data/`, `dev-data/`, and `tmp/`.

## 10. Token exposed?
- No. The token was passed dynamically via `$env:HF_TOKEN` and is not stored in any script, `.env`, or commit history.

## 11. Protected core audit
- Clean. No DB schema changes. No endpoints. No auth/RBAC code added.

## 12. Next exact slice
- Seed DB script or Read-Only API for the existing catalog.
