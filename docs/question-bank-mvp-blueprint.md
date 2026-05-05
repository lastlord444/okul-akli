# Question Bank MVP - Mimari Blueprint

**Tarih:** 2026-05-05  
**Durum:** Draft (Review bekliyor)  
**Sorumlu Alan:** Question Bank MVP

---

## 1. Durum Özeti

Bu blueprint Question Bank MVP için mimari yön belirleyici olarak hazırlanmıştır. İçerdiği kararlar kesin değildir; backend repo audit, ADR ve protected-core onayından sonra nihai karara dönüşecektir.

**Temel kısıt:** Auth/RBAC/tenant netleşmeden production CRUD endpoint açılmaz.

---

## 2. Mimari Yön Kararları (Açık)

### Karar Bekleyen: Backend Runtime/Framework

| Aday | Durum | Not |
|------|-------|-----|
| Node.js + Fastify | Aday | Nihai karar backend audit sonrası |
| Node.js + Express | Aday | Alternatif |
| Bun + Hono | Aday | Gelecek aday |

### Karar Bekleyen: DB/ORM

| Aday | Durum | Not |
|------|-------|-----|
| PostgreSQL + Prisma | Aday | Nihai karar backend audit sonrası |
| PostgreSQL + Drizzle | Aday | Alternatif |
| PostgreSQL + TypeORM | Aday | Klasik seçenek |

### Karar Bekleyen: Migration Stratejisi

`db:push` vs `db:migrate` kararı backend audit'te verilecektir.

---

## 3. Veri Modeli Contract (Kavramsal)

> **ÖNEMLİ:** Schema değişikliği ayrı protected-core review ve migration planı olmadan yapılmaz. Aşağıdaki entity'ler kavramsal düzeydedir.

### Minimum Entity Listesi

```
GradeLevel     → Sınıf seviyeleri (1-12)
Subject        → Dersler
Topic          → Konular (Subject + GradeLevel altında)
Question       → Sorular
QuestionOption → Soru seçenekleri
QuestionSource → İçerik kaynağı takibi
ReviewStatus   → Soru onay durumu
```

### Entity İlişki Kavramsal Görünümü

```
GradeLevel
  └── Topic
        └── Question
              ├── QuestionOption
              └── QuestionSource

Subject
  └── Topic
  └── Question
        └── QuestionSource

ReviewStatus (enum)
  → draft
  → review
  → published
  → archived
```

### Yayınevi İçerik Yönü

Yayınevi içerikleri olası ana kaynaklardan biridir. Lisans/sözleşme detayları teknik blueprint kapsamı dışındadır. Ancak source tracking alanları tasarımda düşünülür.

---

## 4. MVP API Yüzeyi (Kavramsal)

> **ÖNEMLİ:** Auth/RBAC/tenant netleşmeden production CRUD endpoint açılmaz. Aşağıdaki API yüzeyi kavramsal düzeydedir.

| Alan | Kavramsal API |
|------|---------------|
| **GradeLevel Catalog** | Listele, tekil getir |
| **Subject Catalog** | Listele, tekil getir |
| **Topic Catalog** | Listele (filtreleme ile), tekil getir |
| **Question Draft/Review/Publish Lifecycle** | Oluştur, güncelle, durum geçişi, yayınla |
| **QuestionOption** | Seçenek ekle, sil, güncelle |
| **Teacher Test Assembly** | İleride |
| **Mobile Assigned Test Consumption** | İleride |

---

## 5. Karar Bekleyen Açık Konular

Aşağıdaki konular kesinleşmemiştir; backend audit ve review sürecinde karara bağlanacaktır:

| Konu | Durum |
|------|-------|
| backend runtime/framework | Açık |
| DB/ORM | Açık |
| migration stratejisi | Açık |
| auth/RBAC timing | Açık |
| tenant timing | Açık |
| import formatı | Açık |
| yayınevi içerik aktarım formatı | Açık |
| admin/web panel kapsamı | Açık |
| mobile consumption timing | Açık |

---

## 6. Faz Sırası

| Faz | İçerik | Ön Koşul |
|-----|--------|----------|
| **Faz 0** | Backend repo audit ve ADR | - |
| **Faz 1** | Question Bank blueprint + data model contract | Faz 0 tamamlanmalı |
| **Faz 2** | Minimal catalog seed/read model | Faz 1 onaylanmalı |
| **Faz 3** | Admin question draft/review/publish | Faz 2 + Auth |
| **Faz 4** | Teacher test assembly | Faz 3 |
| **Faz 5** | Student mobile consumption | Faz 4 + Mobile slice açık |
| **Faz 6** | Reporting/adaptive/AI öneriler | İleride |

---

## 7. Protected Core ve Risk Notları

### Protected Core Kontrol

| Alan | Temas | Not |
|------|-------|-----|
| Auth | Yok | Ayrı görev gerekecek |
| RBAC | Yok | Ayrı görev gerekecek |
| Tenant Resolution | Yok | Tasarımda düşünülür |
| Prisma Schema Core | Yok | Sadece kavramsal entity listesi var; schema implementasyonu ayrı protected-core review ve ADR olmadan yapılmaz |
| Migration | Yok | Şimdilik yok |

### Risk Notu

Auth/RBAC/tenant netleşmeden production CRUD endpoint açılmaz. Bu kısıt blueprint'in temel prensibidir.

---

**Son Güncelleme:** 2026-05-05  
**Durum:** Review bekliyor  
**Sonraki Adım:** GPT review + user approval
