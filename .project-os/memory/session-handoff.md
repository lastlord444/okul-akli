# Session Handoff

## Branch: feat/mobile-minimal-v1
## PR: #2
## Tarih: 2026-04-25 09:47
## Current GitHub PR Head: "Her session basinda git rev-parse HEAD / GitHub ile dogrulanacak"
## Last Verified Code Baseline: 6bde645cfb28110df0bec0d33f1aebfd0bb8d07e
## Android build status: BLOCKED
## Merge status: NOT READY
- GitHub mergeable: true
- Build/smoke: yok
- Merge decision: NOT READY

## Ozet

Bu session'da ASCII-only path recovery audit yapıldı. KOD DEGISIKLIGI YAPILMADI:
- `C:\Projects\okul-akli` dizininde repo klonlanıp temiz kurulum ve prebuild/build testleri koşuldu.
- Türkçe karakter/pnpm symlink hatasının ASCII path ile aşıldığı kanıtlandı.
- Android build sürecinin önündeki asıl (root cause) hatanın `Kotlin/Compose Mismatch` olduğu doğrulandı.

## Onceki Session Gecmisi

### 2026-04-25 Erken Saatler
- expo-linking eklemeye calisildi → Build basarisiz (Windows path sorunu)
- Commit+push yapildi ama "SADECE BASARILIYSA COMMIT" kuralini ihlal ettigi icin revert edildi
- `git reset --hard 6bde645` + `git push --force-with-lease` ile temizlendi
- Stash `wip/android-debug-dirty-state-do-not-apply` olusturuldu ama sonradan drop edildi
- Kalan stash: `wip/android-debug-dirty-state-before-controlled-recovery`

### 2026-04-25 09:11 Session
- Memory drift duzeltildi: "GREEN - BUILD SUCCESSFUL" → YANLIS, BLOKE
- PR head `443484fb` → `6bde645` duzeltildi
- Build durumu "BASARILI" → BLOKE duzeltildi

### 2026-04-25 09:47 Session
- Memory drift duzeltildi: Self-invalidating docs hash'leri kaldirildi.

### 2026-04-25 13:05 Session (BU SESSION)
- ASCII-only path recovery audit tamamlandı (`C:\Projects\okul-akli`).
- `tsc --noEmit` ve `expo prebuild` başarılı oldu.
- `gradlew assembleDebug` yeni bir hatayla (Kotlin/Compose uyumsuzluğu) patladı, böylece root cause teşhis edildi.
- Kod değişikliği yapılmadı, sadece teşhis raporlandı.

## Bilinen Sorunlar

### BLOKE EDICI: Kotlin/Compose Mismatch (YENI)
- **Hangi komut patladı?**: `./gradlew assembleDebug`
- **Hangi dosya/modül?**: `:expo-modules-core:compileDebugKotlin`
- **Beklenen Kotlin/Compose versiyonu**: Compose Compiler 1.5.15 için Kotlin 1.9.25
- **Mevcut Kotlin/Compose versiyonu**: Kotlin 1.9.24
- **Hata mesajının özü**:
```
> Task :expo-modules-core:compileDebugKotlin FAILED
e: This version (1.5.15) of the Compose Compiler requires Kotlin version 1.9.25 but you appear to be using Kotlin version 1.9.24 which is not known to be compatible.  Please consult the Compose-Kotlin compatibility map located at https://developer.android.com/jetpack/androidx/releases/compose-kotlin to choose a compatible version pair (or `suppressKotlinVersionCompatibilityCheck` but don't say I didn't warn you!).
```
- **Hedef:** Sonraki adımda ASCII path üzerinde bu uyuşmazlığın giderilmesi.

### AŞILAN BLOKER: Windows Gradle + pnpm Symlink + Turkce Karakter
- **Çözüm:** `C:\Projects\okul-akli` gibi ASCII-only bir dizin kullanılarak hata aşıldı. Geliştirme burada sürmeli.

### EXPO-LINKING DURUMU
- apps/mobile/package.json'da expo-linking eksik gorunuyor
- Transitive dependency olarak mevcut olabilir
- Test edilmedi — build calismadan dogrulanamaz

### PREBUILD NON-INTERACTIVE SORUNU
- `expo prebuild --platform android --clean` non-interactive modda "Install updated dependencies?" prompt veriyor
- Bu da build'i engelliyor
- `--non-interactive` flag'i denenecek (recovery plan'da)

## Sırada Ne Var? (Next Exact Task)

1. **Çalışma Dizini:** Kesinlikle `C:\Projects\okul-akli` üzerinden devam edilecek.
2. **Kod Değişikliği:** Sadece Kotlin/Compose compiler uyuşmazlığını giderecek olan `gradle.properties` veya sürüm bump fixleri uygulanacak.
3. **Build Onayı:** `gradlew assembleDebug` başarılı olduktan sonra PR merge onayı alınabilir.

## Stash Durumu
```
stash@{0}: wip/android-debug-dirty-state-before-controlled-recovery (eski, 2026-04-25 oncesi)
stash@{1}: WIP on feat/mobile-scaffold-v1 (cok eski)
```
**STASH POP YAPILMAYACAK**

## YASAKLI HATIRLATMA
- .npmrc'e node-linker=hoisted EKLENMEYECEK
- root package.json'a expo/react/rn EKLENMEYECEK
- react-native bump YAPILMAYACAK
- android/ klasoru COMMIT EDILMEYECEK
- Stash pop YAPILMAYACAK
