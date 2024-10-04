import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native'; // Import useTheme

const Card = ({ imageUri, title, publisher }) => {
    const { colors } = useTheme(); // Mengambil warna tema

    return (
        <View style={[styles.card, { backgroundColor: colors.cardBackground }]}>
            <Image
                source={{ uri: imageUri }}
                style={styles.image}
                onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)}
                onLoad={() => console.log('Image Loaded Successfully')}
            />
            <View style={styles.infoContainer}>
                <FontAwesome name="user-circle" size={40} color={colors.iconColor} style={styles.icon} />
                <View style={styles.textContainer}>
                    <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
                    <Text style={[styles.publisher, { color: colors.secondaryText }]}>{publisher}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        paddingBottom: 20,
        marginVertical: 10,
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
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 20,
        width: '100%',
    },
    icon: {
        marginRight:10,

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
    },
});

export default Card;
