import "../styles/globals.css";
import { Raleway, Inter } from "@next/font/google";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
