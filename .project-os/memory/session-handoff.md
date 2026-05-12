# Session Handoff - 2026-05-12

Project: Okul Aklı
Active Domain: Question Bank MVP
Current Slice: Minimum Schema Implementation
Branch: feat/question-bank-50k-dry-run
Repo Truth: 50k local import dry-run audit tamamlandı. Veritabanına yazım yapılmadan dataset analizi yapıldı (35487 valid, 14513 duplicate). Dry-run raporu belgelendi.

---

Completed This Session:
- `scripts/question-bank/dry-run-normalized-questions.ts` oluşturuldu ve çalıştırıldı.
- 50,000 satırlık JSONL dosyası memory-safe (stream) şekilde analiz edildi.
- 35,487 valid soru (Subject/Topic ve Option kurallarına tam uygun).
- 14,513 satır sadece `Duplicate questionText` sebebiyle elendi.
- Elde edilen tüm metrikler (Option dağılımı, Correct Label dağılımı, Top Subjects vb.) raporlandı: `docs/product/question-bank-50k-import-dry-run.md`.
- Veritabanına (`Prisma.create` vs) hiçbir veri yazılmadı.
- Raw veri dosyası (.jsonl) ve Token güvenliği (hygiene) korundu.

Files Changed (This session):
- `scripts/question-bank/dry-run-normalized-questions.ts` (Yeni)
- `docs/product/question-bank-50k-import-dry-run.md` (Yeni)
- `.project-os/memory/session-handoff.md`

Migrations:
- No migration changes.

Tests:
- `tsc --noEmit` CLEAN
- Dry-run script SUCCESS

GitHub Check:
- Branch: feat/question-bank-50k-dry-run
- PR: Draft / To be opened

Drift Audit:
- Protected core koduna temas YOK.
- Raw dataset ve Token güvende.

Known Risks:
- Data import sırasında duplicate filter eklendiği için import süresi hafif uzayabilir ancak DB idempotency için gereklidir.

Scope Locked For Next Session:
- No Auth/RBAC/tenant implementation.

Next Exact Task:
- Create PR for dry-run scripts. Wait for review or proceed with read-only question API implementation.

---

## Historical Drift Notes
- Dyad `main` branch seçiliyken GitHub sync yaptığı için oluşan hatalar giderildi, `.dyad/` kuralı kabul edildi.
- Security Notes: Token, raw data (.jsonl) ve DB şifresi (.env) sızıntısı tarandı, hiçbir sızıntı bulunmadı.
