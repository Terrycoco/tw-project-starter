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

//load each font (must do this manually UNFORTUNATELY!!!!)
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: "400",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

//add the result to font list so we can access
const fonts = {
  raleway: {
    category: "sans",
    name: "Raleway",
    config: raleway,
  },
  inter: {
    category: "sans",
    name: "Inter",
    config: inter,
  },
  spaceMono: {
    category: "mono",
    name: "Space Mono",
    config: spaceMono,
  },
  playfairDisplay: {
    category: "display",
    name: "Playfair Display",
    config: playfairDisplay,
  },

  nunito: {
    category: "sans",
    name: "Nunito",
    config: nunito,
  },

  rubik: {
    category: "sans",
    name: "Rubik",
    config: rubik,
  },

  workSans: {
    category: "sans",
    name: "Work Sans",
    config: workSans,
  },
  quicksand: {
    category: "sans",
    name: "Quicksand",

    config: quicksand,
  },

  karla: {
    category: "sans",
    name: "Karla",
    config: karla,
  },
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
};

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
