import "../styles/globals.css";
import { Raleway, Inter, Space_Mono, Yeseva_One } from "@next/font/google";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spacemono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-spacemono",
  weight: "400",
});
const yeseva = Yeseva_One({ subsets: ["latin"], variable: "--font-yeseva" });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
