import React from 'react';
import { ScrollView, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import profiles from '../data/profile';

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
