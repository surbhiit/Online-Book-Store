import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const AuthSelectionScreen = ({ navigation }) => {
  const imageSource = require('./assets/bg2.jpg');

  return (
    <ImageBackground 
      source={imageSource} 
      style={styles.container}
      imageStyle={styles.imageBackground}
    >
      {/* Title and buttons now directly on top of the background */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Solva</Text>

        <TouchableOpacity 
          style={styles.signupButton} 
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 0,  // Remove padding to make sure background fills the screen
  },
  contentContainer: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 20, 
    width: '100%',
    position: 'absolute',  // Ensure content overlays the background
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,  // Fill the screen entirely
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#FFF',  // White color text for better contrast
    marginBottom: 50, 
    textAlign: 'center', 
    paddingHorizontal: 30, 
    textShadowColor: '#000',  // Add text shadow to enhance readability
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  signupButton: { 
    backgroundColor: '#6C63FF', 
    padding: 15, 
    borderRadius: 30, 
    width: '80%', 
    alignItems: 'center', 
    marginBottom: 15,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  loginButton: { 
    backgroundColor: '#333', 
    padding: 15, 
    borderRadius: 30, 
    width: '80%', 
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  imageBackground: { 
    flex: 1, 
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover', 
    borderRadius: 10, 
  }
});

export default AuthSelectionScreen;
