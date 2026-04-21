# Oturum Başlangıç Protokolü - Okul Aklı

## AMAÇ

Bu protokol, her Roo oturumunun başında yapılması zorunlu adımları tanımlar. Oturum başlamadan önce proje bağlamı tam olarak anlaşılmalıdır.

## ZORUNLU ADIMLAR

Her oturum başında sırasıyla şu adımlar gerçekleştirilecektir:

### 1. Roo Kurallarını Oku
- `.roo/rules/**` altındaki tüm kural dosyaları okunacak
- Özellikle `00-core-project-rules.md` ve `10-agent-skills-adapter.md`
- Aktif modun kural dosyası mutlaka okunacak

### 2. Proje Protokollerini Oku
- `.project-os/protocols/**` altındaki tüm protokol dosyaları okunacak
- STARTUP_PROTOCOL.md (bu dosya)
- DELIVERY_GATE.md
- SESSION_WRAPUP_PROTOCOL.md

### 3. Proje Hafızasını Oku
- `.project-os/memory/session-handoff.md` — Son oturumun durumu
- `.project-os/memory/mobile-current-truth.md` — Mevcut proje durumu
- `.project-os/memory/mobile-module-registry.md` — Modül kayıt defteri (gerekirse)
- `.project-os/skills/agent-skills-index.md` — Skill referansları (gerekirse)

### 4. GitHub/Repo Durumunu Kontrol Et
- Aktif branch nedir?
- Son commit ne?
- Working tree temiz mi?
- Remote ile lokal uyumlu mu?
- Ahead/behind durumu nedir?
- Açık PR var mı?

### 5. Kodlamadan Önce Sadece 4 Başlık Üret
Herhangi bir kod yazmadan önce SADECE şu 4 başlık üretilir:

1. **Repo truth summary** — Mevcut durum özeti
2. **Domain ownership confirmation** — Sorumlu alan doğrulaması
3. **File change plan** — Dosya değişiklik planı
4. **Risks** — Riskler

Bu 4 başlık olmadan kod YAZILMAZ.

## İSTİSNALAR

- Eğer görev sadece soru cevaplama ise (Ask modu), 4 başlık zorunlu değildir ama repo truth özetlenmesi önerilir.
- Eğer görev sadece hata ayıklama ise (Debug modu), öncelikle hatanın yeniden üretilmesi gerekir, sonra 4 başlık çıkarılabilir.

## KURAL ÖNCELİĞİ

Bu protokol Okul Aklı kurallarının bir parçasıdır. Agent-skills kurallarıyla çakışma durumunda Okul Aklı kuralları geçerlidir.

## SON GÜNCELLEME

**Tarih:** 2026-04-21
**Durum:** İlk oluşturuldu.
