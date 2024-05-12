import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import Feather icon library
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import EventScreen from '../screens/EventsScreen';
import { Colors } from '../theme/theme';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder={"        Search for..."}
          style={styles.searchInput}
        />
         <Feather name="search" size={24} color="black" style={styles.searchIcon} /> 
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.lighBlue,  
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: 'white', elevation: 0, shadowOpacity: 0 },
          tabBarIndicatorStyle: { backgroundColor:  Colors.lighBlue, height: 4 },
          tabBarPressColor:  Colors.lighBlue,
        }}
      >
        <Tab.Screen name="Events" component={EventScreen} />
        <Tab.Screen name="Accounts" component={AccountsScreen} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  searchIcon: {
    position: 'absolute',
    top: 30,
    left: 25,
    zIndex: 1,
    color: 'gray',
  },
  searchInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 30, 
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1, 
  }
});

export default TopTabNavigator;
