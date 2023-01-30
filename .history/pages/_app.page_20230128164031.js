import "../styles/globals.css";
import { useState, useContext } from "react";
import { ThemeProvider } from "../context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider key="themeprovider">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
