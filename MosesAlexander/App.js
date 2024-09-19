import React, { useState } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Text as PaperText } from 'react-native-paper';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';  // Tambahkan ini
import userData from './data.json';
import styles from './App.styles.js';

export default function App() {
// Memuat font menggunakan hook useFonts dari expo
let [fontsLoaded] = useFonts({
  Roboto_400Regular,
  Roboto_700Bold,
});

// Jika font belum dimuat, tampilkan AppLoading
if (!fontsLoaded) {
  return <AppLoading />;
}

  return (
    <PaperProvider theme={theme}>
      <ScrollView>
        {userData.map((users) => {
          return (
            <View style={styles.container} key={users.name}>
              <View style={styles.card}>
                <Image
                  source={{
                    uri: users.photo_url, 
                  }}
                  style={styles.avatar}
                />
                <View style={styles.boldText}>
                  <PaperText style={styles.boldText}>{users.name}</PaperText> {/* Gunakan PaperText untuk menggunakan font dari tema */}
                  <PaperText>{users.email}</PaperText>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  fonts: {
    regular: {
      fontFamily: 'Roboto_400Regular',
    },
    medium: {
      fontFamily: 'Roboto_700Bold',
    },
  },
};
