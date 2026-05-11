# Session Handoff - 2026-05-06

Project: Okul Aklı
Active Domain: Product Core Planning / Question Bank MVP
Current Slice: Question Bank Prisma Catalog Schema
Branch: feat/question-bank-catalog-schema
Repo Truth: main branch active, PR #16 merged, PR for feat/question-bank-catalog-schema opened

---

Completed This Session:
- Added Prisma to apps/backend
- Created minimal global catalog schema (GradeLevel, Subject, Topic)
- Generated initial migration via prisma migrate dev
- Verified DB migration against local Postgres
- No Question, ReviewStatus, or protected core entities added

Files Changed (This session):
- apps/backend/package.json
- pnpm-lock.yaml
- apps/backend/prisma/schema.prisma
- apps/backend/prisma.config.ts
- apps/backend/.env.example
- apps/backend/prisma/migrations/20260506124420_init_catalog_schema/migration.sql
- .project-os/memory/session-handoff.md

Previous Files (Backend Scaffold):
- docs/domain/question-bank-schema-plan.md
- docs/question-bank-mvp-blueprint.md

Migrations:
- 20260506124420_init_catalog_schema

Tests:
- pnpm typecheck (okul-akli-backend)
- prisma validate
- local migration applied
- git diff --check CLEAN

GitHub Check:
- Branch: feat/question-bank-catalog-schema
- PR: Created
- Backend CI: expected to pass
- Mobile CI: frozen/unaffected
- Protected core: untouched
- Drift Audit: clean

Drift Audit:
- Application code değişmedi
- apps/backend/src/routes/health.ts var
- Backend schema/migration EKLENDİ (Sadece catalog)
- Protected core koduna temas YOK
- Onaysız entity YOK

Known Risks:
- Prisma schema is now in place but write/CRUD is pending Auth/RBAC/tenant decisions.
- Seed data needs to be populated safely via a separate approved PR.
- Delete operations use Restrict on Topics, preventing accidental deletion of catalog items.

Scope Locked For Next Session:
- No CRUD endpoint implementation yet
- No auth/RBAC/tenant implementation yet
- No Question models

Next Exact Task:
- Seed strategy implementation or read-only API endpoint for catalog.

---

## Dyad Drift Notes - 2026-05-11

- Dyad `main` branch seçiliyken GitHub sync yaptığı için `AI_RULES.md` yanında istenmeyen `package-lock.json` dosyası oluştu.
- PR #18 ile `AI_RULES.md` DB/ORM ifadesi güvenli hale getirildi.
- PR #18 ile yanlışlıkla oluşan `package-lock.json` kaldırıldı.
- `.dyad/` kuralı Dyad lokal dosyalarının repo'ya girmesini engellemek için kabul edildi.
- Bundan sonra Dyad kullanılırken `main` seçiliyken GitHub sync yapılmayacak; her görev ayrı branch üzerinde yürütülecek.
- Docs/memory-only görevlerde Dyad Preview/Build tarafındaki `npm run dev` hatası dikkate alınmayacak.
- Bir sonraki teknik iş PR #17 Question Bank Prisma schema review olarak bekliyor.

## PR #17 Refresh Notes - 2026-05-11
- Merged with `main` to pull in PR #18/19 changes.
- `prisma.config.ts` fallback DB URL updated to be secure.
