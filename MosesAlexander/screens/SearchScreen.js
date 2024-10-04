import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native'; // Import useNavigation and useTheme
import Constant from 'expo-constants';
import MiniCard from './MiniCard'; // Ensure this import is correct

const SearchScreen = () => {
  const navigation = useNavigation(); // Get navigation instance
  const { colors } = useTheme(); // Access theme colors
  const [value, setValue] = useState('');

  const minicardsData = [
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
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
          <Feather name="arrow-left" size={24} color={colors.iconColor} />
        </TouchableOpacity>
        <TextInput 
          style={[styles.searchInput, { backgroundColor: colors.backgroundSearch, borderColor: colors.borderSearch, color: colors.text }]} // Add border color
          placeholder='Search Youtube' 
          placeholderTextColor={colors.placeholder} // Add placeholder color
          onChangeText={(text) => setValue(text)} 
        />
        <TouchableOpacity onPress={() => {/* Add send action here */}}>
          <Feather name='send' size={24} color={colors.iconColor} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View>
        {minicardsData.map((card, index) => (
          <MiniCard
            key={index}
            imageUri={card.imageUri}
            title={card.title}
            publisher={card.publisher}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: Constant.statusBarHeight,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 20, // Add padding top on the bar for spacing
  },
  searchInput: {
    flex: 1, // Make the input take the available width
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10, // Add space between input and icons
  },
  icon: {
    padding: 5,  // Add padding for space around the icon
  },
});

export default SearchScreen;
