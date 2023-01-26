import "../styles/globals.css";
import { useState, useContext } from "react";
import ThemeProvider from "../context/ThemeContext";
import { currentTheme as initTheme } from "../styles/themes";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(initTheme);

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
