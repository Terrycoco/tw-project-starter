import "../styles/globals.css";
import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { theme as initTheme } from "../styles/themes";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(ThemeContext);

  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
