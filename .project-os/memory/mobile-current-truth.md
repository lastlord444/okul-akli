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
| Current GitHub PR Head | Her session basinda git rev-parse HEAD / GitHub ile dogrulanacak |
| Last Verified Code Baseline | 6bde645cfb28110df0bec0d33f1aebfd0bb8d07e |
| Android Build Status | GREEN (Local Probe) |
| Merge Status | NOT READY (Kalıcı fix gerekli, Build: başarılı, Smoke: yok) |
| Working Tree | Temiz |
| Remote | Up to date |
| Acik PR | #2 DURUM BILINMIYOR - build dogrulanmadi |

## BUILD DURUMU

| Kontrol | Sonuc |
|---------|-------|
| pnpm install | Green |
| tsc --noEmit | Green (ASCII path'te test edildi) |
| expo prebuild --platform android | Green (ASCII path'te test edildi, prompt vermedi) |
| ./gradlew assembleDebug | **GREEN** - (Local Probe successful with android.kotlinVersion=1.9.24) |
| APK Olusturma | **BAŞARILI** (`apps/mobile/android/app/build/outputs/apk/debug/app-debug.apk` ~146MB) |
| Cihaz Kurulumu | **YOK** |

## BUILD SORUNU — BLOKE EDICI

### 1. Kotlin/Compose Uyumsuzluğu (LOCAL PROBE İLE AŞILDI)
- **Sorun:** Gradle build sırasında `:expo-modules-core:compileDebugKotlin FAILED` hatası alınıyordu.
- **Kanıtlanmış Hipotez:** `gradle.properties` dosyasına `android.kotlinVersion=1.9.24` eklenerek mismatch çözüldü ve build `5m 42s` sürede yeşile döndü.
- **Durum:** **GEREKSİNİM** - Bu geçici bir fix olduğu için kalıcı Expo config plugin çözümüne ihtiyaç var.

### 2. Windows Path + Gradle + pnpm Symlink (MASKELENMİŞ BLOKER)
- **Sorun:** Proje dizini Türkçe karakter ("Okul Aklı") içerdiği için Gradle pnpm virtual store symlink'lerini çözemiyor.
- **Çözüm/Durum:** `C:\Projects\okul-akli` gibi ASCII-only bir dizine geçilerek bu sorun tamamen aşıldı. Geliştirme bu dizinde devam etmeli.

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
- **Durum:** Güncel bloker (Yukarıda açıklandı). `suppressKotlinVersionCompatibilityCheck=true` veya version bump ile çözülmesi planlanıyor.

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

- **Durum:** ASCII-only path audit sırasında `expo prebuild` sorunsuz tamamlandığı için şu an doğrudan bir `package.json` dependency'si olarak eklenmesine gerek kalmadı. Transitive olarak başarıyla çözülüyor.

## CI/CD

- **Durum:** Build BLOKE
- **APK olusturulamıyor:** Local ortamda
- **CI'de calisir mi:** BELKI - CI ortaminda Turkce karakter path olmaz

## RECOVERY PLAN

1. **ASCII-only path:** Geliştirme `C:\Projects\okul-akli` üzerinden yürütülmeli.
2. **Fix Kotlin/Compose:** Gradle Kotlin version mismatch (`1.9.24` vs `1.5.15`) hatasının giderilmesi.
3. **Re-test:** `gradlew assembleDebug` başarılı olana kadar kod/yapılandırma değişikliklerinin uygulanması.

## SON GUNCELLEME

**Tarih:** 2026-04-25
**Saat:** 17:28
**Durum:** GREEN (Local Probe) - Kalıcı fix bekliyor
**Audit Sonucu:** `android.kotlinVersion=1.9.24` hipotezi test edildi. `gradlew assembleDebug` komutu 5m 42s sürede başarıyla tamamlandı ve `app-debug.apk` oluşturuldu. Kalıcı bir Expo config plugin çözümü yazılması planlanıyor.
