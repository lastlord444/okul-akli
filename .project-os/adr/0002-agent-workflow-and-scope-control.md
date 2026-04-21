# ADR 0002 - Roo + Agent-Skills + GPT GitHub Kontrolü Çalışma Modeli

## Durum

Kabul edildi

## Tarih

2026-04-21

## Bağlam

Okul Aklı projesi Roo (AI destekli geliştirme aracı) ile yönetilmektedir. Ayrıca addyosmani/agent-skills reposundaki süreç mantıkları referans olarak kullanılmaktadır. Her Roo çıktısından sonra GPT, GitHub bağlantısı üzerinden repo kontrolü yapmaktadır. Bu çalışma modelinin resmi olarak kaydedilmesi gerekmektedir.

## Karar

### Roo Modları

| Mod | Görev |
|-----|-------|
| Orchestrator | Karmaşık görevleri alt görevlere böler, koordine eder. Kod yazmaz |
| Architect | Planlama, tasarım, teknik spec üretir. Kod yazmaz |
| Code | Sadece onaylı dosyalarda çalışır, implementasyon yapar |
| Ask | Açıklama, dokümantasyon, soru cevaplama |
| Debug | Hata tespiti, sorun giderme, kök neden analizi |
| Test | Test yazma, çalıştırma, doğrulama |

### Agent-Skills Kullanımı

- Agent-skills reposu TAM OLARAK KOPYALANMAZ
- Sadece süreç referansı olarak kullanılır
- Git submodule EKLENMEZ
- Paket kurulumu YAPILMAZ
- Okul Aklı kuralları her zaman agent-skills kurallarından ÜSTTEDİR
- Çakışma durumunda Okul Aklı kazanır

### GPT GitHub Kontrolü

Her Roo çıktısından sonra GPT, GitHub bağlantısı üzerinden repo kontrolü yapar:
- Local ve remote branch senkron mu?
- Working tree temiz mi?
- Commit mesajları anlaşılır mı?
- Beklenmeyen dosya değişikliği var mı?

Sonraki Roo prompt sadece bu kontrol tamamlandıktan sonra verilir.

### Push Öncesi Hafıza Güncelleme

Push yapılmadan önce şu dosyalar güncellenmelidir:
- session-handoff.md
- mobile-current-truth.md
- Gerekirse mobile-module-registry.md
- Gerekirse ADR dosyaları

## Gerekçe

1. **Orchestrator kod yazmaz**: Tek bir bounded context ilkesini korumak için görev bölme ve delege etme ayrı tutulur
2. **Architect kod yazmaz**: Planlama ve implementasyon ayrımı, scope büyümeyi önler
3. **Code sadece onaylı dosyalarda**: İzinsiz değişiklik riskini ortadan kaldırır
4. **Agent-skills tam kopyalanmaz**: Proje karmaşıklığını artırmaz, sadece süreç referansı sağlar
5. **GPT GitHub kontrolü**: Repo bütünlüğünü sağlar, beklenmeyen değişiklikleri yakalar
6. **Hafıza güncelleme**: Session handoff yapısı, oturumlar arası tutarlılık sağlar

## Alternatifler

| Alternatif | Neden Reddedildi |
|-----------|-----------------|
| Tek modda tüm işleri yapma | Scope büyüme riski yüksek, bounded context ihlali |
| Agent-skills tam entegrasyonu | Proje karmaşıklığı artar, bakım yükü |
| GPT kontrolü olmadan çalışma | Repo bütünlüğü güvence altına alınmaz |
| Manuel handoff | İnsan hatası riski, tutarsızlık |

## Riskler

| Risk | Derece | Mitigation |
|------|--------|-----------|
| Agent-skills ve Okul Aklı kuralları çakışması | Düşük | Okul Aklı her zaman üstte, adapter dosyasında açıkça belirtildi |
| GPT kontrolü atlanması | Orta | Session wrapup protokolü ve delivery gate ile zorunlu kılındı |
| Orchestrator scope büyütme | Orta | Tek görev = tek bounded context ilkesi |
| Hafıza dosyaları güncellenmemesi | Düşük | Session wrapup protokolü ile zorunlu kılındı |

## Sınırlamalar

- Bu çalışma modeli sadece Okul Aklı projesi için geçerlidir
- Agent-skills entegrasyonu sadece süreç referansı seviyesindedir
- GPT GitHub kontrolü otomatik değil, manuel bir adımdır
- Protokoller gerçek mobil scaffold üzerinde henüz doğrulanmamıştır

## Sonuç

Roo + agent-skills + GPT GitHub kontrolü çalışma modeli, projenin geliştirme disiplinini güçlendirmek için benimsenmiştir. Her mod kendi sorumluluğunda kalacak, agent-skills sadece referans olarak kullanılacak, GPT repo bütünlüğünü denetleyecek ve hafıza dosyaları oturumlar arası tutarlılık sağlayacaktır.

## Değişiklik Geçmişi

| Tarih | Değişiklik |
|-------|-----------|
| 2026-04-21 | İlk karar alındı |
