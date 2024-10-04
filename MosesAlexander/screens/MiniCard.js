import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native'; // Import useTheme

const MiniCard = ({ imageUri, title, publisher }) => {
    const { colors } = useTheme(); // Access theme colors

    return (
        <View style={[styles.container, { backgroundColor: colors.card }]}>
            <Image
                source={{ uri: imageUri }}
                style={styles.image}
                onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)}
                onLoad={() => console.log('Image Loaded Successfully')}
            />
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
                <Text style={[styles.publisher, { color: colors.secondaryText }]}>{publisher}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10, // Reducing padding for better layout
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        flexDirection: 'row', // Set flex direction to row
        alignItems: 'center', // Center items vertically
    },
    image: {
        width: 80, // Fixed image size
        height: 80,
        borderRadius: 10,
        marginRight: 10, // Adding space between image and text
    },
    textContainer: {
        flex: 1, // Let text take remaining space
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4, // Add bottom space between title and publisher
    },
    publisher: {
        fontSize: 14,
    },
});

export default MiniCard;
