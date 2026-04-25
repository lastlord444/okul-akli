# Session Handoff

## Branch: feat/mobile-minimal-v1
## PR: #2
## Tarih: 2026-04-25 09:47
## Current GitHub PR Head: "Her session basinda git rev-parse HEAD / GitHub ile dogrulanacak"
## Last Verified Code Baseline: 6bde645cfb28110df0bec0d33f1aebfd0bb8d07e
## Android build status: BLOCKED
## Merge status: NOT READY
- GitHub mergeable: true
- Build/smoke: yok
- Merge decision: NOT READY

## Ozet

Bu session'da KOD DEGISIKLIGI YAPILMADI. Memory hygiene duzeltmesi yapildi:
- Self-invalidating "Last Verified PR Head" alani kaldirildi
- Yerine "Current GitHub PR Head" (session basinda dogrulanacak) + "Last Verified Code Baseline" (sabit) eklendi
- session-handoff.md'de PR head ve code baseline ayrimi netlestirildi
- ASCII-only path recovery audit'i hazirlandi (bu session'da veya sonraki session'da uygulanabilir)

## Onceki Session Gecmisi

### 2026-04-25 Erken Saatler
- expo-linking eklemeye calisildi → Build basarisiz (Windows path sorunu)
- Commit+push yapildi ama "SADECE BASARILIYSA COMMIT" kuralini ihlal ettigi icin revert edildi
- `git reset --hard 6bde645` + `git push --force-with-lease` ile temizlendi
- Stash `wip/android-debug-dirty-state-do-not-apply` olusturuldu ama sonradan drop edildi
- Kalan stash: `wip/android-debug-dirty-state-before-controlled-recovery`

### 2026-04-25 09:11 Session
- Memory drift duzeltildi: "GREEN - BUILD SUCCESSFUL" → YANLIS, BLOKE
- PR head `443484fb` → `6bde645` duzeltildi
- Build durumu "BASARILI" → BLOKE duzeltildi

### 2026-04-25 09:47 Session (BU SESSION)
- mobile-current-truth.md: "Last Verified PR Head" kaldirildi, yerine 4 alan eklendi:
  - Current GitHub PR Head (session basinda dogrulanacak)
  - Last Verified Code Baseline (6bde645 - sabit)
  - Android Build Status (BLOCKED)
  - Merge Status (NOT READY)
- session-handoff.md: Header'a PR Head ve Code Baseline eklendi
- Kod degisikligi YOK, Dependency degisikligi YOK

## Bilinen Sorunlar

### BLOKE EDICI: Windows Gradle + pnpm Symlink + Turkce Karakter
- **Root Cause:** Proje yolu `C:\Users\musab\OneDrive\Desktop\Okul Aklı` Turkce "i" iceriyor
- **Gradle Hatasi:** `Included build '...node_modules\.pnpm\@react-native+gradle-plugin@...' does not exist`
- **Neden:** Java/Gradle Windows Unicode path encoding sorunu
- **Daha da kotusu:** OneDrive sync path'i de sorun cikarabilir
- **Calisan Cozum:** `node-linker=hoisted` → YASAKLI

### EXPO-LINKING DURUMU
- apps/mobile/package.json'da expo-linking eksik gorunuyor
- Transitive dependency olarak mevcut olabilir
- Test edilmedi — build calismadan dogrulanamaz

### PREBUILD NON-INTERACTIVE SORUNU
- `expo prebuild --platform android --clean` non-interactive modda "Install updated dependencies?" prompt veriyor
- Bu da build'i engelliyor
- `--non-interactive` flag'i denenecek (recovery plan'da)

## Recovery Stratejisi (SONRAKI SESSION ICIN)

### A) ASCII-only Path Klonlama
```
mkdir C:\Projects
cd C:\Projects
git clone https://github.com/lastlord444/okul-akli.git
cd okul-akli
git checkout feat/mobile-minimal-v1
git rev-parse HEAD
```
Beklenen current branch head: (git rev-parse HEAD ile dogrulanacak)
Last verified code baseline: 6bde645cfb28110df0bec0d33f1aebfd0bb8d07e

### B) Temiz Install
```
pnpm install
```

### C) expo-linking Test
```
pnpm --filter okul-akli-mobile list expo-linking
```
Eger yoksa: `pnpm --filter okul-akli-mobile exec expo install expo-linking`
YALNIZCA apps/mobile/package.json'a eklenmeli

### D) Build Test
```
pnpm --filter okul-akli-mobile exec expo prebuild --platform android --clean
```
Eger dependency prompt verirse: dur ve raporla, otomatik genis paket ekleme yapma

### E) Gradle Build
```
cd apps/mobile/android
gradlew assembleDebug
```

### F) Basarili Olursa
1. git status --short → sadece apps/mobile/package.json + pnpm-lock.yaml degismemeli
2. Memory guncelle
3. Commit: `fix(mobile): add required Expo native dependencies for Android smoke`
4. Push

## Stash Durumu
```
stash@{0}: wip/android-debug-dirty-state-before-controlled-recovery (eski, 2026-04-25 oncesi)
stash@{1}: WIP on feat/mobile-scaffold-v1 (cok eski)
```
**STASH POP YAPILMAYACAK**

## YASAKLI HATIRLATMA
- .npmrc'e node-linker=hoisted EKLENMEYECEK
- root package.json'a expo/react/rn EKLENMEYECEK
- react-native bump YAPILMAYACAK
- android/ klasoru COMMIT EDILMEYECEK
- Stash pop YAPILMAYACAK
