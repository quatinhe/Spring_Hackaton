import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PictureCard = ({post, index, small, navigation}) => {

  return (
    <View style={styles(small).container} key={index}>
      <TouchableOpacity onPress={() => {
      navigation.navigate('ProfileScreen');
    }}>
        <View style={styles(small).header}>
          <Image source={post.avatarPhoto} style={styles(small).avatar} />
          <View style={styles(small).headerText}>
          <Text style={styles(small).profileName}>{post.profileName}</Text>
            <Text style={styles(small).details}>{post.location} - {post.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Image source={post.image} style={styles(small).image} />
      <Image source={post.overlayImage} style={styles(small).overlayImage} />
      <View style={styles(small).iconContainer}>
        <Image source={require("../assets/icons/clapping.png")} style={styles(small).iconClap} />
        <Image source={require("../assets/icons/coment.png")} style={styles(small).icon} />
        <Image source={require("../assets/icons/share.png")} style={styles(small).icon} />
      </View>
    </View>
  );
};

const styles = (small) => StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: small ? 20 : 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: small ? 5 : 10,
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
    height: small ? 300 : 450,
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
    top: small ? '56%' : '60%',
    right: '10%',
  },
});

export default PictureCard;
