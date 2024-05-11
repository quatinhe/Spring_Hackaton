import React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import EventCard from '../components/EventCard';
import EventCardHorizontal from '../components/EventCardHorizontal';

const EventScreen = ({ }) => {

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

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recomended Activities:</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  container2: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default EventScreen;