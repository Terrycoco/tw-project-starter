import { theme as savedTheme } from "../styles/themes";
import { createContext, useState } from "react";

export const Theme = createContext(null);

function ThemeContext({ children }) {
  const [theme, setTheme] = useState(savedTheme);
  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
}

export default ThemeContext;
