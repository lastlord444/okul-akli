# Okul Aklı Mobil - Modül Kayıt Defteri (Module Registry)

Bu dosya projede kullanılacak veya gelecekte değerlendirilecek modüllerin kayıt defteridir.
Hiçbir modül bu registry'ye yazılmadan uygulamaya eklenemez.

## KAYIT FORMATI

Her modül girişi şu bilgileri içerir:

| Alan | Açıklama |
|------|----------|
| Modül | Modülün işlevsel adı |
| Aday | Düşünülen kütüphane, repo veya yaklaşım |
| Durum | future (gelecekte değerlendirilecek) / rejected (reddedildi) / approved (onaylandı) |
| Neden Düşünüldü | Bu modüle neden ihtiyaç duyulduğu |
| Neden Şimdi Değil | Şu an neden uygulamaya alınmadığı |
| Expo Uyumu | Expo ile uyumluluk durumu |
| Android Riski | Android tarafında risk durumu |
| iOS Gelecek Riski | İleride iOS tarafında çıkabilecek riskler |
| Bakım Riski | Uzun vadeli bakım riski |
| Karar Tarihi | Kararın veya kaydın tarihi |

## MODÜL KAYITLARI

### Gelecek Modüller (Future)

| Modül | Aday | Durum | Neden Düşünüldü | Neden Şimdi Değil | Expo Uyumu | Android Riski | iOS Gelecek Riski | Bakım Riski | Karar Tarihi |
|-------|------|-------|-----------------|-------------------|------------|---------------|-------------------|-------------|--------------|
| Takvim | Belirtilmedi | future | Okul takvimi, sınav tarihleri, etkinlik takvimi gerekecek. Öğrenci, veli ve öğretmen kendi takvimlerini görmeli. | Aktif slice dışı. Önce temel iskelet ve boş paneller tamamlanmalı. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | 2026-04-21 |
| Duyurular | Belirtilmedi | future | Okul yönetimi duyuruları yayınlamalı. Öğrenci, veli ve öğretmen duyuruları görmeli. | Aktif slice dışı. Önce temel iskelet ve boş paneller tamamlanmalı. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | 2026-04-21 |
| Sınavlar | Belirtilmedi | future | Sınav oluşturma, planlama ve yönetim gerekecek. Öğretmen sınav oluşturmalı, öğrenci sınavlarını görmeli. | Aktif slice dışı. Önce temel iskelet ve boş paneller tamamlanmalı. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | 2026-04-21 |
| Sonuçlar | Belirtilmedi | future | Sınav sonuçları, not girme, not görüntüleme ve raporlama gerekecek. | Aktif slice dışı. Önce temel iskelet ve boş paneller tamamlanmalı. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | 2026-04-21 |
| Belgeler | Belirtilmedi | future | Belge yönetimi, belge indirme, belge yükleme gerekecek. Transkript, sertifika vb. | Aktif slice dışı. storage/file core protected alandır. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerştirilecek | 2026-04-21 |
| Yoklama | Belirtilmedi | future | Öğretmen yoklama almalı, veli ve öğrenci devam durumunu görmeli. | Aktif slice dışı. Önce temel iskelet ve boş paneller tamamlanmalı. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | 2026-04-21 |
| Ödeme Takibi | Belirtilmedi | future | Veli ödeme durumunu görmeli, yönetim ödeme takibi yapmalı. | Aktif slice dışı. payment core protected alandır. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | 2026-04-21 |
| Bildirimler | Belirtilmedi | future | Push notification ve uygulama içi bildirimler gerekecek. | Aktif slice dışı. notification core protected alandır. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | 2026-04-21 |
| Veli Çocuk Seçimi | Belirtilmedi | future | Veli birden fazla çocuğu varsa çocuk seçebileli. | Aktif slice dışı. Önce veli boş paneli iskeleti tamamlanmalı. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | 2026-04-21 |
| Öğretmen Sınıf Listesi | Belirtilmedi | future | Öğretmen kendi sınıflarını ve öğrenci listelerini görmeli. | Aktif slice dışı. Önce öğretmen boş paneli iskeleti tamamlanmalı. | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | Değerlendirilecek | 2026-04-21 |

### Reddedilen Modüller (Rejected)

| Modül | Aday | Durum | Neden Düşünüldü | Neden Reddedildi | Expo Uyumu | Android Riski | iOS Gelecek Riski | Bakım Riski | Karar Tarihi |
|-------|------|-------|-----------------|------------------|------------|---------------|-------------------|-------------|--------------|

(Kaydedilmiş reddedilme yok)

### Onaylanan Modüller (Approved)

| Modül | Aday | Durum | Neden Onaylandı | Kullanım Amacı | Expo Uyumu | Android Riski | iOS Gelecek Riski | Bakım Riski | Karar Tarihi |
|-------|------|-------|-----------------|----------------|------------|---------------|-------------------|-------------|--------------|

(Kaydedilmiş onay yok)

## KURALLAR

1. **Registry'siz modül eklenemez** - Her modül önce buraya yazılmalıdır.
2. **Future modüller uygulanmaz** - Sadece planlama amaçlıdır.
3. **Approved modüller uygulanabilir** - Ama yine de ilgili slice aktif olmalıdır.
4. **Rejected modüller silinmez** - Neden reddedildiği kalır, gelecekte tekrar değerlendirilebilir.
5. **Karar tarihi zorunludur** - Ne zaman karar verildiği yazılmalıdır.
6. **Aday boş olabilir** - Future modüllerde henüz aday belirlenmemiş olabilir.
7. **Değerlendirme yapılıyor = "Değerlendirilecek"** - Future modüllerde detaylı analiz henüz yapılmamış olabilir.

## SON GÜNCELLEME

**Tarih:** 2026-04-21  
**Durum:** İlk kayıt oluşturuldu. 10 gelecek modülü registry'e eklendi. Hiçbiri uygulanmadı.
