import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavBar from '../components/BottomNavBar';
import { Text } from 'react-native';

const MainScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text> Main Screen </Text>
        </SafeAreaView>
    );
};

export default MainScreen;