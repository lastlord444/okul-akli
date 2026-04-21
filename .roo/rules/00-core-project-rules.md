# Okul Aklı - Temel Proje Kuralları

## PROJE BİLGİLERİ

**Proje Adı:** Okul Aklı  
**Mobil Uygulama Adı:** Okul Aklı Mobil  
**Teknik Klasör:** apps/mobile  
**Teknik Paket Adı:** okul-akli-mobile  
**Stack:** React Native + Expo + TypeScript  

## PROJE TANIMI

Okul Aklı; özel okul, kurs ve sınav merkezlerinin kayıt, sınav, öğrenci, veli, öğretmen, ödeme, yoklama, duyuru ve belge süreçlerini tek merkezden yöneten Türkçe, profesyonel ve modüler bir okul işletim sistemidir.

## DİL KURALI (TAVİZ YOK)

### Kullanıcıya Görünen Her Şey Türkçe Olacak
- Menü adları
- Butonlar
- Form alanları
- Hata mesajları
- Başarı mesajları
- Boş ekran mesajları
- Bildirim metinleri
- Açıklamalar
- Yardım metinleri

### Roo Raporları Türkçe Olacak
Kullanıcıya yazılan bütün raporlar Türkçe olacaktır.

### Teknik Terimler
Teknik terimler kullanılırsa yanında kısa Türkçe açıklama yazılacaktır.

**Örnekler:**
- development build → geliştirme derlemesi / gerçek cihaza yakın test uygulaması
- routing → sayfa yönlendirme
- state → ekran/veri durumu
- API client → sunucu ile konuşan istemci katmanı
- hook → React özellik/bileşen mantığı taşıma fonksiyonu

### Kod Tarafı
- Dosya adları, kütüphane adları, framework kavramları ve standart API isimleri gerektiğinde İngilizce kalabilir (React Native, Expo ve TypeScript ekosistemi gereği)
- Kod yorumları, açıklamalar ve öğrenme notları TÜRKÇE olacaktır

## MARKA VE RAKİP KURALI

**YASAKLI İSİMLER:** Ebtex, Eyotek, K12NET, Edroof veya başka rakip isimleri ürün adı, modül adı, ekran adı veya marka kimliği olarak KULLANILAMAZ.

**KOPYALAMA YASAĞI:**
- Rakiplerin ekran tasarımı kopyalanamaz
- Rakiplerin metinleri kopyalanamaz
- Rakiplerin ikonları kopyalanamaz
- Rakiplerin akışları kopyalanamaz
- Rakiplerin marka dili kopyalanamaz
- Rakiplerin özel modül kurgusu kopyalanamaz
- Rakiplerin birebir iş mantığı kopyalanamaz

Rakipler sadece sektör analizi ve ihtiyaç çıkarımı için referans olabilir.

Bu proje kopya ürün değil; Türkiye'deki okul ve kursların gerçek ihtiyaçlarına göre özgün geliştirilecek profesyonel bir okul işletim sistemidir.

## PROTECTED CORE (AÇIK İZİN OLMAKSIZIN DOKUNMA)

Aşağıdaki alanlara açık ve ayrı izin olmadan dokunulamaz:

- auth (kimlik doğrulama)
- RBAC / permission (rol tabanlı erişim kontrolü)
- tenant resolution (kiracı çözümleme)
- Prisma schema core
- shared UI primitives (ortak UI bileşenleri)
- app shell/navigation, mobil dışındaki alanlar
- audit (denetim)
- notification core (bildirim çekirdeği)
- storage/file core (dosya depolama)
- common contracts/shared types (ortak sözleşmeler/tipler)
- payment core (ödeme çekirdeği)
- SMS core

Bu alanlara temas gerekiyorsa kod YAZILMAZ.
Önce ayrı risk notu çıkar ve ayrı görev öner.

## TEK GÖREV / SINGLE BOUNDED CONTEXT

**KURAL:** Tek görev = tek ana amaç = tek bounded context

**YASAKLAR:**
- Aynı işte feature + refactor + cleanup karıştırmak
- Onaysız dosya genişletme
- Scope dışı import cleanup yapma
- Unrelated rename yapma
- Paralel mimari üretme
- Mevcut entity varken yeni entity açma
- Geçici hack bırakma
- Sessiz breaking change yapma

## KODLAMADAN ÖNCE ZORUNLU ÇIKTI

Her kodlama görevinden önce SADECE şu 4 başlık üretilmelidir:

1. **Repo truth summary** - Mevcut durum özeti
2. **Domain ownership confirmation** - Sorumlu alan doğrulaması
3. **File change plan** - Dosya değişiklik planı
4. **Risks** - Riskler

Bu 4 başlık olmadan kod yazılmaz.

## READ-ONLY AUDIT KURALI

Kod yazmadan önce ilgili mevcut dosyalar, entity'ler, API'ler, testler, riskler ve çakışmalar çıkarılmalıdır.

**Değerlendirilecekler:**
- Duplicate model riski
- Naming çakışması
- Protected core teması
- Migration riski
- Yetki etkisi
- Performans etkisi
- Rollback ihtiyacı
- Test ihtiyacı
- Mobil/backend contract uyumu

## FILE CHANGE PLAN KURALI

Koddan önce hangi dosyaların neden değişeceği listelenmelidir.
- Yeni açılacak dosyalar belirlenmeli
- Özellikle dokunulmayacak dosyalar yazılmalı
- Onaysız dosya genişlemesi yapılmamalı

## CONTRACT FREEZE

Koddan önce şunlar sabitlenmelidir:
- owner domain (sahip alan)
- entity ilişkileri (varlık ilişkileri)
- request/response shape (istek/yanıt yapısı)
- validation (doğrulama)
- yetki matrisi
- UI state listesi (ekran durumu listesi)
- audit event listesi (denetim olayı listesi)

Contract net değilse implementasyona geçilmez.

## BAŞARI İDDİASI KURALI

Başarı iddiası SADECE kanıtla yapılır.

Her teslimatta şunlar yazılmalı:
- Değişen dosyalar
- Migration var/yok
- Çalışan testler
- Çalıştırılan komutlar
- Kalan riskler
- Bilinçli ertelenenler

## DRIFT AUDIT

İş bitince mutlaka kontrol edilmeli:
- Planlanan ile yapılan aynı mı?
- Scope dışı taşma oldu mu?
- Yeni entity açıldı mı?
- Protected core'a temas oldu mu?
- Mevcut çalışan akış bozuldu mu?
- Doküman ve repo uyumlu mu?
- Risk ve teknik borç kaldı mı?

Drift audit olmadan "tamamlandı" denilemez.

## MODÜL ALMA KURALI

Farklı GitHub repolarından veya hazır uygulamalardan kod kopyalama YASAKTIR.
20 farklı repodan parça toplayıp mimariyi çöpe çevirmek YASAKTIR.

Bir modül fikri varsa önce SADECE registry'ye yazılır.

Kütüphane veya modül eklemeden önce şu formatla değerlendirme yapılmalı:
- Modül adı
- Aday kütüphane/repo
- Durum: future / rejected / approved
- Neden düşünüldü?
- Neden şimdi alınmıyor?
- Native dependency riski
- Expo uyumu
- Android riski
- iOS gelecek riski
- Bakım riski
- Karar tarihi

## MOBİL KARARI

Mobil uygulama React Native + Expo + TypeScript ile geliştirilecek.
Başlangıç iskeleti için ana aday Obytes React Native Template'tir.
İlk uygulama alanı apps/mobile olacaktır.
Android öncelikli ilerlenecek.
iOS uyumlu düşünülecek ama iOS release süreci aktif kapsam dışıdır.

**KABUL KRİTERİ:**
Expo Go kabul kriteri OLAMAZ.
Gerçek kabul Android development build veya doğrulanmış Android cihaz/emulator çalışmasıdır.

## MOBİLDE ŞİMDİLİK KAPSAM DIŞI

- ödeme
- SMS
- push notification
- chat
- servis / otobüs takibi
- harita
- offline-first sync engine
- PWA
- iOS release
- App Store / TestFlight
- shared package extraction
- backend auth/RBAC/tenant redesign

## AKTİF MOBİL SLICE (Şimdilik izin verilenler)

- mobile app shell (mobil uygulama iskeleti)
- login entry point (giriş noktası)
- role-based route skeleton (rol tabanlı yönlendirme iskeleti)
- student empty dashboard (öğrenci boş paneli)
- parent empty dashboard (veli boş paneli)
- teacher empty dashboard (öğretmen boş paneli)
- Android run flow (Android çalışma akışı)

## KULLANICIYI EĞİTME KURALI

Bu projeyi geliştirirken kullanıcı kodlamayı da öğrenmek istiyor.

**ZORUNLU BÖLÜM:**
Her görev sonunda mutlaka şu bölüm eklenmelidir:

### "Bu Görevde Ne Öğrendik?"

Bu bölümde kısa ve sade şekilde anlatılmalı:
- Hangi dosyaya neden dokunduk?
- Bu dosya projede ne işe yarıyor?
- Kullanılan temel teknik kavram ne?
- Bu karar ileride neyi kolaylaştırır?
- Yeni başlayan biri bu değişikliği nasıl anlamalı?

**Kod yazılan görevlerde ayrıca şunu ekle:**
### "Satır Satır Önemli Noktalar"

Burada bütün kod tekrar edilmeyecek.
Sadece önemli 5-10 nokta sade Türkçe ile açıklanacak.

Öğrenme anlatımı scope'u büyütmeyecek.
Eğitim veriliyor diye gereksiz refactor, ekstra dosya, ekstra paket veya ekstra özellik eklenmeyecek.

## GITHUB CHECK KURALI

Her Roo çıktısından sonra GPT, GitHub bağlantısı üzerinden repo kontrolü yapacaktır.

- local ve remote branch senkron mu?
- working tree temiz mi?
- commit mesajları anlaşılır mı?
- beklenmeyen dosya değişikliği var mı?

Sonraki Roo prompt sadece bu kontrol tamamlandıktan sonra verilecektir.
Bu kural session handoff yapısının bir parçasıdır.

## ÇALIŞMA ZİHNİYETİ

Önce gerçek durum, sonra plan, sonra uygulama.

**İLKELER:**
- Repo gerçeği rapordan üstündedir
- Mimari bütünlük hızdan önemlidir
- Küçük ama çalışan ve doğrulanmış teslimat, büyük ama kırılgan teslimattan üstündür
- Gereksiz abstraction, speculative design ve "madem buradayım şunu da düzelteyim" davranışı yasaktır
