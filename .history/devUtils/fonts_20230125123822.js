import { findOne } from "../utils";

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
  //Noto_Sans_Bengali,
  Lora,
  Bitter,
  Roboto_Serif,
  //Noto_Serif_Bengali,
  // Noto_Sans_Display,
  // Noto_Serif_Display,
  Roboto_Mono,
  Comfortaa,
  Open_Sans,
  Oleo_Script,
  Sansita_Swashed,
  Roboto_Flex,
} from "@next/font/google";
import { resolveObjectURL } from "buffer";

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
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});
// const notoSansBengali = Noto_Sans_Bengali({
//   subsets: ["latin"],
//   variable: "--font-noto-sans-bengali",
// });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});
const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
});
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});
// const notoSerifBengali = Noto_Serif_Bengali({
//   subsets: ["latin"],
//   variable: "--font-noto-serif-bengali",
// });

// const notoSansDisplay = Noto_Sans_Display({
//   subsets: ["latin"],
//   variable: "--font-noto-sans-display",
// });
// const notoSerifDisplay = Noto_Serif_Display({
//   subsets: ["latin"],
//   variable: "--font-noto-serif-display",
// });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto_mono",
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});
const oleoScript = Oleo_Script({
  subsets: ["latin"],
  variable: "--font-oleo-script",
  weight: "400",
});
const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita-swashed",
});
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

//add the result to font list so we can access
const fonts = {
  raleway: {
    category: ["sans"],
    name: "Raleway",
    config: raleway,
  },
  inter: {
    category: ["sans"],
    name: "Inter",
    config: inter,
  },
  spaceMono: {
    category: ["mono"],
    name: "Space Mono",
    config: spaceMono,
  },
  playfairDisplay: {
    category: ["display"],
    name: "Playfair Display",
    config: playfairDisplay,
  },

  nunito: {
    category: ["sans"],
    name: "Nunito",
    config: nunito,
  },

  rubik: {
    category: ["sans"],
    name: "Rubik",
    config: rubik,
  },

  workSans: {
    category: ["sans"],
    name: "Work Sans",
    config: workSans,
  },
  quicksand: {
    category: ["sans"],
    name: "Quicksand",
    config: quicksand,
  },

  karla: {
    category: ["sans"],
    name: "Karla",
    config: karla,
  },
  josefinSans: {
    category: ["sans"],
    name: "Josefin Sans",
    config: josefinSans,
  },
  // notoSansBengali: {
  //   category: ["sans"],
  //   name: "Noto Sans Bengali",
  //   config: notoSansBengali,
  // },
  lora: {
    category: ["serif"],
    name: "Lora",
    config: lora,
  },
  bitter: {
    category: ["serif"],
    name: "Bitter",
    config: bitter,
  },
  robotoSerif: {
    category: ["serif"],
    name: "Roboto Serif",
    config: robotoSerif,
  },

  // notoSerifBengali: {
  //   category: ["serif"],
  //   name: "Noto Serif Bengali",
  //   config: notoSerifBengali,
  // },
  // notoSansDisplay: {
  //   category: ["display"],
  //   name: "Noto Sans Display",
  //   config: notoSansDisplay,
  // },
  // notoSerifDisplay: {
  //   category: ["display"],
  //   name: "Noto Serif Display",
  //   config: notoSerifDisplay,
  // },
  robotoMono: {
    category: ["mono"],
    name: "Roboto Mono",
    config: robotoMono,
  },
  comfortaa: {
    category: ["display"],
    name: "Comfortaa",
    config: comfortaa,
  },
  openSans: {
    category: ["display", "sans"],
    name: "Open Sans",
    config: openSans,
  },
  oleoScript: {
    category: ["display", "special"],
    name: "Oleo Script",
    config: oleoScript,
  },
  sansitaSwashed: {
    category: ["display, special"],
    name: "Sansita Swashed",
    config: sansitaSwashed,
  },
  robotoFlex: {
    category: ["sans, display, special"],
    name: "Roboto Flex",
    config: robotoFlex,
  },
};

//just return variables for use in _app (dev only)
const allFontVariables = () => {
  let result = ` `;
  for (const font in fonts) {
    result += `${fonts[font].config.variable} `;
  }
  return result;
};

const getFontsByCategory = () => {
  let result = {
    sans: [],
    serif: [],
    display: [],
    mono: [],
    special: [],
  };

  const fontKeys = Object.keys(fonts);
  console.log("fontkeys:", fontKeys);

  fontKeys.forEach((fontkey) => {
    console.log("fontobj:", fonts[fontkey]);
    for (const cat in fonts[fontkey].category) {
      let category = fonts[fontkey].category[cat];
      result[category].push(fonts[fontkey].name);
    }
  });

  result.sans.sort();
  result.serif.sort();
  result.display.sort();
  result.mono.sort();
  result.special.sort();
  // console.log("font list:", result);
  return result;
};

const getFontByName = (name) => {
  let varname = name.replace(" ", "");
  let key = varname[0].toLowerCase() + varname.substring(1);
  let obj = fonts[key];
  return obj;
};

const getFontClassName = (name) => {
  let obj = getFontByName(name);
  if (typeof obj === "object") {
    //console.log(name, " classname:", obj.config.className);
    return obj.config.className;
  } else {
    return "";
  }
};

const getVariable = (name) => {};

const fontVariables = allFontVariables();

export {
  getFontsByCategory,
  fontVariables,
  fonts,
  getFontByName,
  getFontClassName,
};
