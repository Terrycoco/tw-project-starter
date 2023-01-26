import "../styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeProvider";
import { theme as myTheme } from "../styles/themes";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(myTheme);

  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
