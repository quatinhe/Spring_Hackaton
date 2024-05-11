import React from 'react';
import { Text, SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const InterestScreen2 = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>What are you <Text style={styles.gradientText}>Interested</Text> in?</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20,
        margin: 40,
    },
    gradientText: {
        fontWeight: 'bold',
    },
});

export default InterestScreen2;
