import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Choose suitable icons

const EventCard = ({ event, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image source={event.image} style={styles.image} />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{event.title}</Text>

          <View style={styles.details}>
            <View style={styles.columnContainer}>
              <View style={styles.detailsRowAvatar}>
                <Image source={event.avatar} style={styles.avatar} />
                <Text style={styles.avatarName}>{event.name}</Text>
              </View>

              <View style={styles.detailsRowLocation}>
                <Icon name="location-on" size={14} color="#666" />
                <Text style={styles.detailText}>{event.location}</Text>
              </View>

              <View style={styles.detailsRow}>
                <Icon name="event" size={14} color="#666" />
                <Text style={styles.detailText}>{event.date}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.description}>{event.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  imageContainer: {
    
  },
  image: {
    width: 120,
    height: 150,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: -5,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#666', // Grey color
  },
  description: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 12,
    color: '#666', // Grey color
  },
  rowContainer: {
    flexDirection: 'row',
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  detailsRowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  detailsRowAvatar: {
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 10,
  },
  columnContainer: {
    flexDirection: 'column',
  },
  avatar: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 5,
  },
  avatarName: {
    fontSize: 10,
    color: '#666', // Grey color
  },
});

export default EventCard;
