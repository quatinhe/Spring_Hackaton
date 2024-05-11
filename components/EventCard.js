// Import necessary React and React Native components
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

// Define the EventCard component
const EventCard = ({ event }) => (
  <Card style={styles.card}>
    <Card.Title title={event.title} />
    <Card.Cover source={event.image} />
    <Card.Content>
      <Text>{event.description}</Text>
    </Card.Content>
  </Card>
);

// Define styles specific to the EventCard
const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  image: {
    width: '100%', // Ensure the image takes the full width of the card
    height: 150,  // Set a fixed height, or adjust as needed
  }
});

// Export the EventCard component so it can be imported and used in other files
export default EventCard;
