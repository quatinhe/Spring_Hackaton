import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen'; // Assume you have a HomeScreen
import AccountsScreen from '../screens/AccountsScreen'; // You need to create this
import EventsScreen from '../screens/EventsScreen'; // You need to create this

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ForYou" component={HomeScreen} options={{ title: 'For You' }} />
      <Tab.Screen name="Accounts" component={AccountsScreen} options={{ title: 'Accounts' }} />
      <Tab.Screen name="Events" component={EventsScreen} options={{ title: 'Events' }} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
