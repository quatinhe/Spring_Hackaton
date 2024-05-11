import React,{ useState } from 'react';
import { Text, SafeAreaView, ScrollView, View, Image, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import TextInputWithLabel from '../../components/TextWithInputLabel';

const RegistrationScreen = (props) => {

    const [name, setName] = useState('João');
    const [surname, setSurame] = useState('Jorge');
    const [age, setAge] = useState('22');
    const [profession, setProfession] = useState('Software Engineer');
    const [email, setEmail] = useState('joaojorge@gmail.com');
    const [password, setPassword] = useState('*********');

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
            <View style={styles.container}>
                <Image
                source={require('../../assets/LOGO.png')}
                style={styles.logo}
                ></Image>
                <Text style={{ fontSize: 50, textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop: 10, margin: 40}}> Register </Text>
                <View style={{ alignItems: 'flex-start' }}>
                    <TextInputWithLabel
                        label="Name:"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInputWithLabel
                        label="Surname:"
                        value={surname}
                        onChangeText={setSurame}
                    />
                    <TextInputWithLabel
                        label="Age:"
                        value={age}
                        onChangeText={setAge}
                        keyboardType="numeric"
                    />
                    <TextInputWithLabel
                        label="Profession:"
                        value={profession}
                        onChangeText={setProfession}
                    />
                    <TextInputWithLabel
                        label="Age:"
                        value={age}
                        onChangeText={setAge}
                    />
                    <TextInputWithLabel
                        label="Email:"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <TextInputWithLabel
                        label="Password:"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>
            <TouchableOpacity style={styles.buttonNext} onPress={() => props.navigation.navigate('InterestScreen')}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    logo: {
      width: 100, // Adjust the width as needed
      height: 100, // Adjust the height as needed
      marginTop: 20,
    },
    image: {
      marginLeft: 10,
      width: 400, // Adjust the width as needed
      height: 400, // Adjust the height as needed
    },
    buttonNext: {
      width: 350, // Adjust the size of the button
      height: 50, // Adjust the size of the button
      borderRadius: 10, // Half of the width and height to make it circular
      backgroundColor: 'black', // Use the primary color from your theme
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      
    },
    buttonText: {
      color: 'white', // Use the text color from your theme
      fontSize: 20, // Set the font size as needed
      fontWeight: 'bold',
    },
});

export default RegistrationScreen;