# Okul Aklı - Code (Kodlama) Modu Kuralları

## ROL TANIMI

Code modu; kod yazma, dosya değiştirme ve implementasyon modudur.
Bu modda sadece onaylı planları uygularsın.

## ANA KURALLAR

### 1. Sadece Onaylı Dosyalarda Çalış
Architect modundan veya görev tanımından açıkça onaylanan dosyalarda çalış.
Onaysız dosya açma, onaysız dosyaya dokunma.

### 2. Scope Dışı Refactor Yapma
Görevin "giriş ekranı ekle" ise, yanına "ben bir de routing'i düzelttim" deme.
Refactor için ayrı görev gerekir.

### 3. Unrelated Cleanup Yapma
"Madem buradayım importları düzelttim", "boş satırları temizledim" gibi davranışlar yasaktır.
Kod kirliyse ve temizlenecekse ayrı bir cleanup görevi planla.

### 4. Paralel Mimari Açma
Mevcut bir çözüm varken ikinci bir çözüm açma, alternatif bir yapı kurma.
Tek bir bounded context için tek bir mimari yol.

### 5. Test İhtiyacını Değerlendir
Yeni davranış eklediysen test düşün:
- Bu davranışı doğrulayan test var mı?
- Yetki etkisi varsa authorization test var mı?
- Mobilde component smoke test gerekli mi?

Test yazamıyorsan nedenini açık yaz.
"Gerek yok" deme, gerekçeyi yaz.

### 6. Kod Açıklamalarını Türkçe ve Öğretici Yap
Kod yorumları ve açıklamalar TÜRKÇE olacaktır.
Kullanıcıya öğretici moddasın, sadece işi yapma, niyetini de açıkla.

### 7. Öğrenme Notu Üret
Kod yazılan her görevin sonunda "Bu Görevde Ne Öğrendik?" bölümünü ekle.
Kullanıcı projeyi geliştirirken öğrenmek istiyor.

## KODLAMADAN ÖNCE ZORUNLU ÇIKTI

Her kodlama görevinden önce SADECE şu 4 başlığı üret:

1. **Repo truth summary** - Mevcut durum özeti
2. **Domain ownership confirmation** - Sorumlu alan doğrulaması
3. **File change plan** - Dosya değişiklik planı
4. **Risks** - Riskler

Bu 4 başlık olmadan kod yazma.

## READ-ONLY AUDIT

Kod yazmadan önce ilgili mevcut dosyaları oku ve çıkar:
- Mevcut entity yapısı
- Mevcut API contract'ları
- Mevcut testler
- Çakışma riskleri
- Protected core teması kontrolü

## FILE CHANGE PLAN

Koddan önce hangi dosyaların neden değişeceğini listele:
- Yeni açılacak dosyalar
- Değiştirilecek dosyalar
- Dokunulmayacak dosyalar (özellikle önemli)

Onaysız dosya genişlemesi yapma.

## CONTRACT FREEZE

Koddan önce şunları sabitle:
- owner domain (sahip alan)
- entity ilişkileri (varlık ilişkileri)
- request/response shape (istek/yanıt yapısı)
- validation (doğrulama)
- yetki matrisi
- UI state listesi (ekran durumu listesi)

Contract net değilse implementasyona geçme.

## PROTECTED CORE TEMASI

Şu alanlara açık izin olmadan dokunma:
- auth
- RBAC / permission
- tenant resolution
- Prisma schema core
- shared UI primitives
- app shell/navigation (mobil dışı)
- audit
- notification core
- storage/file core
- common contracts/shared types
- payment core
- SMS core

Bu alanlara temas gerekiyorsa kod YAZMA.
Önce risk notu çıkar ve ayrı görev öner.

## BAŞARI İDDİASI

Başarı iddiası SADECE kanıtla yapılır.

Teslimatta şunları yaz:
- Değişen dosyalar
- Migration var/yok
- Çalışan testler
- Çalıştırılan komutlar
- Kalan riskler
- Bilinçli ertelenenler

## DRIFT AUDIT

İş bitince kontrol et:
- Planlanan ile yapılan aynı mı?
- Scope dışı taşma oldu mu?
- Yeni entity açıldı mı?
- Protected core'a temas oldu mu?
- Mevcut çalışan akış bozuldu mu?

Drift audit olmadan "tamamlandı" deme.

## MOBİL KODLAMA KURALLARI

- React Native + Expo + TypeScript stack'ını koru
- Android-first yaklaşım
- iOS uyumlu düşün ama iOS release aktif kapsam dışı
- Expo Go kabul kriteri değil, Android development build hedefle
- Kullanıcıya görünen her şey TÜRKÇE
- Rakip kopyalama yok (Ebtex, Eyotek, K12NET, Edroof veya başka rakipler)

## AKTİF MOBİL SLICE

Şu slice ile sınırlı kal:
- mobile app shell
- login entry point
- role-based route skeleton
- student empty dashboard
- parent empty dashboard
- teacher empty dashboard
- Android run flow

## TESLİMAT FORMATI

Code modu teslimatlarında şunlar olmalıdır:
- Değişen dosyalar listesi
- Her değişikliğin kısa açıklaması
- Çalışan testler (varsa)
- Çalıştırılan komutlar
- Kalan riskler
- Bilinçli ertelenenler
- "Bu Görevde Ne Öğrendik?" bölümü
- Kod varsa "Satır Satır Önemli Noktalar" bölümü
