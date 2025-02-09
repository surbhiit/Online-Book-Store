import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Sound from 'react-native-sound'; 

const MusicScreen = ({ navigation }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const musicFile = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; 

  const togglePlayPause = () => {
    if (!sound) {
      console.log('Sound not loaded yet');
      return;
    }

    if (isPlaying) {
      sound.pause();
      console.log('Paused');
    } else {
      sound.play((success) => {
        if (success) {
          console.log('Playback finished successfully');
        } else {
          console.log('Playback failed due to audio decoding errors');
        }
      });
      console.log('Playing');
    }
    setIsPlaying(!isPlaying);
  };

  const loadMusic = () => {
    console.log('Loading music...');
    const track = new Sound(musicFile, '', (error) => {
      if (error) {
        console.log('Failed to load sound', error);
        alert('Error loading sound!');
      } else {
        console.log('Sound loaded successfully');
        setSound(track);
      }
    });
  };

  useEffect(() => {
    console.log('Component mounted, loading music...');
    loadMusic();

    return () => {
      console.log('Component unmounted, releasing sound');
      if (sound) {
        sound.release();
      }
    };
  }, []);

  return (
    <ImageBackground source={require('./assets/musicpage1.jpg')} style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Image source={require('./assets/back.jpg')} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Focus Attention</Text>
        <Text style={styles.subtitle}>7 DAYS OF CALM</Text>

        {/* Play/Pause Button */}
        <TouchableOpacity style={styles.playPauseButton} onPress={togglePlayPause}>
          <Image
            source={isPlaying ? require('./assets/stop.jpg') : require('./assets/play.png')}
            style={styles.icon}
          />
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
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    borderRadius: 50,
    zIndex: 10, 
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 80,
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  playPauseButton: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  icon: {
    width: 30, 
    height: 30, 
  },
});

export default MusicScreen;
