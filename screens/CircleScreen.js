import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import PictureCard from '../components/PictureCard';

const CircleScreen = ({navigation}) => (
  
    <ScrollView>
    {posts.map((post, index) => (
      <PictureCard key={index} post={post} index={index} small={false} navigation={navigation}/>
    ))}
    <View style={{ marginBottom: 85 }} />
    </ScrollView>

);

const posts = [
  {
    id: "1",
    avatarPhoto: require("../assets/profileUser/1.jpg"),
    profileName: 'John Doe',
    location: 'New York, USA ',
    date: ' April 3, 2024',
    image: require("../assets/posts/camping.jpg"),
    overlayImage: require("../assets/posts/selfie1.webp"),
  },
  {
    id: "2",
    avatarPhoto: require("../assets/profileUser/2.jpg"),
    profileName: 'Edward Smith',
    location: 'London, UK ',
    date: ' May 10, 2024',
    image: require("../assets/posts/concert.jpg"),
    overlayImage: require("../assets/posts/selfie2.jpg"),
  },
  {
    id: "3",
    avatarPhoto: require("../assets/profileUser/3.jpeg"),
    profileName: 'July Roberts',
    location: 'Sydney, Australia ',
    date: ' February 19, 2024',
    image: require("../assets/posts/gaming.jpg"),
    overlayImage: require("../assets/posts/selfie4.jpg"),
  },
  {
    id: "4",
    avatarPhoto: require("../assets/profileUser/9.jpeg"),
    profileName: 'Emily Anderson',
    location: 'Lisbon, Portugal ',
    date: ' January 28, 2024',
    image: require("../assets/posts/tennis.jpg"),
    overlayImage: require("../assets/posts/selfie5.jpg"),
  },
  {
    id: "5",
      avatarPhoto: require("../assets/profileUser/5.jpg"),
      profileName: 'Maria Leonor',
      location: 'Sintra, Portugal ',
      date: ' January 2, 2024',
      image: require("../assets/posts/cooking.jpg"),
      overlayImage: require("../assets/posts/selfie3.jpg"),
    },
];

export default CircleScreen;
