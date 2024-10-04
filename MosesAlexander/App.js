import React, { useState, useCallback } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import Drawer
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { MaterialIcons } from '@expo/vector-icons';

// Custom Themes
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
const Drawer = createDrawerNavigator();

// RootHome Component
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
        component={HomeScreen} 
        options={{ headerShown: false }} 
        initialParams={{ toggleTheme }}
      />
      <Tabs.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
};

// Drawer Navigator
const DrawerNavigator = ({ toggleTheme }) => (
  <Drawer.Navigator>
    <Drawer.Screen 
      name="HomeTabs" 
      component={RootHome} 
      options={{ headerShown: false }}
      initialParams={{ toggleTheme }}
    />
    <Drawer.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
  </Drawer.Navigator>
);

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  }, []);

  const currentTheme = isDarkTheme ? customDarkTheme : customDefaultTheme;

  return (
    <NavigationContainer theme={currentTheme}>
      <Stack.Navigator>
        <Stack.Screen 
          name="DrawerRoot" 
          component={DrawerNavigator} 
          options={{ headerShown: false }}
          initialParams={{ toggleTheme }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
