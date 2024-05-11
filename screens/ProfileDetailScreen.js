import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileDetailScreen = ({ route }) => {
  const { profile } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={profile.profilePicture}
        style={[styles.profileImage, styles.absoluteImage]}
      />
      <View style={styles.containerContent}>
        <Text style={styles.name}>{profile.name}</Text>
        <View style={styles.professionContainer}>
          <MaterialIcons name="work-outline" size={22} color="black" style={styles.icon} />
          <Text style={styles.profession}>{profile.profession}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About me</Text>
          <Text style={styles.sectionContent}>
            {profile.about}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <Text style={styles.interestsContainer}>{profile.categories.join(', ')}</Text>
          {/* <View style={styles.interestsContainer}>
            {profile.interests.map((interest, index) => (
              <Text key={index} style={styles.interest}>{interest}</Text>
            ))}
          </View> */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My events</Text>
          {/* Event cards would go here, potentially passed as data or fetched */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerContent: {
    zIndex: 1,
    flexGrow: 1,
    display: 'flex',
    borderRadius: 35,
    backgroundColor: 'white',
    height: '100%',
    marginTop: 250,
  },
  profileImage: {
    width: '100%',
    height: 350,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  absoluteImage: {
    zIndex: -1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: 'gray',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  interest: {
    backgroundColor: 'lightgray',
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
  },
  professionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
    marginTop: -10,
    color: 'gray',
  }
});

export default ProfileDetailScreen;
