import React from "react";
import { View, Text, StyleSheet } from "react-native";



interface ProfileProps {
    name: string;
    age: number;
}


const Profile = ({name, age}: ProfileProps)=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nama : {name}</Text>
            <Text style={styles.text}>Umur : {age}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',   
    },
    text: {
        fontSize: 20,
    },
});

export default Profile;