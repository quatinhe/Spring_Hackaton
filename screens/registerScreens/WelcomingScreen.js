// Import necessary React and React Native components
import React from 'react';
import { Text, SafeAreaView, ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Fonts, Colors} from '../../theme/theme';

const WelcomingScreen = (props) => (
    <SafeAreaView style={{ flex: 1 } }>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require('../../assets/LOGO.png')}
              style={styles.logo}
            />
            <Image
              source={require('../../assets/GroupImage.png')}
              style={styles.image}
            />
            
            <Text style={{ fontSize: 35, textAlign: 'center', fontWeight: 'bold', color: '#737B7D', marginTop: 10, marginLeft: 40, marginRight: 40}}>
              Experience your life to the fullest!
            </Text>

            <TouchableOpacity style={styles.buttonLogin} onPress={() => props.navigation.navigate('RegisterScreen')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={() => props.navigation.navigate('RegisterScreen')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginTop: 20,
  },
  image: {
    marginLeft: 10,
    width: 400, // Adjust the width as needed
    height: 400, // Adjust the height as needed
  },
  buttonLogin: {
    width: 100, // Adjust the size of the button
    height: 100, // Adjust the size of the button
    borderRadius: 50, // Half of the width and height to make it circular
    backgroundColor: Colors.lightPink, // Use the primary color from your theme
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white, // Use the text color from your theme
    fontSize: 20, // Set the font size as needed
    fontWeight: 'bold',
  },

  buttonRegister: {
    width: 150, // Adjust the size of the button
    height: 80, // Adjust the size of the button
    borderRadius: 50, // Half of the width and height to make it circular
    backgroundColor: "#D9D9D9", // Use the primary color from your theme
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default WelcomingScreen;