// Import necessary React and React Native components
import React, { useState} from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, Button } from 'react-native';
import { Card } from 'react-native-paper';

const EventCard = ({ event }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Card style={styles.card}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={event.image} style={styles.image} />
      </TouchableOpacity>
      <Card.Content>
        <Text>{event.title}</Text>
      </Card.Content>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={event.image} style={styles.modalImage} />
            <Text style={styles.modalText}>{event.description}</Text>
            <Text style={styles.modalText}>Date: {event.date}</Text>
            <Text style={styles.modalText}>Duration: {event.duration} hours</Text>
            <Text style={styles.modalText}>Owner: {event.owner}</Text>
            <View style={styles.buttonRow}>
              <Button
                title="Request Join"
                onPress={() => {
                  // Handle Join Request
                  setModalVisible(!modalVisible);
                  console.log("Request Sent");
                }}
              />
              <Button
                title="Cancel"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: for better contrast
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300 // Set a fixed width or adjust as needed
  },
  modalImage: {
    width: 250, // Adjust according to your modal's width
    height: 100, // Set a fixed height
    marginBottom: 15
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center"
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ensure the buttons spread across the width
    marginTop: 15
  }
});



// Export the EventCard component so it can be imported and used in other files
export default EventCard;
