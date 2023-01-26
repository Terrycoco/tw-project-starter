import "../styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeProvider";
import { theme as myTheme } from "../styles/themes";

export default function App({ Component, pageProps }) {
  console.log("mytheme:", myTheme);
  const [theme] = useState(myTheme);
  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
