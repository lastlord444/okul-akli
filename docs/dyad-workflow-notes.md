# Dyad GitHub Workflow Notes

## Critical Rule

The branch dropdown in Dyad Publish panel is important.
If `main` is selected, GitHub sync may send changes directly to the main branch.

## Rules

- Use a separate branch for every task.
- Do not move changes to `main` without a PR.
- This repo uses pnpm; do not commit `package-lock.json`.
- Docs and memory tasks do not require Preview or Build.
- If Dyad shows a root `npm run dev` error during docs work, ignore it and do not start package install commands.
