import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Card = ({ imageUri, title, publisher }) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: imageUri }}
                style={styles.image}
                onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)}
                onLoad={() => console.log('Image Loaded Successfully')}
            />
            <View style={styles.infoContainer}>
                <FontAwesome name="user-circle" size={40} color="black" style={styles.icon} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.publisher}>{publisher}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        width: '100%',
    },
    icon: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    publisher: {
        fontSize: 14,
        color: 'gray',
    },
});

export default Card;