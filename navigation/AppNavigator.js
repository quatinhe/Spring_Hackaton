import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import AccountsScreen from '../screens/AccountsScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import { BottomNavBar } from '../components/BottomNavBar';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileEventScreen from '../screens/ProfileEventScreen';
import InstaPhoto from '../screens/InstaPhoto';
import ConversationScreen from '../screens/ConversationScreen';
import CreateEventScreen from '../screens/CreateEvent';
import ProfileScreen2 from '../screens/ProfileScreen2';

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
      <Stack.Screen
        name="InstaPhoto"
        component={InstaPhoto}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerTintColor: 'white', 
          headerStyle: {
            backgroundColor: 'black', 
          }, 
        }}
      />
      <Stack.Screen
        name="ConversationScreen"
        component={ConversationScreen}
        options={{
          headerShown: false,
          title: 'Conversation Details',
          headerTitleAlign: 'center', 
        }}
      />
      <Stack.Screen
        name="CreateEventScreen"
        component={CreateEventScreen}
        options={{
          headerShown: false,
          title: 'Create Event',
          headerTitleAlign: 'center', 
        }}
      />
      <Stack.Screen
        name="ProfileScreen2"
        component={ProfileScreen2}
        options={{
          title: 'Profile Details',
          headerTitleAlign: 'center', 
        }}
      />

    </Stack.Navigator>
  );
}

export default AppNavigator;
