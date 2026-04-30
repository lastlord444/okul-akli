# Mobile Current Truth - 2026-04-30

## Proje Durumu
- **Branch**: docs/mobile-android-smoke-runbook
- **Base Commit (main)**: 61acaf4
- **Last Code Commit**: 63a02da
- **PR**: #8 OPEN - Android smoke runbook documentation

## Typecheck
- **Durum**: GREEN
- **Komut**: `npx tsc -p apps/mobile/tsconfig.json --noEmit`
- **git diff --check**: TEMIZ (LF/CRLF uyarıları Windows autocrlf normalitesi)

## PR #6 — Değişen Dosyalar (5 total, 3 code)
| Dosya | Değişiklik |
|-------|-----------|
| `apps/mobile/src/app/(student)/index.tsx` | Öğrenci dashboard kartlarına "Yakında" Alert'i eklendi |
| `apps/mobile/src/app/(parent)/index.tsx` | Veli dashboard kartlarına "Yakında" Alert'i eklendi |
| `apps/mobile/src/app/(teacher)/index.tsx` | Öğretmen dashboard kartlarına "Yakında" Alert'i eklendi |
| `.project-os/memory/mobile-current-truth.md` | PR state tracking |
| `.project-os/memory/session-handoff.md` | Session tracking |

*Not: `commit-msg.txt` ve `pr-body.txt` artifact dosyaları tamamen silinmiş ve PR dışı bırakılmıştır.*

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
- Her kart: başlık + açıklama + gri badge (`#E8EDF2`) + basılınca `Yakında` Alert'i
- ScrollView ile küçük ekran desteği
- SafeAreaView dashboard'larda kullanılmadı (sadece ScrollView)
- "Rol seçimine dön" butonu korundu
- Payment/ödeme kartı eklenmedi

## Smoke Test Durumu
- **Fiziksel cihaz testi**: Manuel-assisted fiziksel cihaz testi yapıldı. (PR #7)
- **Ekran Görüntüleri**: 5 ekran görüntüsü (Login, Öğrenci, Veli, Öğretmen, Alert) `.project-os/evidence/mobile/pr7-android-smoke/` altına eklendi.
- **CI/Status Check**: Not available.
- **Typecheck**: GREEN
- **git diff --check**: TEMIZ

## GitHub Durumu
- **PR #2**: MERGED (commit: 8907550c3bf5632046615ac83c7cab815e84ef4b)
- **PR #3**: MERGED (commit: 987529d555dd221293f42ae8c0fa9530fe5f781a)
- **PR #4**: MERGED (Docs - Smoke Evidence)
- **PR #5**: MERGED (commit: 07db58a)
- **PR #6**: MERGED (commit: de732d6)
- **PR #7**: MERGED (commit: d47aa31493c76b4bbc71129728bb96076030be2d)
- **PR #8**: OPEN - Android smoke runbook documentation

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
