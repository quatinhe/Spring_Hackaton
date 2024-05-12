import React from 'react';
import { ScrollView, View, StyleSheet  } from 'react-native';
import ProfileCard from '../components/ProfileCard';

const profiles = [
  {
    id: 1,
    name: "André Singh",
    categories: ['Music', 'Technology'],
    profilePicture: require('../assets/cv.jpg'),
    about: "I want to learn and have fun"
  },
  {
    id: 2,
    name: "João Jorge",
    categories: ['Art', 'Music'],
    profilePicture: require('../assets/joao.jpg')
  },
  {
    id: 3,
    name: "Beatriz Santos",
    categories: ['Art', 'Music'],
    profilePicture: require('../assets/bea.jpg')
  },
  {
    id: 4,
    name: "Ana Silva",
    categories: ['Sports', 'Travel'],
    profilePicture: require('../assets/profileUser/1.jpg')
  },
  {
    id: 5,
    name: "Pedro Costa",
    categories: ['Food', 'Photography'],
    profilePicture: require('../assets/profileUser/2.jpg')
  },
  {
    id: 6,
    name: "Marta Sousa",
    categories: ['Fashion', 'Design'],
    profilePicture: require('../assets/profileUser/3.jpeg')
  },
  {
    id: 7,
    name: "Ricardo Oliveira",
    categories: ['Fitness', 'Health'],
    profilePicture: require('../assets/profileUser/5.jpg')
  },
  {
    id: 8,
    name: "Carolina Ferreira",
    categories: ['Writing', 'Books'],
    profilePicture: require('../assets/profileUser/6.jpg')
  },
  {
    id: 9,
    name: "David Martins",
    categories: ['Gaming', 'Technology'],
    profilePicture: require('../assets/profileUser/7.jpg')
  },
  {
    id: 10,
    name: "Sofia Rodrigues",
    categories: ['Dance', 'Music'],
    profilePicture: require('../assets/profileUser/9.jpeg')
  }
];


const AccountsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onPress={() => {
              navigation.navigate('ProfileScreen', { profile : profile });
            }}
          />
        ))}
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});

export default AccountsScreen;