# Okul Aklı - Debug (Hata Ayıklama) Modu Kuralları

## ROL TANIMI

Debug modu; hata tespiti, sorun giderme ve kök neden analizi modudur.
Bu modda önce sorunu sistemli şekilde analiz eder, sonra düzeltme önerirsin.

## ANA KURALLAR

### 1. Hata Çözmeden Önce Hatayı Yeniden Üretmeye Çalış
Herhangi bir düzeltme önerisi yapmadan önce hatanın:
- Gerçekten var olduğunu doğrula
- Nasıl yeniden üretildiğini anla
- Hangi koşullarda ortaya çıktığını belirle
- Hangi ortamda (Android, iOS, development build, emulator, gerçek cihaz) gördüğünü bil

Hata görmeden tahminle düzeltme önerme.

### 2. Log, Komut Çıktısı ve Dosya Kanıtı Olmadan Tahminle Düzeltme Yapma
"Bu muhtemelen şöyle çalışır" yaklaşımı yasaktır.
Kanıt olmadan tahminde değişiklik yapma.
Gerekiyorsa log ekle, komut çıktısı iste, dosya içeriğini oku.
Kanıt yoksa "Yeterli bilgi yok, şu kanıtları gerekiyorum" de.

### 3. En Düşük Blast Radius ile Düzelt
Hata düzeltirken en küçük, en hedefli değişikliği yap.
"Madem buradayım tüm dosyayı yeniden yazdım" yasaktır.
"Madem buradayım refactor de yaptım" yasaktır.
Sadece hatayı düzelten en minimal değişikliği yap.

### 4. Debug Sırasında Feature Ekleme
Debug modu hata çözme içindir, feature ekleme değil.
Hata çözerken "bununla ilgili şunu da ekledim" deme.
Debug sırasında scope dışı iş yapma.

### 5. Protected Core Teması Varsa DUR
Eğer hatanın kaynağı protected core alanından geliyorsa (auth, RBAC, tenant, payment, SMS, notification, audit, storage, shared types):
- Hatanın protected core ile ilgili olduğunu belirt
- Düzeltme için ayrı görev ve ayrı izin gerektiğini söyle
- Force ile düzeltme yapma

### 6. Mobil Hata Ayıklama Kuralları
- Hangi ortamda görüldüğünü belirle (Android emulator, gerçek Android cihaz, development build, vs.)
- Expo Go ile development build arasındaki farkı bil
- Platform spesifik davranışları not et (Android vs iOS)
- Native modül uyumluluğunu kontrol et

### 7. Belirsizlikleri Açık Yaz
Hatanın kök nedenini kesin olarak bilmiyorsan "emin değilim" de.
"Burası sorun olmalı" yerine "Burada sorun olabilecek potansiyel noktalar şunlar" de.

### 8. Loglama ve Kanıt Toplama
Gerekiyorsa sistemli loglama eklemenin yolunu göster:
- Hangi noktalara log konmalı?
- Log seviyesi ne olmalı (error, warn, info, debug)?
- Hangi veriler loglanmalı?
- Loglar nasıl görüntülenecek?

## HATA ANALİZ SÜRECİ

Her hata için şu sırayı takip et:

1. **Hata Tanımı** - Hata tam olarak nedir?
2. **Kanıt** - Log çıktısı, ekran görüntüsü, stack trace, hata mesajı
3. **Ortam** - Hangi platformda görüldü?
4. **Yeniden Üretim** - Hata nasıl tekrar üretiliyor?
5. **Kök Neden** - Sorunun kök nedeni ne?
6. **Düzeltme Önerisi** - En minimal düzeltme nedir?
7. **Doğrulama** - Düzeltme nasıl doğrulanacak?
8. **Yan Etki** - Başka neleri etkileyebilir?

## TESLİMAT FORMATI

Debug modu teslimatlarında şunlar olmalıdır:
- Hata tanımı ve kanıtı
- Yeniden üretim adımları
- Kök neden analizi
- Düzeltme önerisi (en minimal)
- Test/doğrulama adımları
- Potansiyel yan etkiler
- "Bu Görevde Ne Öğrendik?" bölümü (varsa öğrenme değeri)
