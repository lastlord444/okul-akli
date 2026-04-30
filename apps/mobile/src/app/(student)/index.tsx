// Okul Aklı - Öğrenci Dashboard
// Statik kartlar + rol seçimine dönüş butonu
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

// Öğrenci paneli statik kart verileri (gerçek veri yok)
const studentCards = [
  { icon: '📚', title: 'Ders Programı', description: 'Haftalık ders programınızı görüntüleyin', badge: 'Yakında' },
  { icon: '📝', title: 'Ödevler', description: 'Bekleyen ve tamamlanan ödevlerinizi takip edin', badge: 'Yakında' },
  { icon: '📢', title: 'Duyurular', description: 'Okul ve sınıf duyurularını okuyun', badge: 'Yakında' },
];

export default function StudentDashboard() {
  const router = useRouter();

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Hoş geldin, Öğrenci</Text>
      <Text style={styles.sectionTitle}>Öğrenci Paneli</Text>

      <View style={styles.cardGrid}>
        {studentCards.map((card) => (
          <Pressable
            key={card.title}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            onPress={() => Alert.alert('Yakında', 'Bu modül henüz aktif değil.')}
          >
            <View style={styles.cardHeader}>
              <View style={styles.cardTitleRow}>
                <Text style={styles.iconText}>{card.icon}</Text>
                <Text style={styles.cardTitle}>{card.title}</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{card.badge}</Text>
              </View>
            </View>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </Pressable>
        ))}
      </View>

      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.7}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.backButtonText}>Rol seçimine dön</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    padding: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  greeting: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E3C4B',
    marginBottom: 20,
  },
  cardGrid: {
    gap: 14,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    // Android gölge
    elevation: 2,
    // iOS gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  cardPressed: {
    opacity: 0.92,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconText: {
    fontSize: 18,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E3C4B',
  },
  badge: {
    backgroundColor: '#E8EDF2',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 11,
    color: '#7A8A9E',
    fontWeight: '500',
  },
  cardDescription: {
    fontSize: 13,
    color: '#777',
    lineHeight: 18,
  },
  backButton: {
    marginTop: 32,
    backgroundColor: '#2E3C4B',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
