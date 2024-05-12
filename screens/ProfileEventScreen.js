import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { Colors } from '../theme/theme';
import PictureCard from '../components/PictureCard';
import AvatarWithName from '../components/AvatarComponent';
import EventCardProfile from '../components/EventCardProfile';

const ProfileEventScreen = ({navigation}) => {

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

    const data = {
        id: '1',
        name: 'Canoeing',
        job: 'Sport',
        date: '23-03-2023',
        hour: '10:00h',
        location: 'Faro, Portugal',
        avatar: require('../assets/profileUser/1.jpg'),
        nameResponsable: 'Nautic Club',
        description: "Embarking on a group canoeing adventure in Lisbon's tranquil lake offers a perfect blend of camaraderie and natural beauty. Against the city's skyline, paddlers navigate the serene waters, discovering hidden coves and enjoying playful water games. With each stroke of the paddle, bonds strengthen, creating lasting memories against the backdrop of a stunning sunset.",
        interests: ['Sport', 'Water', 'Socialize', 'Outdoors'],
        icon: "sports-cricket",
        images: [require('../assets/activity/2.jpg'),
        require('../assets/activity/1.jpg'),
        require('../assets/activity/3.jpg')]
    };

    const data2 = {
        id: '2',
        name: 'Spring Hackaton',
        job: 'Event',
        date: '10-05-2024',
        hour: '18:00h',
        location: 'Lisbon, Portugal',
        avatar: require('../assets/profileUser/logoNinf.png'),
        nameResponsable: 'Ninf FCT NOVA',
        description: "Embarke on a hackathon, a fast-paced event where teams collaborate to create innovative software or hardware projects within a tight timeframe. Participants brainstorm, code, and present their solutions to challenges, fostering creativity and teamwork in the process.",
        interests: ['Sport', 'Gaming', 'Socialize', 'Event'],
        icon: "keyboard",
        images: [require('../assets/activity/hackaton1.jpg'),
        require('../assets/activity/hackaton2.jpg'),
        require('../assets/activity/hackaton3.jpg')]
    };

    const posts = [
        {
            id: "1",
            avatarPhoto: require("../assets/profileUser/1.jpg"),
            profileName: 'John Doe',
            location: 'New York, USA ',
            date: ' April 3, 2024',
            image: require("../assets/posts/canooing1.jpg"),
            overlayImage: require("../assets/posts/canooingSelfie1.jpg"),
        },
        {
            id: "2",
            avatarPhoto: require("../assets/profileUser/2.jpg"),
            profileName: 'Edward Smith',
            location: 'London, UK ',
            date: ' May 10, 2024',
            image: require("../assets/posts/canooing2.jpg"),
            overlayImage: require("../assets/posts/cannoingSelfie2.jpg"),
        },
        {
            id: "3",
            avatarPhoto: require("../assets/profileUser/3.jpeg"),
            profileName: 'July Roberts',
            location: 'Sydney, Australia ',
            date: ' February 19, 2024',
            image: require("../assets/posts/canooing3.jpg"),
            overlayImage: require("../assets/posts/canooingSelfie3.jpg"),
        },
        // {
        //     id: "4",
        //     avatarPhoto: require("../assets/profileUser/9.jpeg"),
        //     profileName: 'Emily Anderson',
        //     location: 'Lisbon, Portugal ',
        //     date: ' January 28, 2024',
        //     image: require("../assets/posts/tennis.jpg"),
        //     overlayImage: require("../assets/posts/selfie5.jpg"),
        // },
        // {
        //     id: "5",
        //     avatarPhoto: require("../assets/profileUser/5.jpg"),
        //     profileName: 'Maria Leonor',
        //     location: 'Sintra, Portugal ',
        //     date: ' January 2, 2024',
        //     image: require("../assets/posts/cooking.jpg"),
        //     overlayImage: require("../assets/posts/selfie3.jpg"),
        // },
    ];

    var dataDisplay = data2;


    return (
        <ScrollView style={styles.container}>
            <View style={styles.swiperContainer}>
                <Swiper style={styles.swiperContent} loop={false}
                    showsPagination={true}
                    paginationStyle={styles.paginationStyle}
                    activeDotStyle={styles.activeDotStyle} dotStyle={styles.dotStyle}>
                    {dataDisplay.images.map((item, index) => (
                        <Image key={index} source={item} style={styles.profileImage} />
                    ))}
                </Swiper>
            </View>

            <View style={styles.containerContent}>
                <Text style={styles.name}>{dataDisplay.name}</Text>
                <View style={styles.professionContainer}>
                    <MaterialIcons name={dataDisplay.icon} size={22} color="black" style={styles.icon} />
                    <Text style={styles.profession}>{dataDisplay.job}</Text>
                </View>

                <EventCardProfile
                    time={dataDisplay.hour}
                    name={dataDisplay.nameResponsable}
                    date={dataDisplay.date}
                    location={dataDisplay.location}
                    logo={dataDisplay.avatar}
                />

                <TouchableOpacity style={styles.participateButton}>
                    <Text style={styles.participateButtonText}>Participate</Text>
                </TouchableOpacity>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.sectionContent}>
                        {dataDisplay.description}
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Interests</Text>
                    <View style={styles.interestsContainer}>
                        {dataDisplay.interests.map((interest, index) => (
                            <Text key={index} style={styles.interest}>{interest}</Text>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.sectionTitle}>Participants</Text>
                        <Text style={styles.viewAllText}>View all</Text>
                    </View>
                    <View style={styles.container2}>
                        <FlatList
                            data={profiles}
                            renderItem={({ item }) => <AvatarWithName navigation= { navigation} image={item.avatar} name={item.name} lastName={item.lastName} />}
                            keyExtractor={(item) => item.id}
                            horizontal
                        />
                    </View>
                </View>

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

                <View style={{ marginBottom: 84 }} />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
        paddingTop: 10,
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
        marginBottom: 25,
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
        marginBottom: 15,
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
    participateButton: {
        backgroundColor: Colors.pink,
        borderRadius: 10,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 35,
    },
    participateButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

});

export default ProfileEventScreen;
