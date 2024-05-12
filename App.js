import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, StatusBar, Image } from 'react-native';
import TabNavigator from './components/TabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomingScreen from './screens/registerScreens/WelcomingScreen';
import RegistrationScreen from './screens/registerScreens/RegisterScreen';
import InterestScreen from './screens/registerScreens/InterestScreen2';
import AppNavigator from './navigation/AppNavigator';


const Stack = createStackNavigator();


export default function App() {
  var isLogged = false;
  if (isLogged) return (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  </NavigationContainer>);


  
return (
  <NavigationContainer >
    <StatusBar backgroundColor="#EAEAEA" barStyle="light-content" />
    <SafeAreaView style={{ flex: 1 }}> 
      <Stack.Navigator initialRouteName={isLogged ? "MainScreen" : "Welcome"} >
        <Stack.Screen name="Welcome" component={WelcomingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={RegistrationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InterestScreen" component={InterestScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MainScreen" component={AppNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
);
}