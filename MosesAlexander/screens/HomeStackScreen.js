import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; // Import untuk navigasi
import HomeScreen from './HomeScreen'; 
import PulsaDataScreen from './PulsaDataScreen'; 
import TokenListrikScreen from './TokenListrikScreen'; 
import BPJSScreen from './BpjsScreen';
import PaymentToken from './PaymentToken';
import PaymentPulsa from './PaymentPulsa';
import PaymentBPJS from './PaymentBPJS';
import PinConfirmationScreen from './PinConfirmationScreen';
import TransactionSuccessScreen from './TransactionSuccessScreen';
import TransactionHistoryScreen from './TransactionHistoryScreen';
import TransactionDetailScreen from './TransactionDetailScreen';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  const navigation = useNavigation(); // Gunakan useNavigation
  return (
    <Stack.Navigator initialRouteName="HomeScreen" options={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PulsaData" component={PulsaDataScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TokenListrik" component={TokenListrikScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BPJS" component={BPJSScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentPulsa" component={PaymentPulsa} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentToken" component={PaymentToken} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentBPJS" component={PaymentBPJS} options={{ headerShown: false }} />
      <Stack.Screen name="PinConfirmation" component={PinConfirmationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TransactionSuccess" component={TransactionSuccessScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Riwayat" component={TransactionHistoryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={TransactionDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;