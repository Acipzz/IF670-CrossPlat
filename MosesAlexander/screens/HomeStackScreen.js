import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Home utama
import PulsaDataScreen from './PulsaDataScreen'; // Halaman pulsa dan data
import TokenListrikScreen from './TokenListrikScreen'; // Halaman token listrik
import BPJSScreen from './BpjsScreen';
import PaymentToken from './PaymentToken';
import PaymentPulsa from './PaymentPulsa';
import PaymentBPJS from './PaymentBPJS';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" options={headerShown= false} >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PulsaData" component={PulsaDataScreen} />
      <Stack.Screen name="TokenListrik" component={TokenListrikScreen} />
      <Stack.Screen name="BPJS" component={BPJSScreen} />
      <Stack.Screen name="PaymentPulsa" component={PaymentPulsa} />
      <Stack.Screen name="PaymentToken" component={PaymentToken} />
      <Stack.Screen name="PaymentBPJS" component={PaymentBPJS} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
