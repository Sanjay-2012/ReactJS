import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const onThemeChange = () => {
    setDarkMode(prev => !prev);
  };

  const theme = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    height: "800px"
  };

  return (
    <ThemeContext.Provider value={{ darkMode, onThemeChange, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}