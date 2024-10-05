import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native'; 
import Constant from 'expo-constants';

export default function Header({ toggleTheme }) {
    const navigation = useNavigation(); 
    const { colors } = useTheme(); 
    const mycolor = colors.iconColor; 

    return (
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
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingHorizontal: 10,
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
});
