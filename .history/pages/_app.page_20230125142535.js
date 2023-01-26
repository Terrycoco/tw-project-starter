import "../styles/globals.css";
import { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function App({ Component, pageProps }) {
  const state = useContext(ThemeContext);

  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
