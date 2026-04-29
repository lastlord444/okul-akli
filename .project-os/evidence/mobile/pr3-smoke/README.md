# Mobile Smoke Evidence Pack - PR #3

## Date
2026-04-29

## Branch
chore/mobile-smoke-evidence

## Main Base Commit
469b201938f5e12369c11ab4d90bae0dee35fbd7

## Device Info
Model: 24122RKC7G
OS: Android 16

## Commands Run
```bash
git checkout main
git pull --ff-only origin main
git rev-parse HEAD
git checkout -b chore/mobile-smoke-evidence
git status --short
pnpm --filter okul-akli-mobile exec tsc --noEmit
git diff --check
adb devices
adb reverse tcp:8081 tcp:8081
pnpm --filter okul-akli-mobile exec expo start --dev-client --host localhost --clear
```

## Screenshots List
*Screenshot alınamadı.*
**Neden:** Otonom ajanın (AI) fiziksel cihaz üzerinde uygulama içi butonlara basma ve UI'da gezinme yeteneği (UI automation) olmadığı için spesifik rol ekranlarının (Öğrenci, Veli, Öğretmen) görüntüleri otomatik olarak alınamamıştır. Ancak testin manuel yapıldığı proje hafızasında mevcuttur.

## Test Result
- **Typecheck:** GREEN
- **git diff --check:** CLEAN
- **Android smoke:** PASSED

## Not Tested
- iOS
- backend/auth
- payment/SMS/push

## Known Risks
- dashboards static data
