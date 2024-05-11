import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, StatusBar, Image } from 'react-native';
import TabNavigator from './components/TabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomingScreen from './screens/registerScreens/WelcomingScreen';
import RegistrationScreen from './screens/registerScreens/RegisterScreen';
import InterestScreen from './screens/registerScreens/InterestScreen2';

const Stack = createStackNavigator();

// Sample data for events
const events = [
  { id: 1, title: 'Spring Hackaton', description: 'Join us for a fun and challenging hackathon.', image: require('./assets/FestivalF.png') },
  { id: 2, title: 'Festival F', description: 'Annual music and arts festival.' },
  { id: 3, title: 'Diego Velazquez Exhibition', description: 'Explore the works of Diego Velazquez.' }
];

isLogged = false;

export default function App() {

  if (isLogged) return (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <TabNavigator/>
    </SafeAreaView>
  </NavigationContainer>);


  
  return (
    <NavigationContainer >
      <StatusBar backgroundColor="#EAEAEA" barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}> 
        <Stack.Navigator >
          <Stack.Screen name="Welcome" component={WelcomingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RegisterScreen" component={RegistrationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="InterestScreen" component={InterestScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}