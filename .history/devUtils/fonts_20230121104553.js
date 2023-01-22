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
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  category: "sans",
});
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["latin"],
  variable: "--font-noto-sans-bengali",
  category: "sans",
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  category: "serif",
});
const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  category: "serif",
});
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
  category: "serif",
});
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin"],
  variable: "--font-noto-serif-bengali",
  category: "serif",
});
const notoSansDisplay = Noto_Sans_Display({
  subsets: ["latin"],
  variable: "--font-noto-sans-display",
  category: "display",
});
const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-noto-serif-display",
  category: "display",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto_mono",
  category: "mono",
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

//just return variables
const allFontVariables = () => {
  let result = ``;
  for (const font in allFonts) {
    result += `${allFonts[font].variable} `;
  }
  return result;
};

const fontVariables = allFontVariables();

export { fontVariables, allFonts };
