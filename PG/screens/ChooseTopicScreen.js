import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

const topics = [
  { id: '1', title: 'Reduce Stress', color: '#8E9BFD', image: require('./assets/bgimage.jpg') },
  { id: '2', title: 'Improve Performance', color: '#FF6B6B', image: require('./assets/bgimage.jpg') },
  { id: '3', title: 'Increase Happiness', color: '#FFA07A', image: require('./assets/bgimage.jpg') },
  { id: '4', title: 'Reduce Anxiety', color: '#FFD479', image: require('./assets/bgimage.jpg') },
  { id: '5', title: 'Personal Growth', color: '#6FCF97', image: require('./assets/bgimage.jpg') },
  { id: '6', title: 'Better Sleep', color: '#555D7A', image: require('./assets/bgimage.jpg') },
  { id: '7', title: 'Meditation', color: '#B6A0FF', image: require('./assets/bgimage.jpg') }, // Added an extra topic for testing
  { id: '8', title: 'Focus', color: '#FFA07A', image: require('./assets/bgimage.jpg') }, // Added an extra topic for testing
];

const ChooseTopicScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate('CourseDetails')}  // Navigate to CourseDetailsScreen
    >
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What Brings You</Text>
      <Text style={styles.subHeader}>to Silent Moon?</Text>
      <Text style={styles.description}>Choose a topic to focus on:</Text>

      {/* FlatList to display topics in a single column (top to bottom) */}
      <FlatList
        data={topics}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',  // Align items from top to bottom
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 24,
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  grid: {
    // This ensures that all the items are vertically aligned.
    paddingBottom: 20,  // Adds space at the bottom
  },
  card: {
    width: '100%',  // Make sure each card takes the full width available
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,  // Shadow effect for cards
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ChooseTopicScreen;
