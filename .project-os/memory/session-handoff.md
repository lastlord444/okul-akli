# Session Handoff - 2026-05-12

Project: Okul Aklı
Active Domain: Question Bank MVP
Current Slice: Minimum Schema Implementation
Branch: feat/question-bank-min-schema
Repo Truth: `Question`, `QuestionOption`, `QuestionSource` eklendi. Domain drift düzeltildi (ReviewStatus güncellendi, devOnly ve label eklendi). Temiz bir migration (20260512201441_add_minimum_question_schema) üretildi. Smoke import ve idempotency başarıyla doğrulandı. PR açıldı.

---

Completed This Session:
- Schema domain drift düzeltildi:
  - `ReviewStatus` enum: `DRAFT`, `REVIEW`, `READY`, `PUBLISHED`, `ARCHIVED`.
  - `QuestionSource` modeline `sourceUrl`, `license`, `devOnly` eklendi. `name` alanı `sourceName` yapıldı.
  - `Question` modeline `gradeLevelId`, `subjectId`, `devOnly` gibi alanlar eklenip eksik relation ve index'ler tanımlandı.
  - `QuestionOption` modeline `label` (A, B, C, D) eklendi ve unique constraint koyuldu.
- `GradeLevel`, `Subject`, `Topic` gibi kataloglara `Question` bağları atandı.
- Eski migration geri alınıp, `prisma migrate reset` ile tek bir temiz migration dosyası bırakıldı.
- Smoke import test scripti (`smoke-import.ts`) güncel şemaya (label, sourceName) uyarlandı.
- Smoke import (5 create) ve idempotency (5 update) tekrar başarılı çalıştırıldı.
- Repo Hygiene: Raw data, token veya `.env` sızıntısı tarandı (sızıntı yok).

Files Changed (This session):
- `apps/backend/prisma/schema.prisma`
- `apps/backend/prisma/smoke-import.ts`
- `apps/backend/prisma/fixtures/smoke-questions.json`
- `apps/backend/prisma/migrations/20260512201441_add_minimum_question_schema/migration.sql`
- `.project-os/memory/session-handoff.md`

Migrations:
- `20260512201441_add_minimum_question_schema` (Tekil temiz migration)

Tests:
- `prisma validate` CLEAN
- `tsc --noEmit` CLEAN
- `git diff --check` CLEAN
- Smoke import SUCCESS (Idempotency verified)
- Repo Hygiene: `.env` is NOT tracked/committed.

GitHub Check:
- Branch: feat/question-bank-min-schema
- Unpushed commits exist.

Drift Audit:
- Protected core koduna temas YOK (tenantId vs eklenmedi).
- Raw dataset ve Token güvende (script'e dahil edilmedi).

Known Risks:
- PostgreSQL bağlantısında pooling için Prisma Pg adapter kullanılıyor. Prod ortamında connection pool sınırları gözden geçirilmeli.

Scope Locked For Next Session:
- No Auth/RBAC/tenant implementation.

Next Exact Task:
- Create/Update PR and merge to main.

---

## Historical Drift Notes
...
