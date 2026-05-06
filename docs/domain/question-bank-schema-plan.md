# Question Bank - Backend Domain Schema Plan

## 1. Amaç
- Bu doküman kesinlikle bir Prisma schema (kod) değildir.
- Bu doküman bir migration değildir.
- Bu doküman Question Bank domain planning (tasarım ve sınır belirleme) dokümanıdır.

## 2. Repo Truth
- Node.js + Fastify tabanlı backend scaffold ve `GET /health` root'u mevcuttur.
- Prisma paketi, şeması veya ayarları **yoktur**.
- Veritabanı (PostgreSQL) bağlantısı **yoktur**.
- Herhangi bir CRUD endpoint **yoktur**.
- Kimlik doğrulama (Auth), Yetkilendirme (RBAC) ve Kiracı (Tenant) altyapısı **yoktur**.

## 3. Domain Boundary
- Bu plan, yalnızca Okul Aklı "Question Bank" (Soru Bankası) domaini ile sınırlıdır.
- Auth, RBAC ve Tenant mekanizmaları "protected core" (korunan çekirdek) kabul edilir; bu dokümanda uygulanmaz.
- Tenant alanı (tenantId), mimari kilitlenmeleri önlemek adına yalnızca kavramsal bir "placeholder" olarak tartışılır ancak kodlanmaz.

## 4. Candidate Entities

Aşağıdaki entity'ler Soru Bankası MVP'si için temel adaylardır:

| Entity | Amacı | Plandaki Durumu | İlk Schema PR'a Girmeli mi? | Tenant İhtiyacı | Auth/RBAC Bağımlılığı | Risk Seviyesi |
|--------|-------|-----------------|-----------------------------|-----------------|-----------------------|---------------|
| **GradeLevel** | Eğitim sınıf seviyelerini (Örn: 9. Sınıf) tutar | Temel Katalog (Read-Only) | Evet | Yok (Global) | Düşük (Sadece Admin ekler) | Düşük |
| **Subject** | Dersleri (Örn: Matematik, Fizik) tutar | Temel Katalog (Read-Only) | Evet | Yok (Global) | Düşük (Sadece Admin ekler) | Düşük |
| **Topic** | Konuları (Ders ve Sınıfa bağlı) tutar | Temel Katalog (Read-Only) | Evet | Yok (Global) | Düşük (Sadece Admin ekler) | Düşük |
| **Question** | Soru kökünü ve üst verisini tutar | Core Domain | **Hayır** | Kesinlikle Var | Yüksek (Oluşturan, onaylayan) | Çok Yüksek |
| **QuestionOption** | Çoktan seçmeli soruların şıklarını tutar | Soru Detayı | **Hayır** | Soruya bağlı | Yüksek (Soru yetkisine bağlı) | Orta |
| **QuestionSource** | Sorunun alındığı kaynak/yayınevi | Referans | **Hayır** | Soruya bağlı | Orta | Orta |
| **ReviewStatus** | Sorunun taslak/inceleme/yayın durumu | Durum Yönetimi | **Hayır** | Yok | Çok Yüksek (Rol bazlı geçiş) | Yüksek |
| **Explanation** | Sorunun detaylı çözüm/açıklaması | Soru Detayı | **Hayır** | Soruya bağlı | Yüksek | Orta |

## 5. Recommended MVP Sequence

Geliştirme adımları riskleri minimize etmek için aşağıdaki gibi sıralanmalıdır:
- **Phase 1:** docs-only domain plan (Bu doküman)
- **Phase 2:** Prisma schema planning / protected-core review
- **Phase 3:** minimal catalog schema + migration (`GradeLevel`, `Subject`, `Topic` entitileri için)
- **Phase 4:** read-only catalog endpoint (Sadece `GET` operasyonları)
- **Phase 5:** Auth/RBAC/tenant kararından sonra question draft/review/publish süreçleri

## 6. First Schema Candidate

Kod yazmadan, sadece markdown tablo olarak ilk şema adayı (Phase 3 için):

| Entity / Enum | Özellikler / İlişkiler | Notlar |
|---------------|-------------------------|--------|
| `GradeLevel` | `id`, `name`, `levelOrder` | Global katalog. Tüm okullar için sabit. |
| `Subject` | `id`, `name` | Global katalog. Tüm okullar için sabit. |
| `Topic` | `id`, `name`, `subjectId`, `gradeLevelId` | Global katalog. İki foreign key barındırır. |
| `ReviewStatus` | Enum: `DRAFT`, `IN_REVIEW`, `PUBLISHED`, `ARCHIVED` | İleride gerekecek ancak soru olmadığı için ilk şemada **olmayabilir**. |

> **Question bu ilk schema PR'a girmeli mi?**  
> **HAYIR.** Question entity'si doğrudan `tenantId` (kime ait olduğu), `createdById` (kimin oluşturduğu) ve `status` (kimlerin görebileceği) kısıtlamalarına tabidir. Auth, RBAC ve Tenant altyapıları hazır olmadan Question entity'sinin veritabanına açılması güvenlik zafiyeti ve scope creep yaratır. İlk şema PR'ı yalnızca risksiz, statik (global) katalogları (`GradeLevel`, `Subject`, `Topic`) içermelidir.

## 7. Explicit Deferrals

Aşağıdaki süreçler bilinçli olarak ertelenmiştir:
- Question CRUD
- QuestionOption CRUD
- Draft / review / publish lifecycle (Soru yayın ömrü döngüsü)
- Import pipeline (Toplu soru yükleme)
- Teacher test assembly (Öğretmenlerin test/sınav oluşturması)
- Student mobile consumption (Öğrencinin mobilden çözmesi)
- Tenant implementation (Okul/Kurum ayrımı)
- Auth/RBAC implementation (Rol ve yetki kısıtlamaları)
- Publisher/source licensing workflow (Yayınevi/lisans onay süreçleri)

## 8. Open Questions

Mimari devam etmeden önce çözülmesi gereken sorular:
- `tenantId` hangi entity'lerde zorunlu olacak? (Örn: Sadece `Question` mı, yoksa `Subject` özelleştirmesine izin verilecek mi?)
- Global (havuz) katalog ile tenant'a ait (özel) soru ayrımı mimaride nasıl ele alınacak?
- `ReviewStatus` veritabanı düzeyinde bir PostgreSQL Enum'u mu yoksa esneklik adına lookup table mı olacak?
- `GradeLevel` Türkiye eğitim sistemine göre (İlkokul 1-4, Ortaokul 5-8, Lise 9-12, Mezun) nasıl standardize edilecek?
- `Subject` / `Topic` seed (başlangıç) verilerini kim onaylayacak ve dolduracak?
- Kaynak/yayınevi telif takibi için (`QuestionSource`) minimum hangi alanlar (kitap, sayfa, yayın yılı vb.) tutulacak?

## 9. Protected Core Notes

Bu projede veritabanı bütünlüğü her şeyden önemlidir:
- **Prisma schema** her zaman "protected core" (korunan alan) sayılmalıdır. Kod yazmadan önce daima bu tarz markdown dokümanları ile onay alınmalıdır.
- **Migration** komutları, ayrı bir PR süreci ve açık (explicit) onay gerektirir.
- **Auth/RBAC/tenant** kararı kesinleşmeden, veritabanına yazma işlemi (production write / create endpoint) kesinlikle **açılmayacaktır**.
