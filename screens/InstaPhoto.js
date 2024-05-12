import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const InstaPhoto = ({navigation }) => {

  const post = {
    id: '1',
    avatarPhoto: require("../assets/profileUser/7.jpg"),
    profileName: 'Samantha Smith',
    location: 'New York, USA ',
    date: ' April 3, 2024',
    image: require("../assets/posts/camping.jpg"),
    overlayImage: require("../assets/posts/selfie1.webp"),
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
      navigation.navigate('ProfileScreen');
    }}>
        <View style={styles.header}>
          <Image source={post.avatarPhoto} style={styles.avatar} />
          <View style={styles.headerText}>
            <Text style={styles.profileName}>{post.profileName}</Text>
            <Text style={styles.details}>{post.location} - {post.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Image source={post.image} style={styles.image} />
      <Image source={post.overlayImage} style={styles.overlayImage} />
      <View style={styles.iconContainer}>
        <Image source={require("../assets/icons/clappingWhite.png")} style={styles.iconClap} />
        <Image source={require("../assets/icons/comentWhite.png")} style={styles.icon} />
        <Image source={require("../assets/icons/shareWhite.png")} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  details: {
    fontSize: 14,
    color: 'white',
  },
  image: {
    width: '100%',
    height: '82%',
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  icon: {
    marginRight: 20,
    marginBottom: 10,
    width: 28,
    height: 28,
  },
  iconClap: {
    marginRight: 20,
    marginBottom: 12,
    width: 33,
    height: 33,
    bottom: 5,
  },
  overlayImage: {
    position: 'absolute',
    width: '25%',
    height: '25%',
    resizeMode: 'cover',
    borderRadius: 10,
    top: '60%',
    right: '10%',
  },
});

export default InstaPhoto;
