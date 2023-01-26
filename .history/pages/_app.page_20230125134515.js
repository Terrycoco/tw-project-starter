import "../styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeProvider";
import { myTheme } from "../styles/themes";

export default function App({ Component, pageProps }) {
  //initialize the theme context here
  const [theme] = useState(myTheme);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
