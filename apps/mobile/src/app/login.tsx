// Okul Aklı - Giriş Ekranı
// Placeholder: Gerçek backend auth yok, sadece rol seçimi

import { router } from 'expo-router';
import * as React from 'react';
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';

// Basit Türkçe login ekranı - rol seçimi ile
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Okul Aklı</Text>
          <Text style={styles.subtitle}>Okul Yönetim Sistemi</Text>
        </View>

        <View style={styles.roleSection}>
          <Text style={styles.roleTitle}>Giriş Yap</Text>
          <Text style={styles.roleDescription}>
            Lütfen rolünüzü seçin
          </Text>

          <Pressable
            style={styles.roleButton}
            onPress={() => router.push('/(student)')}
            accessibilityLabel="Öğrenci girişi"
          >
            <Text style={styles.roleButtonText}>Öğrenci</Text>
          </Pressable>

          <Pressable
            style={styles.roleButton}
            onPress={() => router.push('/(parent)')}
            accessibilityLabel="Veli girişi"
          >
            <Text style={styles.roleButtonText}>Veli</Text>
          </Pressable>

          <Pressable
            style={styles.roleButton}
            onPress={() => router.push('/(teacher)')}
            accessibilityLabel="Öğretmen girişi"
          >
            <Text style={styles.roleButtonText}>Öğretmen</Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          Bu bir placeholder giriş ekranıdır.
          {'\n'}
          Gerçek kimlik doğrulama yok.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  roleSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  roleTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
    textAlign: 'center',
  },
  roleDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  roleButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  roleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 24,
  },
});
