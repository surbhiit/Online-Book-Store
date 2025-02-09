import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Function to get the greeting based on the current time of day
  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      return "Good Morning! 🌞 Wishing you a day full of peace and positivity!";
    } else if (currentHour < 17) {
      return "Good Afternoon! 🌅 Keep the positive vibes flowing!";
    } else {
      return "Good Evening! 🌙 May your evening be calm and restful!";
    }
  };

  return (
    <ImageBackground
      source={require('./assets/bgimage.jpg')}  // Your background image
      style={styles.container}
      blurRadius={5} // Subtle background blur for improved text visibility
    >
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./assets/bgimage.jpg')} // Your logo image
          style={styles.logo}
        />
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>{getGreeting()}</Text>
      <Text style={styles.subtitle}>Wishing you peace, focus, and joy today</Text>

      {/* Meditation Thought Box */}
      <View style={styles.meditationThoughtBox}>
        <Text style={styles.meditationThoughtTitle}>Meditation is the key to inner peace.</Text>
        <Text style={styles.meditationThoughtSubtitle}>
          Let your mind settle and find clarity in every breath.
        </Text>
      </View>

      {/* Course Cards */}
      <View style={styles.cardContainer}>
        {/* Basics Box */}
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('BasicsScreen')}
        >
          <ImageBackground 
            source={require('./assets/basiccourse.jpg')}  // Your local image for Basics card
            style={styles.cardBackground}
          >
            <View style={styles.cardOverlay}>
              <Text style={styles.cardTitle}>Basics</Text>
              <Text style={styles.cardSubtitle}>COURSE</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* Relaxation Box */}
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('RelaxationScreen')}
        >
          <ImageBackground 
            source={require('./assets/musicrelaxtion.jpg')}  // Your local image for Relaxation card
            style={styles.cardBackground}
          >
            <View style={styles.cardOverlay}>
              <Text style={styles.cardTitle}>Relaxation</Text>
              <Text style={styles.cardSubtitle}>MUSIC</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        {/* Focus Box */}
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('FocusScreen')}
        >
          <ImageBackground 
            source={require('./assets/focusimage.jpeg')}  // Your local image for Focus card
            style={styles.cardBackground}
          >
            <View style={styles.cardOverlay}>
              <Text style={styles.cardTitle}>Focus</Text>
              <Text style={styles.cardSubtitle}>MEDITATION</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* Happiness Box */}
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('HappinessScreen')}
        >
          <ImageBackground 
            source={require('./assets/Happiness.jpg')}  // Your local image for Happiness card
            style={styles.cardBackground}
          >
            <View style={styles.cardOverlay}>
              <Text style={styles.cardTitle}>Happiness</Text>
              <Text style={styles.cardSubtitle}>MEDITATION</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image 
            source={require('./assets/homeicon.png')} 
            style={styles.bottomNavIcon} 
          />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SleepScreen")}>
          <Image 
            source={require('./assets/sleepicon.png')} 
            style={styles.bottomNavIcon} 
          />
          <Text style={styles.bottomNavText}>Sleep</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("MeditateScreen")}>
          <Image 
            source={require('./assets/meditateicon.png')}
            style={styles.bottomNavIcon} 
          />
          <Text style={styles.bottomNavText}>Meditate</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("MusicScreen")}>
          <Image 
            source={require('./assets/musicicon2.png')} 
            style={styles.bottomNavIcon} 
          />
          <Text style={styles.bottomNavText}>Music</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Image 
            source={require('./assets/profileicon.png')}
            style={styles.bottomNavIcon} 
          />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 60, 
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontStyle: 'italic',
    marginTop: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  meditationThoughtBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 30,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 15,
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  meditationThoughtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7A6FF0',
  },
  meditationThoughtSubtitle: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 10,
    color: '#555',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  card: {
    width: '48%',
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, 
  },
  cardBackground: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  cardOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  bottomNavText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
