//import from @next/font
import {
  Raleway,
  Inter,
  Space_Mono,
  Playfair_Display,
  Nunito,
  Rubik,
  Work_Sans,
  Quicksand,
  Karla,
  Josefin_Sans,
  Noto_Sans_Bengali,
  Lora,
  Bitter,
  Roboto_Serif,
  Noto_Serif_Bengali,
  Noto_Sans_Display,
  Noto_Serif_Display,
  Roboto_Mono,
} from "@next/font/google";

//set up configs
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  category: "sans",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  category: "sans",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: "400",
  category: "mono",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  category: "display",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  category: "sans",
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  category: "sans",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  category: "sans",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  category: "sans",
});
const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  category: "sans",
});

//bundle together
const fonts = {
  raleway,
  inter,
  spaceMono,
  playfairDisplay,
  nunito,
  rubik,
  workSans,
  quicksand,
};

//just return variables
const allFontVariables = () => {
  let result = ``;
  for (const font in fonts) {
    result += `${fonts[font].variable} `;
  }
  return result;
};

const fontVariables = allFontVariables();
export { fontVariables, fonts };
