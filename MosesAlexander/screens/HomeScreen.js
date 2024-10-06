import React from "react";
import { ScrollView, StyleSheet, View, FlatList, Image, Text, Dimensions } from "react-native";
import { useTheme } from '@react-navigation/native';
import Header from "./Header"; // Sesuaikan path sesuai kebutuhan
import Card from "./Card"; // Sesuaikan path sesuai kebutuhan

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
    // Tambahkan lebih banyak data cards sesuai kebutuhan
];

const reelsData = [
    { id: '1', title: 'Beautiful Landscape', imageUri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    { id: '2', title: 'City at Night', imageUri: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6' },
    { id: '3', title: 'Mountain Adventure', imageUri: 'https://images.unsplash.com/photo-1557683316-973673baf926' },
    { id: '4', title: 'Beautiful Landscape', imageUri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
];

const { width } = Dimensions.get('window');
const itemWidth = (width / 2) - 15; // Menghitung lebar item untuk dua kolom dengan margin


const HomeScreen = ({ toggleTheme }) => {
    const { colors } = useTheme(); // Mengakses warna tema

    const renderReels = ({ item }) => (
        <View style={styles.reelContainer}>
            <Image source={{ uri: item.imageUri }} style={styles.reelImage} />
            <Text style={[styles.reelText, { color: colors.text }]}>{item.title}</Text>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Header toggleTheme={toggleTheme} />
            <ScrollView>
                {/* Render Cards */}
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        imageUri={card.imageUri}
                        title={card.title}
                        publisher={card.publisher}
                    />
                ))}

                <Text style={[styles.shortsTitle, { color: colors.text }]}>Shorts</Text>
                {/* Render FlatList for Reels */}
                <FlatList
                    data={reelsData}
                    renderItem={renderReels}
                    keyExtractor={item => item.id}
                    numColumns={2} // Menampilkan dalam dua kolom
                    contentContainerStyle={styles.reelsList}
                    scrollEnabled={false} // Nonaktifkan scrolling pada FlatList
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    reelContainer: {
        width: itemWidth,
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
    reelImage: {
        width: '95%',
        height: 250,
        borderRadius: 10,
    },
    shortsTitle: { // Gaya baru untuk judul "Shorts"
        fontSize: 24, // Ukuran font lebih besar
        fontWeight: 'bold', // Tebal
        marginVertical: 10, // Margin vertikal
        // color: colors.text, // Hapus dari sini
    }
});

export default HomeScreen;
