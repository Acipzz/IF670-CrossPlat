import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Home utama
import PulsaDataScreen from './PulsaDataScreen'; // Halaman pulsa dan data
import TokenListrikScreen from './TokenListrikScreen'; // Halaman token listrik

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" options={headerShown= false} >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PulsaData" component={PulsaDataScreen} />
      <Stack.Screen name="TokenListrik" component={TokenListrikScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
