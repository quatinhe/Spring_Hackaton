import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import PictureCard from '../components/PictureCard';

const CircleScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <PictureCard />
    </ScrollView>
  </SafeAreaView>
);

export default CircleScreen;
