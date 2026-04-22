# Okul Aklı Mobil - Mevcut Durum (Current Truth)

Bu dosya projenin mevcut durumunu belgelemek için kullanılır.
Her değişiklikten sonra güncellenir.

## PROJE BİLGİLERİ

| Alan | Değer |
|------|-------|
| Proje Adı | Okul Aklı |
| Mobil Uygulama Adı | Okul Aklı Mobil |
| Teknik Klasör | apps/mobile |
| Teknik Paket Adı | okul-akli-mobile |
| Stack | React Native + Expo + TypeScript |
| Başlangıç Adayı | Obytes React Native Template v9.0.0 |
| Çalışma Yönü | Android-first |
| pnpm Workspace | Evet (root pnpm-workspace.yaml) |
| Root package.json | Evet (minimal workspace yönetimi) |

## İLK MOBİL SLICE

| Hedef | Durum |
|-------|--------|
| mobile app shell (mobil uygulama iskeleti) | ✅ Kuruldu |
| login entry point (giriş noktası) | ✅ Türkçe placeholder login |
| role-based route skeleton (rol tabanlı yönlendirme iskeleti) | ✅ 3 rol route'u |
| student empty dashboard (öğrenci boş paneli) | ✅ Türkçe boş ekran |
| parent empty dashboard (veli boş paneli) | ✅ Türkçe boş ekran |
| teacher empty dashboard (öğretmen boş paneli) | ✅ Türkçe boş ekran |
| Android run flow (Android çalışma akışı) | ❌ BLOCKED: Android SDK kurulu değil |

## DOĞRULAMA SONUÇLARI

| Kontrol | Sonuç |
|---------|-------|
| pnpm install | ✅ cd apps/mobile && pnpm install |
| TypeScript check (tsc --noEmit) | ✅ YEŞİL (sıfır hata) |
| expo export --platform android | ✅ 6.64 MB bundle, 2566 modül |
| Android run (expo run:android) | ❌ BLOCKED: Android SDK kurulu değil |

## KALİTE KAPISI FIX GEÇMİŞİ

| Tarih | Fix | Açıklama |
|-------|-----|----------|
| 2026-04-22 | select.tsx estimatedItemSize | @shopify/flash-list ile @gorhom/bottom-sheet type mismatch. Prop kaldırıldı. |
| 2026-04-22 | type-check script | `tsc --noemit` → `tsc --noEmit` (büyük E) |

## BİLİNEN RİSKLER

| Risk | Derece | Açıklama |
|------|--------|----------|
| Android SDK eksik | YÜKSEK | Android run yapılamıyor |
| pnpm workspace OneDrive sorunu | ORTA | Root pnpm install → expo export başarısız (SHA-1). cd apps/mobile && pnpm install ile çözümleniyor |
| Eski route'lar mevcut | DÜŞÜK | (app), feed, onboarding hâlâ template'den kalmış |
| TailwindCSS aktif | DÜŞÜK | Kullanılmıyor ama kaldırılmadı (temizlik ertelendi) |
| i18n aktif | DÜŞÜK | Kullanılmıyor ama kaldırılmadı (temizlik ertelendi) |

## PR DURUMU

| Alan | Değer |
|------|-------|
| PR # | 1 |
| Branch | feat/mobile-scaffold-v1 |
| Durum | AÇIK |
| URL | https://github.com/lastlord444/okul-akli/pull/1 |
| Merge | Henüz yapılmadı |

## SON GÜNCELLEME

**Tarih:** 2026-04-22
**Durum:** Mobil iskelet kuruldu. TypeScript fix tamamlandı (yeşil). expo export başarılı. Android run SDK eksikliği nedeniyle bloklu. PR #1 açık.
