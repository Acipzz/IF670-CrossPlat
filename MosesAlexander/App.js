import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Text as PaperText } from 'react-native-paper';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; // Correct import statement
import userData from './data.json';
import styles from './App.styles.js'; // Import styles from separate file

// Import specific Roboto font families (adjust file paths if necessary)
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import RobotoBold from './assets/fonts/Roboto-Bold.ttf';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false); // Use state for loading state

  // Load fonts using loadFonts function
  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto_400Regular: RobotoRegular,
      Roboto_700Bold: RobotoBold,
    });
    setFontsLoaded(true); // Update loading state after fonts are loaded
  };

  // Use useEffect to load fonts once when the component mounts
  useEffect(() => {
    loadFonts();
  }, []);

  // Render UI conditionally based on loading state
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // Theme with custom fonts
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

  return (
    <PaperProvider theme={theme}>
      <ScrollView>
        {userData.map((users) => (
          <View style={styles.container} key={users.name}>
            <View style={styles.card}>
              <Image
                source={{ uri: users.photo_url }}
                style={styles.avatar}
              />
              <View style={styles.boldText}>
                <PaperText style={styles.boldText}>{users.name}</PaperText>
                <PaperText>{users.email}</PaperText>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </PaperProvider>
  );
}
