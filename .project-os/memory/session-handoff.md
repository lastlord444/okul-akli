# Session Handoff - Okul Akli

## Repo Truth:
- Branch: feat/mobile-minimal-v1
- Last Verified PR Head: 443484fb80afaa8e2e60a6b6a6f9fce6d4b5b8e6
- Working Tree: Temiz
- Remote: Up to date (pushed)
- Acik PR: #2 MERGEABLE

## Build Durumu:
- **Android APK Build:** BASARILI (2m 7s)
- **APK:** app-debug.apk (122MB)
- **Cihaz:** e3484f25 - Kurulum basarili
- **Metro Dev Server:** PATCHED - Turkce karakter sorunu cozuldu
- **ADB Cihaz ID:** e3484f25 (eski: 24122RKC7G)

## Cozuldu:
1. CMake path limiti -> newArchEnabled=false
2. SDK path eksikligi -> local.properties olusturuldu
3. Kotlin 1.9.25 / Compose uyumsuzlugu -> suppressKotlinVersionCompatibilityCheck
4. pnpm symlink sorunu -> .npmrc public-hoist-pattern[]=*
5. Metro header hata -> createMetroMiddleware.js patch (non-ASCII sanitizasyonu)

## Metro Patch Detayi:
- Dosya: `node_modules/.pnpm/@expo+cli@0.22.28/node_modules/@expo/cli/build/src/start/server/metro/dev-server/createMetroMiddleware.js`
- Satir 73: `.replace(/[^\x20-\x7E]/g, '_')` eklendi
- **UYARI:** pnpm install sonrasi patch tekrar uygulanmali

## Bilinen Sorunlar:
1. Metro patch node_modules'ta - pnpm reinstall sonrasi kaybolur (postinstall script onerilir)
2. Auth store yok - Dusuk (sonraki sprint)

## Next Task:
1. Login + 3 rol navigasyon smoke test (Ogrenci/Veli/Ogretmen)
2. CI/CD pipeline kurulumu
3. Auth store implementasyonu
4. Metro patch icin postinstall script olusturma

## Guncelleme: 2026-04-24 (Session 2 - Metro Patch)
