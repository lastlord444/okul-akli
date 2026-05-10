# AI_RULES.md — Okul Aklı Teknoloji Yığını ve Kütüphane Kullanım Kuralları

> Bu dosya, `AGENTS.md` ve `.project-os/AI_OPERATING_CONTRACT.md` dosyalarını **tamamlayan** hızlı teknoloji referansıdır.
> Bu dosya **ana sözleşme değildir**, `AGENTS.md` ve `AI_OPERATING_CONTRACT.md` dosyalarından **üstün değildir**.
> Çakışma durumunda `AGENTS.md` ve `.project-os/AI_OPERATING_CONTRACT.md` geçerlidir.

---

## Teknoloji Yığını (Özet)

- **Monorepo:** pnpm workspace — tüm uygulamalar `apps/*` altında yaşar.
- **Dil:** TypeScript — tüm projelerde `strict: true` korunur.
- **Backend:** Node.js + Fastify `^5.0.0` — ESM (`"type": "module"`) ve NodeNext module resolution kullanılır. Geliştirme için `tsx ^4.0.0` watch modu kullanılır.
- **Mobil:** React Native `0.76.5` + Expo `~52.0.0` + Expo Router `~4.0.0` kullanılır.
- **Mobil navigasyon:** Expo Router ile dosya tabanlı yönlendirme yapılır.
- **Mobil stil:** React Native `StyleSheet.create()` kullanılır. Platforma duyarlı gölge için Android `elevation`, iOS `shadow*` özellikleri birlikte düşünülür.
- **Mobil durumu:** Mobil altyapı dondurulmuştur. Login ve öğrenci/veli/öğretmen dashboard iskeleti tamamlandı; yeni mobil özellik eklenmez.
- **Veritabanı / ORM:** `main` repo truth kontrol edilmeden Prisma, migration veya schema değişikliği yapılamaz. Prisma/PostgreSQL çalışmaları yalnızca ayrı onaylı Question Bank slice’larında ele alınır.
- **State yönetimi:** Şu an harici state kütüphanesi yoktur. Basit React state ve router tabanlı akış kullanılır.
- **Aktif domain:** Product Core Planning / Question Bank MVP Audit.
- **Protected Core:** auth, RBAC/permission, tenant resolution, payment, SMS, push notification, storage/file, shared types, Prisma schema core, app shell/navigation core, audit ve notification core açık izin olmadan değiştirilemez.

---

## Kütüphane ve Araç Kullanım Kuralları

| İhtiyaç | Kütüphane / Araç | Kural |
|---|---|---|
| Backend HTTP sunucu | `fastify` | Route modülleri `fastify.register()` ile kaydedilir. Her route dosyası `FastifyInstance` alan async fonksiyon export eder. |
| Mobil navigasyon | `expo-router` | Dosya tabanlı routing `src/app/` altında yapılır. Ekranlar route group `(rol)/` ile gruplanır. `<Redirect>`, `useRouter()` ve `type Href` kullanılır. |
| Mobil stil | `StyleSheet.create()` | Stiller dosya sonunda tanımlanır. Android `elevation` ve iOS `shadow*` birlikte değerlendirilir. |
| Mobil safe area | `SafeAreaView` (`react-native-safe-area-context`) | Çentik ve güvenli ekran alanı yönetimi için kullanılır. |
| Mobil ikon | Emoji | Şimdilik emoji kullanılır. İleride gerekirse Expo ile uyumlu `@expo/vector-icons` ayrı onayla değerlendirilebilir. |
| Bileşen içi state | `React.useState` | Varsayılan tercihtir. State bileşenle aynı dosyada kalır. |
| Paylaşılan/global state | Henüz yok | Onaylı plan olmadan Redux, Zustand veya Context tabanlı yeni global yapı eklenemez. |
| HTTP istemci (Mobil) | `fetch` | React Native global `fetch` API kullanılır. Axios, ky veya React Query onaysız eklenemez. |
| Backend istek validasyonu | Fastify schema | Zod veya Joi eklemeden önce Fastify built-in schema kullanılır. |
| Veritabanı ORM | Prisma (kontrollü) | Ayrı docs-only domain planı ve açık onay olmadan Prisma eklenemez, migration yazılamaz, schema değiştirilemez. |
| Tip kontrolü | `tsc --noEmit` | Commit öncesi ilgili package için typecheck çalıştırılır. |

---

## Dosya Organizasyonu

| Desen | Kural |
|---|---|
| Bileşen/ekran dosya adı | PascalCase kullanılır. Örnek: `LoginScreen.tsx`. |
| Utility/hook dosya adı | camelCase kullanılır. Örnek: `useAuth.ts`. |
| Ekran export | `export default function BilesenAdi()` deseni tercih edilir. |
| Backend route dosyası | Her domain için ayrı dosya kullanılır; `FastifyInstance` parametreli async fonksiyon export edilir. |
| Mobil ekran | Expo Router kurallarına uygun olarak `apps/mobile/src/app/` altında tutulur. |
| Backend kaynak | `apps/backend/src/` altında tutulur. |
| Mobil kaynak | `apps/mobile/src/` altında tutulur. |

---

## Önemli Kısıtlamalar

- **Dış repo/kod kopyalama yasaktır:** Frappe, Moodle, RosarioSIS, Lovable, Bolt.new, Ebtex, Eyotek, K12NET, Edroof veya benzeri kaynaklardan kod kopyalanamaz. Sadece sektör analizi ve ihtiyaç çıkarımı için referans alınabilir.
- **AI App Builder Policy:** Lovable, Bolt.new ve Dyad gibi araçlar production repo değildir; sadece prototype lab olarak kullanılır. Prototipten çıkan kod doğrudan Okul Aklı reposuna kopyalanıp entegre edilemez.
- **Doğru akış:** Prototype → Blueprint → Repo Audit → Narrow Slice Implementation → Test/Build/Smoke → GitHub Check → Memory/Handoff.
- **Yeni kütüphane ekleme:** Onaylı plan ve ilgili registry kaydı olmadan yeni kütüphane eklenemez.
- **Scope creep yasaktır:** Tek görev = tek bounded context. “Madem buradayım” diyerek refactor, yeni özellik veya protected core değişikliği yapılamaz.
- **Protected core teması:** Korunan çekirdek alanlara temas gerekiyorsa kod yazılmaz; önce risk notu ve ayrı görev önerisi çıkarılır.
- **Kodlamadan önce 4 başlık:** Her kodlama görevinden önce `Repo truth summary`, `Domain ownership confirmation`, `File change plan`, `Risks` başlıkları üretilir.
- **Rakip kopyalama yasağı:** Rakip ekran tasarımı, metni, ikonları, akışları, marka dili, modül kurgusu veya birebir iş mantığı kopyalanamaz.
