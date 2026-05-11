# Session Handoff - 2026-05-11

Project: Okul Aklı
Active Domain: Question Bank MVP / Dataset Spike
Current Slice: PR Preparation
Branch: feat/question-bank-hf-normalize-spike
Repo Truth: `feat/question-bank-hf-normalize-spike` branch created. PR prepared for MMLU normalization tool.

---

Completed This Session:
- Security scan verified no HF tokens are exposed in code or commits.
- `.local-data/` confirmed ignored by git.
- Staged `.gitignore`, `scripts/`, `docs/product/`, and `session-handoff.md`.
- No raw data, jsonl output, or .env files staged or committed.
- Prepared commit and PR: "chore(question-bank): add HF Turkish MMLU normalize spike tooling".

Files Changed (This session):
- `.gitignore`
- `scripts/question-bank/normalize_hf_turkish_mmlu.py` (New)
- `scripts/question-bank/README.md` (New)
- `docs/product/question-bank-hf-turkish-mmlu-spike.md` (New)
- `.project-os/memory/session-handoff.md`

Migrations:
- None

Tests:
- `git diff --check` CLEAN
- Verified `.local-data` is ignored by Git.

GitHub Check:
- Branch: feat/question-bank-hf-normalize-spike
- Git Status: Only script and doc files are tracked. Raw data is hidden.
- HF Token is secure and confirmed not exposed.

Drift Audit:
- Application code değişmedi
- Protected core koduna temas YOK
- Onaysız entity YOK
- Dataset and output completely ignored by Git.

Known Risks:
- Environment missing pip packages if dev environment is not set up properly.
- Normalization mapping assumes static A, B, C, D, E ordering based on numeric indices, which could mismatch rare question formats.

Scope Locked For Next Session:
- No CRUD endpoint implementation yet
- No auth/RBAC/tenant implementation yet
- No Question models

Next Exact Task:
- Review and merge PR. Seed strategy implementation or read-only API endpoint for catalog.

---

## PR #17 Refresh Notes - 2026-05-11
- Merged with `main` to pull in PR #18/19 changes.
- `prisma.config.ts` fallback DB URL updated to be secure.
