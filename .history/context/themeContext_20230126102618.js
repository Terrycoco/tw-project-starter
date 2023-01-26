import { useState, createContext } from "react";
import { theme } from '../styles/themes';

//create context object with defaults
export const ThemeContext = createContext({
  theme: {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({});

  return (
    <ThemeContext.Provider 
  )
}
export default ThemeProvider;
