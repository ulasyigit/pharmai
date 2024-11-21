import React from 'react';
import {
  View,
  Text, StyleSheet, Button, ImageBackground, SafeAreaView, Dimensions
} from 'react-native';
import Navbar from './src/components/Navbar/Navbar';
//----------------
const window = Dimensions.get("window")

//----------------------------------
export default function HomeScreen({ navigation }) {
  const handleScan = () => {
    // Kullanıcıyı ilaç tarama ekranına yönlendirme
    navigation.navigate('Scan');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar navigation={navigation} />
      <View>
        <ImageBackground
          source={require('./assets/background.jpg')} // Arka plan resmi dosyasını burada ekleyin
          style={styles.background} // Resmi ekran boyutuna yaymak için style kullanıyoruz
        >
          <View style={styles.container}>
            <Text style={styles.title}>Hoşgeldiniz!</Text>
            <Text style={styles.subtitle}>Uygulamaya başlamak için bir seçenek seçin.</Text>
            <Button title="İlaç Tarama" onPress={handleScan} />
            <Button title="Ayarlar" onPress={() => navigation.navigate('Settings')} />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "auto",
    height: window.height - 60,
    resizeMode: 'cover',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    opacity: 0.8, // Arka planın görünür olmasını sağlamak için şeffaflık ekliyoruz
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Arka plan koyu olursa metin rengini beyaz yapabiliriz
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white', // Arka plan koyu olursa metin rengini beyaz yapabiliriz
  },
});
