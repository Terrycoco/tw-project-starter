import { useState, createContext, useContext } from "react";
import { currentTheme } from "../themes";

//create context object with defaults
export const ThemeContext = createContext({
  theme: {},
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, updateTheme] = useState(currentTheme);

  function setTheme(newtheme) {
    updateTheme(newtheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
