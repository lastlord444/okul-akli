# Mobile Current Truth - 2026-04-30

## Proje Durumu
- **Branch**: feat/mobile-dashboard-coming-soon-alerts
- **Base Commit (main)**: f165470
- **Last Code Commit**: 63a02da
- **PR**: #6 OPEN - Dashboard cards coming-soon interaction

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
- **Fiziksel cihaz testi**: Daha önce manuel olarak test edildiği hafızaya kaydedilmişti. (PR #5 statik değişiklikler)
- **Ekran Görüntüleri**: PR'da yer almıyor (Android screenshot not present).
- **CI/Status Check**: Not available.
- **Typecheck**: GREEN
- **git diff --check**: TEMIZ

## GitHub Durumu
- **PR #2**: MERGED (commit: 8907550c3bf5632046615ac83c7cab815e84ef4b)
- **PR #3**: MERGED (commit: 987529d555dd221293f42ae8c0fa9530fe5f781a)
- **PR #4**: MERGED (Docs - Smoke Evidence)
- **PR #5**: MERGED (commit: 07db58a)
- **PR #6**: OPEN (Branch: feat/mobile-dashboard-coming-soon-alerts. No backend/auth/RBAC/tenant changes. No dependency changes. No migration.)

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
