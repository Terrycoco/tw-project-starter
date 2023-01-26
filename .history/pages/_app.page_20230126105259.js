import "../styles/globals.css";
import { useState, useContext } from "react";
import ThemeProvider from "../context/ThemeContext";
import { currentTheme as initTheme } from "../styles/themes";

export default function App({ Component, pageProps }) {
  const currentTheme = initTheme;

  return (
    <ThemeProvider value={{ currentTheme }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
