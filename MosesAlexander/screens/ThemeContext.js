// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { customDarkTheme, customDefaultTheme } from './Themes'; 

const ThemeContext = createContext(); // Inisialisasi context

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); 

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme); 

  const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook untuk menggunakan context
export const useTheme = () => useContext(ThemeContext); 
