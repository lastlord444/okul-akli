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
        <Stack.Screen name="(student)" options={{ title: 'Öğrenci Paneli' }} />
        <Stack.Screen name="(parent)" options={{ title: 'Veli Paneli' }} />
        <Stack.Screen name="(teacher)" options={{ title: 'Öğretmen Paneli' }} />
      </Stack>
    </>
  );
}
