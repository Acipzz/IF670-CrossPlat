import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Animated, { SlideInLeft, SlideInRight, SlideInDown } from 'react-native-reanimated';

export default function App() {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setScreenWidth(width);
      setScreenHeight(height);
      setOrientation(width < height ? 'portrait' : 'landscape');
    };

    Dimensions.addEventListener('change', updateOrientation);

    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View entering={SlideInLeft}>
        <Text>Screen Width: {screenWidth}</Text>
      </Animated.View>
      <Animated.View entering={SlideInRight}>
        <Text>Screen Height: {screenHeight}</Text>
      </Animated.View>
      <Animated.View entering={SlideInDown}>
        <Text>Orientation: {orientation}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
