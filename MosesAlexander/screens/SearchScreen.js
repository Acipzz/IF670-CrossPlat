import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MiniCard from './MiniCard';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        autoFocus={true}
      />


      <MiniCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchInput: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default SearchScreen;