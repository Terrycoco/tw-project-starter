import { theme } from "../styles/themes";
import { createContext, useState } from "react";

export const Theme = createContext(null);

function Context({ children }) {
  const [theme, setTheme] = useState();
  return (
    <Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
  );
}
