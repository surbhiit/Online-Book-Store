import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';  // Import AuthContext

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(AuthContext);  // Access setIsLoggedIn from context

  const handleSignUp = async () => {
    // Simple regex to validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Input', 'Please enter a valid email address');
      return; // Stop further execution if email is invalid
    }

    try {
      const response = await axios.post('http://192.168.0.107:4000/signup', { email, password });

      if (response.status === 201) {
        const loginResponse = await axios.post('http://192.168.0.107:4000/login', { email, password });

        if (loginResponse.status === 200) {
          await AsyncStorage.setItem('authToken', loginResponse.data.token);
          setIsLoggedIn(true);  // Update the login state in context
          navigation.replace('Welcome'); // Redirect to Welcome screen
        }
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <ImageBackground
      source={require('./assets/login.jpg')} // Path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupText}>Already have an account? Log In</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Dark transparent background for better readability
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#FFF', 
    marginBottom: 20 
  },
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
    fontWeight: 'bold',  // Make text bold to stand out more
    textShadowColor: '#000',  // Add shadow to improve contrast
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,  // Blur the shadow
  },
});

export default SignUpScreen;
