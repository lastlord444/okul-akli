// Okul Aklı - Veli Dashboard
// Statik kartlar + rol seçimine dönüş butonu
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// Veli paneli statik kart verileri (gerçek veri yok, ödeme kartı yok)
const parentCards = [
  { title: 'Devamsızlık Özeti', description: 'Çocuğunuzun devam durumunu takip edin', badge: 'Yakında' },
  { title: 'Öğrenci Duyuruları', description: 'Okul ve sınıf duyurularını görüntüleyin', badge: 'Yakında' },
  { title: 'Görüşme Notları', description: 'Öğretmen görüşme notlarını okuyun', badge: 'Yakında' },
];

export default function ParentDashboard() {
  const router = useRouter();

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Hoş geldin, Veli</Text>
      <Text style={styles.sectionTitle}>Veli Paneli</Text>

      <View style={styles.cardGrid}>
        {parentCards.map((card) => (
          <View key={card.title} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{card.badge}</Text>
              </View>
            </View>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </View>
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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
