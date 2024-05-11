import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import {BottomNavBar} from '../components/BottomNavBar';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={BottomNavBar} options={{ headerShown: false }} />
      <Stack.Screen name="EventDetails" component={EventDetailScreen} options={{ title: 'Event Details' }} />
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
