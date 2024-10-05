import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native'; // Import useTheme
import { Feather, FontAwesome6 } from "@expo/vector-icons";

const MiniCard = ({ imageUri, title, publisher }) => {
    const { colors } = useTheme(); // Access theme colors

    return (
        <View style={[styles.container, { backgroundColor: colors.card }]}>
            {/* Icon on the left */}
            <FontAwesome6 name="clock-rotate-left" size={24} color={colors.iconColor} style={styles.icon} />

            {/* Text on the left */}
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
                    {title}
                </Text>
            </View>

            {/* Thumbnail image on the right */}
            <Image
                source={{ uri: imageUri }}
                style={styles.image}
                onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)}
                onLoad={() => console.log('Image Loaded Successfully')}
            />
            <Feather name="arrow-up-left" size={24} color={colors.iconColor} style={styles.icon2}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Align items in a row (text and image)
        alignItems: 'center', // Align items vertically
        paddingVertical: 10, // Space around the card
        paddingHorizontal: 15, 
    },
    icon: {
        marginRight: 20, // Add space between icon and text
    },
    icon2: {
        marginLeft: 20, // Add space between icon and image
    },
    textContainer: {
        flex: 1, // Let text take remaining space
        justifyContent: 'center',
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 60, 
        height: 40, 
    },
});

export default MiniCard;