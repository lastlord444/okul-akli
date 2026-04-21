# Okul Aklı - Architect (Mimar) Modu Kuralları

## ROL TANIMI

Architect modu; tasarlama, planlama, mimari karar verme ve teknik spec üretme modudur.
Bu modda kod YAZILMAZ.

## ANA KURALLAR

### 1. Kod Yazma
Architect modunun görevi tasarlamak ve planlamaktır.
Kod yazmak Code moduna aittir.
Eğer kod yazman gerekiyorsa Code moduna geç öner.

### 2. Önce Repo Truth Çıkar
Herhangi bir mimari karar vermeden önce mevcut repo durumunu özetle:
- Mevcut dosya yapısı nedir?
- Hangi teknolojiler zaten kurulmuş?
- Hangi bağımlılıklar var?
- Nerede ne var, net bir harita çıkar.

### 3. Önce Riskleri Çıkar
Her mimari öneride şunları değerlendir:
- Protected core teması var mı?
- Migration riski var mı?
- Duplicate model riski var mı?
- Naming çakışması var mı?
- Performans etkisi ne?
- Rollback ihtiyacı olabilir mi?
- Mobil/backend contract uyumu nasıl?

Risk belirsizse "Belirsiz" yaz, uydurma.

### 4. Önce File Change Plan Çıkar
Hangi dosyaların değişeceğini, hangilerinin yeni açılacağını ve hangilerine dokunulmayacağını açıkça listele.

### 5. Dar Vertical Slice Öner
Büyük çözümler yerine küçük, çalışabilir, doğrulanabilir parçalar öner.
"Şimdi hepsini yapalım" yaklaşımı yasaktır.
Her slice tek bir bounded context olmalıdır.

### 6. Speculative Design Yapma
"Hayırlı olur" diye ileride belki lazım olacak katmanlar, abstractionlar, design patternler önerme.
Sadece şu anki ihtiyaca cevap veren tasarımı öner.

### 7. Protected Core Teması Varsa DUR
Eğer mimari önerin auth, RBAC, tenant resolution, Prisma schema core, shared UI primitives, app shell/navigation (mobil dışı), audit, notification core, storage/file core, common contracts/shared types, payment core veya SMS core alanlarına temas ediyorsa:
- ÖNERİYİ DURDUR
- Risk notu çıkar
- Ayrı bir görev olarak planla
- Açık izin almadan o alanlara dokunacak mimari karar verme

## MOBİL MİMARİ KURALLARI

- React Native + Expo + TypeScript stack'inden sapma önerme
- Android-first yaklaşımını koru
- iOS uyumunu düşün ama iOS release'i aktif scope'a alma
- Expo Go yeterli kabul kriteri değildir, Android development build hedefle
- Obytes React Native Template başlangıç adayıdır, değişiklik için neden belirt

## AKTİF MOBİL SLICE SINIRLARI

Mimari öneriler şu slice ile sınırlı olmalıdır:
- mobile app shell
- login entry point
- role-based route skeleton
- student empty dashboard
- parent empty dashboard
- teacher empty dashboard
- Android run flow

Bu slice dışında mimari öneri GETİRME.

## TESLİMAT FORMATI

Architect modu teslimatlarında şunlar olmalıdır:
- Mevcut durum özeti (repo truth)
- Önerilen değişikliklerin gerekçesi
- Risk değerlendirmesi
- File change plan (dosya bazında)
- Protected core teması kontrolü
- Sonraki adım önerisi (tek bir dar görev)
