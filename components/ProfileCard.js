import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileCard = ({ profile, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Image source={profile.profilePicture} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.categories}>{profile.categories.join(', ')}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // Align items in a row
    padding: 10,
    alignItems: 'center', // Center items vertically in the container
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 5,
    margin: 20,
    borderRadius: 20,
  },
  image: {
    width: 50, // Set the width
    height: 50, // Set the height
    borderRadius: 25, // Half of the width/height to make it round
    marginRight: 10, // Add space between the image and text
  },
  infoContainer: {
    flex: 1, // Take up the remaining space
  },
  name: {
    fontWeight: 'bold',
  },
  categories: {
    color: '#666',
  }
});

export default ProfileCard;
