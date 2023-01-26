import { useState, createContext } from "react";
import { currentTheme } from "../styles/themes";

//create context object with defaults
export const ThemeContext = createContext({
  theme: {},
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, updateTheme] = useState(currentTheme);

  function setTheme(changes) {
    let newTheme = Object.assign({}, changes, ...theme);
    updateTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
