# Mobile Current Truth - 2026-04-26

## Proje Durumu
- **Branch**: feat/mobile-minimal-v1
- **Commit**: 2f8bdab (fix: Metro path bug, layout routes, login routing)
- **Metro**: ÇALIŞIYOR (http://localhost:8081)
- **Typecheck**: GREEN

## Metro Başlatma Komutu
```cmd
cmd /c "cd /d c:\Projects\okul-akli\apps\mobile && c:\Projects\okul-akli\node_modules\.bin\expo.cmd start --dev-client --host localhost --clear"
```

## Önemli Düzeltmeler

### 1. Metro `c:\C:\` Path Bug (KRITIK - ÇÖZÜLDÜ)
**Sorun**: pnpm symlink'leri Metro'nun `fileSystem.lookup()` fonksiyonunda Windows sürücü harfi case-insensitivity bug'ına neden oluyordu. Metro `C:\` (büyük harf) döndürürken proje root `c:\` (küçük harf) kullanıyordu, bu da `c:\C:\` gibi geçersiz yollara yol açıyordu.

**Çözüm**: `.npmrc` dosyasına `node-linker=hoisted` eklendi. Bu ayar pnpm'yi symlink yerine gerçek kopyalar kullanmaya zorlar.

```ini
# .npmrc
node-linker=hoisted
public-hoist-pattern[]=*
```

**Etki**: `node_modules/.pnpm` dizini artık sadece `lock.yaml` içeriyor, symlink yapısı kaldırıldı.

### 2. metro.config.js
pnpm hoisted modda artık özel metro.config.js gerekmiyor:
```js
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
module.exports = config;
```

### 3. Layout Route Uyarıları
**Sorun**: Expo Router group route'lar için `(student)`, `(parent)`, `(teacher)` gibi isimler kullanılıyordu ama layout'ta yanlış format kullanılıyordu.

**Çözüm**: `_layout.tsx` dosyasında route isimleri güncellendi:
```tsx
<Stack.Screen name="(student)/index" options={{ title: 'Öğrenci Paneli' }} />
<Stack.Screen name="(parent)/index" options={{ title: 'Veli Paneli' }} />
<Stack.Screen name="(teacher)/index" options={{ title: 'Öğretmen Paneli' }} />
```

### 4. Login Routing
**Sorun**: `login.tsx` role bazlı yönlendirmede `(student)` yerine `student` kullanılıyordu.

**Çözüm**: `router.replace('/(student)')` → `router.replace('/(student)/index')`

## Fiziksel Cihaz Test
- **Cihaz**: Samsung (e3484f25)
- **APK**: com.okulakli.development
- **Activity**: .MainActivity
- **Metro Bundle**: 1040 modül, ~7s

## ADB Komutları
```cmd
# Cihaz bağlantısı
"C:\Users\musab\AppData\Local\Android\Sdk\platform-tools\adb.exe" devices

# Uygulama başlatma
"C:\Users\musab\AppData\Local\Android\Sdk\platform-tools\adb.exe" -s e3484f25 shell am start -n com.okulakli.development/.MainActivity

# Screenshot
"C:\Users\musab\AppData\Local\Android\Sdk\platform-tools\adb.exe" -s e3484f25 shell screencap -p /sdcard/screenshot.png
"C:\Users\musab\AppData\Local\Android\Sdk\platform-tools\adb.exe" -s e3484f25 pull /sdcard/screenshot.png c:\Projects\okul-akli\screenshot.png

# Logcat
"C:\Users\musab\AppData\Local\Android\Sdk\platform-tools\adb.exe" -s e3484f25 logcat -d | findstr /i "error exception"
```

## Typecheck Komutu
```cmd
node "c:\Projects\okul-akli\node_modules\typescript\bin\tsc" -p "c:\Projects\okul-akli\apps\mobile\tsconfig.json" --noEmit
```

## Notlar
- `public-hoist-pattern[]=*` tüm bağımlılıkları root `node_modules`'a hoist eder
- Bu yapılandırma ile Metro artık düzgün çalışıyor
- Logcat'te uygulamadan kaynaklanan hata YOK
