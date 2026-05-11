# Session Handoff - 2026-05-11

Project: Okul Aklı
Active Domain: Question Bank MVP
Current Slice: PR #20 Post-Merge Memory Sync
Branch: main
Repo Truth: PR #17 (Catalog Schema) and PR #20 (HF Normalize Spike) are merged into main. `main` is active.

---

Completed This Session:
- PR #17 (Question Bank Catalog Schema) has been successfully merged.
- PR #20 (HF Turkish MMLU normalize spike tooling) has been successfully merged.
- A 50k normalized JSONL dataset (`.local-data/question-bank/alibayram-turkish-mmlu-normalized-50k.jsonl`) was generated locally for seeding purposes.
- Verified that **raw data was NOT committed** to the repo.
- Verified that **Hugging Face token was NOT committed** to the repo.
- `Question` model does NOT exist yet.
- Database import has NOT been executed yet.

Files Changed (This session):
- `.project-os/memory/session-handoff.md`

Migrations:
- None

Tests:
- `git diff --check` CLEAN
- Verified Protected Core audit holds true.

GitHub Check:
- Branch: main
- Git Status: Only `session-handoff.md` is modified in this final sync.

Drift Audit:
- Application code değişmedi
- Protected core koduna temas YOK
- Onaysız entity YOK
- Raw dataset ve Token güvende.

Known Risks:
- Soru Bankası Seed stratejisi uygulanırken (sonraki adımda) veritabanı performans sorunları yaşanabilir.

Scope Locked For Next Session:
- No Auth/RBAC/tenant implementation yet.

Next Exact Task:
- Question Bank Minimum Schema

---

## Historical Drift Notes

**Dyad Issues (Resolved via PR #18/19):**
- Dyad `main` branch seçiliyken GitHub sync yaptığı için `AI_RULES.md` yanında istenmeyen `package-lock.json` dosyası oluşmuştu.
- PR #18 ile `AI_RULES.md` DB/ORM ifadesi güvenli hale getirildi ve yanlışlıkla oluşan `package-lock.json` kaldırıldı.
- `.dyad/` kuralı Dyad lokal dosyalarının repo'ya girmesini engellemek için kabul edildi.
- Kural: Bundan sonra Dyad kullanılırken `main` seçiliyken GitHub sync yapılmayacak; her görev ayrı branch üzerinde yürütülecek.
- Docs/memory-only görevlerde Dyad Preview/Build tarafındaki `npm run dev` hatası dikkate alınmayacak.

**Security Notes:**
- `prisma.config.ts` fallback DB URL updated to be secure. Any hardcoded secrets were removed.
