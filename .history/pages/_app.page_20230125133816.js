import "../styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "../context/themeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContext>
      <Component {...pageProps} />
    </ThemeContext>
  );
}
