//theme.js
const twColors = require("tailwindcss/colors");
const _default = {
  colors: {
    brand: "#0f766e",

    secondary: "#0e7490",

    accent: "#06b6d4",

    blackish: "#404040",

    whitish: "#fafaf9",
  },

  fonts: {
    base: "Roboto Flex",

    display: "Roboto Flex",

    special: "Work Sans",

    mono: "Space Mono",
  },

  text: {
    base: "text-base leading-loose font-base text-blackish md:leading-normal",

    heading:
      "text-4xl sm:text-5xl font-display leading-none mb-5 text-blackish font-normal",

    subhead:
      "text-2xl sm:text-3xl font-display leading-snug mb-8 -mt-1 font-light text-blackish text-opacity-90",

    h3: "font-base font-semibold leading-none text-secondary mb-3 pt-6 ",

    p: "mb-3 max-w-md text-base leading-loose md:leading-normal",

    label: "text-xs font-normal text-opacity-80 pt-2",

    kicker:
      "italic font-special tracking-wide leading-tight font-normal uppercase text-brand dark:text-white text-sm pb-2",

    subtext: "text-xs text-medium -mt-3",

    link: "text-secondary underline",

    navlink: "text-whitish hover:text-accent",
  },

  layout: {
    page: "w-screen min-h-screen mx-auto",

    header: "bg-brand text-whitish hover:text-accent h-12 md:h-22",

    section: "container m-6 p-6 mx-auto max-w-5xl",

    footer: "bg-gray-300 text-blackish",
  },

  buttons: {
    sm: "inline-block px-6 h-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
  },

  variants: {
    brand: {
      50: {
        name: "brand-50",

        color: "brand",

        value: "50",

        hex: "#e6ffff",

        textColor: "text-black",
      },

      100: {
        name: "brand-100",

        color: "brand",

        value: "100",

        hex: "#cdffff",

        textColor: "text-black",
      },

      200: {
        name: "brand-200",

        color: "brand",

        value: "200",

        hex: "#a5ffff",

        textColor: "text-black",
      },

      300: {
        name: "brand-300",

        color: "brand",

        value: "300",

        hex: "#69d0c8",

        textColor: "text-black",
      },

      400: {
        name: "brand-400",

        color: "brand",

        value: "400",

        hex: "#2d948c",

        textColor: "text-white",
      },

      500: {
        name: "brand-500",

        color: "brand",

        value: "500",

        hex: "#00625a",

        textColor: "text-white",
      },

      600: {
        name: "brand-600",

        color: "brand",

        value: "600",

        hex: "#004e46",

        textColor: "text-white",
      },

      700: {
        name: "brand-700",

        color: "brand",

        value: "700",

        hex: "#003a32",

        textColor: "text-white",
      },

      800: {
        name: "brand-800",

        color: "brand",

        value: "800",

        hex: "#00261e",

        textColor: "text-white",
      },

      900: {
        name: "brand-900",

        color: "brand",

        value: "900",

        hex: "#00120a",

        textColor: "text-white",
      },

      DEFAULT: "#0f766e",
    },

    secondary: {
      50: {
        name: "secondary-50",

        color: "secondary",

        value: "50",

        hex: "#e5ffff",

        textColor: "text-black",
      },

      100: {
        name: "secondary-100",

        color: "secondary",

        value: "100",

        hex: "#ccffff",

        textColor: "text-black",
      },

      200: {
        name: "secondary-200",

        color: "secondary",

        value: "200",

        hex: "#a4ffff",

        textColor: "text-black",
      },

      300: {
        name: "secondary-300",

        color: "secondary",

        value: "300",

        hex: "#68ceea",

        textColor: "text-black",
      },

      400: {
        name: "secondary-400",

        color: "secondary",

        value: "400",

        hex: "#2c92ae",

        textColor: "text-white",
      },

      500: {
        name: "secondary-500",

        color: "secondary",

        value: "500",

        hex: "#00607c",

        textColor: "text-white",
      },

      600: {
        name: "secondary-600",

        color: "secondary",

        value: "600",

        hex: "#004c68",

        textColor: "text-white",
      },

      700: {
        name: "secondary-700",

        color: "secondary",

        value: "700",

        hex: "#003854",

        textColor: "text-white",
      },

      800: {
        name: "secondary-800",

        color: "secondary",

        value: "800",

        hex: "#002440",

        textColor: "text-white",
      },

      900: {
        name: "secondary-900",

        color: "secondary",

        value: "900",

        hex: "#00102c",

        textColor: "text-white",
      },

      DEFAULT: "#0e7490",
    },

    accent: {
      50: {
        name: "accent-50",

        color: "accent",

        value: "50",

        hex: "#ddffff",

        textColor: "text-black",
      },

      100: {
        name: "accent-100",

        color: "accent",

        value: "100",

        hex: "#c4ffff",

        textColor: "text-black",
      },

      200: {
        name: "accent-200",

        color: "accent",

        value: "200",

        hex: "#9cffff",

        textColor: "text-black",
      },

      300: {
        name: "accent-300",

        color: "accent",

        value: "300",

        hex: "#60ffff",

        textColor: "text-black",
      },

      400: {
        name: "accent-400",

        color: "accent",

        value: "400",

        hex: "#24d4f2",

        textColor: "text-black",
      },

      500: {
        name: "accent-500",

        color: "accent",

        value: "500",

        hex: "#00a2c0",

        textColor: "text-white",
      },

      600: {
        name: "accent-600",

        color: "accent",

        value: "600",

        hex: "#008eac",

        textColor: "text-white",
      },

      700: {
        name: "accent-700",

        color: "accent",

        value: "700",

        hex: "#007a98",

        textColor: "text-white",
      },

      800: {
        name: "accent-800",

        color: "accent",

        value: "800",

        hex: "#006684",

        textColor: "text-white",
      },

      900: {
        name: "accent-900",

        color: "accent",

        value: "900",

        hex: "#005270",

        textColor: "text-white",
      },

      DEFAULT: "#06b6d4",
    },

    blackish: {
      50: {
        name: "blackish-50",

        color: "blackish",

        value: "50",

        hex: "#ffffff",

        textColor: "text-black",
      },

      100: {
        name: "blackish-100",

        color: "blackish",

        value: "100",

        hex: "#fefefe",

        textColor: "text-black",
      },

      200: {
        name: "blackish-200",

        color: "blackish",

        value: "200",

        hex: "#d6d6d6",

        textColor: "text-black",
      },

      300: {
        name: "blackish-300",

        color: "blackish",

        value: "300",

        hex: "#9a9a9a",

        textColor: "text-white",
      },

      400: {
        name: "blackish-400",

        color: "blackish",

        value: "400",

        hex: "#5e5e5e",

        textColor: "text-white",
      },

      500: {
        name: "blackish-500",

        color: "blackish",

        value: "500",

        hex: "#2c2c2c",

        textColor: "text-white",
      },

      600: {
        name: "blackish-600",

        color: "blackish",

        value: "600",

        hex: "#181818",

        textColor: "text-white",
      },

      700: {
        name: "blackish-700",

        color: "blackish",

        value: "700",

        hex: "#040404",

        textColor: "text-white",
      },

      800: {
        name: "blackish-800",

        color: "blackish",

        value: "800",

        hex: "#000000",

        textColor: "text-white",
      },

      900: {
        name: "blackish-900",

        color: "blackish",

        value: "900",

        hex: "#000000",

        textColor: "text-white",
      },

      DEFAULT: "#404040",
    },

    whitish: {
      50: {
        name: "whitish-50",

        color: "whitish",

        value: "50",

        hex: "#ffffff",

        textColor: "text-black",
      },

      100: {
        name: "whitish-100",

        color: "whitish",

        value: "100",

        hex: "#ffffff",

        textColor: "text-black",
      },

      200: {
        name: "whitish-200",

        color: "whitish",

        value: "200",

        hex: "#ffffff",

        textColor: "text-black",
      },

      300: {
        name: "whitish-300",

        color: "whitish",

        value: "300",

        hex: "#ffffff",

        textColor: "text-black",
      },

      400: {
        name: "whitish-400",

        color: "whitish",

        value: "400",

        hex: "#ffffff",

        textColor: "text-black",
      },

      500: {
        name: "whitish-500",

        color: "whitish",

        value: "500",

        hex: "#e6e6e5",

        textColor: "text-black",
      },

      600: {
        name: "whitish-600",

        color: "whitish",

        value: "600",

        hex: "#d2d2d1",

        textColor: "text-black",
      },

      700: {
        name: "whitish-700",

        color: "whitish",

        value: "700",

        hex: "#bebebd",

        textColor: "text-black",
      },

      800: {
        name: "whitish-800",

        color: "whitish",

        value: "800",

        hex: "#aaaaa9",

        textColor: "text-black",
      },

      900: {
        name: "whitish-900",

        color: "whitish",

        value: "900",

        hex: "#969695",

        textColor: "text-white",
      },

      DEFAULT: "#fafaf9",
    },
  },
};

module.exports = _default;
