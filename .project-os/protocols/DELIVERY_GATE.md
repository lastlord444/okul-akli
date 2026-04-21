# Teslimat Kalite Kapısı - Okul Aklı

## AMAÇ

Bu protokol, her teslimatın (commit, push, PR) öncesinde yapılması zorunlu kalite kontrollerini tanımlar. Hiçbir teslimat bu kapıdan geçmeden gönderilemez.

## ZORUNLU KONTROLLER

### 1. Test/Build/Smoke Kontrolü
- Test/build/smoke olmadan başarı iddiası YOKTUR
- "Kod çalışıyor" demek için kanıt gerekir
- Kod davranışı yoksa (sadece dokümantasyon değişikliği gibi) bu açıkça yazılır
- Test çalıştırılmadıysa "test yazıldı ama çalıştırılmadı" denir, gizlenmez

### 2. Drift Audit
Drift audit olmadan "tamamlandı" DENEMEZ. Şunlar kontrol edilir:

- Planlanan ile yapılan aynı mı?
- Scope dışı taşma oldu mu?
- Yeni entity açıldı mı?
- Protected core'a temas oldu mu?
- Mevcut çalışan akış bozuldu mu?
- Doküman ve repo uyumlu mu?
- Risk ve teknik borç kaldı mı?

### 3. Protected Core Kontrolü
- Değişiklik protected core alanına temas ediyor mu?
- auth, RBAC, tenant, payment, SMS, notification, audit, storage, shared contracts
- Temas varsa: geri al veya açık risk olarak yaz
- Açık izin olmadan protected core'a dokunulamaz

### 4. Scope Dışı Dosya Kontrolü
- Sadece onaylı dosyalar değiştirilmiş mi?
- Onaylı olmayan dosya değişikliği varsa geri al
- "Madem buradayım şunu da düzelttim" YASAKTIR

### 5. Hafıza Dosyaları Güncelleme
- session-handoff.md güncellendi mi?
- mobile-current-truth.md güncellendi mi?
- Gerekirse mobile-module-registry.md güncellendi mi?
- Gerekirse ADR dosyaları güncellendi mi?

## GIT PUSH KOŞULLARI

Push sadece şu TÜM şartlar sağlandığında yapılabilir:

1. ✅ Working tree temiz
2. ✅ Drift audit temiz
3. ✅ Hafıza dosyaları güncellendi
4. ✅ Test/build/smoke sonucu yazıldı
5. ✅ Protected core kontrolü yapıldı
6. ✅ Scope dışı dosya değişikliği yok
7. ✅ Commit mesajı anlaşılır

Herhangi biri eksikse push YAPILAMAZ.

## KURAL ÖNCELİĞİ

Bu protokol Okul Aklı kurallarının bir parçasıdır. Agent-skills kurallarıyla çakışma durumunda Okul Aklı kuralları geçerlidir.

## SON GÜNCELLEME

**Tarih:** 2026-04-21
**Durum:** İlk oluşturuldu.
