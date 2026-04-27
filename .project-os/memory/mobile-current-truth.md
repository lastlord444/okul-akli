# Mobile Current Truth - 2026-04-27

## Proje Durumu
- **Branch**: feat/mobile-visual-polish
- **Commit**: (yeni branch, main'den: d03a70a)
- **PR**: PR #3 (yapılacak)
- **Metro**: ÇALIŞIYOR (http://localhost:8081)
- **Typecheck**: GREEN

## PR #3 Bilgileri
- **Base**: main (d03a70a841286be38e1189bab8913eef9d6e8bd8)
- **Branch**: feat/mobile-visual-polish
- **Amaç**: Statik UI iyileştirme (visual polish)
- **Scope**: Login + 3 dashboard (statik kartlar)

## GitHub Merge Durumu
- **PR #2**: 8907550c3bf5632046615ac83c7cab815e84ef4b (merged)
- **PR #3**: feat/mobile-visual-polish (hazırlanıyor)

## Metro Başlatma Komutu
```cmd
cmd /c "cd /d c:\Projects\okul-akli\apps\mobile && c:\Projects\okul-akli\node_modules\.bin\expo.cmd start --dev-client --host localhost --clear"
```

## Önemli Düzeltmeler

### 1. Metro `c:\C:\` Path Bug (KRITIK - ÇÖZÜLDÜ)
**Çözüm**: `.npmrc` dosyasına `node-linker=hoisted` eklendi.

### 2. Login Visual Polish (PR #3)
**Yapılanlar**:
- Daha profesyonel header (accent underline, daha büyük başlık)
- Role button'lara shadow/elevation + activeOpacity
- Footer versiyon bilgisi eklendi
- Spacing ve typography iyileştirmeleri

### 3. Dashboard Statik Kartlar (PR #3)
**Yapılanlar**:
- Her dashboard'a ScrollView eklendi
- 3'er statik kart eklendi (badge ile "Yakında")
- Greeting mesajı eklendi
- Kartlara elevation + shadow eklendi
- "Ödemeler" kartı EKLENMEDI (scope dışı)

**Öğrenci Kartları**: Ders Programı, Ödevler, Duyurular
**Veli Kartları**: Devamsızlık Özeti, Öğrenci Duyuruları, Görüşme Notları
**Öğretmen Kartları**: Yoklama, Ders Programı, Sınıf Duyuruları

## Fiziksel Cihaz Test
- **Cihaz**: Samsung (e3484f25)
- **APK**: com.okulakli.development
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
- **Login**: Profesyonel header + shadow button'lar + footer
- **Öğrenci Paneli**: ScrollView + 3 statik kart + dönüş butonu
- **Veli Paneli**: ScrollView + 3 statik kart + dönüş butonu
- **Öğretmen Paneli**: ScrollView + 3 statik kart + dönüş butonu

## Notlar
- Emulator DLL issue: environment problemi, repo blocker değil
- ScrollView klavye davranışı: Dashboard'larda input yok, sorun değil
