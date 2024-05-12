import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const AvatarWithName = ({ image, name, lastName, navigation }) => {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('ProfileScreen');
    }} style={styles.container}>
      <Image source={image} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.lastName}>{lastName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 70, 
    height: 70, 
    borderRadius: 45, 
  },
  name: {
    marginTop: 5, 
    fontSize: 13, 
  },
  lastName: {
    fontSize: 13, 
  },
});

export default AvatarWithName;
