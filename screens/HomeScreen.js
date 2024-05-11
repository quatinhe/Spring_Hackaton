// Import necessary React and React Native components
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import EventCard from '../components/EventCard';

// Sample data for events
const events = [
  { id: 1, title: 'Spring Hackaton', description: 'Join us for a fun and challenging hackathon.',  image: require('../assets/SpringHackaton.jpg'), description: 'Join us for a fun and challenging hackathon.', date: '2023-05-01', duration: 2, owner: 'Community Org' },
  { id: 2, title: 'Festival F', description: 'Annual music and arts festival.',  image: require('../assets/FestivalF.png') },
  { id: 3, title: 'Diego Velazquez Exhibition', description: 'Explore the works of Diego Velazquez.', image: require('../assets/velazquez.jpg')}
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