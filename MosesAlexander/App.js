import  React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './screens/HomeStackScreen';
import ProfileScreen from './screens/ProfileScreen'; // Assume profile screen exists
import Bayar from './screens/Bayar';
import Notifikasi from './screens/Notifikasi';
import { TransactionProvider } from './screens/TransactionContext';
import { Keyboard } from 'react-native'; // Impor Keyboard
import TransactionHistoryScreen from './screens/TransactionHistoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    // Listener untuk keyboard
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

  return (
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { display: isKeyboardVisible ? 'none' : 'flex' }, // Sembunyikan tab bar saat keyboard muncul
          }}
        >
          <Tab.Screen 
            name="Beranda" 
            component={HomeStackScreen}
            options={{headerShown: false}} 
          />
          <Tab.Screen name="Riwayat" component={TransactionHistoryScreen} />
          <Tab.Screen name="Bayar" component={Bayar} />
          <Tab.Screen name="Notifikasi" component={Notifikasi} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}
