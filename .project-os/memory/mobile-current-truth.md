# Okul Aklı Mobil - Mevcut Durum (Current Truth)

Bu dosya projenin mevcut durumunu belgelemek için kullanılır.
Her değişiklikten sonra güncellenir.

## PROJE BİLGİLERİ

| Alan | Değer |
|------|-------|
| Proje Adı | Okul Aklı |
| Mobil Uygulama Adı | Okul Aklı Mobil |
| Teknik Klasör | apps/mobile |
| Teknik Paket Adı | okul-akli-mobile |
| Stack | React Native + Expo + TypeScript |
| Expo SDK | 52.0.49 |
| React Native | 0.76.5 |
| Çalışma Yönü | Android-first |
| iOS Durumu | Gelecek uyumluluğu düşünülür ama aktif kapsam dışı |

## AKTİF BRANCH VE PR

| Alan | Değer |
|------|-------|
| Branch | feat/mobile-minimal-v1 |
| Son Commit | cbd27d8 chore: hygiene fix - memory ve PR body guncelleme |
| Working Tree | Temiz |
| Remote Senkron | Up to date |
| Açık PR | #2 (https://github.com/lastlord444/okul-akli/pull/2) |

## DOSYA YAPISI (GERÇEK)

```
Okul Aklı/
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

## İLK MOBİL SLICE

| Hedef | Durum |
|-------|--------|
| mobile app shell | Tamamlandı |
| login entry point | Tamamlandı |
| role-based route skeleton | Tamamlandı |
| student empty dashboard | Tamamlandı |
| parent empty dashboard | Tamamlandı |
| teacher empty dashboard | Tamamlandı |
| Android run flow | Prebuild green |
| Root index redirect → login | Tamamlandı |

## BUILD DURUMU

| Kontrol | Sonuç |
|---------|-------|
| pnpm install | Green |
| tsc --noEmit | Green |
| expo prebuild --platform android | Green |
| expo export --platform android | Hata (expo-asset eksik) |

## BİLİNEN RİSKLER

| Risk | Derece | Detay |
|------|--------|-------|
| expo-asset eksik | Orta | export komutu çalışmıyor |
| CI/CD yok | Düşük | Otomatik build yok |
| Android cihaz doğrulaması yok | Orta | Prebuild green ama test edilmedi |
| Auth store yok | Düşük | Sadece rol seçimi |

## SON GÜNCELLEME

**Tarih:** 2026-04-23
**Durum:** PR #2 açık. Memory dosyaları head hash cbd27d8 ile uyumlu.
