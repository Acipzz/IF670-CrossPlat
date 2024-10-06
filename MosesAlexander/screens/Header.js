import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import Constant from 'expo-constants';

// Dummy categories data
const categories = ["All", "Gaming", "Sports", "Music", "Movies", "Comedy", "News", "Entertainment"];

export default function Header({ toggleTheme }) {
    const navigation = useNavigation(); 
    const { colors } = useTheme(); 
    const mycolor = colors.iconColor;

    // Render each category as a scrollable item
    const renderCategories = () => (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {categories.map((category, index) => (
                <View key={index} style={styles.categoryButton}>
                    <Text style={styles.categoryText}>{category}</Text>
                </View>
            ))}
        </ScrollView>
    );

    return (
        <View>
            {/* Header Bar */}
            <View style={[styles.headerContainer, { backgroundColor: colors.headerColor }]}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Feather name="menu" size={28} color={mycolor} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <Entypo name="youtube" size={28} color="red" style={styles.iconStyle} />
                    <Text style={[styles.textStyle, { color: mycolor }]}>Youtube</Text>
                </View>
                <View style={styles.headerContent2}>
                    <Feather name="cast" size={28} color={mycolor} style={styles.iconStyle} />
                    <MaterialIcons name="notifications-none" size={28} color={mycolor} style={styles.iconStyle} />
                    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                        <Feather name="search" size={28} color={mycolor} style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Scrollable Categories */}
            {renderCategories()}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 55,
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: Constant.statusBarHeight,
    },
    headerContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerContent2: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconStyle: {
        marginHorizontal: 10,
    },
    textStyle: {
        fontSize: 22,
        marginLeft: 5,
        fontWeight: "bold",
    },
    // Categories Styles
    categoriesScroll: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    categoryButton: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#444',
        borderRadius: 10,
        marginRight: 10,
        alignItems: 'center', // Horizontally center text
        justifyContent: 'center', // Vertically center text
    },
    categoryText: {
        color: 'white',
        fontSize: 16,
    },
});
