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
| Başlangıç Adayı | Obytes React Native Template |
| Çalışma Yönü | Android-first |
| iOS Durumu | Gelecek uyumluluğu düşünülür ama aktif kapsam dışı |

## İLK MOBİL SLICE

Şu anda sadece şu hedefler aktif scope içindedir:

| Hedef | Durum |
|-------|--------|
| mobile app shell (mobil uygulama iskeleti) | Planlandı |
| login entry point (giriş noktası) | Planlandı |
| role-based route skeleton (rol tabanlı yönlendirme iskeleti) | Planlandı |
| student empty dashboard (öğrenci boş paneli) | Planlandı |
| parent empty dashboard (veli boş paneli) | Planlandı |
| teacher empty dashboard (öğretmen boş paneli) | Planlandı |
| Android run flow (Android çalışma akışı) | Planlandı |

## DİL KURALLARI

| Alan | Kural |
|------|-------|
| Kullanıcı arayüzü | Tamamen Türkçe |
| Roo raporları | Tamamen Türkçe |
| Teknik terimler | Yanında kısa Türkçe açıklama |
| Kod yorumları ve açıklamaları | Türkçe |
| Dosya adları, kütüphane adları | İngilizce kalabilir (ekosistem gereği) |

## MARKA VE RAKİP KURALLARI

| Kural | Durum |
|-------|--------|
| Yasaklı isimler | Ebtex, Eyotek, K12NET, Edroof veya başka rakip isimleri ürün adı, modül adı, ekran adı veya marka kimliği olarak kullanılamaz |
| Kopyalama yasağı | Rakiplerin ekran tasarımı, metinleri, ikonları, akışları, marka dili, özel modül kurgusu veya birebir iş mantığı kopyalanamaz |
| Proje konumu | Kopya ürün değil; Türkiye'deki okul ve kursların gerçek ihtiyaçlarına göre özgün geliştirilecek profesyonel bir okul işletim sistemi |

## KABUL KRİTERLERİ

| Kriter | Değer |
|--------|-------|
| Expo Go | Kabul kriteri değildir |
| Gerçek Kabul | Android development build veya doğrulanmış Android cihaz/emulator çalışması |

## MOBİLDE ŞİMDİLİK KAPSAM DIŞI

Aşağıdaki özellikler şu an aktif kapsam dışındadır:

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

## ÖĞRETİCİ GELİŞTİRME MODU

| Durum | Aktif |
|-------|-------|
| Öğretici mod | Evet |
| Zorunlu bölüm | Her görev sonunda "Bu Görevde Ne Öğrendik?" |
| Kod notu | Kod varsa "Satır Satır Önemli Noktalar" |
| Scope kuralı | Öğrenme anlatımı scope'u büyütmeyecek |

## DOSYA YAPISI

```
Okul Aklı/
├── .roo/
│   ├── rules/                    # Ortak kurallar
│   │   └── 00-core-project-rules.md
│   ├── rules-architect/          # Architect modu kuralları
│   │   └── 00-architect-rules.md
│   ├── rules-code/               # Code modu kuralları
│   │   └── 00-code-rules.md
│   ├── rules-ask/                # Ask modu kuralları
│   │   └── 00-ask-rules.md
│   ├── rules-debug/              # Debug modu kuralları
│   │   └── 00-debug-rules.md
│ └── rules-test/ # Test modu kuralları
│ └── 00-test-rules.md
│ ├── rules-orchestrator/ # Orchestrator modu kuralları
│ │ └── 00-orchestrator-rules.md
├── .project-os/
│   ├── memory/                   # Proje hafıza dosyaları
│   │   ├── mobile-current-truth.md
│   │   └── mobile-module-registry.md
│   └── skills/                   # Agent-skills referansları
│       └── agent-skills-index.md
└── apps/
    └── mobile/                   # Mobil uygulama (henüz oluşturulmadı)
```

## SON GÜNCELLEME

**Tarih:** 2026-04-21
**Durum:** Proje kurulumu %100 tamamlandı. Roo kuralları, proje hafızası ve session handoff oluşturuldu. Agent-skills adapter eklendi (tam repo kopyalanmadı, sadece süreç referansı). Mobil uygulama iskeleti henüz kurulmadı. CI/CD yok. Gerçek Android run doğrulaması yapılmadı.
**Bilinen Riskler:** Mobil scaffold eksikliği, Roo kurallarının gerçek mobil uygulama üzerinde henüz doğrulanmamış olması, agent-skills ve Okul Aklı kuralları arası potansiyel çakışma (çözüldü: Okul Aklı her zaman üstte).
