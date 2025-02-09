import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const RelaxationScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Image at the top */}
      <Image 
        source={require('./assets/musicrelaxtion.jpg')}  // Replace with your image path
        style={styles.image}
      />

      {/* Content below the image */}
      <Text style={styles.title}>Relaxation Techniques</Text>
      <Text style={styles.description}>
        Relaxation is a process that reduces stress and helps you achieve a calm state. 
        This can be done through deep breathing, muscle relaxation, visualization, or listening to calming music.
      </Text>

      <Text style={styles.sectionTitle}>Techniques for Relaxation:</Text>
      <Text style={styles.tip}>1. Deep Breathing: Breathe in for 4 seconds, hold for 4 seconds, and exhale slowly.</Text>
      <Text style={styles.tip}>2. Progressive Muscle Relaxation: Tense and relax each muscle group in your body.</Text>
      <Text style={styles.tip}>3. Visualization: Picture yourself in a peaceful and serene environment.</Text>
      <Text style={styles.tip}>4. Listen to calming sounds or soothing music.</Text>

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
    width: '100%',  // Full width
    height: 200,    // Set height for the image
    borderRadius: 10,
    marginBottom: 20, // Space below the image
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

export default RelaxationScreen;
