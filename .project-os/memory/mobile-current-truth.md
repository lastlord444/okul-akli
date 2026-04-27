# Mobile Current Truth - 2026-04-27

## Proje Durumu
- **Branch**: main
- **Commit**: 8907550c3bf5632046615ac83c7cab815e84ef4b
- **PR**: #2 (MERGED)
- **Metro**: ÇALIŞIYOR (http://localhost:8081)
- **Typecheck**: GREEN

## GitHub Merge Durumu
- **GitHub reported mergeable**: N/A (MERGED)
- **Durum**: PR #2 başarıyla main branch'e merge edildi. Repo truth güncel ve senkronize.

## Metro Başlatma Komutu
```cmd
cmd /c "cd /d c:\Projects\okul-akli\apps\mobile && c:\Projects\okul-akli\node_modules\.bin\expo.cmd start --dev-client --host localhost --clear"
```

## Önemli Düzeltmeler

### 1. Metro `c:\C:\` Path Bug (KRITIK - ÇÖZÜLDÜ)
**Sorun**: pnpm symlink'leri Metro'nun `fileSystem.lookup()` fonksiyonunda Windows sürücü harfi case-insensitivity bug'ına neden oluyordu.

**Çözüm**: `.npmrc` dosyasına `node-linker=hoisted` eklendi.

### 2. Layout Route Uyarıları
**Çözüm**: `_layout.tsx` dosyasında route isimleri güncellendi:
```tsx
<Stack.Screen name="(student)/index" options={{ title: 'Öğrenci Paneli' }} />
<Stack.Screen name="(parent)/index" options={{ title: 'Veli Paneli' }} />
<Stack.Screen name="(teacher)/index" options={{ title: 'Öğretmen Paneli' }} />
```

### 3. Login Routing
**Çözüm**: `router.replace('/(student)')` → `router.replace('/(student)/index')`

### 4. Typo Fix
**Sorun**: `_layout.tsx` içinde `Okul Akh` yazıyordu.
**Çözüm**: `Okul Aklı` olarak düzeltildi.

### 5. Dashboard Dönüş Butonu
**Sorun**: Üç empty dashboard ekranında "Rol seçimine dön" butonu yoktu.
**Çözüm**: Öğrenci, Veli, Öğretmen panellerine `TouchableOpacity` + `router.replace('/login')` ile dönüş butonu eklendi.

### 6. Encoding Fix
**Sorun**: `(teacher)/index.tsx` satır 2'de `dönü��` bozuk karakteri.
**Çözüm**: `dönüş` olarak düzeltildi.

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

## Ekran Yapısı
- **Login**: Rol seçimi (Öğrenci / Veli / Öğretmen)
- **Öğrenci Paneli**: Empty placeholder + "Rol seçimine dön" butonu
- **Veli Paneli**: Empty placeholder + "Rol seçimine dön" butonu
- **Öğretmen Paneli**: Empty placeholder + "Rol seçimine dön" butonu

## Notlar
- Emulator DLL issue: environment problemi, repo blocker değil
- PR #2 merge sonrası post-merge audit tamamlandı, repository senkronize durumda.
