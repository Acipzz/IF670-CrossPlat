import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './screens/HomeStackScreen';
import ProfileScreen from './screens/ProfileScreen'; // Assume profile screen exists
import History from './screens/History';
import Bayar from './screens/Bayar';
import Notifikasi from './screens/Notifikasi';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen 
          name="Beranda" 
          component={HomeStackScreen}
          options={{headerShown: false}}/>
        <Tab.Screen name="Riwayat" component={History} />
        <Tab.Screen name="Bayar" component={Bayar} />
        <Tab.Screen name="Notifikasi" component={Notifikasi} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

