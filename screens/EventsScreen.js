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
      avatar: require('../assets/profileUser/logoNinf.png'),
      date: '2024-05-12',
      duration: 2,
      name: 'Núcleo de informática',
      location: 'Caparica, Portugal'
    },
    {
      id: "2",
      title: 'Festival F',
      date: '2024-09-15',
      description: 'Annual music and arts\n festival.',
      image: require('../assets/FestivalF.png'),
      avatar: require('../assets/profileUser/logoF.jpeg'),
      name: 'Câmara municipal de Faro',
      location: 'Faro, Portugal'
    },
    {
      id: "3",
      title: 'Cooking class',
      date: '2024-01-15',
      description: 'Increase your cooking skills\nwhile having fun!',
      image: require('../assets/cookingclass.jpg'),
      avatar: require('../assets/profileUser/cookingLogo.png'),
      name: 'Cooking School',
      location: 'Madrid, Spain'
    },
    {
      id: "4",
      title: 'Canoeing',
      date: '2024-08-25',
      description: 'Explore the waters of \nthe lake Naoh.',
      image: require('../assets/posts/canooing2.jpg'),
      avatar: require('../assets/profileUser/logoClub.jpeg'),
      name: 'Nautic Club',
      location: 'Nuremberg, Germany'
    },
  ];

  const events2 = [
    {
      id: "1",
      title: 'Canoeing',
      date: '2024-08-25',
      description: 'Explore the waters of \nthe lake Léman.',
      image: require('../assets/posts/canooing2.jpg'),
      avatar: require('../assets/profileUser/logoClub.jpeg'),
      name: 'Nautic Club',
      location: 'Genebra, Switzerland'
    },
    {
      id: "2",
      title: 'Art class',
      description: 'Join us for a fun and challenging \nart class with acrylic painting!',
      image: require('../assets/art.jpg'),
      avatar: require('../assets/profileUser/atelieLogo.jpg'),
      date: '2024-01-31',
      name: 'Clara Mariah Atelie',
      location: 'Porto, Portugal'
    },
    {
      id: "3",
      title: 'Hiking in the mountains',
      date: '2024-08-25',
      description: 'Explore the montains of \nthe Alrgarve.',
      image: require('../assets/hiking.jpg'),
      avatar: require('../assets/profileUser/logoSaoBras.jpeg'),
      name: 'Junta freguesia de São Brás',
      location: 'São Brás, Portugal'
    },
    {
      id: "4",
      title: 'Noth Festival',
      date: '2025-08-15',
      description: 'Go to the biggest music festival\nin the north of Portugal!',
      image: require('../assets/festivalNorth.jpg'),
      avatar: require('../assets/profileUser/festivalLogo.png'),
      name: 'Noth Events',
      location: 'Porto, Portugal'
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
            renderItem={({ item }) => <EventCard event={item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <Text style={styles.title}>Your Future Activities:</Text>
        <View style={styles.container2}>
          {events2.map(event => (
            <EventCardHorizontal event={event} key={event.id} navigation={navigation} />
          ))}
        </View>
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        color="white"  // Set the icon color to black
        onPress={() => navigation.navigate('CreateEventScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: Colors.background,
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
    backgroundColor: Colors.lighBlue, 
    borderRadius: 40,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center', // Center the icon horizontally and vertically
  }
});

export default EventScreen;
