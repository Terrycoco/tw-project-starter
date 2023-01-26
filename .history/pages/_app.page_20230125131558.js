import "../styles/globals.css";
import Context from "../context/themeContext";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <main>
        <Component {...pageProps} />
      </main>
    </Context>
  );
}
