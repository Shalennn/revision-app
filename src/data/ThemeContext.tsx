import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme, lightTheme } from "../styles/theme";

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false,
});

export const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("theme").then((value) => {
      if (value === "dark") setIsDark(true);
    });
  }, []);

  const toggleTheme = () => {
    const nouvellValeur = !isDark;
    setIsDark(nouvellValeur);
    AsyncStorage.setItem("theme", nouvellValeur ? "dark" : "light");
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
