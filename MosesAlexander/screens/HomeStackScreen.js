import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Home utama
import PulsaDataScreen from './PulsaDataScreen'; // Halaman pulsa dan data
import TokenListrikScreen from './TokenListrikScreen'; // Halaman token listrik
import BPJSScreen from './BpjsScreen';
import PaymentToken from './PaymentToken';
import PaymentPulsa from './PaymentPulsa';
import PaymentBPJS from './PaymentBPJS';
import PinConfirmationScreen from './PinConfirmationScreen';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" options={headerShown= false} >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PulsaData" component={PulsaDataScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TokenListrik" component={TokenListrikScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BPJS" component={BPJSScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="PaymentPulsa" component={PaymentPulsa}  options={{ headerShown: false }} />
      <Stack.Screen name="PaymentToken" component={PaymentToken}  options={{ headerShown: false }} />
      <Stack.Screen name="PaymentBPJS" component={PaymentBPJS} options={{ headerShown: false }}  />
      <Stack.Screen name="PinConfirmation" component={PinConfirmationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
