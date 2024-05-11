import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import EventsScreen from '../screens/EventsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Events">
      <Stack.Screen name="Events" component={EventsScreen} options={{ title: 'Discover Events' }} />
      <Stack.Screen name="EventDetails" component={EventDetailScreen} options={{ title: 'Event Details' }} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
