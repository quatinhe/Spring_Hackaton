import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import { BottomNavBar } from '../components/BottomNavBar';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEventScreen from '../screens/ProfileEventScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={BottomNavBar} options={{ headerShown: false }} />
      <Stack.Screen name="EventDetails" component={EventDetailScreen} options={{ title: 'Event Details', headerTitleAlign: 'center',  }} />
      <Stack.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{ title: 'Accounts',
        headerTitleAlign: 'center', 
         }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile Details',
          headerTitleAlign: 'center', 
        }}
      />
      <Stack.Screen
        name="ProfileEventScreen"
        component={ProfileEventScreen}
        options={{
          title: 'Profile Details',
          headerTitleAlign: 'center', 
        }}
      />

    </Stack.Navigator>
  );
}

export default AppNavigator;
