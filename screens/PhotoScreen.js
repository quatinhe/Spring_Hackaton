import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { CameraView, useCameraPermissions  } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import CircleIcon from '../components/CircleIcon';
import { Colors } from "../theme/theme";

const PhotoScreen = () => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo); // You can handle the photo here, e.g., save it or display it.
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Image source={require("../assets/icons/flipCamera.png")} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture} style={styles.btnCamera}>
            <View style={styles.innerCircle} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginBottom: 150,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    width: 40,
    height: 40,
    outline: 'black',
    //backgroundColor: Colors.lightPink,
    borderRadius: 10, // Half of width and height for a perfect circle
    marginTop: "10%",
    marginLeft: "70%",
  },
  btnCamera: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    borderRadius: 50, // Half of width and height for a perfect circle
    borderWidth: 7, // Border width for the circle
    borderColor: 'white', // Border color for the circle
    position: 'absolute',
    bottom: "0%",
    left: "36%", // Adjust as needed
    
  },
  innerCircle: {
    width: 80, // Adjust as needed
    height: 80, // Adjust as needed
    borderRadius: 40, // Half of width and height for a perfect circle
    borderWidth: 2, // Border width for the empty inner circle
    borderColor: 'transparent', // Transparent color to make the inner circle empty
    
  },
});

export default PhotoScreen;
