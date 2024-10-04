import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { MaterialIcons } from '@expo/vector-icons';

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    primary: '#ffffff',
    background: '#121212',
    cardBackground: '#121212',
    searchBackground: 'gray',
    text: '#ffffff',
    secondaryText: '#b0b0b0',
    iconColor: '#ffffff',
    headerColor: '#121212',
    placeholder: '#ffffff',
    border: '#121212',
    borderSearch: '#ffffff',
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    primary: '#000000',
    background: '#ffffff',
    cardBackground: '#ffffff',
    searchBackground: 'lightgray',
    text: '#000000',
    secondaryText: '#606060',
    iconColor: '#000000',
    headerColor: '#ffffff',
    placeholder: '#808080',
    border: '#e0e0e0',
    borderSearch: '#000000',
  },
};

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = ({ toggleTheme }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          }

          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen 
        name="Home" 
        component={(props) => <HomeScreen {...props} toggleTheme={toggleTheme} />} 
        options={{ headerShown: false }} 
      />
      <Tabs.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const currentTheme = isDarkTheme ? customDarkTheme : customDefaultTheme;

  return (
    <NavigationContainer theme={currentTheme}>
      <Stack.Navigator>
        <Stack.Screen 
          name="rootHome" 
          component={(props) => <RootHome {...props} toggleTheme={toggleTheme} />} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
