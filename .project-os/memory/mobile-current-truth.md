# Okul Akli Mobil - Mevcut Durum (Current Truth)

## PROJE BILGILARI

| Alan | Deger |
|------|-------|
| Stack | React Native + Expo SDK 52 + TypeScript |
| Klasor | apps/mobile |
| Calisma Yonu | Android-first |

## AKTIF BRANCH VE PR

| Alan | Deger |
|------|-------|
| Branch | feat/mobile-minimal-v1 |
| Last Verified PR Head | 6bde645cfb28110df0bec0d33f1aebfd0bb8d07e |
| Working Tree | Temiz |
| Remote | Up to date |
| Acik PR | #2 DURUM BILINMIYOR - build dogrulanmadi |

## BUILD DURUMU

| Kontrol | Sonuc |
|---------|-------|
| pnpm install | Green |
| tsc --noEmit | TEST EDILEMEDI |
| expo prebuild --platform android | TEST EDILEMEDI - prebuild non-interactive modda basarisiz |
| ./gradlew assembleDebug | **BLOKE EDILDI** - Gradle + pnpm symlink + Turkce karakter |
| APK Olusturma | **YOK** |
| Cihaz Kurulumu | **YOK** |

## BUILD SORUNU — BLOKE EDICI

### Windows Path + Gradle + pnpm Symlink (KRITIK BLOKER)
- **Sorun:** Gradle Java process, pnpm virtual store yolundaki Turkce "i" karakterini cozemiyor
- **Hata:** `Included build '...\node_modules\.pnpm\@react-native+gradle-plugin@0.76.X\node_modules\@react-native\gradle-plugin' does not exist`
- **Hata Kodu:** Gradle Java Windows Unicode path encoding sorunu
- **Prebuild Durumu:** Non-interactive modda "Install updated dependencies?" prompt veriyor, devam edemiyor
- **Durum:** **BLOKE EDILDI - COZUM GEREKLI**

### Onemli Not - Onceki Build Girişimleri
- **2026-04-24:** .npmrc'de `node-linker=hoisted` ile build calisiyordu GORUNUYOR
- **2026-04-25:** `node-linker=hoisted` YASAKLI listesine eklendi
- **2026-04-25:** `node-linker=hoisted` olmadan build BASTARISIZ
- **Sonuc:** Build yapabilmek icin `node-linker=hoisted` GEREKLI ama YASAKLI

## BILINEN SORUNLAR

### 1. CMake Path Limiti (Windows 260 char)
- **Sorun:** pnpm virtual store path'i Windows 260 karakter limitini asti
- **Gecici Cozum:** `newArchEnabled=false` ayari (prebuild sonrasi ekleniyor)

### 2. SDK Path Eksikligi
- **Sorun:** local.properties dosyasi yoktu
- **Cozum:** `apps/mobile/android/local.properties` olusturuldu
```
sdk.dir=C\:\\Users\\musab\\AppData\\Local\\Android\\Sdk
```

### 3. Kotlin/Compose Uyumsuzlugu
- **Sorun:** expo-modules-core Kotlin 1.9.24 kullanirken Compose Compiler 1.5.15 istedi
- **Gecici Cozum:** `gradle.properties`'e `android.suppressKotlinVersionCompatibilityCheck=true`

### 4. pnpm Symlink + Windows Turkce Karakter
- **Sorun:** `public-hoist-pattern[]=*` tek basina YETERLI DEGIL
- **Gercek Sorun:** pnpm virtual store yolunda Turkce "i" karakteri
- **YASAKLI Cozum:** `node-linker=hoisted` (flat node_modules ile calisiyor)
- **Durum:** **BLOKE - COZUM BULUNMADI**

### 5. Metro Header Hata (Turkce Karakter)
- **Sorun:** Windows path'inde Turkce "i" karakteri HTTP header encoding sorununa neden oluyordu
- **Gecici Cozum:** Expo CLI middleware patch (node_modules icinde)
- **Not:** pnpm reinstall sonrasi tekrar uygulanmasi gerekebilir

## DEGISIKLIK DOSYALARI (BU COMMIT SONRASI)

Bu commit sadece memory dosyalarini guncelliyor. Kod degisikligi yok.

## EXPO-LINKING DURUMU

- **ekspo-linking eksik mi:** OLASI - transitive dependency olarak mevcut gorunuyor
- **Minimal fix gerekecek mi:** Belki - test sonrasi belli olacak
- **Onay:** apps/mobile/package.json'a `expo-linking` eklemesi gerekirse YALNIZCA oraya ekle

## CI/CD

- **Durum:** Build BLOKE
- **APK olusturulamıyor:** Local ortamda
- **CI'de calisir mi:** BELKI - CI ortaminda Turkce karakter path olmaz

## RECOVERY PLAN

1. **ASCII-only path'te klonlama:** `C:\Projects\okul-akli` gibi
2. **Temiz install:** `pnpm install`
3. **expo-linking test:** `pnpm --filter okul-akli-mobile list expo-linking`
4. **Build test:** `pnpm --filter okul-akli-mobile exec expo prebuild --platform android --clean --non-interactive`
5. **Gradle test:** `cd apps/mobile/android && gradlew assembleDebug`

## SON GUNCELLEME

**Tarih:** 2026-04-25
**Saat:** 09:11
**Durum:** BLOKE - BUILD YAPILAMADI
**Recovery:** ASCII path deneyin veya CI kullanin
**Memory Duzeltme:** Bu commit memory drift'i duzeltiyor
