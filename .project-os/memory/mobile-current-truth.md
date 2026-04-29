# Mobile Current Truth - 2026-04-29

## Proje Durumu
- **Branch**: main
- **Base Commit (main)**: 6d93d940cf8d842fd14db86e50876d65735bcc09
- **Last Code Commit**: 987529d555dd221293f42ae8c0fa9530fe5f781a
- **PR**: #3 (MERGED)

## Typecheck
- **Durum**: GREEN
- **Komut**: `npx tsc -p apps/mobile/tsconfig.json --noEmit`
- **git diff --check**: TEMIZ (LF/CRLF uyarıları Windows autocrlf normalitesi)

## PR #3 — Değişen Dosyalar (6)
| Dosya | Değişiklik |
|-------|-----------|
| `apps/mobile/src/app/login.tsx` | Başlık, altı çizgi, footer |
| `apps/mobile/src/app/(student)/index.tsx` | 3 statik kart + ScrollView |
| `apps/mobile/src/app/(parent)/index.tsx` | 3 statik kart + ScrollView |
| `apps/mobile/src/app/(teacher)/index.tsx` | 3 statik kart + ScrollView |
| `.project-os/memory/mobile-current-truth.md` | Drift düzeltme |
| `.project-os/memory/session-handoff.md` | Drift düzeltme |

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
- **Fiziksel cihaz testi**: YAPILDI (Android USB cihaz) - BAŞARILI (Login ve rol bazlı ekran geçişleri stabil)
- **Typecheck**: GREEN
- **git diff --check**: TEMIZ

## GitHub Durumu
- **PR #2**: MERGED (commit: 8907550c3bf5632046615ac83c7cab815e84ef4b)
- **PR #3**: MERGED (commit: 987529d555dd221293f42ae8c0fa9530fe5f781a)

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
