import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EventCardProfile = ({ time, name, date, location, logo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.column}>
        <View style={styles.rowTime}>
          <Icon name="clock-time-four-outline" size={20} color="#666" />
          <Text style={styles.text}>{time}</Text>
        </View>
        <View style={styles.rowDate}>
          <Icon name="calendar-month" size={20} color="#666" />
          <Text style={styles.text}>{date}</Text>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.rowName}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.rowLocation}>
          <Icon name="map-marker-outline" size={20} color="#666" />
          <Text style={styles.text}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 20,
    marginBottom: 25,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  rowTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  rowDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  logo: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    borderRadius: 30, 
  }
});

export default EventCardProfile;
