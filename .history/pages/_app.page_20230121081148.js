import "../styles/globals.css";
import {
  Raleway,
  Inter,
  Space_Mono,
  Playfair_Display,
} from "@next/font/google";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spacemono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: "400",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
