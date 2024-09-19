import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Text as PaperText } from 'react-native-paper';
import * as Font from 'expo-font';
import userData from './data.json';
import styles from './App.styles.js'; // Import styles from separate file

// Import specific Roboto font families (adjust file paths if necessary)
// import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import RobotoBold from './assets/fonts/Roboto-Bold.ttf';
import RobotoLightItalic from './assets/fonts/Roboto-LightItalic.ttf';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false); // Use state for loading state
  
  const loadFonts = async () => {
    await Font.loadAsync({
      // 'Roboto-Regular': RobotoRegular,
      'Roboto-Bold': RobotoBold,
      'Roboto-LightItalic': RobotoLightItalic,
    });
    setFontsLoaded(true);
  };


  return (
    <PaperProvider theme={DefaultTheme}>
      <ScrollView>
        {userData.map((users) => (
          <View style={styles.container} key={users.name}>
            <View style={styles.card}>
              <Image
                source={{ uri: users.photo_url }}
                style={styles.avatar}
              />
              <View style={styles.boldText}>
                <Text style={styles.boldText}>{users.name}</Text>
                <Text style={{ fontFamily: "Roboto-LightItalic" }}>{users.email}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </PaperProvider>
  );
}
