import { createContext, useState, useContext } from "react";

//create context object
const ThemeContext = createContext();

//export Provider
export function ThemeProvider({ theme, children }) {
  const [theme, setTheme] = useState(value);
  return (
    <ThemeContext.Provider theme={theme}>{children}</ThemeContext.Provider>
  );
}

//export useContext hook
export function useTheme() {
  return useContext(ThemeContext);
}
