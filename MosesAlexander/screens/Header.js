import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons';
import Constant from 'expo-constants';

export default function Header() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const hideSearch = () => {
        setIsSearchVisible(false);
    };

    return (
        <View style={styles.headerContainer}>
            {isSearchVisible ? (
                <View style={styles.searchContainer}>
                    <TouchableOpacity onPress={hideSearch} style={styles.backButton}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search..."
                        autoFocus={true}
                    />
                </View>
            ) : (
                <>
                    <View style={styles.headerContent}>
                        <Entypo name="youtube" size={28} color="red" style={styles.iconStyle} />
                        <Text style={styles.textStyle}>Youtube</Text>
                    </View>
                    <View style={styles.headerContent2}>
                        <Feather name="cast" size={28} color="black" style={styles.iconStyle} />
                        <TouchableOpacity onPress={toggleSearch}>
                            <Feather name="search" size={28} color="black" style={styles.iconStyle} />
                        </TouchableOpacity>
                        <Feather name="user" size={28} color="black" style={styles.iconStyle} />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: Constant.statusBarHeight,
        height: 45,
        backgroundColor: "white",
        justifyContent: "space-between", // Ensure content is spaced
        flexDirection: 'row', // Align icons on one line
        paddingHorizontal: 10, // Add padding to sides
        elevation: 5,
    },
    headerContent: {
        flexDirection: "row",
        alignItems: "center", // Align icon and text vertically
    },
    headerContent2: {
        flexDirection: "row", // Display the icons in a row
        alignItems: "center", // Align the icons vertically
    },
    iconStyle: {
        marginHorizontal: 10, // Horizontal margin between icons
    },
    textStyle: {
        fontSize: 22,
        marginLeft: 5,
        fontWeight: "bold",
        color: "black",
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    backButton: {
        padding: 10,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
});