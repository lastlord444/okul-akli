# ADR-0003 - Backend Stack for Question Bank MVP

## Status

**Accepted**

## Date

2026-05-05

---

## Context

Okul Aklı modüler okul işletim sistemi olacak. İlk backend product-core slice Question Bank MVP olarak planlandı. Mobile slice frozen durumda ve apps/backend henüz mevcut değil. Auth/RBAC/tenant Protected Core olarak işaretlenmiş ve ayrı görev gerektiriyor. İlk hedef production CRUD değil, kontrollü backend temeli oluşturmaktır.

---

## Decision

Aşağıdaki stack Question Bank MVP backend için seçildi:

| Katman | Seçim |
|--------|--------|
| Runtime | Node.js |
| HTTP Framework | Fastify |
| Database | PostgreSQL |
| ORM / Migration | Prisma |
| Package Manager | pnpm |

İlk backend kapsamı: Question Bank catalog/read model hazırlığı.

---

## Alternatives Considered

1. **Node.js + Express** - Daha yaygın ama daha az modern
2. **Bun + Hono** - Gelecek aday, henüz olgunlaşmamış
3. **PostgreSQL + Drizzle** - Prisma'ya alternatif, daha az dokümantasyon
4. **PostgreSQL + TypeORM** - Klasik seçenek, daha verbose

---

## Decision Rationale

- **Öğrenme kolaylığı:** Mehmet için Node.js + Fastify + Prisma kombinasyonu erişilebilir
- **Agent üretimi:** Type-safe schema ve migration ile AI-assisted geliştirme kolaylığı
- **Geliştirici bulunabilirlik:** Türkiye'de Node.js/Fastify/Prisma bilen geliştirici sayısı yüksek
- **Prisma dokümantasyonu:** En iyi dokümantasyon ve migration görünürlüğü
- **PostgreSQL uyumu:** SaaS/tenant/raporlama senaryolarına uygun
- **Fastify plugin yapısı:** Modern ve kontrollü API geliştirme

---

## Consequences

### Positive

- Kontrollü backend başlangıcı
- Type-safe database schema
- Migration geçmişi izlenebilir
- Question Bank için sağlam temel
- Question Bank MVP blueprint Faz 1-2 uyumu

### Negative

- Prisma schema Protected Core gibi ele alınmalı
- Yanlış migration data loss riski oluşturabilir
- Tenant/RBAC kararı gelmeden production CRUD açılamaz

---

## Explicitly Deferred

Aşağıdaki alanlar bu kararın kapsamında değildir ve ayrı görev gerektirir:

- Auth implementation
- RBAC implementation
- Tenant resolution
- Payment
- SMS
- Notification core
- Mobile data consumption
- Question import pipeline
- Admin UI implementation

---

## Protected Core Boundary

- Bu ADR protected core kodu açmaz
- Auth/RBAC/tenant sadece ileride karar verilecek alan olarak işaretlenir
- Prisma schema bu kararda oluşturulmaz

---

## Next Step

Backend scaffold planning görevi için ayrı prompt verilecektir. Kod yazmadan önce repo truth + file change plan alınacaktır.

---

## Change History

| Tarih | Değişiklik |
|-------|-------------|
| 2026-05-05 | İlk karar - Node.js + Fastify + PostgreSQL + Prisma |
