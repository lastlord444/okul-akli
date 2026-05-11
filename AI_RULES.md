# AI_RULES.md — Okul Aklı Teknoloji Yığını ve Kütüphane Kullanım Kuralları

> Bu dosya, `AGENTS.md` ve `.project-os/AI_OPERATING_CONTRACT.md`'yi **tamamlayan** hızlı teknoloji referansıdır.  
> Bu dosya **ana sözleşme değildir**, `AGENTS.md` ve `AI_OPERATING_CONTRACT.md`'den **üstün değildir**.  
> Çakışma durumunda `AGENTS.md` ve `AI_OPERATING_CONTRACT.md` geçerlidir.

---

## Teknoloji Yığını (Özet)

- **Monorepo:** pnpm workspace — tüm uygulamalar `apps/*` altında.
- **Dil:** TypeScript (tüm projelerde `strict: true`).
- **Backend:** Node.js + **Fastify** ^5.0.0 — ESM (`"type": "module"`), `NodeNext` module resolution. Geliştirme için `tsx` ^4.0.0 watch modu kullanılır.
- **Mobil:** React Native 0.76.5 + **Expo** ~52.0.0 + **Expo Router** ~4.0.0 (dosya tabanlı navigasyon).
- **Mobil Stil:** React Native `StyleSheet.create()` — platforma duyarlı gölgeler (Android `elevation`, iOS `shadowColor`/`shadowOffset`).
- **Mobil Durumu:** **Dondurulmuş (frozen).** Mobil iskelet (login + 3 dashboard) tamamlandı, yeni mobil özellik eklenmez.
- **Veritabanı / ORM:** main repo truth kontrol edilmeden Prisma, migration veya schema değişikliği yapılamaz. Prisma/PostgreSQL çalışmaları yalnızca ayrı onaylı Question Bank slice’larında ele alınır.
- **State Yönetimi:** Henüz harici state kütüphanesi yok. Basit React state + router kullanılır.
- **Aktif Domain:** Product Core Planning / Question Bank MVP Audit.
- **Korunan Çekirdek (Protected Core — izinsiz dokunulamaz):** auth, RBAC, tenant, payment, SMS, push notification, storage/file, shared types, Prisma schema core, app shell/navigation core, audit, notification core.

---

## Kütüphane ve Araç Kullanım Kuralları

| İhtiyaç | Kütüphane / Araç | Kural |
|---------|-------------------|-------|
| Backend HTTP sunucu | `fastify` | Route modülleri `fastify.register()` ile kaydedilir. Her route dosyası `FastifyInstance` alan async fonksiyon export eder. |
| Mobil navigasyon | `expo-router` | Dosya tabanlı routing (`src/app/`). Ekranlar route group `(rol)/` ile gruplanır. `<Redirect>`, `useRouter()`, `type Href` kullanılır. |
| Mobil stil | `StyleSheet.create()` (React Native) | Stiller dosya sonunda tanımlanır. Android `elevation` + iOS `shadow*` birlikte kullanılır. |
| Mobil safe area | `SafeAreaView` (`react-native-safe-area-context`) | Safe area yönetimi için kullanılır. |
| Mobil ikon | Emoji (şimdilik) | İleride gerekirse `@expo/vector-icons` (Expo ile gelir) kullanılır. |
| Bileşen içi state | `React.useState` | Varsayılan. State bileşenle aynı dosyada kalır. |
| Paylaşılan/global state | Henüz yok | Onaylı plan olmadan Redux, Zustand, Context eklenemez. |
| HTTP istemci (Mobil) | `fetch` (built-in) | React Native global `fetch` API'i kullanılır. Axios/ky/React Query eklenemez. |
| Backend istek validasyonu | Fastify schema (built-in) | Zod/Joi eklemeden önce Fastify built-in schema kullanılır. |
| Veritabanı ORM | Prisma (planlı) | Docs-only domain plan + açık onay olmadan Prisma eklenemez, migration yazılamaz. |
| Tip kontrolü | `tsc --noEmit` | `strict: true`. Commit öncesi typecheck zorunlu. |

---

## Dosya Organizasyonu

| Desen | Kural |
|-------|-------|
| Bileşen/ekran dosya adı | PascalCase (örn. `LoginScreen.tsx`) |
| Utility/hook dosya adı | camelCase (örn. `useAuth.ts`) |
| Ekran export | `export default function BileşenAdi()` |
| Backend route dosyası | Her domain için ayrı dosya, `FastifyInstance` parametreli async fonksiyon |
| Mobil ekran | Expo Router kurallarına uygun, `src/app/` içinde |
| Backend kaynak | `apps/backend/src/` |
| Mobil kaynak | `apps/mobile/src/` |

---

## Önemli Kısıtlamalar

- **Dış Repo/Kod Kopyalama YASAKTIR:** Frappe, Moodle, RosarioSIS, Lovable, Bolt.new, Ebtex, Eyotek, K12NET, Edroof gibi kaynaklardan kod kopyalanamaz. Sadece sektör analizi ve ihtiyaç çıkarımı için referans alınabilir.
- **AI App Builder Policy:** Lovable, Bolt.new, **Dyad** gibi araçlar **production repo değildir; sadece prototype lab** olarak kullanılır. Prototipten çıkan kod doğrudan Okul Aklı reposuna kopyalanıp entegre edilemez. Doğru akış: Prototype → Blueprint → Repo Audit → Narrow Slice Implementasyon.
- **Yeni Kütüphane Ekleme:** Onaylı plan + `.project-os/memory/mobile-module-registry.md` kaydı olmadan yeni kütüphane eklenemez.
- **Scope Creep YASAKTIR:** Tek görev = tek bounded context. "Madem buradayım" diyerek refactor, yeni özellik veya protected core alanlarına dokunma yasaktır.
- **Protected Core:** Yukarıda listelenen korunan çekirdek alanlara açık izin olmadan dokunulamaz. Temas gerekiyorsa önce risk notu çıkar, ayrı görev öner.
- **Kodlamadan Önce 4 Başlık:** Her kodlama görevinden önce (1) Repo Truth Summary, (2) Domain Ownership Confirmation, (3) File Change Plan, (4) Risks başlıkları üretilmelidir.
- **Rakip Kopyalama Yasağı:** Ebtex, Eyotek, K12NET, Edroof ekran tasarımı, metinleri, ikonları, akışları, marka dili, modül kurgusu veya birebir iş mantığı kopyalanamaz.
