# Okul Aklı - Agent-Skills Adapter Kuralları

## AMAÇ

Bu dosya Okul Aklı projesinde agent-skills mantıklarının nasıl kullanılacağını belirtir. Agent-skills, addyosmani/agent-skills reposundan gelen süreç referansıdır.

## TEMEL İLKE

**Okul Aklı kuralları her zaman agent-skills kurallarından üstündür.**

Çakışma durumunda Okul Aklı kuralları kazanır. Agent-skills hiçbir zaman Okul Aklı kurallarını geçersiz kılamaz.

## GÖREV TÜRÜNE GÖRE SKILL KULLANIMI

### 1. Planlama Görevleri
**Skill:** planning-and-task-breakdown

- Büyük görevleri küçük bounded context'lere böl
- Her alt görev tek bir amaca hizmet etsin
- Bağımlılıkları açıkça belirt
- Orchestrator modu bunu otomatik uygular

### 2. Yeni Özellik / Slice Görevleri
**Skills:** spec-driven-development + incremental-implementation

- Önce spesifikasyon çıkar (KODLAMADAN ÖNCE ZORUNLU ÇIKTI)
- Repo truth summary, domain ownership, file change plan, risks
- Sonra küçük adımlarla implementasyon
- Her adımda çalışan kod doğrula

### 3. UI / Frontend Görevleri
**Skill:** frontend-ui-engineering

- React Native + Expo + TypeScript stack'ını koru
- Türkçe kullanıcı arayüzü
- Rakip kopyalama yok (Ebtex, Eyotek, K12NET, Edroof yasak)
- Android-first yaklaşım

### 4. Test / Doğrulama Görevleri
**Skill:** test-driven-development

- Kod davranışı varsa test zorunlu
- Fake test yasak (assert/expect olmalı)
- Mobilde component smoke test gerekli
- Test çalıştırılmadıysa açıkça yaz

### 5. Hata Ayıklama Görevleri
**Skill:** debugging-and-error-recovery

- Hata görmeden tahminle düzeltme yapma
- Log, komut çıktısı ve dosya kanıtı iste
- En düşük blast radius ile düzelt
- Debug sırasında feature ekleme yasak

### 6. Commit / Push / Branch Görevleri
**Skill:** git-workflow-and-versioning

- Her Roo çıktısından sonra GPT GitHub check yapar
- Commit mesajları anlaşılır olmalı
- Working tree temiz olmalı
- Local/remote senkron olmalı

### 7. Framework / Teknoloji Kararı Görevleri
**Skill:** source-driven-development

- Mevcut kod tabanını ana gerçek kaynağı olarak kabul et
- "Repo gerçeği rapordan üstündedir"
- Mevcut kararları anlamadan değiştirme önerme

## YASAKLI KULLANIMLAR

Agent-skills AŞAĞIDAKİ GİBİ KULLANILAMAZ:

1. **Scope Büyütme Bahanesi Olamaz**
   - "Agent-skills'da şöyle önerilmiş" diyerek scope dışı iş ekleme
   - Agent-skills hiçbir zaman bounded context'i genişletme gerekçesi olamaz

2. **Protected Core'a İzinsiz Temas Gerekçesi Olamaz**
   - Agent-skills bir yaklaşım önerse bile Okul Aklı protected core kuralları geçerli
   - Auth, RBAC, tenant, payment, SMS, notification, audit, storage, shared contracts alanlarına dokunmak için ayrı izin gerekir

3. **Tam Repo Kopyalama Gerekçesi Olamaz**
   - Agent-skills reposunu Okul Aklı'na tam olarak kopyalama
   - Git submodule ekleme
   - Paket kurulumu yapma (npm install, pnpm install, yarn install)
   - Vendörleme yapma

4. **20 Skill'i Proje Gömme Gerekçesi Olamaz**
   - Sadece aktif mobil slice için gerekli skill'leri kullan
   - Mobil scaffold öncesi: context-engineering, spec-driven-development, planning-and-task-breakdown, incremental-implementation, source-driven-development, frontend-ui-engineering, test-driven-development, debugging-and-error-recovery, code-review-and-quality, git-workflow-and-versioning

## AKTİF SKILL LİSTESİ (Mobil Scaffold Öncesi)

| Skill | Kullanım |
|-------|----------|
| context-engineering | Repo truth çıkarma |
| spec-driven-development | KODLAMADAN ÖNCE ZORUNLU ÇIKTI |
| planning-and-task-breakdown | Görev bölme (Orchestrator) |
| incremental-implementation | Küçük adımlarla ilerleme |
| source-driven-development | Mevcut kodu anlama |
| frontend-ui-engineering | React Native UI |
| test-driven-development | Test yazma |
| debugging-and-error-recovery | Hata ayıklama |
| code-review-and-quality | Kod kalite kontrolü |
| git-workflow-and-versioning | GitHub check |

## KAPSAM DIŞI SKILL'LER (Mobil Scaffold Öncesi)

| Skill | Neden |
|-------|-------|
| shipping-and-launch | Henüz erken |
| deprecation-and-migration | Henüz geçiş yok |
| performance-optimization | Henüz çalışan kod yok |
| browser-testing-with-devtools | Mobil uygulama |
| security-and-hardening | Ayrı görev gerekir (riskli alanlar) |

## REFERANSLAR

- Agent-Skills GitHub: https://github.com/addyosmani/agent-skills
- Okul Aklı Mobil Current Truth: `.project-os/memory/mobile-current-truth.md`
- Agent-Skills Index: `.project-os/skills/agent-skills-index.md`

## SON GÜNCELLEME

**Tarih:** 2026-04-21  
**Durum:** Agent-skills adapter kuralları oluşturuldu. Okul Aklı kuralları her zaman üstte.
