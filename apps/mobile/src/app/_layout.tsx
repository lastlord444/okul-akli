// Okul Aklı - Root Layout
// Tüm sayfaları sarmalayan ana layout bileşeni
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#2E3C4B' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: 'Okul Akh' }} />
        <Stack.Screen name="(student)/index" options={{ title: 'Öğrenci Paneli' }} />
        <Stack.Screen name="(parent)/index" options={{ title: 'Veli Paneli' }} />
        <Stack.Screen name="(teacher)/index" options={{ title: 'Öğretmen Paneli' }} />
      </Stack>
    </>
  );
}
