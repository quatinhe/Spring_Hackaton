import React, {useState}  from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, View, Text, Image } from 'react-native';
import EventsScreen from '../screens/EventsScreen';
import CircleScreen from '../screens/CircleScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PhotoScreen from '../screens/PhotoScreen';
import {Colors} from "../theme/theme";
import CircleIcon from './CircleIcon';
import TabNavigator from '../components/TabNavigator';
import ProfileEventScreen from '../screens/ProfileEventScreen';

export const BottomNavBar = () => {
    
    const Tab = createBottomTabNavigator();

    const TabScreen = (name, Screen, tabIcon, color, sizeWidth, sizeHeight, isCenterIcon = false) => {

        return (
            <Tab.Screen
              name={name}
              options={{
                tabBarIcon: ({ focused }) => (
                  isCenterIcon ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <CircleIcon icon={require('../assets/icons/camera.png')} />
                    </View>

                  ) : (
                    <View style={{
                      alignItems: "center",
                      justifyContent: "center",
                      top: Platform.OS === 'ios' ? 10 : 0,
                      shadowColor: "#111111",
                    }}>
                      <Image
                        source={tabIcon}
                        resizeMode={'contain'}
                        alt={name + " icon"}
                        style={{
                          width: sizeWidth,
                          height: sizeHeight,
                          tintColor: focused ? color : "#748c94",
                          marginBottom: 2,
                        }}
                      />
                      <Text style={{
                        fontSize: 12, color: focused ? color : "#748c94",
                        
                      }}>
                        {name}
                      </Text>
                    </View>
                  )
                ),
              }}
              component={Screen}
            />
        )
    }

    return (
        <Tab.Navigator
            initialRouteName="Events"
            screenOptions={{
                headerShown: false, tabBarShowLabel: false, tabBarStyle: [styles.bottomBar, styles.shadow], animationEnabled: true
            }}
        >
            {TabScreen("Events", TabNavigator, require("../assets/icons/events.png"), Colors.lighBlue, 40, 30)}
            {TabScreen("Circle", CircleScreen, require("../assets/icons/circle.png"), Colors.veryLighBlue, 40, 30)}
            {TabScreen("Photo", PhotoScreen, require("../assets/icons/camera.png"), Colors.lightPink, 40, 30, isCenterIcon = true)}
            {TabScreen("Chat", ChatScreen, require("../assets/icons/chat.png"), Colors.purple, 25, 30)}
            {TabScreen("Profile", ProfileScreen, require("../assets/icons/profile.png"), Colors.pink, 25, 30)}
        </Tab.Navigator>)

};


const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#111111",
        shadowOffset: {
            width: 5,
            height: 5
        }, shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5

    }, bottomBar: {
        backgroundColor: "#ffffff",
        position: "absolute",
        bottom: 10,
        left: 20,
        right: 20,
        elevation: 5,
        borderRadius: 25,
        height: 75,
    }
});