import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Colors } from "../theme/theme";

const CircleIcon = ({ icon }) => {
  return (
    <View style={styles.circle}>
      <Image source={icon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: Colors.lightPink,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 33,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.80,
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain', // To ensure the icon fits within the circle
  },
});

export default CircleIcon;
