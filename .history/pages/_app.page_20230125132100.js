import "../styles/globals.css";
import ThemeContext from "../context/themeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContext>
      <Component {...pageProps} />
    </ThemeContext>
  );
}
