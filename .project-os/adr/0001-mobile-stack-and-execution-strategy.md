# ADR 0001 - Mobil Stack ve Çalışma Stratejisi

## Durum

Kabul edildi

## Tarih

2026-04-21

## Bağlam

Okul Aklı projesi için mobil uygulama geliştirilecek. Türkçe, profesyonel ve modüler bir okul işletim sistemi olan bu projede mobil stack seçimi kritik bir karardır. Projenin hedef kitlesi Türkiye'deki özel okullar, kurslar ve sınav merkezleridir.

## Karar

Mobil uygulama **React Native + Expo + TypeScript** stack'i ile geliştirilecektir.

### Detaylar:

| Alan | Karar |
|------|-------|
| Framework | React Native |
| Geliştirme Platformu | Expo |
| Dil | TypeScript |
| Başlangıç Adayı | Obytes React Native Template |
| Aktif Klasör | apps/mobile |
| Çalışma Yönü | Android-first |
| iOS | Uyumlu yazılır ama release scope dışı |
| Kabul Kriteri | Android development build veya doğrulanmış Android cihaz/emulator |
| Expo Go | Kabul kriteri DEĞİLDİR |

## Gerekçe

1. **React Native**: Türkiye'de yaygın bilgi birikimi, cross-platform avantajı, büyük topluluk
2. **Expo**: Hızlı geliştirme döngüsü, native modül gereksinimlerini over-the-air güncellemeyle çözme, yönetilen workflow avantajı
3. **TypeScript**: Tip güvenliği, büyük ekiplerde hata azaltma, IDE desteği
4. **Android-first**: Türkiye pazarında Android kullanımı yaygın, iOS release ikinci aşamada
5. **Obytes Template**: Topluluk tarafından doğrulanmış, Expo uyumlu, TypeScript desteği olan başlangıç iskeleti
6. **Expo Go reddi**: Gerçek production senaryolarında native modül gereksinimleri Expo Go'ya sığmaz, development build gereklidir

## Alternatifler

| Alternatif | Neden Reddedildi |
|-----------|-----------------|
| Flutter | Dart dili Türkiye'de daha az biliniyor, mevcut ekosistem React tabanlı |
| Native (Kotlin/Swift) | Çift platform geliştirme maliyeti yüksek, tek ekip zorlanır |
| React Native (Expo'suz) | Native modül yapılandırması karmaşık, geliştirme döngüsü yavaş |
| PWA | Mobil native deneyimi sunamaz, push notification sınırlı, offline desteği zayıf |
| Capacitor/Ionic | Web view tabanlı, performans native seviyede değil |

## Kapsam Dışı Alanlar

Şu alanlar bu kararın scope'unda değildir:
- ödeme, SMS, push notification, chat, harita, offline-first sync, PWA, iOS release, App Store / TestFlight, shared package extraction, backend auth/RBAC/tenant redesign

## Riskler

| Risk | Derece | Mitigation |
|------|--------|-----------|
| Expo native modül sınırlamaları | Orta | Development build ile çözülebilir, bare workflow yedek plan |
| Obytes template bakım riski | Düşük | Template sadece başlangıç iskeleti, sonradan özelleştirilecek |
| Android-first yaklaşım iOS uyumsuzluk riski | Orta | iOS uyumlu kod yazılacak, release sonraki aşamada |
| Expo Go ile development build farkı | Düşük | Kabul kriteri development build olarak tanımlandı |

## Sonuç

React Native + Expo + TypeScript stack'i, proje gereksinimlerine en uygun seçenek olarak belirlendi. Android-first yaklaşımı ile hızlı değer sunulacak, iOS uyumu göz önünde bulundurulacak. Expo Go kabul kriteri değildir, gerçek doğrulama Android development build ile yapılacaktır.

## Değişiklik Geçmişi

| Tarih | Değişiklik |
|-------|-----------|
| 2026-04-21 | İlk karar alındı |
