import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

export const customDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
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
    drawerBackground: '#000000',
  },
};

export const customDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
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
    drawerBackground: '#ffffff',
  },
};
