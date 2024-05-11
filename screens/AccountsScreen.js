import React from 'react';
import { ScrollView, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';

const profiles = [
  {
    id: 1,
    name: "André Singh",
    categories: ['Music', 'Technology'],
    profilePicture: require('../assets/cv.jpg')
  },
  {
    id: 2,
    name: "João Jorge",
    categories: ['Art', 'Music'],
    profilePicture: require('../assets/FestivalF.png')
  },
  {
      id: 3,
      name: "Beatriz Santos",
      categories: ['Art', 'Music'],
      profilePicture: require('../assets/FestivalF.png')
    },
  // Add more profiles as needed
];

const AccountsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onPress={() => navigation.navigate('ProfileDetail', { profileId: profile.id })}
        />
      ))}
    </ScrollView>
  );
};

export default AccountsScreen;