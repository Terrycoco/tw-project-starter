import "../styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeProvider";
import { myTheme } from "../styles/themes";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
