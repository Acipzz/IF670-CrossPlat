import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
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
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Tetap menggunakan vector icons

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Mengimpor gambar khusus untuk tab Bayar
const paymentIcon = require('../MosesAlexander/assets/QrisTab.png');

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

  const renderPaymentIcon = (size, tintColor) => (
    <Image
      source={paymentIcon}
      style={{
        width: size + 10, 
        height: size,     
        tintColor: tintColor,
        resizeMode: 'contain', 
      }}
    />
  );

  return (
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Bayar') {
                // Menggunakan ikon gambar khusus untuk tab Bayar
                return renderPaymentIcon(size, focused ? '#007bff' : '#007bff');
              } else if (route.name === 'Beranda') {
                return <Entypo name="home" size={size} color={color} />;
              } else if (route.name === 'Riwayat') {
                return <MaterialIcons name="history-edu" size={size} color={color} />;
              } else if (route.name === 'Notifikasi') {
                return <FontAwesome name="envelope" size={size} color={color} />;
              } else if (route.name === 'Profil') {
                return <FontAwesome name="user-circle" size={size} color={color} />;
              }
            },
            tabBarStyle: {
              display: route.name === 'Beranda' && !isKeyboardVisible ? 'flex' : 'none',
            },
            tabBarInactiveTintColor: '#007bff',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Beranda" component={HomeStackScreen} />
          <Tab.Screen name="Riwayat" component={TransactionHistoryScreen} />
          <Tab.Screen name="Bayar" component={Bayar} />
          <Tab.Screen name="Notifikasi" component={Notifikasi} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}
