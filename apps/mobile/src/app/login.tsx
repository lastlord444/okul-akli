// Okul Aklı - Giriş Ekranı
// Kullanıcı rol seçerek ilgili dashboard'a yönlendirilir
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

type Role = 'student' | 'parent' | 'teacher';

const roles: { key: Role; label: string; description: string }[] = [
  { key: 'student', label: 'Öğrenci', description: 'Devam, notlar ve duyurular' },
  { key: 'parent', label: 'Veli', description: 'Çocuk takibi ve ödemeler' },
  { key: 'teacher', label: 'Öğretmen', description: 'Yoklama ve not girişi' },
];

export default function LoginScreen() {
  const router = useRouter();

  const handleRoleSelect = (role: Role) => {
    router.replace(`/${role}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Okul Aklı</Text>
        <Text style={styles.subtitle}>Okul İşletim Sistemi</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.instruction}>Giriş yapmak için rolünüzü seçin</Text>
        {roles.map((role) => (
          <TouchableOpacity
            key={role.key}
            style={styles.roleButton}
            onPress={() => handleRoleSelect(role.key)}
          >
            <Text style={styles.roleLabel}>{role.label}</Text>
            <Text style={styles.roleDescription}>{role.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: { alignItems: 'center', paddingTop: 60, paddingBottom: 40 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#2E3C4B' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 8 },
  body: { paddingHorizontal: 24 },
  instruction: { fontSize: 16, color: '#444', marginBottom: 24, textAlign: 'center' },
  roleButton: {
    backgroundColor: '#2E3C4B',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
  },
  roleLabel: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  roleDescription: { fontSize: 13, color: '#ccc', marginTop: 4 },
});
