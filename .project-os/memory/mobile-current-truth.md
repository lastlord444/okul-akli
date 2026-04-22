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
| Başlangıç Adayı | Obytes React Native Template v9.0.0 |
| Çalışma Yönü | Android-first |
| iOS Durumu | Gelecek uyumluluğu düşünülür ama aktif kapsam dışı |
| pnpm Workspace | Evet (root pnpm-workspace.yaml) |
| Root package.json | Evet (minimal workspace yönetimi) |

## İLK MOBİL SLICE

| Hedef | Durum |
|-------|--------|
| mobile app shell (mobil uygulama iskeleti) | ✅ Kuruldu |
| login entry point (giriş noktası) | ✅ Türkçe placeholder login |
| role-based route skeleton (rol tabanlı yönlendirme iskeleti) | ✅ 3 rol route'u |
| student empty dashboard (öğrenci boş paneli) | ✅ Türkçe boş ekran |
| parent empty dashboard (veli boş paneli) | ✅ Türkçe boş ekran |
| teacher empty dashboard (öğretmen boş paneli) | ✅ Türkçe boş ekran |
| Android run flow (Android çalışma akışı) | ❌ BLOCKED: Android SDK kurulu değil |

## DOĞRULAMA SONUÇLARI

| Kontrol | Sonuç |
|---------|-------|
| pnpm install | ✅ 1845 paket kuruldu |
| TypeScript check (tsc --noEmit) | ⚠️ 1 hata: select.tsx template hatası (bizden kaynaklanmıyor) |
| expo export --platform android | ✅ 6.64 MB bundle, 2566 modül |
| Android run (expo run:android) | ❌ BLOCKED: Android SDK kurulu değil |

## DOSYA YAPISI

```
Okul Aklı/
├── .roo/
│   ├── rules/
│   │   ├── 00-core-project-rules.md
│   │   └── 10-agent-skills-adapter.md
│   ├── rules-architect/
│   ├── rules-code/
│   ├── rules-ask/
│   ├── rules-debug/
│   ├── rules-test/
│   └── rules-orchestrator/
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
├── apps/
│   └── mobile/                    ✅ Obytes v9.0.0 tabanlı mobil iskelet
│       ├── src/
│       │   ├── app/               # Expo Router route'ları
│       │   │   ├── _layout.tsx    # Root layout (login initial)
│       │   │   ├── login.tsx      # Türkçe placeholder giriş ekranı
│       │   │   ├── (app)/         # Obytes template orijinal route
│       │   │   ├── (student)/     # Öğrenci paneli route
│       │   │   ├── (parent)/      # Veli paneli route
│       │   │   ├── (teacher)/     # Öğretmen paneli route
│       │   │   ├── feed/          # Obytes template orijinal
│       │   │   └── onboarding.tsx # Obytes template orijinal
│       │   ├── components/        # UI bileşenleri
│       │   ├── features/          # Feature klasörleri
│       │   ├── lib/               # Yardımcı kütüphaneler
│       │   ├── translations/      # Çeviriler
│       │   └── global.css         # TailwindCSS global stiller
│       ├── assets/                # Uygulama ikonları
│       ├── app.config.ts          # Expo yapılandırması
│       ├── env.ts                 # Ortam değişkenleri
│       ├── package.json           # okul-akli-mobile
│       └── tsconfig.json          # TypeScript yapılandırması
├── package.json                   # Root workspace
├── pnpm-workspace.yaml            # Monorepo workspace
├── pnpm-lock.yaml                 # Kilit dosyası
└── README.md
```

## MOBİL UYGULAMA ROUTE HARİTASI

| Route | Ekran | Türkçe | Durum |
|-------|-------|--------|-------|
| /login | Giriş ekranı (rol seçimi) | ✅ | Placeholder |
| /(student) | Öğrenci paneli | ✅ | Boş dashboard |
| /(parent) | Veli paneli | ✅ | Boş dashboard |
| /(teacher) | Öğretmen paneli | ✅ | Boş dashboard |
| /(app) | Obytes template orijinal | İngilizce | Eski |
| /onboarding | Obytes onboarding | İngilizce | Eski |
| /feed/* | Obytes feed | İngilizce | Eski |

## BİLİNEN RİSKLER

| Risk | Derece | Açıklama |
|------|--------|----------|
| Android SDK eksik | YÜKSEK | Android run yapılamıyor, sadece export doğrulandı |
| Template TS hatası | DÜŞÜK | select.tsx'te template hatası, bizden kaynaklanmıyor |
| Eski route'lar mevcut | DÜŞÜK | (app), feed, onboarding hâlâ template'den kalmış |
| TailwindCSS aktif | DÜŞÜK | Kullanılmıyor ama kaldırılmadı (temizlik ertelendi) |
| Husky uyarısı | DÜŞÜK | .git bulunamadı uyarısı, workspace yapısından |

## SON GÜNCELLEME

**Tarih:** 2026-04-22
**Durum:** Mobil iskelet kuruldu. pnpm install başarılı. expo export --platform android başarılı. Android run SDK eksikliği nedeniyle bloklu. Türkçe login ve 3 boş dashboard uygulandı. Branch: feat/mobile-scaffold-v1
