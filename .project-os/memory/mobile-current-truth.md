# Okul Akli Mobil - Mevcut Durum (Current Truth)

## PROJE BILGILERI

| Alan | Deger |
|------|-------|
| Stack | React Native + Expo SDK 52 + TypeScript |
| Klasor | apps/mobile |
| Calisma Yonu | Android-first |

## AKTIF BRANCH VE PR

| Alan | Deger |
|------|-------|
| Branch | feat/mobile-minimal-v1 |
| Last Verified PR Head | 1b95ad5abe7811198d1f082573cd7070673b63d1 |
| Working Tree | Temiz (commit bekliyor) |
| Remote | Up to date |
| Acik PR | #2 MERGEABLE (https://github.com/lastlord444/okul-akli/pull/2) |

## BUILD DURUMU

| Kontrol | Sonuc |
|---------|-------|
| pnpm install | Green |
| tsc --noEmit | Green |
| expo prebuild --platform android | Green |
| ./gradlew assembleDebug | GREEN - BUILD SUCCESSFUL |
| APK Olusturma | Green - app-debug.apk (122MB) |
| Cihaz Kurulumu | Green - 24122RKC7G |

## BUILD SORUNLARI COZULDU

### 1. CMake Path Limiti (Windows 260 char)
- **Sorun:** pnpm virtual store path'i Windows 260 karakter limitini asti
- **Cozum:** `newArchEnabled=false` ayari eklendi

### 2. SDK Path Eksikligi
- **Sorun:** local.properties dosyasi yoktu
- **Cozum:** `apps/mobile/android/local.properties` olusturuldu
```
sdk.dir=C\:\\Users\\musab\\AppData\\Local\\Android\\Sdk
```

### 3. Kotlin/Compose Uyumsuzlugu
- **Sorun:** expo-modules-core Kotlin 1.9.24 kullanirken Compose Compiler 1.5.15 istedi
- **Cozum:** `gradle.properties`'e `android.suppressKotlinVersionCompatibilityCheck=true` ve `android.kotlinVersion=1.9.25` eklendi
- **Cozum:** `build.gradle`'da Kotlin plugin classpath duzeltildi

### 4. pnpm Symlink Sorunu
- **Sorun:** public-hoist-pattern eksikligi
- **Cozum:** `.npmrc` dosyasi olusturuldu: `public-hoist-pattern[]=*`

## BILINEN TEKNIK SORUN

| Sorun | Durum | Etki |
|-------|-------|------|
| Metro Header Hata (Turkce "i") | Biliniyor | Dusuk - Sadece dev server, APK calisiyor |

**Metro Hata Detayi:** `TypeError: Invalid character in header content ["X-React-Native-Project-Root"]`
- **Neden:** Windows path'inde Turkce "i" karakteri (Okul Akli)
- **Etki:** Sadece Metro dev server (live reload)
- **Cozum Gerekmiyor:** APK'da JS bundle gomulu, uygulama calisiyor

## DEGISIKLIK DOSYALARI

| Dosya | Durum |
|-------|-------|
| `.npmrc` | Yeni olusturuldu |
| `apps/mobile/android/local.properties` | Yeni olusturuldu |
| `apps/mobile/android/gradle.properties` | Guncellendi |
| `apps/mobile/android/build.gradle` | Guncellendi |

## CI/CD

- Android build artik basariyla tamamlaniyor
- APK otomatik olusturulabilir

## SON GUNCELLEME

**Tarih:** 2026-04-24
**Build:** 15:00-15:15
**Durum:** BASARILI
