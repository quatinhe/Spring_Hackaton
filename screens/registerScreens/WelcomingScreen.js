// Import necessary React and React Native components
import React from 'react';
import { Text, SafeAreaView, ScrollView, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Fonts, Colors } from '../../theme/theme';

const WelcomingScreen = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/LOGO.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../assets/friends.png')}
          style={styles.image}
        />

        <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', color: '#737B7D', marginTop: 15, marginLeft: 40, marginRight: 40 }}>
          Experience your life to the fullest!
        </Text>

        <TouchableOpacity style={styles.buttonLogin} onPress={() => props.navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.container2}>
          <ImageBackground source={require('../../assets/button.png')} style={styles.backgroundImage}>
            <TouchableOpacity style={styles.buttonRegister} onPress={() => props.navigation.navigate('RegisterScreen')}>
              <Text style={styles.buttonText2}>Register</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container2: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    marginTop: -30,
    height: 300,
    width: 300,
    marginRight: 30,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonText2: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 80, // Adjust the width as needed
    height: 80, // Adjust the height as needed
    marginTop: 20,
  },
  image: {
    marginTop: 35,
    marginLeft: 10,
    width: 400, // Adjust the width as needed
    height: 300, // Adjust the height as needed
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
    //backgroundColor: "#D9D9D9", // Use the primary color from your theme
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -130,
    marginLeft: 30,
  },
});

export default WelcomingScreen;