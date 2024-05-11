import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const ChatScreen = ({route}) => {
    const Name = route.params.name;
    const [messages, setMessages] = useState([
        { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user: 'other' },
        { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user: 'me' },
        { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", user: 'other' },
        { id: 4, text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", user: 'me' },
        { id: 5, text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", user: 'other' },
        { id: 6, text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", user: 'me' },
        { id: 7, text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", user: 'other' },
        
    ]);
    const [text, setText] = useState('');

    const sendMessage = () => {
        if (text) {
            setMessages([...messages, { id: messages.length + 1, text: text, user: 'me' }]);
            setText('');
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {}} />
                <Appbar.Content title={Name} titleStyle={{ textAlign: 'center', right: 30}} />
            </Appbar.Header>
            <ScrollView style={styles.container}>
                {messages.map((message) => (
                    <View style={message.user === 'me' ? styles.myMessage : styles.otherMessage} key={message.id}>
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    placeholder="Message"
                />
                <Button icon="send" onPress={sendMessage}>Send</Button>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    myMessage: {
        alignSelf: 'flex-end',
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#DCF8C6', // Light green background
        borderRadius: 20,
        maxWidth: '80%',
    },
    otherMessage: {
        alignSelf: 'flex-start',
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        maxWidth: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: 30,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
});

export default ChatScreen;