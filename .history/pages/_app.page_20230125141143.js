import "../styles/globals.css";
import { useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "../context/ThemeProvider";
import { theme as myTheme } from "../styles/themes";

export default function App({ Component, pageProps }) {
  const state = useContext(ThemeContext);

  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
