import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../theme/theme';

const CategorySelector = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
            {categories.map(category => (
                <TouchableOpacity
                    key={category}
                    onPress={() => setSelectedCategory(category)}
                    style={[styles.category, selectedCategory === category ? styles.selected : null]}
                >
                    <Text style={selectedCategory === category ? styles.selectedText : styles.text}>
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.background,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
    },
    category: {
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
    },
    selected: {
        backgroundColor: Colors.lighBlue, 
    },
    text: {
        color: '#000', 
    },
    selectedText: {
        color: '#fff', 
    }
});

export default CategorySelector;