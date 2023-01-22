//import from @next/font
import {
  Raleway,
  Inter,
  Space_Mono,
  Playfair_Display,
} from "@next/font/google";

//set up configs
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

//bundle together
const fonts = { raleway, inter, spaceMono, playfairDisplay };

//just return variables
const allFontVariables = () => {
  let result = ``;
  fonts.map((key) => {
    result += `${fonts[key].variable} `;
  });
  return result;
};

export default fonts;
