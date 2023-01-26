import { createContext, useState, useContext } from "react";

//create context object with defaults
const ThemeContext = createContext({});

//export Provider
export function ThemeProvider({ value, children }) {
  const [theme, setTheme] = useState(value);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

//export useContext hook
export function useTheme() {
  return useContext(ThemeContext);
}
