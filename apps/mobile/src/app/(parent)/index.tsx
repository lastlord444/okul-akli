// Okul Aklı - Veli Dashboard
import { View, Text } from 'react-native';

export default function ParentDashboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2E3C4B' }}>Veli Paneli</Text>
      <Text style={{ marginTop: 16, color: '#666' }}>Yakında aktif olacak</Text>
    </View>
  );
}
