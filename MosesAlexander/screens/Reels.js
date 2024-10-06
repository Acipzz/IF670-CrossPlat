import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native'; // Import useTheme
import Card from "./Card"; // Sesuaikan path sesuai kebutuhan

const reelsData = [
    { id: '1', title: 'Beautiful Landscape', imageUri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { id: '2', title: 'City at Night', imageUri: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6' },
    { id: '3', title: 'Mountain Adventure', imageUri: 'https://images.unsplash.com/photo-1557683316-973673baf926' },
    { id: '4', title: 'Beautiful Landscape', imageUri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
];

const Reels = () => {
    const { colors } = useTheme(); // Mengakses warna tema

    const renderReels = ({ item }) => (
        <View style={styles.cardWrapper}>
            <Card
                imageUri={item.imageUri}
                title={item.title}
                publisher="" // Kosongkan jika tidak ada publisher
            />
        </View>
    );

    return (
        <FlatList
            data={reelsData}
            renderItem={renderReels}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.reelsList}
        />
    );
}

const styles = StyleSheet.create({
    reelsList: {
        padding: 10,
    },
    cardWrapper: {
        flex: 1,
        margin: 5,
    },
});

export default Reels;
