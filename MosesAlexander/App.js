import React, { useState } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Text as PaperText } from 'react-native-paper';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';  // Tambahkan ini
import userData from './data.json';
import styles from './App.styles.js';

// Fungsi untuk memuat font kustom
const fetchFonts = () => {
  return Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

// Tema kustom dengan font yang telah dimuat
const theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Roboto-Regular',
    },
    medium: {
      fontFamily: 'Roboto-Bold',
    },
  },
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts} // Mulai memuat font
        onFinish={() => setFontLoaded(true)} // Set fontLoaded ke true jika selesai
        onError={(error) => console.warn(error)}
      />
    );
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
