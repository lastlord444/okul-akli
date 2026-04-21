# Okul Aklı - Test Modu Kuralları

## ROL TANIMI

Test modu; test yazma, test çalıştırma, test doğrulama ve test kapsamı değerlendirme modudur.
Bu modda test kalitesi ve doğruluğu ön plandadır.

## ANA KURALLAR

### 1. Fake Test YASAK
Testler gerçek davranışı doğrulamalıdır.
"Her şey doğru çalışıyor" diye geçen test yazma.
Assert olmadan test yazma.
Her test bir şeyi kanıtlamalıdır.

**YASAK OLAN PATERNLER:**
- İçinde assert/expect olmayan test
- Her koşulda geçen test (assertTrue(true) gibi)
- Hiçbir şeyi çağırmayan test
- Sadece import kontrolü yapan "smoke test" (özellikle belgele nedeni)

### 2. Placeholder Test YASAK
"Sonra dolduracağım" boş test blokları yazma.
// TODO: test eklenecek bırakma.
Ya testi yaz ya da test yazılmadığını açıkça belgele.

### 3. Test Gerçekten Davranışı Doğrulamalı
Her test en az bir şunu doğrulamalıdır:
- Beklenen çıktı üretiliyor mu?
- Beklenen yan etkiler oluşuyor mu?
- Hata durumları doğru ele alınıyor mu?
- Sınır koşulları doğru çalışıyor mu?
- Navigasyon doğru yere gidiyor mu?

### 4. Test Çalıştırılmadıysa Açıkça Yaz
Test yazdın ama çalıştırmadıysan bunu açıkça belirt.
"Testler yazıldı ama henüz çalıştırılmadı" de.
Çalıştırılmayan testin değeri sıfırdır. Mümkünse her zaman çalıştır.

### 5. Mobilde Android Run Smoke Ayrıca Düşünülmeli
Mobil test katmanları:
- **Unit test** - İş mantığı, hesaplamalar, dönüşümler
- **Component smoke test** - Bileşen render ediliyor mu? Çökmeden açılıyor mu?
- **Navigation smoke test** - Sayfalar arası yönlendirme çalışıyor mu?
- **API contract mock test** - Sunucu ile iletişim doğru formatta mı?
- **Android run smoke test** - Gerçek Android ortamında uygulama açılıyor mu? Çökmüyor mu?

### 6. Test Dosya Yapısı
Test dosyaları test edilen dosyanın yanında veya __tests__ klasöründe olmalıdır.
Test dosya adı: [dosyaAdi].test.ts veya [dosyaAdi].test.tsx

### 7. Mock Kullanım Kuralları
- Gerçek davranışı mock'lama (gerçekten çalışıyorsa mock'a gerek yok)
- Mock'ları minimal tut
- Mock'ların gerçek API contract ile uyumlu olmasını sağla
- Mock değişikliklerinin gerçek kod değişiklikleriyle paralel olduğunu kontrol et

### 8. Test Kapsamı Değerlendirmesi
Yeni davranış eklendiğinde şunu sor:
- Bu davranış test edilebilir mi?
- Test edilmesi gerekiyor mu?
- Kritik bir iş mantığı mı?
- Kullanıcıya doğrudan etkisi var mı?

Kritik iş mantığı → Test zorunlu
UI gösterimi → Smoke test yeterli
Gelecekteki özellik → Test yazılmaz (özellik de yazılmaz)

### 9. Protected Core ve Test
Protected core alanları için test yazmak, protected core'a dokunmak sayılır.
Açık izin almadan protected core testleri yazma.

### 10. Belirsizlik
Hangi testi yazacağını bilmiyorsan dur ve sor.
"En iyi testi yazdım ama emin değilim" deme, sor.
Test stratejisi belirsizse Architect moduna taşı.

## TESLİMAT FORMATI

Test modu teslimatlarında şunlar olmalıdır:
- Yazılan testlerin listesi
- Her testin neyi doğruladığı
- Çalıştırma komutu ve sonucu
- Kapsam analizi (neler test edildi, neler edilmedi)
- Bilinçle ertelenen testler ve nedenleri
- "Bu Görevde Ne Öğrendik?" bölümü
