// Okul Aklı - Giriş Ekranı
// Kullanıcı rol seçerek ilgili dashboard'a yönlendirilir
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, type Href } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

type Role = 'student' | 'parent' | 'teacher';

const roles: { key: Role; label: string; description: string }[] = [
  { key: 'student', label: 'Öğrenci', description: 'Devam, notlar ve duyurular' },
  { key: 'parent', label: 'Veli', description: 'Çocuk takibi ve iletişim' },
  { key: 'teacher', label: 'Öğretmen', description: 'Yoklama ve not girişi' },
];

export default function LoginScreen() {
  const router = useRouter();

  const roleRoutes: Record<Role, Href> = {
    student: '/(student)/',
    parent: '/(parent)/',
    teacher: '/(teacher)/',
  };

  const handleRoleSelect = (role: Role) => {
    router.replace(roleRoutes[role]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Okul Aklı</Text>
        <View style={styles.titleUnderline} />
        <Text style={styles.subtitle}>Okul İşletim Sistemi</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.instruction}>Giriş yapmak için rolünüzü seçin</Text>
        {roles.map((role) => (
          <TouchableOpacity
            key={role.key}
            style={styles.roleButton}
            activeOpacity={0.7}
            onPress={() => handleRoleSelect(role.key)}
          >
            <View style={styles.roleContent}>
              <Text style={styles.roleLabel}>{role.label}</Text>
              <Text style={styles.roleDescription}>{role.description}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Bilgi</Text>
          <Text style={styles.infoText}>Giriş bilgileri ve rol yetkileri okul yönetimi tarafından tanımlanır.</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>v1.0 — Erken Erişim</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    alignItems: 'center',
    paddingTop: 72,
    paddingBottom: 48,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2E3C4B',
    letterSpacing: 0.5,
  },
  titleUnderline: {
    width: 48,
    height: 3,
    backgroundColor: '#4A90D9',
    borderRadius: 2,
    marginTop: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    marginTop: 12,
    letterSpacing: 0.3,
  },
  body: {
    paddingHorizontal: 28,
    flex: 1,
  },
  instruction: {
    fontSize: 15,
    color: '#555',
    marginBottom: 28,
    textAlign: 'center',
  },
  roleButton: {
    backgroundColor: '#2E3C4B',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 14,
    marginBottom: 16,
    // Android gölge
    elevation: 3,
    // iOS gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  roleContent: {
    flexDirection: 'column',
  },
  roleLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  roleDescription: {
    fontSize: 13,
    color: '#AABBCC',
    marginTop: 6,
  },
  infoBox: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#E8EDF2',
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A90D9',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  footerText: {
    fontSize: 12,
    color: '#AAA',
  },
});
