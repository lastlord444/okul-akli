# Oturum Kapanış Protokolü - Okul Aklı

## AMAÇ

Bu protokol, her Roo oturumunun sonunda yapılması zorunlu kapanış adımlarını tanımlar. Oturum kapanmadan önce proje hafızası güncellenmeli ve sonraki oturuma temiz bir handoff bırakılmalıdır.

## ZORUNLU GÜNCELLEMELER

Her oturum sonunda şu dosyalar güncellenecektir:

### 1. session-handoff.md (ZORUNLU)
Her oturum sonunda güncellenir. Format:

```
Project:
Active Domain:
Current Slice:
Progress:
Repo Truth:
Completed This Session:
Files Changed:
Migrations:
Tests:
Commands Run:
GitHub Check:
Known Risks:
What User Learned:
Scope Locked For Next Session:
Explicit Do Not Touch:
Next Exact Task:
Drift Audit:
```

### 2. mobile-current-truth.md (ZORUNLU)
Proje durumu değiştiyse güncellenir. Özellikle:
- Dosya yapısı değişiklikleri
- İlerleme durumu
- Yeni riskler
- Kapsam değişiklikleri

### 3. mobile-module-registry.md (GEREKİRSE)
Yeni modül değerlendirmesi yapıldıysa veya modül durumu değiştiyse güncellenir.

### 4. ADR Dosyaları (GEREKİRSE)
Yeni mimari karar alındıysa `.project-os/adr/` altına yeni ADR eklenir.
Mevcut bir karar değiştiyse ilgili ADR güncellenir (üstü çizilip yeni karar yazılır).

## DRIFT AUDIT

Oturum kapanışında drift audit ZORUNLUDUR:

- Planlanan ile yapılan aynı mı?
- Scope dışı taşma oldu mu?
- Yeni entity açıldı mı?
- Protected core'a temas oldu mu?
- Mevcut çalışan akış bozuldu mu?
- Doküman ve repo uyumlu mu?
- Risk ve teknik borç kaldı mı?

Drift audit olmadan oturum KAPATILAMAZ.

## GIT İŞLEMLERİ

1. Hafıza dosyalarını güncelle
2. Drift audit yap
3. Commit at (anlaşılır mesajla)
4. Push yap (delivery gate koşulları sağlanıyorsa)

## GPT GITHUB KONTROLÜ

Her Roo çıktısından sonra GPT, GitHub bağlantısı üzerinden repo kontrolü yapacaktır:
- Local ve remote branch senkron mu?
- Working tree temiz mi?
- Commit mesajları anlaşılır mı?
- Beklenmeyen dosya değişikliği var mı?

Sonraki Roo prompt sadece bu kontrol tamamlandıktan sonra verilecektir.

## KURAL ÖNCELİĞİ

Bu protokol Okul Aklı kurallarının bir parçasıdır. Agent-skills kurallarıyla çakışma durumunda Okul Aklı kuralları geçerlidir.

## SON GÜNCELLEME

**Tarih:** 2026-04-21
**Durum:** İlk oluşturuldu.
