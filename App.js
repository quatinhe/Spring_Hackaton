import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Card } from 'react-native-paper';
import EventCard from './components/EventCard';
import HomeScreen from './screens/HomeScreen'; 

const Stack = createStackNavigator();

// Sample data for events
const events = [
  { id: 1, title: 'Spring Hackaton', description: 'Join us for a fun and challenging hackathon.' },
  { id: 2, title: 'Festival F', description: 'Annual music and arts festival.' },
  { id: 3, title: 'Diego Velazquez Exhibition', description: 'Explore the works of Diego Velazquez.' }
];



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Events' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}