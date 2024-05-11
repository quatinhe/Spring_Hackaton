import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonInterests = ({ name, onPress, pressed }) => {
    const [isPressed, setIsPressed] = useState(pressed);

    const handlePress = () => {
        setIsPressed(!isPressed);
        onPress(name);
    };

    return (
        <TouchableOpacity
            style={[styles.button, isPressed && styles.buttonPressed]}
            onPress={handlePress}
            activeOpacity={0.5} // Set the opacity to 0.5 when pressed
        >
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 2,
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonPressed: {
        backgroundColor: 'gray', // Change the background color when pressed
    },
    buttonText: {
        color: 'black',
    },
});

export default ButtonInterests;
