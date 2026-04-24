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
| Son Commit | 088863a1298ad1d9d482ff70ed6d0e1aeee85831 |
| Working Tree | Temiz |
| Remote | Up to date |
| Acik PR | #2 MERGEABLE (https://github.com/lastlord444/okul-akli/pull/2) |

## BUILD DURUMU

| Kontrol | Sonuc |
|---------|-------|
| pnpm install | Green |
| tsc --noEmit | Green |
| expo prebuild --platform android | Green |
| expo export --platform android | Hata (expo-asset eksik) |

## BILINEN RISKLER

| Risk | Derece |
|------|--------|
| expo-asset eksik | Orta |
| Android build pnpm symlink | Orta |
| Auth store yok | Dusuk |

## SON GUNCELLEME

**Tarih:** 2026-04-23
