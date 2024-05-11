// Import necessary React and React Native components
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

// Define the EventCard component
const EventCard = ({ event }) => (
  <Card style={styles.card}>
    <Card.Title title={event.title} />
    <Card.Content>
      <Text>{event.description}</Text>
    </Card.Content>
  </Card>
);

// Define styles specific to the EventCard
const styles = StyleSheet.create({
  card: {
    margin: 10,
  }
});

// Export the EventCard component so it can be imported and used in other files
export default EventCard;
