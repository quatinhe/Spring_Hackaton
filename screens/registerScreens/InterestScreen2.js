import React,{ useState, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ButtonInterests from '../../components/ButtonInterests';
import ButtonInterests2 from '../../components/ButtonInterests2';

const InterestScreen2 = (props) => {

    const mainCategories = ['Sports', 'Entertainment', 'Art', 'Volunteering', 'Night Life', 'Food', 'Travelling'];
    const sports = ['Basketball', 'Surf', 'Football', 'Tennis', 'Gym', 'Padel'];
    const entertainment = ['Movies', 'Theatre', 'Concerts', 'Museums', 'Circus', 'Festivals'];
    const art = ['Painting', 'Sculpture', 'Photography', 'Dance', 'Music', 'Theatre'];
    const volunteering = ['Environment', 'Animals', 'Children', 'Elderly', 'Homeless', 'Health'];
    const nightLife = ['Bars', 'Clubs', 'Karaoke', 'Concerts', 'Festivals', 'Theatre'];
    const food = ['Italian', 'Japanese', 'Chinese', 'Mexican', 'American', 'Portuguese'];
    const travelling = ['Europe', 'Asia', 'Africa', 'America', 'Oceania', 'Antarctica'];

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [extraCategories, setExtraCategories] = useState([]);
    const [selected, setSelected] = useState([]);


    const pressedCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
            setExtraCategories(extraCategories.filter(item => !getCorrespondingCategories(category).includes(item)));
        } else {
            setSelectedCategories([...selectedCategories, category]);
            const filteredExtraCategories = getCorrespondingCategories(category).filter(item => !selected.includes(item));
            setExtraCategories([...extraCategories, ...filteredExtraCategories]);
        }
    }
    const pressedExtraCategory = (category) => {
        if (selected.includes(category)) {
            setSelected(selected.filter(item => item !== category));
        } else {
            setSelected([...selected, category]);
        }
    }

    
    const getCorrespondingCategories = (mainCategory) => {
        switch(mainCategory){
            case 'Sports':
                return sports;
            case 'Entertainment':
                return entertainment;
            case 'Art':
                return art;
            case 'Volunteering':
                return volunteering;
            case 'Night Life':
                return nightLife;
            case 'Food':
                return food;
            case 'Travelling':
                return travelling;
        }
    }

    useEffect(() => {
        console.log(selectedCategories);
    }, [selectedCategories]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
            <View style={styles.container}>
            <Text style={{ fontSize: 50, textAlign: 'center', fontWeight: 'bold', color: 'black', marginTop: 10, margin: 40}}> What are you Interested in? </Text>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <ButtonInterests2 name="Sports" onPress={pressedCategory} />
                <ButtonInterests2 name="Entertainment" onPress={pressedCategory} />
                <ButtonInterests2 name="Art" onPress={pressedCategory} />
                <ButtonInterests2 name="Volunteering" onPress={pressedCategory} />
                <ButtonInterests2 name="Night Life" onPress={pressedCategory} />
                <ButtonInterests2 name="Food" onPress={pressedCategory} />
                <ButtonInterests2 name="Travelling" onPress={pressedCategory} />
            </View>
            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: 'gray', marginTop: 20}}> Customize your Interests? </Text>
            <View style={styles.line} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {extraCategories.map((category, index) => (
                    <ButtonInterests key={index} name={category} onPress={pressedExtraCategory} pressed={selected.includes(category)} />
                ))}
            </View>
            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: 'gray', marginTop: 20}}> Selected </Text>
            <View style={styles.line} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {selected.map((category, index) => (
                    <ButtonInterests key={index} name={category} onPress={pressedExtraCategory} pressed={true} />
                ))}
            </View>
            <TouchableOpacity style={styles.buttonNext} onPress={() => props.navigation.navigate("MainScreen")}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
)
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    line: {
        borderBottomWidth: 2, // Adjust the width as needed
        borderColor: 'gray', // Adjust the color as needed
        marginHorizontal: 20, // Adjust the margin as needed
        marginVertical: 2, // Adjust the margin as needed
      },
      button: {
        width: 90,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 2,
        borderColor: 'gray',
        borderWidth: 1,
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

export default InterestScreen2;