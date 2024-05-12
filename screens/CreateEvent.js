import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  Button, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';

const CreateEventScreen = ({ navigation }) => {
  const [event, setEvent] = React.useState({
    name: 'Mario Kart Event',
    description: 'Come have fun playing Mario Kart with us!',
    duration: '5 hours',
    categories: 'Gaming',
    date: new Date(),
    location: 'Lisbon, Portugal',
    image: null,
  });

  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);

  const handleCreateEvent = () => {
    console.log('Event Created:', event);
    // Assuming your event creation logic goes here and is successful
  
    // Navigate to the UpdatedEventsScreen
    navigation.navigate('ProfileScreen2');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const selectImage = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setEvent(prevEvent => ({ ...prevEvent, image: source }));
      }
    });
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || event.date;
    setShowDatePicker(false);
    setEvent(prevEvent => ({ ...prevEvent, date: currentDate }));
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || event.time;
    setShowTimePicker(false);
    setEvent(prevEvent => ({
      ...prevEvent,
      date: new Date(prevEvent.date.setHours(currentTime.getHours(), currentTime.getMinutes()))
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Name of event</Text>
      <TextInput
        style={styles.input}
        value={event.name}
        onChangeText={(text) => setEvent({ ...event, name: text })}
      />

      <Text style={styles.label}>Event description</Text>
      <TextInput
        style={styles.input}
        value={event.description}
        onChangeText={(text) => setEvent({ ...event, description: text })}
        multiline
      />

      <Text style={styles.label}>How long will the event take?</Text>
      <TextInput
        style={styles.input}
        value={event.duration}
        onChangeText={(text) => setEvent({ ...event, duration: text })}
      />

      <Text style={styles.label}>Set location of event</Text>
      <TextInput
        style={styles.input}
        value={event.location}
        onChangeText={(text) => setEvent({ ...event, location: text })}
      />

      <Text style={styles.label}>Indicate categories</Text>
      <TextInput
        style={styles.input}
        value={event.categories}
        onChangeText={(text) => setEvent({ ...event, categories: text })}
      />

      <Text style={styles.label}>Event Image</Text>
      <TouchableOpacity onPress={selectImage} style={styles.button3}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>

      {event.image && (
        <Image source={event.image} style={{ width: 200, height: 200 }} />
      )}

      <Text style={styles.label}>Starting Date</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
        <Text>{event.date.toDateString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DatePicker
          value={event.date}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      <Text style={styles.label}>Starting Time</Text>
      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.dateInput}>
        <Text>{event.date.getHours() + ':' + (event.date.getMinutes() < 10 ? '0' + event.date.getMinutes() : event.date.getMinutes())}</Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DatePicker
          value={event.date}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCreateEvent} style={[styles.button1, { backgroundColor: '#4CAF50' }]}>
          <Text style={styles.buttonText}>Create Event</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCancel} style={[styles.button2, { backgroundColor: '#F44336' }]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0e0e0',
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderRadius: 10, // Rounded corners
    backgroundColor: '#FFFFFF', // White background color for inputs
    padding: 10,
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dateInput: {
    height: 40,
    marginBottom: 12,
    borderRadius: 10, // Rounded corners
    backgroundColor: '#FFFFFF', // White background color for inputs
    padding: 10,
    justifyContent: 'center',
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderRadius: 10, // Rounded corners
    overflow: 'hidden', // Ensures children don't overflow the curved border
  },
  button1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Rounded corners
    marginBottom: 30,
  },
  button2: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Rounded corners
    marginBottom: 30,
  },
  button3: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Rounded corners
    backgroundColor: '#2196F3', // Background color of the button
    marginBottom: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default CreateEventScreen;
