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

//load each font (must do this manually)
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fonts = {
  raleway: {
    category: "sans",
    name: "Raleway",
    config: raleway,
  },
  inter: {
    category: "sans",
    name: "Inter",
    config: inter
  },
// spaceMono: {
//   category: "mono",
//   name: "Space Mono",

//   config: {
//     subsets: ["latin"],
//     variable: "--font-space-mono",
//     weight: "400",
//   },
// },
// playfairDisplay: {
//   category: "display",
//   name: "Playfair Display",

//   config: {
//     subsets: ["latin"],
//     variable: "--font-playfair-display",
//   },
// },
// nunito: {
//   category: "sans",
//   name: "Nunito",

//   config: {
//     subsets: ["latin"],
//     variable: "--font-nunito",
//   },
// },

// rubik: {
//   category: "sans",
//   name: "Rubik",

//   config: {
//     subsets: ["latin"],
//     variable: "--font-rubik",
//   },
// },

// workSans: {
//   category: "sans",
//   name: "Work Sans",

//   config: {
//     subsets: ["latin"],
//     variable: "--font-work-sans",
//   },
// },
// quicksand: {
//   category: "sans",
//   name: "Quicksand",

//   config: {
//     subsets: ["latin"],
//     variable: "--font-quicksand",
//   },
// },
// karla: {
//   category: "sans",
//   name: "Karla",
//   config: Karla({
//     subsets: ["latin"],
//     variable: "--font-karla",
//   }),
// },
// josefinSans: {
//   category: "sans",
//   name: "Josefin Sans",
//   config: Josefin_Sans({
//     subsets: ["latin"],
//     variable: "--font-josefin-sans",
//   }),
// },
// notoSansBengali: {
//   category: "sans",
//   name: "Noto Sans Bengali",
//   config: Noto_Sans_Bengali({
//     subsets: ["latin"],
//     variable: "--font-noto-sans-bengali",
//   }),
// },
// lora: {
//   category: "serif",
//   name: "Lora",
//   config: Lora({
//     subsets: ["latin"],
//     variable: "--font-lora",
//   }),
// },
// bitter: {
//   category: "serif",
//   name: "Bitter",
//   config: Bitter({
//     subsets: ["latin"],
//     variable: "--font-bitter",
//   }),
// },
// robotoSerif: {
//   category: "serif",
//   name: "Roboto Serif",
//   config: Roboto_Serif({
//     subsets: ["latin"],
//     variable: "--font-roboto-serif",
//   }),
// },
// notoSerifBengali: {
//   category: "serif",
//   name: "Noto Serif Bengali",
//   config: Noto_Serif_Bengali({
//     subsets: ["latin"],
//     variable: "--font-noto-serif-bengali",
//   }),
// },
// notoSansDisplay: {
//   category: "display",
//   name: "Noto Sans Display",
//   config: Noto_Sans_Display({
//     subsets: ["latin"],
//     variable: "--font-noto-sans-display",
//   }),
// },
// notoSerifDisplay: {
//   category: "display",
//   name: "Noto Serif Display",
//   config: Noto_Serif_Display({
//     subsets: ["latin"],
//     variable: "--font-noto-serif-display",
//   }),
// },
// robotoMono: {
//   category: "mono",
//   name: "Roboto Mono",
//   config: Roboto_Mono({
//     subsets: ["latin"],
//     variable: "--font-roboto_mono",
//   }),
// },

//just return variables for use in _app (dev only)
const allFontVariables = () => {
  let result = ``;
  for (const font in fonts) {
    result += `${fonts[font].config.variable} `;
  }
  return result;
};

const getFontsByCategory = (cat) => {
  let result = [];
  for (const font in fonts) {
    console.log(fonts[font]);
    console.log("font:", font, "cat:", fonts[font].category);
    if (fonts[font].category == cat) {
      result.push(fonts[font].name);
    }
  }
  return result;
};

const fontVariables = allFontVariables();

export { getFontsByCategory, fontVariables, fonts };
