import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextInputWithLabel = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 25,
    marginBottom: 5,
    fontStyle: 'bold',
    marginLeft: 10,
  },
  input: {
    borderWidth: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 125,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    width: 350,
  },
});

export default TextInputWithLabel;
