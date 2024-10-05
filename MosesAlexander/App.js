import React, { useState, useCallback, createContext, useContext } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'; 
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, Switch } from 'react-native';

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
    drawerBackground: '#000000', // Background drawer untuk dark theme
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
    drawerBackground: '#ffffff', // Background drawer untuk light theme
  },
};

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Create ThemeContext to handle theme toggle
const ThemeContext = createContext();

// RootHome Component
const RootHome = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Access context
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
      />
      <Tabs.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
};

// Custom Drawer Content with theme toggle
const CustomDrawerContent = (props) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Access context
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{ color: isDarkTheme ? '#ffffff' : '#000000' }}>Dark Theme</Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

// Drawer Navigator
const DrawerNavigator = () => {
  const { isDarkTheme } = useContext(ThemeContext); // Access theme context
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: isDarkTheme ? customDarkTheme.colors.drawerBackground : customDefaultTheme.colors.drawerBackground, // Background drawer berdasarkan tema
          width: 240, // Atur lebar drawer sesuai kebutuhan
          borderRightWidth: 1, // Tambahkan border jika diinginkan
          borderColor: isDarkTheme ? '#444' : '#ddd', // Warna border berdasarkan tema
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={RootHome} 
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(prevTheme => !prevTheme);
  }, []);

  const currentTheme = isDarkTheme ? customDarkTheme : customDefaultTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <NavigationContainer theme={currentTheme}>
        <Stack.Navigator>
          <Stack.Screen 
            name="DrawerRoot" 
            component={DrawerNavigator} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
