import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import Input from './Input'; // Adjust the path as necessary

export default function App() {
    const [name, setName] = useState("");
    const [nim, setNim] = useState("");
    const [displayedName, setDisplayedName] = useState("");
    const [displayedNim, setDisplayedNim] = useState("");
    
    const handleChangeMyName = (value) => {
        setName(value);
    };

    const handleChangeMyNim = (value) => {
        setNim(value);
    }

    const handleSubmit = () => {
        setDisplayedName(name);
        setDisplayedNim(nim);
    }

    return (
        <View style={styles.container}>
            <Input
                label="Name"
                placeholder="Input your name"
                value={name}
                onChangeText={handleChangeMyName}
            />
            <Input
                label="NIM"
                placeholder="Input your NIM"
                value={nim}
                onChangeText={handleChangeMyNim}
                keyboardType='numeric'
            />
            <Button title="Submit" onPress={handleSubmit} />
            <Text>{displayedName} - {displayedNim}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});