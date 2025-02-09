import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const daysOfWeek = ['SU', 'M', 'T', 'W', 'TH', 'F', 'S'];

const ReminderScreen = ({ navigation }) => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    Alert.alert('Reminder Saved!');
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      {/* Local Image at the top */}
      <Image
        source={require('./assets/bg1.jpg')} // Update this path to your image's location
        style={styles.image}
      />

      {/* Content Box */}
      <View style={styles.contentBox}>
        <Text style={styles.title}>What time would you like to meditate?</Text>
        <Text style={styles.subtitle}>
          Any time you can choose, but we recommend first thing in the morning.
        </Text>

        <TouchableOpacity style={styles.timePicker} onPress={() => setShowPicker(true)}>
          <Text style={styles.timeText}>
            {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
          </Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display="spinner"
            onChange={(event, date) => {
              setShowPicker(false);
              if (date) setSelectedTime(date);
            }}
          />
        )}

        <Text style={styles.title}>Which day would you like to meditate?</Text>
        <Text style={styles.subtitle}>Everyday is best, but we recommend picking at least five.</Text>

        <FlatList
          data={daysOfWeek}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.dayButton, selectedDays.includes(item) && styles.selectedDay]}
              onPress={() => toggleDay(item)}
            >
              <Text style={[styles.dayText, selectedDays.includes(item) && styles.selectedDayText]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.noThanks}>NO THANKS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentBox: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    marginTop: 220, // Increase this value to adjust for image size (200 + margin for spacing)
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginTop: 20 },
  subtitle: { fontSize: 15, color: '#999', marginBottom: 15 },
  timePicker: { backgroundColor: '#EEE', padding: 15, borderRadius: 10, alignItems: 'center' },
  timeText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  dayButton: {
    width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#EAEAEA', marginHorizontal: 5,
  },
  selectedDay: { backgroundColor: '#333' },
  dayText: { fontSize: 16, color: '#333' },
  selectedDayText: { color: '#FFF' },
  saveButton: {
    backgroundColor: '#8E9BFD', padding: 15, borderRadius: 30, marginTop: 30, alignItems: 'center',
  },
  saveText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  noThanks: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 15 },
});

export default ReminderScreen;
