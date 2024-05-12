import React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';
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
    <View style={styles.flexContainer}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Recommended Activities:</Text>
        <View style={styles.container2}>
          <FlatList
            data={events}
            renderItem={({ item }) => <EventCard event={item} />}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <Text style={styles.title}>Your Future Activities:</Text>
        <View style={styles.container2}>
          {events.map(event => (
            <EventCardHorizontal event={event} key={event.id} />
          ))}
        </View>
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        color="black"  // Set the icon color to black
        onPress={() => navigation.navigate('CreateEventScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 10,
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 100,
    backgroundColor: 'green', 
    borderRadius: 30,
  }
});

export default EventScreen;
