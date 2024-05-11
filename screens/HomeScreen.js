// Import necessary React and React Native components
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import EventCard from '../components/EventCard';

// Sample data for events
const events = [
  { id: 1, title: 'Spring Hackaton', description: 'Join us for a fun and challenging hackathon.' },
  { id: 2, title: 'Festival F', description: 'Annual music and arts festival.' },
  { id: 3, title: 'Diego Velazquez Exhibition', description: 'Explore the works of Diego Velazquez.' }
];

// HomeScreen component definition
const HomeScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </ScrollView>
  </SafeAreaView>
);

// Export the HomeScreen component so it can be imported and used in other files
export default HomeScreen;
