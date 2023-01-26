import { createContext, useState, useContext } from "react";

//create context object
const ThemeContext = createContext();

//export Provider
export function ThemeProvider(props) {
  const [theme, setTheme] = useState(props.theme);
  return (
    <ThemeContext.Provider value=
  )
}