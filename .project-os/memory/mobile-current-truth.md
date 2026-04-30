# Mobile Current Truth - 2026-04-30

## Proje Durumu
- **Branch**: feat/mobile-dashboard-card-refinement
- **Base Commit (main)**: bff5e9e755215080446b425ceae0c26fe46e639a
- **Last Code Commit**: a48deac (local port for role dashboard refinement)
- **PR**: #5 (OPEN - Role dashboard static card refinement)

## Typecheck
- **Durum**: GREEN
- **Komut**: `npx tsc -p apps/mobile/tsconfig.json --noEmit`
- **git diff --check**: TEMIZ (LF/CRLF uyarıları Windows autocrlf normalitesi)

## PR #5 — Değişen Dosyalar (3)
| Dosya | Değişiklik |
|-------|-----------|
| `apps/mobile/src/app/(student)/index.tsx` | Öğrenci dashboard static card refinement |
| `apps/mobile/src/app/(parent)/index.tsx` | Veli dashboard static card refinement |
| `apps/mobile/src/app/(teacher)/index.tsx` | Öğretmen dashboard static card refinement |

## Login Ekranı Değişiklikleri (login.tsx)
- SafeAreaView kullanıldı
- Başlık: `Okul Aklı` (36px, bold)
- Altı çizgi: mavi çizgi (`titleUnderline`, `#4A90D9`)
- Alt başlık: `Okul İşletim Sistemi`
- 3 düğme: her birinde başlık + açıklama (emoji/ok işareti yok)
- Düğme gölgeleri: Android elevation + iOS shadow
- Footer: `v1.0 — Erken Erişim`

## Dashboard Değişiklikleri
- **Öğrenci**: Ders Programı, Ödevler, Duyurular kartları
- **Veli**: Devamsızlık Özeti, Öğrenci Duyuruları, Görüşme Notları kartları
- **Öğretmen**: Yoklama, Ders Programı, Sınıf Duyuruları kartları
- Her kart: başlık + açıklama + gri badge (`#E8EDF2`)
- ScrollView ile küçük ekran desteği
- SafeAreaView dashboard'larda kullanılmadı (sadece ScrollView)
- "Rol seçimine dön" butonu korundu
- Payment/ödeme kartı eklenmedi

## Smoke Test Durumu
- **Fiziksel cihaz testi**: Daha önce manuel olarak test edildiği hafızaya kaydedilmişti. (PR #5 statik değişiklikler)
- **Ekran Görüntüleri**: PR'da yer almıyor (Android screenshot not present).
- **CI/Status Check**: Not available.
- **Typecheck**: GREEN
- **git diff --check**: TEMIZ

## GitHub Durumu
- **PR #2**: MERGED (commit: 8907550c3bf5632046615ac83c7cab815e84ef4b)
- **PR #3**: MERGED (commit: 987529d555dd221293f42ae8c0fa9530fe5f781a)
- **PR #4**: MERGED (Docs - Smoke Evidence)
- **PR #5**: OPEN (Role dashboard static card refinement. No backend/auth/RBAC/tenant changes. No dependency changes. No migration.)

## Metro Başlatma Komutu
```cmd
cmd /c "cd /d c:\Projects\okul-akli\apps\mobile && c:\Projects\okul-akli\node_modules\.bin\expo.cmd start --dev-client --host localhost --clear"
```

## Bilinen Riskler
- Kartlar statik veri kullanıyor, gerçek veri bağlantısı yok

## Önemli Düzeltmeler (PR #2'den devralınan)
1. **Metro `c:\C:\` Path Bug**: `.npmrc` → `node-linker=hoisted`
2. **Layout Route Uyarıları**: `_layout.tsx` route isimleri güncellendi
3. **Login Routing**: `router.replace('/(student)')` → `router.replace('/(student)/index')`
