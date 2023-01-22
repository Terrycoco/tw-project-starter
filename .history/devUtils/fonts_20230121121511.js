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
  name: "Raleway",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  category: "sans",
  name: "Inter",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: "400",
  category: "mono",
  name: "Space Mono",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  category: "display",
  name: "Playfair Display",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  category: "sans",
  name: "Nunito",
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  category: "sans",
  name: "Rubik",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  category: "sans",
  name: "Work Sans",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  category: "sans",
  name: "Quicksand",
});
const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  category: "sans",
  name: "Karla",
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  category: "sans",
  name: "Josefin Sans",
});
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["latin"],
  variable: "--font-noto-sans-bengali",
  category: "sans",
  name: "Noto Sans Bengali",
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  category: "serif",
  name: "Lora",
});
const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  category: "serif",
  name: "Bitter",
});
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  category: "serif",
  name: "Roboto Serif",
});
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin"],
  variable: "--font-noto-serif-bengali",
  category: "serif",
  name: "Noto Serif Bengali",
});
const notoSansDisplay = Noto_Sans_Display({
  subsets: ["latin"],
  variable: "--font-noto-sans-display",
  category: "display",
  name: "Noto Sans Display",
});
const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-noto-serif-display",
  category: "display",
  name: "Noto Serif Display",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto_mono",
  category: "mono",
  name: "Roboto Mono",
});

//bundle together
const allFonts = {
  raleway,
  inter,
  spaceMono,
  playfairDisplay,
  nunito,
  rubik,
  workSans,
  quicksand,
  karla,
  josefinSans,
  notoSansBengali,
  lora,
  bitter,
  robotoSerif,
  notoSerifBengali,
  robotoMono,
  notoSansDisplay,
  notoSerifDisplay,
};

//just return variables for use in _app (dev only)
const allFontVariables = () => {
  let result = ``;
  for (const font in allFonts) {
    result += `${allFonts[font].variable} `;
  }
  return result;
};

const getFontsByCategory = (cat) => {
  let result = [];
  for (const font in allFonts) {
    console.log("font:", font, "cat:", allFonts[font].category);
    if (allFonts[font].category == cat) {
      result.push(allfonts[font].name);
    }
  }
  return result;
};

const fontVariables = allFontVariables();

export { getFontsByCategory, fontVariables, allFonts };
