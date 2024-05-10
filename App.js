import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

// Sample data for events
const events = [
  { id: 1, title: 'Spring Hackaton', description: 'Join us for a fun and challenging hackathon.' },
  { id: 2, title: 'Festival F', description: 'Annual music and arts festival.' },
  { id: 3, title: 'Diego Velazquez Exhibition', description: 'Explore the works of Diego Velazquez.' }
];

// Event Card Component
const EventCard = ({ event }) => (
  <Card style={{ margin: 10 }}>
    <Card.Title title={event.title} />
    <Card.Content>
      <Text>{event.description}</Text>
    </Card.Content>
  </Card>
);

// Main Screen
const HomeScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </ScrollView>
  </SafeAreaView>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Events' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
