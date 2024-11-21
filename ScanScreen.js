import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>İlaç Tarama</Text>
      <Text style={styles.subtitle}>Buradan ilaçları tarayabilirsiniz.</Text>
      {/* Tarama işlemi için kamera veya tarayıcı entegrasyonu yapılabilir */}
      <Button title="Tarama Başlat" onPress={() => alert('Tarama Başlatıldı!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});