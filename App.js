import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, StatusBar, Image } from 'react-native';
import TabNavigator from './components/TabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import {BottomNavBar} from './components/BottomNavBar';

const Stack = createStackNavigator();

// Sample data for events
const events = [
  { id: 1, title: 'Spring Hackaton', description: 'Join us for a fun and challenging hackathon.', image: require('./assets/FestivalF.png') },
  { id: 2, title: 'Festival F', description: 'Annual music and arts festival.' },
  { id: 3, title: 'Diego Velazquez Exhibition', description: 'Explore the works of Diego Velazquez.' }
];



export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <BottomNavBar />
      </SafeAreaView>
    </NavigationContainer>
  );
}