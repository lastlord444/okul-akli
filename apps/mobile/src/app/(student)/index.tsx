// Okul Aklı - Öğrenci Dashboard
// Empty placeholder + rol seçimine dönüş butonu
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function StudentDashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Öğrenci Paneli</Text>
      <Text style={styles.placeholder}>Yakında aktif olacak</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.backButtonText}>Rol seçimine dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E3C4B',
  },
  placeholder: {
    marginTop: 16,
    color: '#666',
  },
  backButton: {
    marginTop: 32,
    backgroundColor: '#2E3C4B',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
