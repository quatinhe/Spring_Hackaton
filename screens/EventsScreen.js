import React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView, SafeAreaView } from 'react-native';
import EventCard from '../components/EventCard';
import EventCardHorizontal from '../components/EventCardHorizontal';
import { Colors } from '../theme/theme';
import CategorySelector from '../components/CategorySelector';
import { Feather } from '@expo/vector-icons';


const EventScreen = ({ navigation }) => {

  const events = [
    {
      id: "1",
      title: 'Spring Hackaton',
      description: 'Join us for a fun and challenging \nhackathon.',
      image: require('../assets/SpringHackaton.jpg'),
      avatar: require('../assets/profileUser/1.jpg'),
      date: '2023-05-01',
      duration: 2,
      name: 'Community Org',
      location: 'New York, USA'
    },
    {
      id: "2",
      title: 'Festival F',
      date: '2023-05-01',
      description: 'Annual music and arts\n festival.',
      image: require('../assets/FestivalF.png'),
      avatar: require('../assets/profileUser/1.jpg'),
      name: 'Community Org',
      location: 'London, UK'
    },
    {
      id: "3",
      title: 'Diego Velazquez Exhibition',
      date: '2023-05-01',
      description: 'Explore the works of \nDiego Velazquez.',
      image: require('../assets/velazquez.jpg'),
      avatar: require('../assets/profileUser/1.jpg'),
      name: 'Community Org',
      location: 'Madrid, Spain'
    }
  ];

  const categories = ['Gaming', 'Voleybol', 'Painting', 'Clubbing', "Hiking", "Cooking"];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recomended Activities:</Text>
      <View style={styles.container2}>
        <FlatList
          data={events}
          renderItem={({ item }) => <EventCard  navigation= { navigation} event={item} />}
          keyExtractor={(item) => item.id} 
          horizontal
        />
      </View>
      <Text style={styles.title}>Your Future Activities:</Text>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.containerToggle}>
          <CategorySelector categories={categories} />
          <Feather name="chevron-right" size={24} color="black" style={styles.arrowIcon} />
        </View>
      </SafeAreaView>
      <View style={styles.container2}>
        {events.map(event => (
          <EventCardHorizontal navigation= { navigation} event={event} key={event.id} />
        ))}
      </View>
      <View style={{ marginBottom: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.background,
  },
  container2: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  safeArea: {
    flex: 1,
  },
  containerToggle: {

  },
  arrowIcon: {
    position: 'absolute',
    top: 8,
    right: -8,
  },
});

export default EventScreen;