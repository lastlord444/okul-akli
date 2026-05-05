# Okul Aklı - AI Operating Contract

Bu doküman, Okul Aklı projesinde çalışan tüm AI ajanları (Roo, Antigravity, Cline vb.) ve geliştiriciler için temel ürün vizyonunu, mimari sınırları ve geliştirme kurallarını belirleyen ana kaynak (canonical truth) metnidir.

## 1. Büyük Ürün Vizyonu
Okul Aklı sadece bir mobil uygulama veya soru havuzu değildir. Uzun vadeli hedef; Türkiye'deki özel okul, kurs ve sınav merkezlerinin tüm operasyonlarını yöneten, Türkçe, modüler, satılabilir bir SaaS platformu okul işletim sistemidir.

Ana ürün alanları şunları kapsar: Öğrenci/veli/öğretmen yönetimi, sınıf/şube yönetimi, soru havuzu, sınav başvuru ve kayıt, salon/oturma planı, sonuçlar, ödeme altyapısı, SMS/bildirim, yoklama ve tenant (çoklu okul) SaaS yapı.

## 2. Aktif Domain ve Mobil Altyapı
- **Mobil Altyapı:** React Native (Expo) temelli mobil iskelet fazı (PR #12) başarıyla kurulmuş ve **dondurulmuştur (frozen).** 
- **Aktif Domain:** Şu anki aktif geliştirme dilimi (Active Slice) **"Product Core Planning / Question Bank MVP Audit"** olarak belirlenmiştir. Mobil özellik genişletmesi şimdilik durdurulmuştur.

## 3. Question Bank (Soru Havuzu) MVP Kuralları
Question Bank ilk "product-core" alanıdır ancak tüm proje değildir. 
- İlk aşama her zaman kod yazmak değil, audit ve blueprint'tir.
- Soru havuzu öncelikle admin/web/backend üzerinden tasarlanır.
- Mobil tarafta öğrenci sadece atanan testleri çözecek, öğretmen sonuçları görecektir (ancak bu backend API kontratı netleşmeden açılmaz).

## 4. Sınav Operasyonu ve SaaS / Tenant Kuralı
- **Sınav Operasyonu:** Ayrı bir domain'dir. Başvuru, sınav seansı, bina/salon gibi özellikler ödeme, tenant, SMS (protected core) ile temas eder. Kontrolsüz temas yasaktır.
- **SaaS / Tenant:** Çok okullu yapı hedeflenmektedir ancak `tenant resolution` bir **Protected Core**'dur. Modüller blueprint olmadan rastgele kiracı mimarisine bağlanamaz.

## 5. Dış Referans, İçerik Kaynağı ve Yayınevi
- Yayınevi ve kitap bazlı içerik, öğretmen erişimi gibi konseptler, sadece ürün mantığını anlamak için referanstır.
- Başka repolardan (Frappe, Moodle, RosarioSIS, Lovable, Bolt vb.) kod kopyalamak yasaktır. Bu kaynaklar sadece ilham ve risk tespiti içindir.

## 6. AI App Builder Policy (Lovable, Bolt.new vs.)
Lovable, Bolt.new, Dyad gibi araçlar production repo değildir; **sadece prototype lab** olarak kullanılır.
- Prototipler üzerinden fikir alınabilir.
- Prototipten çıkan kod, doğrudan Okul Aklı reposuna kopyalanıp entegre edilemez. Doğru akış: Prototype → Blueprint → Repo Audit → Narrow Slice Implementasyon.

## 7. Protected Core (Korunan Çekirdek Alanlar)
Açık izin olmadan şu alanlara dokunulmaz:
- `auth`, `RBAC/permission`, `tenant resolution`
- `Prisma schema core`
- `shared UI primitives`
- `app shell/navigation core`
- `audit`, `notification core`, `storage/file core`
- `common contracts/shared types`, `payment core`, `SMS core`

## 8. Çalışma Zihniyeti ve Teslimat
- **Repo Gerçeği:** Ajanların raporlarından üstündür.
- **Test ve Build:** Test (typecheck, smoke, unit) veya build kanıtı yoksa işlem "başarılı" kabul edilemez.
- **Memory/Handoff:** Her işlem bitiminde `.project-os/memory` ve ilgili ADR'ler güncellenmelidir. Test, migration ve drift audit onaylanmadan görev kapatılamaz.
- **Eğitici Mod:** AI ajanları, Mehmet'e teknik mentörlük yapar. Her teknik değişiklikte kısa, öz ve net şekilde kavramları (PR, CI, commit, drift vb.) Türkçe açıklar, ancak gereksiz teoriyle veya kod kopyalamalarıyla scope'u büyütmez.
