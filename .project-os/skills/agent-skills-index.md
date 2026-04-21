# Agent-Skills Referans İndeksi - Okul Aklı

## Agent-Skills Nedir?

Addy Osmani tarafından geliştirilen, AI ajanları için yazılım geliştirme süreçlerinde kullanılan skill mantıkları koleksiyonudur. GitHub: https://github.com/addyosmani/agent-skills

## Okul Aklı Projesinde Neden Kullanılıyor?

Okul Aklı projesi Roo (AI destekli geliştirme aracı) ile geliştiriliyor. Roo'nun çalışma disiplinini güçlendirmek ve tutarlı bir süreç takibi için agent-skills mantıklarından yararlanıyoruz.

## Tam Repo Neden Kopyalanmıyor?

Agent-skills reposunu Okul Aklı projesine tam olarak kopyalamıyoruz çünkü:
- Bu bir kütüphane değil, süreç referansıdır
- Tam repo kopyalaması proje karmaşıklığını artırır
- Okul Aklı'nın kendi kuralları ve disiplini vardır
- Sadece ilgili skill mantıklarını adaptasyon olarak kullanıyoruz
- Paket kurulumu, submodule veya vendörleme gerektirmez

## Hangi Skill Mantıkları Aktif Referans Kabul Edilecek?

Şu anda mobil scaffold öncesi bu skill'leri referans olarak kullanıyoruz:

| Skill | Türkçe Açıklama | Kullanım Alanı |
|-------|----------------|----------------|
| context-engineering | Bağlam mühendisliği | Proje bağlamını anlama, gereksinim çıkarma |
| spec-driven-development | Spesifikasyon odaklı geliştirme | Önce spesifikasyon, sonra kodlama |
| planning-and-task-breakdown | Planlama ve görev bölme | Büyük görevleri küçük parçalara ayırma |
| incremental-implementation | Kümülatif implementasyon | Küçük adımlarla ilerleme |
| source-driven-development | Kaynak kod odaklı geliştirme | Mevcut kod tabanını anlama |
| frontend-ui-engineering | Ön yüz UI mühendisliği | React Native UI geliştirme |
| test-driven-development | Test odaklı geliştirme | Test yazma ve doğrulama |
| debugging-and-error-recovery | Hata ayıklama ve kurtarma | Sorun giderme süreçleri |
| code-review-and-quality | Kod incelemesi ve kalite | Kod kalite kontrolü |
| git-workflow-and-versioning | Git iş akışı ve versiyonlama | Commit, branch, version yönetimi |

## Hangi Skill Mantıkları Şimdilik Kapsam Dışı?

Şu aktif mobil slice için henüz gerekli olmayanlar:

| Skill | Neden Kapsam Dışı? |
|-------|-------------------|
| shipping-and-launch | Yayına alma ve lansman | Henüz erken aşama |
| deprecation-and-migration | Kullanımdan kaldırma ve göç | Henüz geçiş yapılacak kod yok |
| performance-optimization | Performans optimizasyonu | Henüz çalışır kod yok |
| browser-testing-with-devtools | Tarayıcı testi | Mobil uygulama, tarayıcı yok |
| security-and-hardening | Güvenlik ve sertleştirme | Sadece auth/data/payment gibi riskli alanlarda ayrı görev açılırsa |

## Mobil Scaffold Öncesi Hangi Skill'ler Kullanılacak?

İlk mobil iskelet kurulumu sırasında:
1. **planning-and-task-breakdown** — Obytes şablonunu anlama ve planlama
2. **spec-driven-development** — Mobil slice spesifikasyonunu çıkarma
3. **source-driven-development** — Obytes template kodunu anlama
4. **frontend-ui-engineering** — React Native bileşenlerini kurma
5. **test-driven-development** — Basit smoke testler
6. **git-workflow-and-versioning** — Commit ve branch yönetimi

## Her Skill'in Kısa Açıklaması

### Context Engineering
Proje bağlamını, gereksinimleri ve kısıtlamaları anlamak için kullanılır. Okul Aklı'da mevcut repo truth'ı çıkarmak için temel yaklaşımdır.

### Spec Driven Development
Kod yazmadan önce spesifikasyon çıkarır. Okul Aklı'da "KODLAMADAN ÖNCE ZORUNLU ÇIKTI" ilkesiyle örtüşür.

### Planning and Task Breakdown
Büyük görevleri küçük, yönetilebilir alt görevlere böler. Orchestrator modunun temel işleyişidir.

### Incremental Implementation
Küçük adımlarla, çalışan kodu sürekli ilerletir. Okul Aklı'da "küçük ama çalışan teslimat" ilkesiyle örtüşür.

### Source Driven Development
Mevcut kod tabanını ana gerçek kaynağı olarak kabul eder. Okul Aklı'da "repo gerçeği rapordan üstündedir" ilkesiyle örtüşür.

### Frontend UI Engineering
UI bileşenleri, state yönetimi ve kullanıcı deneyimi konularını kapsar. React Native + Expo için temel yaklaşım olacak.

### Test Driven Development
Testleri kodlamadan önce veya birlikte yazarak davranışı doğrular. Okul Aklı'da kod davranışı varsa test zorunludur.

### Debugging and Error Recovery
Hata analizi, kök neden tespiti ve düzeltme süreçlerini kapsar. Debug modunun temel işleyişidir.

### Code Review and Quality
Kod kalite kontrolü, incelemesi ve iyileştirme süreçlerini kapsar. Drift audit ve başarı iddiası ilkesiyle örtüşür.

### Git Workflow and Versioning
Commit mesajları, branch yönetimi ve versiyonlama süreçlerini kapsar. GitHub check kuralıyla örtüşür.

## Son Güncelleme

**Tarih:** 2026-04-21  
**Durum:** Agent-skills referans indeksi oluşturuldu. Tam repo kopyalanmadı.
