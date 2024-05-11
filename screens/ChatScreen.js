import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

const ChatScreen = (props) => {

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
    }
];

const profiles2 = [
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
    profilePicture: require('../assets/joao.jpg'),
    about: "I will become the very best, like no one ever was."
  },
  {
    id: 3,
    name: "Beatriz Santos",
    categories: ['Art', 'Music'],
    profilePicture: require('../assets/bea.jpg'),
    about: "Passionate professional, dedicated to empowering teams, fostering growth, and innovation."
  },
  {
    id: 4,
    name: "Maria Silva",
    categories: ['Business', 'Finance'],
    profilePicture: require('../assets/maria.webp'),
    about: "Strategic thinker with a knack for driving results and fostering collaboration."
  },
  {
    id: 5,
    name: "Sophia Chen",
    categories: ['Technology', 'Engineering'],
    profilePicture: require('../assets/sofia.jpg'),
    about: "Tech enthusiast with a passion for solving complex problems ."
  },
  {
    id: 6,
    name: "David Johnson",
    categories: ['Engineering', 'Technology'],
    profilePicture: require('../assets/david.jpg'),
    about: "Innovative engineer passionate about leveraging technology to solve real-world problems ."
  },
  {
    id: 7,
    name: "Michael Brown",
    categories: ['Finance', 'Business'],
    profilePicture: require('../assets/michael.jpg'),
    about: "Strategic financial analyst with a proven track record."
  }
];


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Chat</Text>
        <View style={styles.topBarContainer}>
          <View style={styles.profileContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.profileContainer}>
              <CircleWithPlus onPress={() => doNothing} />
              {profiles.map((profile, index) => (
                <AvatarWithName key={index} image={profile.avatar} name={profile.name} lastName={profile.lastName} />
              ))}
          </ScrollView>
          </View>
          <View style={styles.tabs}>
            <TouchableOpacity onPress={() => doNothing}>
              <Text style={styles.text}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => doNothing}>
            <Text style={styles.text}>Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => doNothing}>
            <Text style={styles.text}>Buddies</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        {profiles2.map(profile => (
          <>
          <View style={Rowstyles.container}>
            <Image source={profile.profilePicture} style={Avatarstyles.avatar} />
            <View style={Rowstyles.containerText}>
              <Text style={Rowstyles.TextName}>{profile.name}</Text>
              <Text style={Rowstyles.TextDescription}>{profile.about}</Text>
            </View>
            <TouchableOpacity onPress={() => openChat(props, profile.name)}>
            <IconButton icon="message-outline" />
            </TouchableOpacity>
          </View>
          <View style={Rowstyles.horizontalLine}></View>
          </>
        ))}
        <View style={{ marginBottom: 100 }} />
        </ScrollView>
    </View>
  );
};
const doNothing = () => {
  //console.log('nothing');
}

const openChat = (props, name) => {
  props.navigation.navigate('ConversationScreen', {name: name});
}
const AvatarWithName = ({ image, name, lastName }) => {
  return (
    <TouchableOpacity style={Avatarstyles.container}>
      <View style={Avatarstyles.avatarContainer}>
        <Image source={image} style={Avatarstyles.avatar} />
      </View>
      <Text style={Avatarstyles.name}>{name} {lastName}</Text>
    </TouchableOpacity>
  );
}

const Rowstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  containerText: {
    flex: 1,
    marginHorizontal: 10,
  },
  TextName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  TextDescription:{
    fontSize: 15,
    color: 'gray',
  
  },
  horizontalLine: {
    height: 3,
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
  },
});

const Avatarstyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
  },
  avatarContainer: {
    borderColor: 'lightblue', // Border color
    borderWidth: 2, // Border width
    borderRadius: 50,
    padding: 2, // Adjust this to increase/decrease spacing between the image and the border
  },
  avatar: {
    width: 66, // Adjust these values to match the size of the border
    height: 66,
    borderRadius: 50,
  },
  name: {
    marginTop: 5,
    fontSize: 13,
  },
  lastName: {
    fontSize: 13,
  },
});

const CircleWithPlus = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={stylesCircle.container}>
      <View style={stylesCircle.circle}>
        <Text style={stylesCircle.plus}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const stylesCircle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  plus: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#7BD6E3',
    fontStyle: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topBarContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  headerContainer: {
    backgroundColor: '#7BD6E3',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    color: '#fff',  
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileIcon: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    right: 40,
  },
  chatList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});

export default ChatScreen;