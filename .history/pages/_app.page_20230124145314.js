import "../styles/globals.css";
import { ModalProvider } from "../components/modals/ModalContext";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
