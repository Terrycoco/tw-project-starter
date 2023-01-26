import { createContext, useState, useContext } from "react";

//create context object
const ThemeContext = createContext();

//export Provider
export function ThemeProvider({ theme, children }) {
  const [theme, setTheme] = useState(props.theme);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
