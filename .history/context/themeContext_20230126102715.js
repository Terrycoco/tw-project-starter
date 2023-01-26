import { useState, createContext } from "react";
import { theme  as initialState } from '../styles/themes';

//create context object with defaults
export const ThemeContext = createContext({
  theme: {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState);

  return (
    <ThemeContext.Provider 
  )
}
export default ThemeProvider;
