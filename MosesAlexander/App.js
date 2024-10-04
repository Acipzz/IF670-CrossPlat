import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { MaterialIcons } from '@expo/vector-icons';

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    primary: '#ffffff', // Primary color (for elements like text)
    background: '#121212', // Main background color
    cardBackground: '#121212', // Card background color
    searchBackground: 'gray', // Search bar background color
    text: '#ffffff', // Text color
    secondaryText: '#b0b0b0', // Secondary text color
    iconColor: '#ffffff', // Icon color
    headerColor: '#121212', // Header background color
    placeholder: '#ffffff', // Placeholder color
    border: '#121212', // Border color
    borderSearch: '#ffffff', // Border color for search bar
    // text: '#ffffff', // Text Color
    // secondaryText: '#b0b0b0', // Secondary text color
},
};

const customDefaultTheme = { 
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000', // Primary color (for elements like text)
    background: '#ffffff', // Main background color
    card: '#ffffff', // Card background color
    searchBackground: 'lightgray', // Search bar background color
    text: '#000000', // Text color
    secondaryText: '#606060', // Secondary text color
    iconColor: '#000000', // Icon color
    headerColor: '#ffffff', // Header background color
    placeholder: '#808080', // Placeholder color
    border: '#e0e0e0', // Border color
    borderSearch: '#000000', // Border color for search bar
  },
};

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'
        } else if (route.name === 'Search') {
          iconName = 'search'
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tabs.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer theme={customDefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="rootHome" component={RootHome} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
