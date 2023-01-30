import { createContext, useState, useContext } from "react";
import { initVariants } from "../../devUtils";
import { theme as mytheme } from "../themes/theme";

const initTheme = initVariants(theme);

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
    theme: {},
    setTheme: setTheme,
  };

  const [state, setState] = useState(initTheme);

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
