import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false); // Dummy state
  const navigation = useNavigation();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState); // Toggle handler

  return (
    <View style={[styles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Profile</Text>
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../assets/image.png')} // Pastikan path gambar ini benar
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.nameText}>Moses Alexander</Text>
      <Text style={styles.idText}>00000069818</Text>
      <Text style={styles.dateText}>(08 Juni 2004)</Text>

      <View style={styles.optionContainer}>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Change Language</Text>
          <View style={styles.languageOption}>
            <Text style={styles.languageText}>ID</Text>
            <Feather name="chevron-right" size={24} color="#000" />
          </View>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch
            value={isEnabled} // Dummy state value
            onValueChange={toggleSwitch} // Dummy toggle function
          />
        </View>
      </View>

      {/* App Version */}
      <Text style={styles.versionText}>App Version 1.2024.09.05</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingRight: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 30,
    flex: 1,
  },
  profileImageContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 15,
  },
  profileImage: {
    width: 200,
    height: 200,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  idText: {
    fontSize: 16,
    color: '#555',
  },
  dateText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  optionContainer: {
    width: '100%',
    marginVertical: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 16,
    marginRight: 10,
  },
  versionText: {
    fontSize: 14,
    color: '#888',
    marginTop: 150,
  },
});

export default ProfileScreen;
