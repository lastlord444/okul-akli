# Okul Aklı

Türkçe okul, kurs ve sınav yönetim sistemi.

## Proje Hakkında

Okul Aklı; özel okul, kurs ve sınav merkezlerinin kayıt, sınav, öğrenci, veli, öğretmen, ödeme, yoklama, duyuru ve belge süreçlerini tek merkezden yöneten Türkçe, profesyonel ve modüler bir okul işletim sistemidir.

Bu proje kopya ürün değildir. Türkiye'deki okul ve kursların gerçek ihtiyaçlarına göre özgün geliştirilmektedir.

## İlk Mobil Strateji

Mobil uygulama şu teknoloji yığınıyla geliştirilmektedir:

- **React Native + Expo + TypeScript**
- **Android öncelikli** yaklaşım
- iOS uyumluluk göz önünde bulundurulur ancak iOS release süreci şu an aktif kapsam dışıdır
- Kabul kriteri: Android development build veya doğrulanmış Android cihaz/emülatör çalışması

## Rakip Kopyalama Yasağı

Aşağıdaki rakiplerin ekran tasarımı, metinleri, ikonları, akışları, marka dili, özel modül kurgusu veya birebir iş mantığı kopyalanamaz:

- Ebtex
- Eyotek
- K12NET
- Edroof

Rakipler sadece sektör analizi ve ihtiyaç çıkarımı için referans olabilir.

## Geliştirme Disiplini

Bu projede katı geliştirme disiplini uygulanmaktadır:

- **Tek görev = tek bounded context** — Her görevde tek bir amaca odaklanılır
- **Protected core** — Açık izin olmadan auth, RBAC, ödeme, SMS, bildirim, dosya depolama gibi çekirdek alanlara dokunulmaz
- **Repo gerçeği önceliklidir** — Raporlar ve planlar değil, repodaki gerçek kod geçerlidir
- **Küçük ve çalışan teslimat** — Büyük ama kırılgan teslimat yerine küçük ama doğrulanmış teslimat tercih edilir

## Roo Modları

Bu proje Roo (AI destekli geliştirme aracı) ile yönetilmektedir. Her modun kendi sorumluluğu vardır:

| Mod | Açıklama |
|-----|----------|
| **Orchestrator** | Karmaşık görevleri alt görevlere böler, farklı uzmanlıkları koordine eder |
| **Architect** | Planlama, tasarım ve strateji üretir. Kod yazmaz |
| **Code** | Onaylı planları uygular, kod yazar ve dosya değiştirir |
| **Ask** | Açıklama, dokümantasyon ve teknik soruları yanıtlar |
| **Debug** | Hata ayıklama, sorun araştırma ve kök neden analizi yapar |
| **Test** | Dosya varlığı, içerik kontrolü ve doğrulama yapar |

## Şimdilik Kapsam Dışı

Aşağıdaki alanlar şu an aktif geliştirme kapsamı dışındadır:

- Ödeme
- SMS
- Push bildirim (notification)
- Sohbet (chat)
- Servis / otobüs takibi
- Harita
- Çevrimdışı senkronizasyon (offline-first sync)
- PWA
- iOS release
- App Store / TestFlight
