import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const goodThoughts = [
  "You are capable of achieving great things.",
  "Take time to rest and recharge.",
  "Every moment is a chance to grow.",
  "Your mind deserves peace and calm."
];

const MeditateScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Image at the top */}
      <Image 
        source={require('./assets/medidate.jpg')}  // Replace with your image path
        style={styles.image}
      />

      {/* Go Back Button */}
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Meditate</Text>
      <Text style={styles.subtitle}>
        We can learn how to recognize when our minds are doing their normal everyday acrobatics.
      </Text>

      {/* Good Thoughts Boxes */}
      <View style={styles.thoughtsContainer}>
        {goodThoughts.map((thought, index) => (
          <View key={index} style={styles.thoughtBox}>
            <Text style={styles.thoughtText}>{thought}</Text>
          </View>
        ))}
      </View>
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
    height: 250,    // Adjust the height as per requirement
    borderRadius: 10,
    marginBottom: 20, // Space below the image
  },
  goBackButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#7F7FFF',
    padding: 10,
    borderRadius: 5,
    zIndex: 1, // Ensures it appears above the image
  },
  goBackText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7A6FF0',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    lineHeight: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  thoughtsContainer: { 
    marginTop: 20, 
    marginBottom: 20 
  },
  thoughtBox: { 
    backgroundColor: "#F2F2F2", 
    padding: 20, 
    borderRadius: 10, 
    marginBottom: 15, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow effect
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  thoughtText: { 
    fontSize: 16, 
    color: "#333", 
    textAlign: "center",
    fontStyle: "italic", // Optional: Adds a nice touch of style
  },
});

export default MeditateScreen;
