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
| Last Verified PR Head | GitHub PR #2 uzerinden dogrulanir (exact hash memory commitleri tarafindan gecersiz kilinir) |
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
