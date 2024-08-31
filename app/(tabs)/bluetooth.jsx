import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
export default  function Bluetooth() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image 
          source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/bluetooth-3757757-3133960.png?f=webp&w=256' }}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>Connect</Text>
      <Text style={styles.subtitle}>to any bluetooth device nearby you</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
        <Text style={styles.buttonText}>Turn on</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0A74DA',
    background: 'linear-gradient(180deg, #00A9F4 0%, #0077C8 100%)', // CSS-like gradient for web
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: '#0077C8',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
