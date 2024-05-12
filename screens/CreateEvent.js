import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';


const CreateEventScreen = ({ navigation }) => {
  const [event, setEvent] = React.useState({
    name: '',
    description: '',
    duration: '',
    categories: '',
    date: new Date(),
    image: null,
  });
 
  const handleCreateEvent = () => {
    console.log('Event Created:', event);
    navigation.goBack();
  };

  
  const handleCancel = () => {
    navigation.goBack();
  };
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  
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
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Name of event</Text>
      <TextInput
        style={styles.input}
        value={event.name}
        onChangeText={(text) => setEvent({ ...event, name: text })}
      />

      <Text style={styles.label}>Event Image</Text>
      <Button title="Select Image" onPress={selectImage} />
      {event.image && (
        <Image source={event.image} style={{ width: 200, height: 200 }} />
      )}

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

    <Text style={styles.label}>Indicate categories</Text>
    <TextInput
    style={styles.input}
    value={event.categories}
    onChangeText={(text) => setEvent({ ...event, categories: text })}
    />




      <Text style={styles.label}>Starting Date/Hour</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
        <Text>{event.date.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DatePicker
          value={event.date}
          mode="date"
          display="default"
          onChange={(e, selectedDate) => {
            setShowDatePicker(false);
            
            setEvent(prevEvent => ({ ...prevEvent, date: selectedDate || prevEvent.date }));
          }}
        />
      )}

    <View style={styles.buttonContainer}>
        <Button title="Create Event" onPress={handleCreateEvent} color="#4CAF50" />
        <Button title="Cancel" onPress={handleCancel} color="#F44336" />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dateInput: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default CreateEventScreen;
