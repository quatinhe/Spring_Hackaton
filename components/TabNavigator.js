import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, TextInput, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Find things to do"
          style={styles.searchInput}
        />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FF385C',  // Example active color matching your image
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: 'white', elevation: 0, shadowOpacity: 0 },
          tabBarIndicatorStyle: { backgroundColor: '#FF385C', height: 4 },
          tabBarPressColor: '#FF385C', // Android ripple color
        }}
      >
        <Tab.Screen name="Events" component={HomeScreen} />
        <Tab.Screen name="Accounts" component={AccountsScreen} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    paddingTop: 20,  // Adjust based on your status bar height
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  searchInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 30,  // Rounded corners
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
  }
});

export default TopTabNavigator;
