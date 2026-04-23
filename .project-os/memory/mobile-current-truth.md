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

## AKTİF BRANCH

| Alan | Değer |
|------|-------|
| Branch | feat/mobile-minimal-v1 |
| Son Commit | bacf3a4 feat(mobile): minimal Expo Router scaffold - PR#1 replacement |
| Working Tree | Temiz |
| Remote Senkron | Up to date |

## DOSYA YAPISI (GERÇEK)

```
Okul Aklı/
├── .gitignore
├── package.json                    # Root workspace package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml            # packages: ["apps/*"]
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
        ├── app.json               # Expo config (com.okulakli.development)
        ├── babel.config.js
        ├── metro.config.js
        ├── package.json           # okul-akli-mobile
        ├── tsconfig.json
        ├── .gitignore
        ├── assets/
        └── src/
            └── app/
                ├── index.tsx       # Root redirect → /login ✓
                ├── _layout.tsx     # Stack layout (login, student, parent, teacher)
                ├── login.tsx       # Rol seçim ekranı
                ├── (student)/
                ��   └── index.tsx   # Öğrenci paneli
                ├── (parent)/
                │   └── index.tsx   # Veli paneli
                └── (teacher)/
                    └── index.tsx   # Öğretmen paneli
```

## İLK MOBİL SLICE

| Hedef | Durum |
|-------|--------|
| mobile app shell (mobil uygulama iskeleti) | ✅ Tamamlandı |
| login entry point (giriş noktası) | ✅ Tamamlandı |
| role-based route skeleton (rol tabanlı yönlendirme iskeleti) | ✅ Tamamlandı |
| student empty dashboard (öğrenci boş paneli) | ✅ Tamamlandı |
| parent empty dashboard (veli boş paneli) | ✅ Tamamlandı |
| teacher empty dashboard (öğretmen boş paneli) | ✅ Tamamlandı |
| Android run flow (Android çalışma akışı) | ✅ Prebuild green |
| Root index redirect → login | ✅ Tamamlandı |

## BUILD DURUMU

| Kontrol | Sonuç |
|---------|-------|
| pnpm install | ✅ Green |
| tsc --noEmit | ✅ Green |
| expo prebuild --platform android | ✅ Green |
| expo export --platform android | ❌expo-asset bağımlılığı eksik |

## DİL KURALLARI

| Alan | Kural |
|------|-------|
| Kullanıcı arayüzü | Tamamen Türkçe |
| Roo raporları | Tamamen Türkçe |
| Teknik terimler | Yanında kısa Türkçe açıklama |
| Kod yorumları ve açıklamaları | Türkçe |
| Dosya adları, kütüphane adları | İngilizce kalabilir (ekosistem gereği) |

## MOBİLDE ŞİMDİLİK KAPSAM DIŞI

| Alan | Durum | Neden |
|------|--------|-------|
| ödeme | Kapsam dışı | Protected core |
| SMS | Kapsam dışı | Protected core |
| push notification | Kapsam dışı | Protected core |
| chat | Kapsam dışı | Gelecek özellik |
| servis / otobüs takibi | Kapsam dışı | Gelecek özellik |
| harita | Kapsam dışı | Gelecek özellik |
| offline-first sync engine | Kapsam dışı | Karmaşıklık |
| PWA | Kapsam dışı | Farklı platform |
| iOS release | Kapsam dışı | Android öncelikli |
| App Store / TestFlight | Kapsam dışı | Android öncelikli |
| shared package extraction | Kapsam dışı | Premature optimization |
| backend auth/RBAC/tenant redesign | Kapsam dışı | Protected core |

## BİLİNEN RİSKLER

| Risk | Derece | Detay |
|------|--------|-------|
| expo-asset eksik | Orta | export komutu çalışmıyor, expo-asset bağımlılığa eklenmeli (ayrı görev) |
| CI/CD yok | Düşük | Henüz otomatik build yok |
| Gerçek Android cihaz doğrulaması yok | Orta | Prebuild green ama cihazda test edilmedi |
| Auth store yok | Düşük | Login sadece rol seçimi, gerçek auth yok (kasıtlı erteleme) |

## SON GÜNCELLEME

**Tarih:** 2026-04-23
**Durum:** Minimal mobile scaffold tamamlandı. Root app.json kaldırıldı. src/app/index.tsx login redirect eklendi. tsc ve prebuild green. Export expo-asset eksikliğinden başarısız. Memory dosyaları repo truth ile güncellendi.
