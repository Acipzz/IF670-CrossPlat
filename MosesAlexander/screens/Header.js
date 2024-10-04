import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native'; // Import useNavigation
import Constant from 'expo-constants';

export default function Header({toggleTheme}) {
    const navigation = useNavigation(); // Mengambil instance navigation
    const { colors } = useTheme(); // Mengambil warna tema
    const mycolor = colors.iconColor; // Mengambil warna ikon
    return (
        <View style={[styles.headerContainer, { backgroundColor: colors.headerColor }]}>
            <View style={styles.headerContent}>
                <Entypo name="youtube" size={28} color="red" style={styles.iconStyle} />
                <Text style={[styles.textStyle, {color: mycolor}]}>Youtube</Text>
            </View>
            <View style={styles.headerContent2}>
                <Feather name="cast" size={28} color={mycolor} style={styles.iconStyle} />
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <Feather name="search" size={28} color={mycolor} style={styles.iconStyle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleTheme()}>
                    <Feather name="user" size={28} color={mycolor} style={styles.iconStyle} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 55,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        justifyContent: "space-between", // Ensure content is spaced
        flexDirection: 'row', // Align icons on one line
        paddingHorizontal: 10, // Add padding to sides
        marginTop: Constant.statusBarHeight,
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
    },
});
