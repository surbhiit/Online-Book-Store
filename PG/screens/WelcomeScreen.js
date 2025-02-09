import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#A7A6F5", "#857EF8"]} style={styles.container}>
      <Image source={{ uri: 'https://th.bing.com/th/id/OIP.ZG27a9ER7mtdbx52bTmRpgHaNK?rs=1&pid=ImgDetMain' }} style={styles.image} />
      <Text style={styles.title}>Hi, Welcome to Solva</Text>
      <Text style={styles.subtitle}>
        Solva is a place where you find peace and clarity. Flow with the light as you embark on a journey to mindfulness and inner calm.
        Explore the app and experience the tranquility that meditation brings.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChooseTopic')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
  image: { width: '100%', height: 350, resizeMode: 'contain' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#FFF', textAlign: 'center', marginTop: 20 },
  subtitle: { fontSize: 16, color: '#FFF', textAlign: 'center', marginTop: 10, paddingHorizontal: 20 },
  button: { marginTop: 30, backgroundColor: '#FFF', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30 },
  buttonText: { color: '#333', fontSize: 18, fontWeight: 'bold' },
});

export default WelcomeScreen;
