import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from '@react-navigation/native'; // Import useTheme
import Header from "./Header"; // Adjust the path as necessary
import Card from "./Card"; // Adjust the path as necessary

const HomeScreen = () => {
    const { colors } = useTheme(); // Access theme colors

    const cardsData = [
        {
            imageUri: 'https://images.unsplash.com/photo-1557683316-973673baf926',
            title: 'Beautiful Landscape',
            publisher: 'Nature Lover'
        },
        {
            imageUri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
            title: 'City at Night',
            publisher: 'Urban Explorer'
        },
        {
            imageUri: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6',
            title: 'Mountain Adventure',
            publisher: 'Hiker'
        },
        // Add more card data as needed
    ];

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Header />
            <ScrollView>
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        imageUri={card.imageUri}
                        title={card.title}
                        publisher={card.publisher}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;
