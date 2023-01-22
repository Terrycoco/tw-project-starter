import {
  Raleway,
  Inter,
  Space_Mono,
  Playfair_Display,
} from "@next/font/google";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: "400",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const fonts = { raleway, inter, spaceMono, playfairDisplay };

export default font;
