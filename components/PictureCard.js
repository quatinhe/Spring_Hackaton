import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PictureCard = () => {
  const posts = [
    {
      avatarPhoto: require("../assets/profileUser/1.jpg"),
      profileName: 'John Doe',
      location: 'New York, USA ',
      date: ' April 3, 2024',
      image: require("../assets/posts/camping.jpg"),
      overlayImage: require("../assets/posts/selfie1.webp"),
    },
    {
      avatarPhoto: require("../assets/profileUser/2.jpg"),
      profileName: 'Jane Smith',
      location: 'London, UK ',
      date: ' May 10, 2024',
      image: require("../assets/posts/concert.jpg"),
      overlayImage: require("../assets/posts/selfie2.jpg"),
    },
    {
      avatarPhoto: require("../assets/profileUser/3.jpeg"),
      profileName: 'July Roberts',
      location: 'Sydney, Australia ',
      date: ' February 19, 2024',
      image: require("../assets/posts/gaming.jpg"),
      overlayImage: require("../assets/posts/selfie4.jpg"),
    },
    {
      avatarPhoto: require("../assets/profileUser/9.jpeg"),
      profileName: 'Emily Anderson',
      location: 'Lisbon, Portugal ',
      date: ' January 28, 2024',
      image: require("../assets/posts/tennis.jpg"),
      overlayImage: require("../assets/posts/selfie5.jpg"),
    },
    {
        avatarPhoto: require("../assets/profileUser/5.jpg"),
        profileName: 'Maria Leonor',
        location: 'Sintra, Portugal ',
        date: ' January 2, 2024',
        image: require("../assets/posts/cooking.jpg"),
        overlayImage: require("../assets/posts/selfie3.jpg"),
      },
  ];

  return (
    <View>
      {posts.map((post, index) => (
        <View style={styles.container} key={index}>
          <View style={styles.header}>
            <Image source={post.avatarPhoto} style={styles.avatar} />
            <View style={styles.headerText}>
              <Text style={styles.profileName}>{post.profileName}</Text>
              <Text style={styles.details}>{post.location} - {post.date}</Text>
            </View>
          </View>
          <Image source={post.image} style={styles.image} />
          <Image source={post.overlayImage} style={styles.overlayImage} />
          <View style={styles.iconContainer}>
            <Image source={require("../assets/icons/clapping.png")} style={styles.iconClap} />
            <Image source={require("../assets/icons/coment.png")} style={styles.icon} />
            <Image source={require("../assets/icons/share.png")} style={styles.icon} />
          </View>
        </View>
      ))}
       <View style={{ marginBottom: 100 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
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
  },
  details: {
    fontSize: 14,
    color: '#888',
  },
  image: {
    width: '100%',
    height: 450,
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

export default PictureCard;
