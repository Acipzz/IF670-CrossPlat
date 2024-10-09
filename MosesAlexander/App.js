import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'; // Assume profile screen exists
import TransactionHistoryScreen from './screens/TransactionHistoryScreen'; // Assume this is a placeholder

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="History" component={TransactionHistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Dummy component for History Screen
const TransactionHistoryScreen = () => <Text>Transaction History</Text>;

// Dummy component for Profile Screen
const ProfileScreen = () => <Text>Profile Page</Text>;
