import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import {BottomNavBar} from '../components/BottomNavBar';
import CreateEventScreen from '../screens/CreateEvent';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={BottomNavBar} options={{ headerShown: false }} />
      <Stack.Screen name="EventDetails" component={EventDetailScreen} options={{ title: 'Event Details' }} />
      <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} options={{ 
          title: 'Create New Event', // Set a more user-friendly title
          headerStyle: {
            backgroundColor: '#f4511e', // Example: a colored background
          },
          headerTintColor: '#fff', // Example: white back button and title
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      <Stack.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{ title: 'Accounts' }}
      />
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetailScreen}
        options={{ title: 'Profile Details' }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
