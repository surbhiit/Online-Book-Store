import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const FocusScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Image at the top */}
      <Image 
        source={require('./assets/focusimage.jpeg')}  // Replace with your image path
        style={styles.image}
      />

      {/* Content below the image */}
      <Text style={styles.title}>Focus and Concentration</Text>
      <Text style={styles.description}>
        Focus is the ability to direct your attention to a specific task or object, ignoring distractions. 
        It is key to improving productivity, learning, and overall mental clarity.
      </Text>

      <Text style={styles.sectionTitle}>Techniques to Improve Focus:</Text>
      <Text style={styles.tip}>1. Eliminate Distractions: Find a quiet place and remove distractions.</Text>
      <Text style={styles.tip}>2. Break Tasks into Smaller Steps: Focus on one small task at a time.</Text>
      <Text style={styles.tip}>3. Use a Timer: Set a timer for intervals of focused work followed by short breaks.</Text>
      <Text style={styles.tip}>4. Practice Mindfulness: Stay present in the task you're working on.</Text>

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

export default FocusScreen;
