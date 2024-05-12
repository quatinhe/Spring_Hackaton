import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

const ChatScreen = ({navigation}) => {

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
    about: "Aspiring Software Engineer"
  },
  {
    id: 2,
    name: "João Jorge",
    categories: ['Art', 'Music'],
    profilePicture: require('../assets/joao.jpg'),
    about: "Future Artist"
  },
  {
    id: 3,
    name: "Beatriz Santos",
    categories: ['Art', 'Music'],
    profilePicture: require('../assets/bea.jpg'),
    about: "Creative Director"
  },
  {
    id: 4,
    name: "Maria Silva",
    categories: ['Business', 'Finance'],
    profilePicture: require('../assets/maria.webp'),
    about: "Strategic Business Analyst"
  },
  {
    id: 5,
    name: "Sophia Chen",
    categories: ['Technology', 'Engineering'],
    profilePicture: require('../assets/sofia.jpg'),
    about: "Software Developer"
  },
  {
    id: 6,
    name: "David Johnson",
    categories: ['Engineering', 'Technology'],
    profilePicture: require('../assets/david.jpg'),
    about: "Product Engineer"
  },
  {
    id: 7,
    name: "Michael Brown",
    categories: ['Finance', 'Business'],
    profilePicture: require('../assets/michael.jpg'),
    about: "Financial Analyst"
  }
];

const [activeTab, setActiveTab] = useState('All');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTab = (tabName) => (
    <TouchableOpacity onPress={() => handleTabPress(tabName)} style={[styles.tab, activeTab === tabName && styles.activeTab]}>
      <Text style={[styles.textTab, activeTab === tabName && styles.activeText]}>{tabName}</Text>
    </TouchableOpacity>
  );

  const openChat = (name) => {
    navigation.navigate('ConversationScreen', {name: name});
  }


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Chat</Text>
        <View style={styles.topBarContainer}>
          <View style={styles.profileContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.profileContainer}>
              <CircleWithPlus onPress={() => navigation.navigate("Photo")} />
              {profiles.map((profile, index) => (
                <AvatarWithName navigation = {navigation} key={index} image={profile.avatar} name={profile.name} lastName={profile.lastName} />
              ))}
          </ScrollView>
          </View>
          <View style={styles.tabs}>
          {renderTab('All')}
            {renderTab('Friends')}
            {renderTab('Groups')}
          </View>
        </View>
      </View>
      <ScrollView style={styles.chatContainer}>
        {profiles2.map((profile, index) => (
          <View key={index} >
          <View style={Rowstyles.container}>
            <Image source={profile.profilePicture} style={Avatarstyles.avatar} />
            <View style={Rowstyles.containerText}>
              <Text style={Rowstyles.TextName}>{profile.name}</Text>
              <Text style={Rowstyles.TextDescription}>{profile.about}</Text>
            </View>
            <TouchableOpacity onPress={() => openChat(profile.name)}>
            <IconButton icon="message-outline" />
            </TouchableOpacity>
          </View>
          <View style={Rowstyles.horizontalLine}></View>
          </View>
        ))}
        <View style={{ marginBottom: 100 }} />
        </ScrollView>
    </View>
  );
};
const doNothing = () => {
  //console.log('nothing');
}

const AvatarWithName = ({ image, name, lastName, navigation, index }) => {
  return (
    <TouchableOpacity key={index} style={Avatarstyles.container} onPress={() => {
      navigation.navigate('InstaPhoto');
    }}>
      <View style={Avatarstyles.avatarContainer}>
        <Image source={image} style={Avatarstyles.avatar} />
      </View>
      <Text style={Avatarstyles.name}>{name}</Text>
      <Text style={Avatarstyles.lastName}>{lastName}</Text>
    </TouchableOpacity>
  );
}

const Rowstyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  containerText: {
    flex: 1,
    marginHorizontal: 10,
  },
  TextName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  TextDescription:{
    fontSize: 13,
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
    marginTop: 10,
    marginRight: 10,
  },
  avatarContainer: {
    borderColor: 'lightblue', // Border color
    borderWidth: 2, // Border width
    borderRadius: 50,
    padding: 2, // Adjust this to increase/decrease spacing between the image and the border
  },
  avatar: {
    width: 55, // Adjust these values to match the size of the border
    height: 55,
    borderRadius: 50,
  },
  name: {
    marginTop: 5,
    fontSize: 12,
  },
  lastName: {
    marginTop: -2,
    fontSize: 12,
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
    marginRight: 10,
  },
  circle: {
    width: 62,
    height: 62,
    borderRadius: 50,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 26,
  },
  plus: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
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
    borderRadius: 25,
    height: 175,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    padding: 20,
    color: '#fff',  
  },
  headerContainer: {
    backgroundColor: '#7BD6E3',
    zIndex: 0,
    height: 200,
    position: 'relative', 
  },
  profileContainer: {
    //position: 'absolute',
    zIndex: 1,
    //top: 10,
    //padding: 5,
    flexDirection: 'row',
  },
  chatContainer: {
    zIndex: -1,
    marginTop: 60,
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
    marginTop: 10,
    right: 25,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0,
  },
  activeTab: {
    borderBottomWidth: 0,
    borderBottomColor: '#7BD6E3',
  },
  textTab: {
    fontSize: 18,
    color: '#bcf1ea',
    fontStyle: 'bold'
  },
  activeText: {
    fontWeight: 'bold',
    color: '#7BD6E3',
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
  },
  
});

export default ChatScreen;