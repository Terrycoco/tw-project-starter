import { setState, createContext } from "react";

//create context object with defaults
export const ThemeContext = createContext({
  theme: {},
});

export default ThemeContext;
