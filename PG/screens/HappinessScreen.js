import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const HappinessScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Image at the top */}
      <Image 
        source={require('./assets/Happiness.jpg')}  // Replace with your image path
        style={styles.image}
      />

      {/* Content below the image */}
      <Text style={styles.title}>The Path to Happiness</Text>
      <Text style={styles.description}>
        Happiness is a state of mind and an emotional condition that comes from having a sense of contentment, 
        joy, and satisfaction in life. It can be cultivated by focusing on positive thoughts and actions.
      </Text>

      <Text style={styles.sectionTitle}>Tips for Achieving Happiness:</Text>
      <Text style={styles.tip}>1. Practice Gratitude: Focus on the things you are thankful for.</Text>
      <Text style={styles.tip}>2. Connect with Loved Ones: Spend time with family and friends.</Text>
      <Text style={styles.tip}>3. Engage in Activities You Enjoy: Whether it's a hobby, sports, or art.</Text>
      <Text style={styles.tip}>4. Help Others: Acts of kindness boost happiness and well-being.</Text>

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

export default HappinessScreen;
