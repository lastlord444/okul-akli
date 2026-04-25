# Session Handoff

## Branch: feat/mobile-minimal-v1
## PR: #2
## Tarih: 2026-04-25 09:47
## Current GitHub PR Head: "Her session basinda git rev-parse HEAD / GitHub ile dogrulanacak"
## Last Verified Code Baseline: 6bde645cfb28110df0bec0d33f1aebfd0bb8d07e
## Android build status: GREEN (Persistent Fix Applied)
## Merge status: NOT READY
- GitHub mergeable: true
- Build/smoke: Build başarılı, ancak açılışta Metro bağlantı hatası (RSOD) alındı, smoke test yapılamadı.
- Merge decision: NOT READY

## Ozet

Bu session'da Kotlin/Compose Mismatch hatası için "Local Generated Android Probe" yapıldı. KOD DEGISIKLIGI SADECE GITIGNORED DOSYADA YAPILDI:
- `C:\Projects\okul-akli\apps\mobile\android\gradle.properties` dosyasına geçici olarak `android.kotlinVersion=1.9.24` eklendi.
- `gradlew assembleDebug` çalıştırıldı.
- **BUILD SUCCESSFUL** (5m 42s). APK başarıyla oluşturuldu (~146MB).
- Kotlin sürümü hipotezimiz %100 kanıtlandı.
- Sırada bu geçici fix'i kalıcı hale getirecek Expo config plugin var.

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

### 2026-04-25 09:47 Session
- Memory drift duzeltildi: Self-invalidating docs hash'leri kaldirildi.

### 2026-04-25 13:05 Session
- ASCII-only path recovery audit tamamlandı (`C:\Projects\okul-akli`).
- `tsc --noEmit` ve `expo prebuild` başarılı oldu.
- `gradlew assembleDebug` yeni bir hatayla (Kotlin/Compose uyumsuzluğu) patladı, böylece root cause teşhis edildi.

### 2026-04-25 17:35 Session
- Kotlin/Compose Mismatch sorununu kalıcı çözmek için `withKotlinVersion.js` Expo config plugin yazıldı.
- CMake path limit sorununu çözmek için `app.json` içinde `newArchEnabled: false` yapıldı.
- `expo prebuild --clean` sonrası `gradlew assembleDebug` başarılı oldu.
- `app-debug.apk` (~126MB) oluşturuldu.
- Kalıcı fix tamamlandı.

### 2026-04-25 18:00 Session (BU SESSION)
- Oluşturulan APK `adb install` ile fiziksel cihaza yüklendi ve `adb shell monkey` ile başlatıldı.
- Uygulama açılışında Metro sunucusu çalışmadığı için "Unable to load script" (RSOD) hatası alındı.
- Login ve rol yönlendirme testi tamamlanamadı. PR merge için henüz hazır değil.

## Bilinen Sorunlar

### AŞILAN BLOKER: Kotlin/Compose Mismatch
- **Sorun**: Compose Compiler 1.5.15 için Kotlin 1.9.25 beklenirken 1.9.24 kullanılması.
- **Kalıcı Çözüm**: `withKotlinVersion.js` config plugin ile `android.kotlinVersion=1.9.24` property'si prebuild aşamasında kalıcı olarak eklendi.
- **Durum:** ÇÖZÜLDÜ (BUILD SUCCESSFUL).

### AŞILAN BLOKER: Windows Gradle + pnpm Symlink + Turkce Karakter
- **Çözüm:** `C:\Projects\okul-akli` gibi ASCII-only bir dizin kullanılarak hata aşıldı. Geliştirme burada sürmeli.

### EXPO-LINKING DURUMU
- apps/mobile/package.json'da expo-linking eksik gorunuyor
- Transitive dependency olarak mevcut olabilir
- Test edilmedi — build calismadan dogrulanamaz

### PREBUILD NON-INTERACTIVE SORUNU
- `expo prebuild --platform android --clean` non-interactive modda "Install updated dependencies?" prompt veriyor
- Bu da build'i engelliyor
- `--non-interactive` flag'i denenecek (recovery plan'da)

## Sırada Ne Var? (Next Exact Task)

1. **Metro Başlatma ve Smoke Test Devamı:** Metro server başlatılmalı (`npx expo start` veya `npx react-native start`), cihazla USB/ADB port yönlendirmesi yapılmalı, uygulama RSOD aşılıp login ekranı ve rol yönlendirmeleri görsel olarak doğrulanmalı.
2. **Merge:** Smoke test tüm metinler (Türkçe) ve butonlarla başarılı olduktan sonra feat/mobile-minimal-v1 master'a merge edilecek.

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
