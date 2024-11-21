import React, { useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Home'); // Ana sayfaya yönlendir
    } else {
      alert('Lütfen Kullanıcı Adı ve Şifrenizi Kontrol Edin!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoşgeldiniz</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
     <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>Giriş Yap</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000000',
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20, 
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
  },
});
