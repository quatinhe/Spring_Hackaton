export const EventPopupCard = ({ event, modalVisible, onClose, onJoinRequest }) => {
    
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onClose}>
        <View style={styles2.centeredView}>
          <View style={styles2.modalView}>
            <Image source={event.image} style={styles.modalImage} />
            <Text style={styles2.modalText}>{event.description}</Text>
            <Text style={styles2.modalText}>Date: {event.date}</Text>
            <Text style={styles2.modalText}>Duration: {event.duration} hours</Text>
            <Text style={styles2.modalText}>Owner: {event.owner}</Text>
            <View style={styles2.buttonRow}>
              <Button
                title="Request Join"
                onPress={onJoinRequest}
              />
              <Button
                title="Cancel"
                onPress={onClose}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  
  const styles2 = StyleSheet.create({
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
  