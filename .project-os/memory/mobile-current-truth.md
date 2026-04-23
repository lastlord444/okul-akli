# Okul Akli Mobil - Mevcut Durum (Current Truth)

Bu dosya projenin mevcut durumunu belgelemek icin kullanilir.
Her degisiklikten sonra guncellenir.

## PROJE BILGILARI

| Alan | deger |
|------|-------|
| Proje Adi | Okul Akli |
| Mobil Uygulama Adi | Okul Akli Mobil |
| Teknik Klasor | apps/mobile |
| Teknik Paket Adi | okul-akli-mobile |
| Stack | React Native + Expo + TypeScript |
| Expo SDK | 52.0.49 |
| React Native | 0.76.5 |
| Calisma Yonu | Android-first |
| iOS Durumu | Gelecek uyumlulugu dusunulur ama aktif kapsam disi |

## AKTIF BRANCH VE PR

| Alan | deger |
|------|-------|
| Branch | feat/mobile-minimal-v1 |
| Son Commit | 6a7c7d8 chore: final memory fix - head hash ba14ef6, PR mergeable |
| Working Tree | Temiz |
| Remote Senkron | Up to date |
| Acik PR | #2 (https://github.com/lastlord444/okul-akli/pull/2) |

## DOSYA YAPISI (GERCEK)

```
Okul Akli/
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── .github/
│   └── pull_request_template.md
├── .project-os/
│   ├── memory/
│   │   ├── mobile-current-truth.md
│   │   ├── mobile-module-registry.md
│   │   └── session-handoff.md
│   ├── protocols/
│   │   ├── STARTUP_PROTOCOL.md
│   │   ├── DELIVERY_GATE.md
│   │   └── SESSION_WRAPUP_PROTOCOL.md
│   ├── adr/
│   │   ├── 0001-mobile-stack-and-execution-strategy.md
│   │   └── 0002-agent-workflow-and-scope-control.md
│   └── skills/
│       └── agent-skills-index.md
├── .roo/
│   └── rules/
│       ├── 00-core-project-rules.md
│       └── 10-agent-skills-adapter.md
└── apps/
    └── mobile/
        ├── app.json
        ├── babel.config.js
        ├── metro.config.js
        ├── package.json
        ├── tsconfig.json
        ├── .gitignore
        ├── assets/
        └── src/
            └── app/
                ├── index.tsx
                ├── _layout.tsx
                ├── login.tsx
                ├── (student)/index.tsx
                ├── (parent)/index.tsx
                └── (teacher)/index.tsx
```

## ILK MOBIL SLICE

| Hedef | Durum |
|-------|--------|
| mobile app shell | Tamamlandi |
| login entry point | Tamamlandi |
| role-based route skeleton | Tamamlandi |
| student empty dashboard | Tamamlandi |
| parent empty dashboard | Tamamlandi |
| teacher empty dashboard | Tamamlandi |
| Android run flow | Prebuild green |
| Root index redirect → login | Tamamlandi |

## BUILD DURUMU

| Kontrol | Sonuc |
|---------|-------|
| pnpm install | Green |
| tsc --noEmit | Green |
| expo prebuild --platform android | Green |
| expo export --platform android | Hata (expo-asset eksik) |

## BILINEN RISKLER

| Risk | Derece | Detay |
|------|--------|-------|
| expo-asset eksik | Orta | export komutu calismiyor |
| CI/CD yok | Dusuk | Otomatik build yok |
| Android cihaz dogrulamasi yok | Orta | Prebuild green ama test edilmedi |
| Auth store yok | Dusuk | Sadece rol secimi |

## SON GUNCELLEME

**Tarih:** 2026-04-23
**Durum:** PR #2 acik, mergeability UNKNOWN (GitHub hesaplaniyor). Memory dosyalari head hash 6a7c7d8 ile uyumlu.
