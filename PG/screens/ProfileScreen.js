import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [logoutMessage, setLogoutMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const navigation = useNavigation();

  // Image source for the background
  const imageSource = require('./assets/singup.png');  // Make sure you have the correct image path

  const handleSubmit = () => {
    // Simple form validation
    if (!name || !email || !phone) {
      alert('Please fill in all fields!');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    } else {
      setEmailError('');
    }

    // Validate phone number format (only digits and 10 characters)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Invalid phone number format (should be 10 digits)');
      return;
    } else {
      setPhoneError('');
    }

    // After submit, show logout message
    setLogoutMessage('Thank you! Visit again.');

    // After a 2-second delay, close the app
    setTimeout(() => {
      BackHandler.exitApp();  // Close the app after 2 seconds
    }, 2000);
  };

  const handleGoBack = () => {
    navigation.navigate('HomeScreen');  // Navigate to the Home screen
  };

  return (
    <ImageBackground source={imageSource} style={styles.container} imageStyle={styles.imageBackground}>
      <View style={styles.contentContainer}>
        {logoutMessage ? (
          <Text style={styles.message}>{logoutMessage}</Text>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={[styles.input, emailError ? styles.errorInput : null]}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            <TextInput
              style={[styles.input, phoneError ? styles.errorInput : null]}
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </>
        )}

        {/* Go Back Button */}
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  input: {
    width: '80%',
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  errorInput: {
    borderColor: '#d9534f',  // Red border for invalid inputs
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  goBackButton: {
    backgroundColor: '#d9534f',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  errorText: {
    color: '#d9534f',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default ProfileScreen;
