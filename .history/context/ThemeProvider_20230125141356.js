import { createContext, useState, useContext } from "react";
import { theme as mytheme } from "../styles/themes";

//create context object with defaults
export const ThemeContext = createContext({
  theme: {},
  setTheme: () => {},
});

//export Provider
export function ThemeProvider(props) {
  const setTheme = (theme) => {
    setState({ ...state, theme: theme });
  };
  const initState = {
    theme: mytheme,
    setTheme: setTheme,
  };

  const [state, setState] = useState(initState);

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
}

//export useContext hook
export function useTheme() {
  return useContext(ThemeContext);
}