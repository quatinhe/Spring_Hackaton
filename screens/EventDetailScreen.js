import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';

const EventDetailScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.organizer}>Organized by: {event.organizer}</Text>
        <Text style={styles.date}>Date: {event.date}</Text>
        <Text style={styles.location}>Location: {event.location}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Button mode="contained" onPress={() => console.log('Attending')}>
          Attend
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 250
  },
  content: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  organizer: {
    fontSize: 16,
    marginBottom: 5
  },
  date: {
    fontSize: 16,
    marginBottom: 5
  },
  location: {
    fontSize: 16,
    marginBottom: 5
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  }
});

export default EventDetailScreen;
