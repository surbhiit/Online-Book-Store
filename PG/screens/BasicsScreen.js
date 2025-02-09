import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const BasicsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Image at the top */}
      <Image 
        source={require('./assets/basiccourse.jpg')}  // Replace with your image path
        style={styles.image}
      />

      {/* Content below the image */}
      <Text style={styles.title}>Basics of Meditation</Text>
      <Text style={styles.description}>
        Meditation is a practice where an individual uses a technique—such as mindfulness, or focusing the mind on a particular object, thought, or activity—to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
      </Text>

      <Text style={styles.sectionTitle}>Getting Started:</Text>
      <Text style={styles.tip}>1. Find a Quiet Space.</Text>
      <Text style={styles.tip}>2. Sit Comfortably with your back straight.</Text>
      <Text style={styles.tip}>3. Focus on your breath or a mantra.</Text>
      <Text style={styles.tip}>4. Start with 5-10 minutes daily.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',  // Make the image full width
    height: 200,    // Set the image height
    borderRadius: 10,
    marginBottom: 20, // Add space below the image
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7A6FF0',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#555',
    lineHeight: 28,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7A6FF0',
    marginVertical: 10,
  },
  tip: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#7A6FF0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default BasicsScreen;
