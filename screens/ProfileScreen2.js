import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { Colors } from '../theme/theme';
import EventCard from '../components/EventCard';
import PictureCard from '../components/PictureCard';
import AvatarWithName from '../components/AvatarComponent';
import BottomNavBar from '../components/BottomNavBar'; 

const ProfileScreen2 = ({ navigation }) => {

  const [activeSection, setActiveSection] = useState('events');
  const navigateToEvents = () => {
    navigation.navigate('Accounts');
  };

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

  const events3 = [
    {
      id: "1",
      title: 'Art class',
      description: 'Join us for a fun and challenging \nart class with acrylic painting!',
      image: require('../assets/art.jpg'),
      avatar: require('../assets/profileUser/atelieLogo.jpg'),
      date: '2024-01-31',
      name: 'Clara Mariah Atelie',
      location: 'Porto, Portugal'
    },
    {
      id: "2",
      title: 'Hiking in the mountains',
      date: '2024-08-25',
      description: 'Explore the montains of \nthe Alrgarve.',
      image: require('../assets/hiking.jpg'),
      avatar: require('../assets/profileUser/logoSaoBras.jpeg'),
      name: 'Junta freguesia de São Brás',
      location: 'São Brás, Portugal'
    },
    {
      id: "3",
      title: 'Canoeing',
      date: '2024-08-25',
      description: 'Explore the waters of \nthe lake Léman.',
      image: require('../assets/posts/canooing2.jpg'),
      avatar: require('../assets/profileUser/logoClub.jpeg'),
      name: 'Nautic Club',
      location: 'Genebra, Switzerland'
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

  const data = {
    id: '1',
    name: 'Samantha Smith',
    job: 'Marketing',
    birthdate: 'April 3, 1998',
    description: "I'm Maya, your go-to girl for all things marketing! By day, I'm busy crafting killer campaigns and bringing brands to life. But when the workday's over, you'll find me embracing life to the fullest. I'm a free spirit with a passion for adventure and a love for the simple things.",
    interests: ['Yoga', 'Traveling', 'Reading', 'Singing', 'Animals', 'Socializing'],
    icon: "work-outline",
    images: [require("../assets/profileUser/profile/concert.jpg"),
    require('../assets/profileUser/profile/cicling.jpg'),
    require('../assets/profileUser/profile/dog.jpg'),
    require('../assets/profileUser/profile/ioga.jpg'),
    require('../assets/profileUser/profile/traveling.jpg')]
  };

  const posts = [
    {
      id: '1',
      avatarPhoto: require("../assets/profileUser/7.jpg"),
      profileName: 'Samantha Smith',
      location: 'New York, USA ',
      date: ' April 3, 2024',
      image: require("../assets/posts/camping.jpg"),
      overlayImage: require("../assets/posts/selfie1.webp"),
    },
    {
      id: '2',
      avatarPhoto: require("../assets/profileUser/7.jpg"),
      profileName: 'Samantha Smith',
      location: 'London, UK ',
      date: ' May 10, 2024',
      image: require("../assets/posts/concert.jpg"),
      overlayImage: require("../assets/posts/selfie2.jpg"),
    },
    {
      id: '3',
      avatarPhoto: require("../assets/profileUser/7.jpg"),
      profileName: 'Samantha Smith',
      location: 'Sydney, Australia ',
      date: ' February 19, 2024',
      image: require("../assets/posts/gaming.jpg"),
      overlayImage: require("../assets/posts/selfie4.jpg"),
    },
    {
      id: '4',
      avatarPhoto: require("../assets/profileUser/7.jpg"),
      profileName: 'Samantha Smith',
      location: 'Lisbon, Portugal ',
      date: ' January 28, 2024',
      image: require("../assets/posts/tennis.jpg"),
      overlayImage: require("../assets/posts/selfie5.jpg"),
    },
    {
      id: '5',
      avatarPhoto: require("../assets/profileUser/7.jpg"),
      profileName: 'Samantha Smith',
      location: 'Sintra, Portugal ',
      date: ' January 2, 2024',
      image: require("../assets/posts/cooking.jpg"),
      overlayImage: require("../assets/posts/selfie3.jpg"),
    },
  ];

  const profiles = [
    {
      id: "1",
      avatar: require('../assets/profileUser/1.jpg'),
      name: 'John',
      lastName: 'Smith',
    },
    {
      id: "2",
      avatar: require('../assets/profileUser/2.jpg'),
      name: 'Andrew',
      lastName: 'Miller',
    },
    {
      id: "3",
      avatar: require('../assets/profileUser/3.jpeg'),
      name: 'Emily',
      lastName: 'Adams',
    },
    {
      id: "4",
      avatar: require('../assets/profileUser/5.jpg'),
      name: 'Maria',
      lastName: 'Amélia',
    },
    {
      id: "5",
      avatar: require('../assets/profileUser/6.jpg'),
      name: 'Nuno',
      lastName: 'Guerreiro',
    },
    {
      id: "6",
      avatar: require('../assets/profileUser/9.jpeg'),
      name: 'Lila',
      lastName: 'Yang',
    }
  ];

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper style={styles.swiperContent} loop={false}
          showsPagination={true}
          paginationStyle={styles.paginationStyle}
          activeDotStyle={styles.activeDotStyle} dotStyle={styles.dotStyle}>
          {data.images.map((item, index) => (
            <Image key={index} source={item} style={styles.profileImage} />
          ))}
        </Swiper>
      </View>

      <View style={styles.containerContent}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.professionContainer}>
          <MaterialIcons name={data.icon} size={22} color="black" style={styles.icon} />
          <Text style={styles.profession}>{data.job}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About me</Text>
          <Text style={styles.sectionContent}>
            {data.description}
          </Text>
          <View style={styles.birthdateContainer}>
            <MaterialIcons name="cake" size={22} color="black" style={styles.iconBirthday} />
            <Text style={styles.birthdate}>{data.birthdate}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.interestsContainer}>
            {data.interests.map((interest, index) => (
              <Text key={index} style={styles.interest}>{interest}</Text>
            ))}
          </View>
        </View>

        <View style={styles.toggleButtons}>
          <TouchableOpacity
            style={[styles.toggleButton, activeSection === 'events' && styles.activeToggleButton]}
            onPress={() => toggleSection('events')}
          >
            <Text style={[styles.toggleButtonText, activeSection === 'events' && styles.activeToggleButtonText]}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, activeSection === 'friends' && styles.activeToggleButton]}
            onPress={() => toggleSection('friends')}
          >
            <Text style={[styles.toggleButtonText, activeSection === 'friends' && styles.activeToggleButtonText]}>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, activeSection === 'gallery' && styles.activeToggleButton]}
            onPress={() => toggleSection('gallery')}
          >
            <Text style={[styles.toggleButtonText, activeSection === 'gallery' && styles.activeToggleButtonText]}>Gallery</Text>
          </TouchableOpacity>

        </View>

        {activeSection === 'events' && (
          <View style={styles.sectionToggle}>
            <View style={styles.section}>
              <View style={styles.containerTitle}>
                <Text style={styles.sectionTitle}>My events</Text>
                <Text style={styles.viewAllText}>View all</Text>
              </View>
              <View style={styles.container2}>
                <FlatList
                  data={events}
                  renderItem={({ item }) => <EventCard navigation={navigation} event={item} />}
                  keyExtractor={(item) => item.id}
                  horizontal
                />
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.containerTitle}>
                <Text style={styles.sectionTitle}>My Future events</Text>
                <Text style={styles.viewAllText}>View all</Text>
              </View>
              <View style={styles.container2}>
                <FlatList
                  data={events2}
                  renderItem={({ item }) => <EventCard navigation={navigation} event={item} />}
                  keyExtractor={(item) => item.id}
                  horizontal
                />
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.containerTitle}>
                <Text style={styles.sectionTitle}>My Previous Events</Text>
                <Text style={styles.viewAllText}>View all</Text>
              </View>
              <View style={styles.container2}>
                <FlatList
                  data={events3}
                  renderItem={({ item }) => <EventCard navigation={navigation} event={item} />}
                  keyExtractor={(item) => item.id}
                  horizontal
                />
              </View>
            </View>
          </View>
        )}
        {activeSection === 'friends' && (
          <View style={styles.sectionToggle}>
            <View style={styles.section}>
            <View style={styles.friendsContainer}>
              {profiles.map((profile) => (
                <AvatarWithName
                  key={profile.id}
                  navigation={navigation}
                  image={profile.avatar}
                  name={profile.name}
                  lastName={profile.lastName}
                />
              ))}
            </View>
          </View>


          </View>
        )}
        {activeSection === 'gallery' && (
          <View style={styles.sectionToggle}>
            <View style={styles.section}>
              <View style={styles.containerTitle}>
                <Text style={styles.sectionTitle}>Galery</Text>
                <Text style={styles.viewAllText}>View all</Text>
              </View>
              <View style={styles.container2}>
                <FlatList
                  data={posts}
                  renderItem={({ item }) => <PictureCard navigation={navigation} post={item} index={item.id} small={true} />}
                  keyExtractor={(item) => item.id}
                  horizontal
                />
              </View>
            </View>
          </View>
        )}
        
      </View>
      
      <View style={{ marginBottom: 84 }} />
      <TouchableOpacity onPress={navigateToEvents} style={styles.bottomButton}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    bottomButton: {
        padding: 15,
        backgroundColor: Colors.pink,  // Assuming Colors.pink is defined in your theme
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 20,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
  container: {
    flex: 1,
  },
  container2: {
    marginLeft: -5,
  },
  swiperContainer: {
    height: 350,
  },
  paginationStyle: {
    bottom: 90,
  },
  dotStyle: {
    backgroundColor: 'gray',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDotStyle: {
    backgroundColor: Colors.pink,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  containerContent: {
    backgroundColor: 'white',
    marginTop: -70,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
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
  sectionToggle: {
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
    padding: 10,
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
  },
  iconBirthday: {
    marginRight: 5,
    marginTop: -3,
    color: 'gray',
  },
  birthdateContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: 22,
  },
  birthdate: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 5,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  viewAllText: {
    fontSize: 16,
    color: 'gray',
  },
  toggleButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  toggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeToggleButton: {
    borderBottomColor: Colors.pink,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray', // Initial color of the text
  },
  activeToggleButtonText: {
    color: Colors.pink, // Change color when active
  },
  friendsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  
});

export default ProfileScreen2;
