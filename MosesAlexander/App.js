import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStackScreen from './screens/HomeStackScreen';
import ProfileScreen from './screens/ProfileScreen';
import Bayar from './screens/Bayar';
import Notifikasi from './screens/Notifikasi';
import TransactionHistoryScreen from './screens/TransactionHistoryScreen';
import { TransactionProvider } from './screens/TransactionContext';
import { Keyboard } from 'react-native'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Stack navigator untuk setiap layar tanpa tab bar

export default function App() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Stack navigator untuk setiap layar selain Home
  const ProfileStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );

  const BayarStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bayar" component={Bayar} />
    </Stack.Navigator>
  );

  const NotifikasiStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifikasi" component={Notifikasi} />
    </Stack.Navigator>
  );

  const RiwayatStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Riwayat" component={TransactionHistoryScreen} />
    </Stack.Navigator>
  );

  return (
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              display: route.name === 'Beranda' && !isKeyboardVisible ? 'flex' : 'none', // Hanya tampil di Home
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Beranda" component={HomeStackScreen} />
          <Tab.Screen name="Riwayat" component={RiwayatStack} />
          <Tab.Screen name="Bayar" component={BayarStack} />
          <Tab.Screen name="Notifikasi" component={NotifikasiStack} />
          <Tab.Screen name="Profil" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}
