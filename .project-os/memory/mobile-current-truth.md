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
| Current GitHub PR Head | e015a7bde96f99462c7d4e5f3938e34ee55749e5 |
| Last Verified Code Baseline | 6bde645cfb28110df0bec0d33f1aebfd0bb8d07e |
| Android Build Status | GREEN (Shortest Path Probe `C:\oa` successful) |
| Merge Status | NOT READY (Smoke test bekleniyor) |
| Working Tree | Temiz |
| Remote | Up to date ile origin/feat/mobile-minimal-v1 |
| Acik PR | #2 DURUM BILINMIYOR |

## BUILD DURUMU

| Kontrol | Sonuc |
|---------|-------|
| pnpm install | Green |
| tsc --noEmit | Green (ASCII path'te test edildi) |
| expo prebuild --platform android | Green (ASCII path'te test edildi, prompt vermedi) |
| ./gradlew assembleDebug | **GREEN** - (CMake 260 character limit aşıldı, `C:\oa` dizininde 3m 33s sürdü) |
| APK Olusturma | **BAŞARILI** (`C:\oa\apps\mobile\android\app\build\outputs\apk\debug\app-debug.apk` ~120MB) |
| Cihaz Kurulumu | **YOK** (Sonraki adım) |

## BUILD SORUNU — BLOKE EDICI

### 1. Kotlin/Compose Uyumsuzluğu (KALICI OLARAK AŞILDI)
- **Sorun:** Gradle build sırasında `:expo-modules-core:compileDebugKotlin FAILED` hatası alınıyordu.
- **Çözüm:** `withKotlinVersion.js` config plugin'i yazılarak prebuild sırasında `android.kotlinVersion=1.9.24` enjeksiyonu kalıcı hale getirildi.
- **Durum:** **ÇÖZÜLDÜ** - `gradlew assembleDebug` 1m 49s sürede yeşile döndü.

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

- **Durum:** `expo-linking` projeye eklendi (`expo install expo-linking`). Ancak sonrasında `gradlew assembleDebug` komutu `A problem occurred configuring project ':expo'. Could not get unknown property 'release'` hatası vererek yeni bir native build blocker oluşturdu.

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
**Saat:** 19:05
**Durum:** GREEN (Shortest Path Probe Successful)
**Audit Sonucu:** `C:\oa` dizininde en kısa yol testi (shortest-path probe) yapıldı. `gradlew assembleDebug` 3m 33s'te başarıyla tamamlandı. CMake 260 karakter sınırı pnpm symlink yapısından kaynaklandığı kesinleşti; daha kısa bir root dizin kullanılarak hata aşıldı. `release` hatası tekrarlanmadı (SDK path doğru verildiği için). Cihaz/smoke test adımına geçilebilir.
