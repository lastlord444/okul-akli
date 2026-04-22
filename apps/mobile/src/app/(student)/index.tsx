// Okul Aklı - Öğrenci Boş Paneli
import { router } from 'expo-router';
import * as React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function StudentDashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Öğrenci Paneli</Text>
        <Text style={styles.description}>
          Öğrenci paneline hoş geldiniz.
          {'\n\n'}
          Burada sınav sonuçlarınız, devam durumunuz,
          duyurular ve daha fazlasını göreceksiniz.
          {'\n\n'}
          Bu ekran henüz geliştirme aşamasındadır.
        </Text>

        <Pressable
          style={styles.backButton}
          onPress={() => router.push('/login')}
          accessibilityLabel="Giriş ekranına dön"
        >
          <Text style={styles.backButtonText}>Giriş Ekranına Dön</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
