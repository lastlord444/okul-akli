# Mobile Current Truth - 2026-04-29

## Proje Durumu
- **Branch**: feat/mobile-visual-polish
- **Commit**: 09ff771b6df5255b94e3ebfb1e470932d09d0b10
- **Base Commit (main HEAD)**: d03a70a841286be38e1189bab8913eef9d6e8bd8
- **PR**: #3 (AÇIK - review bekliyor)

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
- **Fiziksel cihaz testi**: YAPILMADI (cihaz bağlantısı yok)
- **Typecheck**: GREEN
- **git diff --check**: TEMIZ

## GitHub Durumu
- **PR #2**: MERGED (commit: 8907550c3bf5632046615ac83c7cab815e84ef4b)
- **PR #3**: AÇIK, main'den d03a70a üzerine açıldı

## Metro Başlatma Komutu
```cmd
cmd /c "cd /d c:\Projects\okul-akli\apps\mobile && c:\Projects\okul-akli\node_modules\.bin\expo.cmd start --dev-client --host localhost --clear"
```

## Bilinen Riskler
- Smoke test fiziksel cihazda yapılamadı
- Kartlar statik veri kullanıyor, gerçek veri bağlantısı yok

## Önemli Düzeltmeler (PR #2'den devralınan)
1. **Metro `c:\C:\` Path Bug**: `.npmrc` → `node-linker=hoisted`
2. **Layout Route Uyarıları**: `_layout.tsx` route isimleri güncellendi
3. **Login Routing**: `router.replace('/(student)')` → `router.replace('/(student)/index')`
