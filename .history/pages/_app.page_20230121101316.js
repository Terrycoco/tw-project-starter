import "../styles/globals.css";
import fonts from "../devUtils/fonts";

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${fonts.raleway.variable} ${fonts.playfairDisplay.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
