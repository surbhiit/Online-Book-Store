import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';  // Import AuthContext

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(AuthContext);  // Access setIsLoggedIn from context

  const handleLogin = async () => {
    // Simple regex to validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Input', 'Please enter a valid email address');
      return; // Stop further execution if email is invalid
    }

    try {
      const response = await axios.post('http://192.168.0.107:4000/login', { email, password });

      if (response.status === 200) {
        await AsyncStorage.setItem('authToken', response.data.token);
        setIsLoggedIn(true); // Update the login state in context
        navigation.replace('Welcome'); // Redirect to the Welcome screen
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('./assets/login.jpg')} 
      style={[styles.background, { backgroundColor: 'blue' }]}  // Set the background to blue
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Updated SignUp link style */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: { 
    width: '85%',  // Container width adjustment to make it look more centered
    padding: 30, 
    backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Added a dark transparent background for better readability
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title: { fontSize: 30, fontWeight: 'bold', color: '#FFF', marginBottom: 20 },  // Changed text color to white
  input: { 
    width: '100%', 
    padding: 15, 
    marginBottom: 15, 
    backgroundColor: '#F8F8F8', 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#ddd',
    fontSize: 16,
  },
  button: { 
    backgroundColor: '#6C63FF', 
    padding: 15, 
    borderRadius: 10, 
    width: '100%', 
    alignItems: 'center', 
    marginTop: 10,
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 16 
  },
  signupText: { 
    marginTop: 15, 
    color: '#6C63FF', 
    fontSize: 14,
    fontWeight: 'bold',  // Making the font bold to stand out more
    textShadowColor: '#000',  // Adding shadow for contrast
    textShadowOffset: { width: 1, height: 1 },  // Shadow offset
    textShadowRadius: 5,  // Adding blur to the shadow
  },
});

export default LoginScreen;
