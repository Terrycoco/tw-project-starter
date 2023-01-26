import { createContext } from "react";

//create context object with defaults
export const ThemeContext = createContext({
  theme: {},
  setTheme: () => {},
});
export default ThemeContext;
