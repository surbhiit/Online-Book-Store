import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Keep this import for other icons
// Import the custom back icon image
import backIcon from './assets/back.jpg';  // Ensure the path is correct

const courseDetails = {
  title: "Happy Morning",
  description: "Ease the mind into a restful night’s sleep with these deep, ambient tones.",
  favorites: "24.234",
  listening: "34.234",
  image: "https://th.bing.com/th/id/R.3145d0a583e098be3d0686b5c0498112?rik=Gpa7mzIAQ8cbZw&riu=http%3a%2f%2fkalmawareness.com%2fwp-content%2fuploads%2f2023%2f10%2f2471_2.webp&ehk=6FlZ9nAXBb2NTqGwbWzaz5urw%2bWQ3Q7CQGC1gbsO2uw%3d&risl=&pid=ImgRaw&r=0",  
  narrators: ["Male Voice", "Female Voice"],
  tracks: [
    { id: "1", title: "Focus Attention", duration: "10 MIN" },
    { id: "2", title: "Body Scan", duration: "5 MIN" },
    { id: "3", title: "Making Happiness", duration: "3 MIN" }
  ]
};

const CourseDetailsScreen = ({ navigation }) => {
  const [selectedNarrator, setSelectedNarrator] = useState("Male Voice");

  return (
    <View style={styles.container}>
      {/* Header with Image */}
      <View style={styles.header}>
        <Image source={{ uri: courseDetails.image }} style={styles.courseImage} />
        {/* Replace the back button with a custom image */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.backIcon} /> {/* Custom Back Icon */}
        </TouchableOpacity>
        <View style={styles.topRightIcons}>
          <Ionicons name="heart-outline" size={24} color="#333" style={styles.icon} />
          <Ionicons name="download-outline" size={24} color="#333" />
        </View>
      </View>

      {/* Course Details */}
      <Text style={styles.title}>{courseDetails.title}</Text>
      <Text style={styles.subtitle}>COURSE</Text>
      <Text style={styles.description}>{courseDetails.description}</Text>

      {/* Favorites & Listening */}
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Ionicons name="heart" size={18} color="#ff5a5f" />
          <Text style={styles.statText}>{courseDetails.favorites} Favorites</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="headset" size={18} color="#5a9cff" />
          <Text style={styles.statText}>{courseDetails.listening} Listening</Text>
        </View>
      </View>

      {/* Narrator Selection */}
      <Text style={styles.narratorTitle}>Pick a Narrator</Text>
      <View style={styles.narratorSelection}>
        {courseDetails.narrators.map((narrator) => (
          <TouchableOpacity
            key={narrator}
            style={[styles.narratorButton, selectedNarrator === narrator && styles.selectedNarrator]}
            onPress={() => setSelectedNarrator(narrator)}
          >
            <Text style={[styles.narratorText, selectedNarrator === narrator && styles.selectedNarratorText]}>
              {narrator}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Track List */}
      <FlatList
        data={courseDetails.tracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.trackItem}>
            <TouchableOpacity style={styles.playButton}>
              <Ionicons name="play-circle" size={28} color={item.id === "1" ? "#8E9BFD" : "#CCC"} />
            </TouchableOpacity>
            <View>
              <Text style={styles.trackTitle}>{item.title}</Text>
              <Text style={styles.trackDuration}>{item.duration}</Text>
            </View>
          </View>
        )}
      />

      {/* Button to navigate to ReminderScreen */}
      <TouchableOpacity
        style={styles.reminderButton}
        onPress={() => navigation.navigate('ReminderScreen')}  
      >
        <Text style={styles.reminderButtonText}>Set Meditation Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20 },
  header: { position: 'relative', alignItems: 'center' },
  courseImage: { width: '100%', height: 200, borderRadius: 20 },
  backButton: { position: 'absolute', left: 15, top: 15, backgroundColor: '#FFF', borderRadius: 20, padding: 10 },
  backIcon: { width: 24, height: 24 }, // Adjust size as needed
  topRightIcons: { position: 'absolute', right: 15, top: 15, flexDirection: 'row' },
  icon: { marginLeft: 10 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#333', marginTop: 20 },
  subtitle: { fontSize: 16, fontWeight: '300', color: '#333' },
  description: { fontSize: 16, color: '#999', marginVertical: 10 },
  stats: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  statItem: { flexDirection: 'row', alignItems: 'center' },
  statText: { marginLeft: 5, color: '#333' },
  narratorTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 20 },
  narratorSelection: { flexDirection: 'row', marginTop: 10 },
  narratorButton: { padding: 10, borderRadius: 15, margin: 5, backgroundColor: '#E9E9E9' },
  narratorText: { fontSize: 16, color: '#333' },
  selectedNarrator: { backgroundColor: '#8E9BFD' },
  selectedNarratorText: { color: '#FFF' },
  trackItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  playButton: { marginRight: 15 },
  trackTitle: { fontSize: 16, color: '#333' },
  trackDuration: { fontSize: 14, color: '#999' },
  reminderButton: {
    backgroundColor: '#8E9BFD',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  reminderButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});

export default CourseDetailsScreen;
