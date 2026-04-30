# Okul Aklı - Android Smoke Runbook

## 1. Purpose
- **Bu runbook’un amacı:** Okul Aklı mobil uygulamasını fiziksel Android cihazda doğrulamak.
- Development build'ler ve Metro bundler, fiziksel bir cihazda test edilirken yerel geliştirme ortamına (`localhost`) erişmek zorundadır. Bu iletişim, ADB reverse port yönlendirmesi ile sağlanır. Bu doküman, bu sürecin standart ve tekrarlanabilir olmasını sağlar.

## 2. Preconditions
- **Repo root:** `c:\Projects\okul-akli`
- **Mobile app path:** `apps/mobile`
- Android cihazda **USB Debugging** (USB Hata Ayıklama) açık olmalı.
- Bilgisayar cihazı görmeli (ADB tanımalı).
- Node ve pnpm kurulu olmalı.
- **Expo dev client** cihazda yüklü olmalı (veya derlenmiş olmalı).
- Metro server **8081** portundan çalışmalı.

## 3. Required Commands
Fiziksel test sürecine başlamadan önce şu komutlar sırasıyla çalıştırılmalıdır:

1. `adb devices -l` (Cihazın bağlı olduğundan emin olun)
2. `adb reverse tcp:8081 tcp:8081` (Port yönlendirmesi)
3. `adb reverse --list` (Yönlendirmenin aktif olduğunu doğrulayın)
4. `Test-NetConnection 127.0.0.1 -Port 8081` (PowerShell'de Metro portunun ayakta olduğunu doğrulayın)
5. `pnpm --filter okul-akli-mobile exec tsc --noEmit` (Uygulamada Typecheck hatası olmadığını doğrulayın)
6. **Metro başlatma komutu:**  
   `cmd /c "cd /d c:\Projects\okul-akli\apps\mobile && c:\Projects\okul-akli\node_modules\.bin\expo.cmd start --dev-client --host localhost --clear"`

## 4. Common Failure: Could not connect to development server
- **Semptom:** Ekranda "Could not connect to development server" yazan kırmızı bir React Native hata ekranı belirir.
- **Detay:** URL genelde `http://localhost:8081/...` olarak görünür. Ancak fiziksel bir Android cihazda "localhost" cihazın kendi iç ağını ifade eder, bilgisayarınızı değil.
- **Çözüm:** `adb reverse tcp:8081 tcp:8081` komutunu çalıştırarak cihazın 8081 portunu bilgisayarın 8081 portuna yönlendirin ve Metro sunucusunun çalıştığını kontrol edin.
- **Not:** Kabloyu her çıkarıp taktığınızda veya ADB servisini yeniden başlattığınızda reverse işlemini **tekrar etmeniz** gerekebilir.

## 5. Manual-Assisted Screenshot Workflow
Yapay zeka (agent) fiziksel cihazda doğrudan navigasyon (tıklama) yapamaz. Bu nedenle ekran görüntüleri alınırken **manuel destek (assisted)** sağlanmalıdır:
1. Kullanıcı telefonda test edilecek ilgili ekrana geçer.
2. Agent sadece ADB üzerinden (`screencap` ve `pull`) gerçek screenshot alır.
3. **Yasaklar:** Fake screenshot oluşturulması, başka bir cihaz/emülatör görüntüsü alınması veya hata ekranının başarılı ekran diye kaydedilmesi kesinlikle yasaktır.

## 6. Screenshot Commands
Her bir ekran için sırasıyla:
1. `adb shell screencap -p /sdcard/okul-akli-screen.png`
2. `adb pull /sdcard/okul-akli-screen.png .project-os/evidence/mobile/<slice>/<file>.png`

## 7. Recommended Smoke Screens
Bir uygulamanın asgari düzeyde çalıştığını kanıtlamak için şu ekranların görüntüsü alınmalıdır:
1. Login / rol seçim ekranı
2. Student dashboard
3. Student coming-soon alert
4. Parent dashboard
5. Teacher dashboard

## 8. Evidence Folder Convention
Kanıtlar `pr<N>-android-smoke` konvansiyonuna uygun bir klasörde toplanır:
- Dizin: `.project-os/evidence/mobile/pr<N>-android-smoke/`
- Klasörün içinde mutlaka bir **`README.md`** olmalıdır.
- **`README.md` İçeriği:** Cihaz bilgisi, test tarihi, çalıştırılan komutlar, test edilen ekranlar, eksik alınan ekranlar (varsa) ve Protected Core onayı yazılmalıdır.

## 9. Quality Gates
PR açmadan/merge etmeden önce şu kontrollerin başarılı olması zorunludur:
- Sınırları aşan bir feature implementasyonu PR'ı değilse: **No app code changes**.
- Korumalı alan onayı: **No backend/auth/RBAC/tenant/payment/SMS/notification changes**.
- Diğer onaylar: **No dependency changes**, **No migration**.
- Typecheck: `GREEN`.
- `git diff --check`: Clean (CRLF uyarıları hariç temiz).
- `git diff --name-only origin/main...HEAD`: Beklenen dosya listesiyle eşleşiyor mu kontrol edilmeli.

## 10. PR #7 Reference
PR #7, bu süreçlerin başarıyla uygulandığı ilk örnektir:
- Kanıt Dizini: `.project-os/evidence/mobile/pr7-android-smoke/`
- İçerik: Yukarıdaki 5 ekranın ekran görüntüsü ve bir adet `README.md` içerir.
- Test Edilen Örnek Cihaz: Xiaomi / 24122RKC7G / Android 16
