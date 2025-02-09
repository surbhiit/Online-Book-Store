import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SleepScreen = () => {
  const navigation = useNavigation();

  const imageSource = require('./assets/sleep.jpg'); // Ensure the image path is correct

  return (
    <ImageBackground
      source={imageSource}
      style={styles.container}
      imageStyle={styles.imageBackground}
    >
      {/* Content at the top of the screen */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Sleep</Text>
        <Text style={styles.subtitle}>
          “Sleep is the best meditation.” - Dalai Lama
        </Text>
        <Text style={styles.description}>
          Explore the new way to peaceful sleep. Immerse yourself in calming sounds
          and visuals for a refreshing night.
        </Text>
      </View>

      {/* Go Back Button at the bottom */}
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate("HomeScreen")}  // Navigate to HomeScreen
      >
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "flex-start", // Align content to the top
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "flex-start", // Align content to the top
    paddingHorizontal: 20,
    position: 'absolute',  // Ensures content overlays the background
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 50, // Adds space from the top for better visuals
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
    paddingHorizontal: 30,
    textShadowColor: "#000", // Text shadow for better readability
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#ccc",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 30,
  },
  goBackButton: {
    backgroundColor: "#555",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    position: 'absolute',  // Position the button at the bottom
    bottom: 20, // Adjust distance from the bottom
  },
  goBackText: {
    fontSize: 16,
    color: "#fff",
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default SleepScreen;
