import "../styles/globals.css";
import { fontVariables } from "../devUtils/fonts";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${fontVariables}`}>
      <Component {...pageProps} />
    </main>
  );
}
