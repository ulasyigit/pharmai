import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>
      <Button title="Hesap Bilgileri" onPress={() => alert('Hesap Bilgileri Ekranı')} />
      <Button title="Çıkış Yap" onPress={() => alert('Çıkış Yapıldı')} />
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
});