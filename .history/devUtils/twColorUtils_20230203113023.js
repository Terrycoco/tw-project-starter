import twColors from "tailwindcss/colors";
import { getTextColorFromHex } from "../utils";
import { currentTheme as theme } from "../themes";
import { twMerge } from "tailwind-merge";

export class ColorObj {
  constructor(base, variant, hex) {
    this.id = variant ? `${base}-${variant}` : `${base}`;
    this.base = base;
    this.variant = variant;
    this.hex = hex;
    this.textColor = getTextColorFromHex(this.hex);
  }
}

export const twColorList = [
  "red",
  "pink",
  "rose",
  "fuchsia",
  "purple",
  "violet",
  "indigo",
  "blue",
  "sky",
  "cyan",
  "teal",
  "emerald",
  "green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "stone",
  "neutral",
  "zinc",
  "gray",
  "slate",
];

export function isValidHexCode(str) {
  // Regex to check valid
  // hexadecimalColor_code
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  // if str
  // is empty return false
  if (str == null) {
    return false;
  }

  // Return true if the str
  // matched the ReGex
  if (regex.test(str) == true) {
    return true;
  } else {
    return false;
  }
}

function lightenDarkenColor(col, amt) {
  if (!col || col === undefined) return;
  return (
    "#" +
    col
      .slice(1)
      .match(/../g)
      .map((x) =>
        ((x = +`0x${x}` + amt), x < 0 ? 0 : x > 255 ? 255 : x)
          .toString(16)
          .padStart(2, 0)
      ).join``
  );
}

export const getColorObjectsArray = () => {
  let result = [];

  let color;
  for (let i = 0; i < twColorList.length; i++) {
    color = twColorList[i];
    let array = [];

    let obj = new ColorObj(color, 50, twColors[color][50]);

    array.push(obj);

    //inner loop
    for (let v = 100; v < 1000; v = v + 100) {
      let obj = new ColorObj(color, v, twColors[color][v]);
      array.push(obj);
    }
    result.push(array);
  }
  //console.log("twColors:", twColors);
  return result;
};

const shadeVals = {
  50: 215,
  100: 190,
  200: 150,
  300: 90,
  400: 30,
  450: 0,
  500: -20,
  600: -40,
  700: -60,
  800: -80,
  900: -100,
};

export const DEFAULTCOLOROBJ = new ColorObj("teal", 500, twColors.teal[500]);

//make each time because may change
export const makeCustomShades = (hex, base, category, useHexOnly = false) => {
  //console.log("hex", hex, "base", base);
  let customShades = {};
  if (!isValidHexCode(hex)) return "ERROR";
  customShades = {}; //add color to obj

  //if this is a tw color just get normal variants

  if (!useHexOnly && twColorList.includes(base)) {
    //this is a tailwind color
    let keys = Object.keys(twColors[base]);
    keys.forEach((key) => {
      let obj = new ColorObj(base, key, twColors[base][key]);
      customShades[key] = obj;
    });
  } else {
    //for each val in shadeVals
    let keys = Object.keys(shadeVals);
    keys.forEach((key) => {
      //get shade hex
      let shadehex = lightenDarkenColor(hex, shadeVals[key]);
      let obj = new ColorObj(category, key, shadehex);

      customShades[key] = obj;
    });
  }

  return customShades;
};

export const getCustomColorObjectsArray = (hex, base) => {
  if (!hex) return;
  let customShades = makeCustomShades(hex, base);
  if (customShades === "ERROR") return;
  let array = [];
  let obj = new ColorObj(base, 50, customShades[50]);
  array.push(obj);

  //inner loop
  for (let v = 100; v < 1000; v = v + 100) {
    let ob = new ColorObj(base, v, customShades[v]);
    array.push(ob);
  }

  return array;
};

export const getTWColornameByHex = (hex) => {
  if (twHexList.hasOwnProperty(hex)) {
    return twHexList[hex].name;
  } else {
    return false;
  }
};

export const createHexList = () => {
  //NOTE: some color names have changed
  let result = {};
  let hex;
  for (let color in twColors) {
    if (typeof twColors[color] == "object") {
      //loop through object
      for (let colorVal in twColors[color]) {
        hex = twColors[color][colorVal];
        result[hex] = new ColorObj(color, colorVal, hex);
      }
    } else {
      hex = twColors[color];
      result[hex] = new ColorObj(color, "DEFAULT", hex);
    }
  }
  //console.log(result);
  return result;
};

//color objects in array form in correct order
export const twColorObjArray = [
  [
    { name: "red-50", color: "red", value: 50, hex: "#fef2f2" },
    { name: "red-100", color: "red", value: 100, hex: "#fee2e2" },
    { name: "red-200", color: "red", value: 200, hex: "#fecaca" },
    { name: "red-300", color: "red", value: 300, hex: "#fca5a5" },
    { name: "red-400", color: "red", value: 400, hex: "#f87171" },
    { name: "red-500", color: "red", value: 500, hex: "#ef4444" },
    { name: "red-600", color: "red", value: 600, hex: "#dc2626" },
    { name: "red-700", color: "red", value: 700, hex: "#b91c1c" },
    { name: "red-800", color: "red", value: 800, hex: "#991b1b" },
    { name: "red-900", color: "red", value: 900, hex: "#7f1d1d" },
  ],
  [
    { name: "pink-50", color: "pink", value: 50, hex: "#fdf2f8" },
    { name: "pink-100", color: "pink", value: 100, hex: "#fce7f3" },
    { name: "pink-200", color: "pink", value: 200, hex: "#fbcfe8" },
    { name: "pink-300", color: "pink", value: 300, hex: "#f9a8d4" },
    { name: "pink-400", color: "pink", value: 400, hex: "#f472b6" },
    { name: "pink-500", color: "pink", value: 500, hex: "#ec4899" },
    { name: "pink-600", color: "pink", value: 600, hex: "#db2777" },
    { name: "pink-700", color: "pink", value: 700, hex: "#be185d" },
    { name: "pink-800", color: "pink", value: 800, hex: "#9d174d" },
    { name: "pink-900", color: "pink", value: 900, hex: "#831843" },
  ],
  [
    { name: "rose-50", color: "rose", value: 50, hex: "#fff1f2" },
    { name: "rose-100", color: "rose", value: 100, hex: "#ffe4e6" },
    { name: "rose-200", color: "rose", value: 200, hex: "#fecdd3" },
    { name: "rose-300", color: "rose", value: 300, hex: "#fda4af" },
    { name: "rose-400", color: "rose", value: 400, hex: "#fb7185" },
    { name: "rose-500", color: "rose", value: 500, hex: "#f43f5e" },
    { name: "rose-600", color: "rose", value: 600, hex: "#e11d48" },
    { name: "rose-700", color: "rose", value: 700, hex: "#be123c" },
    { name: "rose-800", color: "rose", value: 800, hex: "#9f1239" },
    { name: "rose-900", color: "rose", value: 900, hex: "#881337" },
  ],
  [
    { name: "fuchsia-50", color: "fuchsia", value: 50, hex: "#fdf4ff" },
    {
      name: "fuchsia-100",
      color: "fuchsia",
      value: 100,
      hex: "#fae8ff",
    },
    {
      name: "fuchsia-200",
      color: "fuchsia",
      value: 200,
      hex: "#f5d0fe",
    },
    {
      name: "fuchsia-300",
      color: "fuchsia",
      value: 300,
      hex: "#f0abfc",
    },
    {
      name: "fuchsia-400",
      color: "fuchsia",
      value: 400,
      hex: "#e879f9",
    },
    {
      name: "fuchsia-500",
      color: "fuchsia",
      value: 500,
      hex: "#d946ef",
    },
    {
      name: "fuchsia-600",
      color: "fuchsia",
      value: 600,
      hex: "#c026d3",
    },
    {
      name: "fuchsia-700",
      color: "fuchsia",
      value: 700,
      hex: "#a21caf",
    },
    {
      name: "fuchsia-800",
      color: "fuchsia",
      value: 800,
      hex: "#86198f",
    },
    {
      name: "fuchsia-900",
      color: "fuchsia",
      value: 900,
      hex: "#701a75",
    },
  ],
  [
    { name: "purple-50", color: "purple", value: 50, hex: "#faf5ff" },
    { name: "purple-100", color: "purple", value: 100, hex: "#f3e8ff" },
    { name: "purple-200", color: "purple", value: 200, hex: "#e9d5ff" },
    { name: "purple-300", color: "purple", value: 300, hex: "#d8b4fe" },
    { name: "purple-400", color: "purple", value: 400, hex: "#c084fc" },
    { name: "purple-500", color: "purple", value: 500, hex: "#a855f7" },
    { name: "purple-600", color: "purple", value: 600, hex: "#9333ea" },
    { name: "purple-700", color: "purple", value: 700, hex: "#7e22ce" },
    { name: "purple-800", color: "purple", value: 800, hex: "#6b21a8" },
    { name: "purple-900", color: "purple", value: 900, hex: "#581c87" },
  ],
  [
    { name: "violet-50", color: "violet", value: 50, hex: "#f5f3ff" },
    { name: "violet-100", color: "violet", value: 100, hex: "#ede9fe" },
    { name: "violet-200", color: "violet", value: 200, hex: "#ddd6fe" },
    { name: "violet-300", color: "violet", value: 300, hex: "#c4b5fd" },
    { name: "violet-400", color: "violet", value: 400, hex: "#a78bfa" },
    { name: "violet-500", color: "violet", value: 500, hex: "#8b5cf6" },
    { name: "violet-600", color: "violet", value: 600, hex: "#7c3aed" },
    { name: "violet-700", color: "violet", value: 700, hex: "#6d28d9" },
    { name: "violet-800", color: "violet", value: 800, hex: "#5b21b6" },
    { name: "violet-900", color: "violet", value: 900, hex: "#4c1d95" },
  ],
  [
    { name: "indigo-50", color: "indigo", value: 50, hex: "#eef2ff" },
    { name: "indigo-100", color: "indigo", value: 100, hex: "#e0e7ff" },
    { name: "indigo-200", color: "indigo", value: 200, hex: "#c7d2fe" },
    { name: "indigo-300", color: "indigo", value: 300, hex: "#a5b4fc" },
    { name: "indigo-400", color: "indigo", value: 400, hex: "#818cf8" },
    { name: "indigo-500", color: "indigo", value: 500, hex: "#6366f1" },
    { name: "indigo-600", color: "indigo", value: 600, hex: "#4f46e5" },
    { name: "indigo-700", color: "indigo", value: 700, hex: "#4338ca" },
    { name: "indigo-800", color: "indigo", value: 800, hex: "#3730a3" },
    { name: "indigo-900", color: "indigo", value: 900, hex: "#312e81" },
  ],
  [
    { name: "blue-50", color: "blue", value: 50, hex: "#eff6ff" },
    { name: "blue-100", color: "blue", value: 100, hex: "#dbeafe" },
    { name: "blue-200", color: "blue", value: 200, hex: "#bfdbfe" },
    { name: "blue-300", color: "blue", value: 300, hex: "#93c5fd" },
    { name: "blue-400", color: "blue", value: 400, hex: "#60a5fa" },
    { name: "blue-500", color: "blue", value: 500, hex: "#3b82f6" },
    { name: "blue-600", color: "blue", value: 600, hex: "#2563eb" },
    { name: "blue-700", color: "blue", value: 700, hex: "#1d4ed8" },
    { name: "blue-800", color: "blue", value: 800, hex: "#1e40af" },
    { name: "blue-900", color: "blue", value: 900, hex: "#1e3a8a" },
  ],
  [
    { name: "sky-50", color: "sky", value: 50, hex: "#f0f9ff" },
    { name: "sky-100", color: "sky", value: 100, hex: "#e0f2fe" },
    { name: "sky-200", color: "sky", value: 200, hex: "#bae6fd" },
    { name: "sky-300", color: "sky", value: 300, hex: "#7dd3fc" },
    { name: "sky-400", color: "sky", value: 400, hex: "#38bdf8" },
    { name: "sky-500", color: "sky", value: 500, hex: "#0ea5e9" },
    { name: "sky-600", color: "sky", value: 600, hex: "#0284c7" },
    { name: "sky-700", color: "sky", value: 700, hex: "#0369a1" },
    { name: "sky-800", color: "sky", value: 800, hex: "#075985" },
    { name: "sky-900", color: "sky", value: 900, hex: "#0c4a6e" },
  ],
  [
    { name: "cyan-50", color: "cyan", value: 50, hex: "#ecfeff" },
    { name: "cyan-100", color: "cyan", value: 100, hex: "#cffafe" },
    { name: "cyan-200", color: "cyan", value: 200, hex: "#a5f3fc" },
    { name: "cyan-300", color: "cyan", value: 300, hex: "#67e8f9" },
    { name: "cyan-400", color: "cyan", value: 400, hex: "#22d3ee" },
    { name: "cyan-500", color: "cyan", value: 500, hex: "#06b6d4" },
    { name: "cyan-600", color: "cyan", value: 600, hex: "#0891b2" },
    { name: "cyan-700", color: "cyan", value: 700, hex: "#0e7490" },
    { name: "cyan-800", color: "cyan", value: 800, hex: "#155e75" },
    { name: "cyan-900", color: "cyan", value: 900, hex: "#164e63" },
  ],
  [
    { name: "teal-50", color: "teal", value: 50, hex: "#f0fdfa" },
    { name: "teal-100", color: "teal", value: 100, hex: "#ccfbf1" },
    { name: "teal-200", color: "teal", value: 200, hex: "#99f6e4" },
    { name: "teal-300", color: "teal", value: 300, hex: "#5eead4" },
    { name: "teal-400", color: "teal", value: 400, hex: "#2dd4bf" },
    { name: "teal-500", color: "teal", value: 500, hex: "#14b8a6" },
    { name: "teal-600", color: "teal", value: 600, hex: "#0d9488" },
    { name: "teal-700", color: "teal", value: 700, hex: "#0f766e" },
    { name: "teal-800", color: "teal", value: 800, hex: "#115e59" },
    { name: "teal-900", color: "teal", value: 900, hex: "#134e4a" },
  ],
  [
    { name: "emerald-50", color: "emerald", value: 50, hex: "#ecfdf5" },
    {
      name: "emerald-100",
      color: "emerald",
      value: 100,
      hex: "#d1fae5",
    },
    {
      name: "emerald-200",
      color: "emerald",
      value: 200,
      hex: "#a7f3d0",
    },
    {
      name: "emerald-300",
      color: "emerald",
      value: 300,
      hex: "#6ee7b7",
    },
    {
      name: "emerald-400",
      color: "emerald",
      value: 400,
      hex: "#34d399",
    },
    {
      name: "emerald-500",
      color: "emerald",
      value: 500,
      hex: "#10b981",
    },
    {
      name: "emerald-600",
      color: "emerald",
      value: 600,
      hex: "#059669",
    },
    {
      name: "emerald-700",
      color: "emerald",
      value: 700,
      hex: "#047857",
    },
    {
      name: "emerald-800",
      color: "emerald",
      value: 800,
      hex: "#065f46",
    },
    {
      name: "emerald-900",
      color: "emerald",
      value: 900,
      hex: "#064e3b",
    },
  ],
  [
    { name: "green-50", color: "green", value: 50, hex: "#f0fdf4" },
    { name: "green-100", color: "green", value: 100, hex: "#dcfce7" },
    { name: "green-200", color: "green", value: 200, hex: "#bbf7d0" },
    { name: "green-300", color: "green", value: 300, hex: "#86efac" },
    { name: "green-400", color: "green", value: 400, hex: "#4ade80" },
    { name: "green-500", color: "green", value: 500, hex: "#22c55e" },
    { name: "green-600", color: "green", value: 600, hex: "#16a34a" },
    { name: "green-700", color: "green", value: 700, hex: "#15803d" },
    { name: "green-800", color: "green", value: 800, hex: "#166534" },
    { name: "green-900", color: "green", value: 900, hex: "#14532d" },
  ],
  [
    { name: "lime-50", color: "lime", value: 50, hex: "#f7fee7" },
    { name: "lime-100", color: "lime", value: 100, hex: "#ecfccb" },
    { name: "lime-200", color: "lime", value: 200, hex: "#d9f99d" },
    { name: "lime-300", color: "lime", value: 300, hex: "#bef264" },
    { name: "lime-400", color: "lime", value: 400, hex: "#a3e635" },
    { name: "lime-500", color: "lime", value: 500, hex: "#84cc16" },
    { name: "lime-600", color: "lime", value: 600, hex: "#65a30d" },
    { name: "lime-700", color: "lime", value: 700, hex: "#4d7c0f" },
    { name: "lime-800", color: "lime", value: 800, hex: "#3f6212" },
    { name: "lime-900", color: "lime", value: 900, hex: "#365314" },
  ],
  [
    { name: "yellow-50", color: "yellow", value: 50, hex: "#fefce8" },
    { name: "yellow-100", color: "yellow", value: 100, hex: "#fef9c3" },
    { name: "yellow-200", color: "yellow", value: 200, hex: "#fef08a" },
    { name: "yellow-300", color: "yellow", value: 300, hex: "#fde047" },
    { name: "yellow-400", color: "yellow", value: 400, hex: "#facc15" },
    { name: "yellow-500", color: "yellow", value: 500, hex: "#eab308" },
    { name: "yellow-600", color: "yellow", value: 600, hex: "#ca8a04" },
    { name: "yellow-700", color: "yellow", value: 700, hex: "#a16207" },
    { name: "yellow-800", color: "yellow", value: 800, hex: "#854d0e" },
    { name: "yellow-900", color: "yellow", value: 900, hex: "#713f12" },
  ],
  [
    { name: "amber-50", color: "amber", value: 50, hex: "#fffbeb" },
    { name: "amber-100", color: "amber", value: 100, hex: "#fef3c7" },
    { name: "amber-200", color: "amber", value: 200, hex: "#fde68a" },
    { name: "amber-300", color: "amber", value: 300, hex: "#fcd34d" },
    { name: "amber-400", color: "amber", value: 400, hex: "#fbbf24" },
    { name: "amber-500", color: "amber", value: 500, hex: "#f59e0b" },
    { name: "amber-600", color: "amber", value: 600, hex: "#d97706" },
    { name: "amber-700", color: "amber", value: 700, hex: "#b45309" },
    { name: "amber-800", color: "amber", value: 800, hex: "#92400e" },
    { name: "amber-900", color: "amber", value: 900, hex: "#78350f" },
  ],
  [
    { name: "orange-50", color: "orange", value: 50, hex: "#fff7ed" },
    { name: "orange-100", color: "orange", value: 100, hex: "#ffedd5" },
    { name: "orange-200", color: "orange", value: 200, hex: "#fed7aa" },
    { name: "orange-300", color: "orange", value: 300, hex: "#fdba74" },
    { name: "orange-400", color: "orange", value: 400, hex: "#fb923c" },
    { name: "orange-500", color: "orange", value: 500, hex: "#f97316" },
    { name: "orange-600", color: "orange", value: 600, hex: "#ea580c" },
    { name: "orange-700", color: "orange", value: 700, hex: "#c2410c" },
    { name: "orange-800", color: "orange", value: 800, hex: "#9a3412" },
    { name: "orange-900", color: "orange", value: 900, hex: "#7c2d12" },
  ],
  [
    { name: "stone-50", color: "stone", value: 50, hex: "#fafaf9" },
    { name: "stone-100", color: "stone", value: 100, hex: "#f5f5f4" },
    { name: "stone-200", color: "stone", value: 200, hex: "#e7e5e4" },
    { name: "stone-300", color: "stone", value: 300, hex: "#d6d3d1" },
    { name: "stone-400", color: "stone", value: 400, hex: "#a8a29e" },
    { name: "stone-500", color: "stone", value: 500, hex: "#78716c" },
    { name: "stone-600", color: "stone", value: 600, hex: "#57534e" },
    { name: "stone-700", color: "stone", value: 700, hex: "#44403c" },
    { name: "stone-800", color: "stone", value: 800, hex: "#292524" },
    { name: "stone-900", color: "stone", value: 900, hex: "#1c1917" },
  ],
  [
    { name: "neutral-50", color: "neutral", value: 50, hex: "#fafafa" },
    {
      name: "neutral-100",
      color: "neutral",
      value: 100,
      hex: "#f5f5f5",
    },
    {
      name: "neutral-200",
      color: "neutral",
      value: 200,
      hex: "#e5e5e5",
    },
    {
      name: "neutral-300",
      color: "neutral",
      value: 300,
      hex: "#d4d4d4",
    },
    {
      name: "neutral-400",
      color: "neutral",
      value: 400,
      hex: "#a3a3a3",
    },
    {
      name: "neutral-500",
      color: "neutral",
      value: 500,
      hex: "#737373",
    },
    {
      name: "neutral-600",
      color: "neutral",
      value: 600,
      hex: "#525252",
    },
    {
      name: "neutral-700",
      color: "neutral",
      value: 700,
      hex: "#404040",
    },
    {
      name: "neutral-800",
      color: "neutral",
      value: 800,
      hex: "#262626",
    },
    {
      name: "neutral-900",
      color: "neutral",
      value: 900,
      hex: "#171717",
    },
  ],
  [
    { name: "zinc-50", color: "zinc", value: 50, hex: "#fafafa" },
    { name: "zinc-100", color: "zinc", value: 100, hex: "#f4f4f5" },
    { name: "zinc-200", color: "zinc", value: 200, hex: "#e4e4e7" },
    { name: "zinc-300", color: "zinc", value: 300, hex: "#d4d4d8" },
    { name: "zinc-400", color: "zinc", value: 400, hex: "#a1a1aa" },
    { name: "zinc-500", color: "zinc", value: 500, hex: "#71717a" },
    { name: "zinc-600", color: "zinc", value: 600, hex: "#52525b" },
    { name: "zinc-700", color: "zinc", value: 700, hex: "#3f3f46" },
    { name: "zinc-800", color: "zinc", value: 800, hex: "#27272a" },
    { name: "zinc-900", color: "zinc", value: 900, hex: "#18181b" },
  ],
  [
    { name: "gray-50", color: "gray", value: 50, hex: "#f9fafb" },
    { name: "gray-100", color: "gray", value: 100, hex: "#f3f4f6" },
    { name: "gray-200", color: "gray", value: 200, hex: "#e5e7eb" },
    { name: "gray-300", color: "gray", value: 300, hex: "#d1d5db" },
    { name: "gray-400", color: "gray", value: 400, hex: "#9ca3af" },
    { name: "gray-500", color: "gray", value: 500, hex: "#6b7280" },
    { name: "gray-600", color: "gray", value: 600, hex: "#4b5563" },
    { name: "gray-700", color: "gray", value: 700, hex: "#374151" },
    { name: "gray-800", color: "gray", value: 800, hex: "#1f2937" },
    { name: "gray-900", color: "gray", value: 900, hex: "#111827" },
  ],
  [
    { name: "slate-50", color: "slate", value: 50, hex: "#f8fafc" },
    { name: "slate-100", color: "slate", value: 100, hex: "#f1f5f9" },
    { name: "slate-200", color: "slate", value: 200, hex: "#e2e8f0" },
    { name: "slate-300", color: "slate", value: 300, hex: "#cbd5e1" },
    { name: "slate-400", color: "slate", value: 400, hex: "#94a3b8" },
    { name: "slate-500", color: "slate", value: 500, hex: "#64748b" },
    { name: "slate-600", color: "slate", value: 600, hex: "#475569" },
    { name: "slate-700", color: "slate", value: 700, hex: "#334155" },
    { name: "slate-800", color: "slate", value: 800, hex: "#1e293b" },
    { name: "slate-900", color: "slate", value: 900, hex: "#0f172a" },
  ],
];

//for lookups by hex
export const twHexList = {
  "#000": { name: "black", color: "black", value: null, hex: "#000000" },
  "#fff": { name: "white", color: "white", value: null, hex: "#ffffff" },
  "#000000": { name: "black", color: "black", value: null, hex: "#000000" },
  "#ffffff": { name: "white", color: "white", value: null, hex: "#ffffff" },
  "#f8fafc": {
    name: "slate-50",
    color: "slate",
    value: "50",
    hex: "#f8fafc",
  },
  "#f1f5f9": {
    name: "slate-100",
    color: "slate",
    value: "100",
    hex: "#f1f5f9",
  },
  "#e2e8f0": {
    name: "slate-200",
    color: "slate",
    value: "200",
    hex: "#e2e8f0",
  },
  "#cbd5e1": {
    name: "slate-300",
    color: "slate",
    value: "300",
    hex: "#cbd5e1",
  },
  "#94a3b8": {
    name: "slate-400",
    color: "slate",
    value: "400",
    hex: "#94a3b8",
  },
  "#64748b": {
    name: "slate-500",
    color: "slate",
    value: "500",
    hex: "#64748b",
  },
  "#475569": {
    name: "slate-600",
    color: "slate",
    value: "600",
    hex: "#475569",
  },
  "#334155": {
    name: "slate-700",
    color: "slate",
    value: "700",
    hex: "#334155",
  },
  "#1e293b": {
    name: "slate-800",
    color: "slate",
    value: "800",
    hex: "#1e293b",
  },
  "#0f172a": {
    name: "slate-900",
    color: "slate",
    value: "900",
    hex: "#0f172a",
  },
  "#f9fafb": {
    name: "gray-50",
    color: "gray",
    value: "50",
    hex: "#f9fafb",
  },
  "#f3f4f6": {
    name: "gray-100",
    color: "gray",
    value: "100",
    hex: "#f3f4f6",
  },
  "#e5e7eb": {
    name: "gray-200",
    color: "gray",
    value: "200",
    hex: "#e5e7eb",
  },
  "#d1d5db": {
    name: "gray-300",
    color: "gray",
    value: "300",
    hex: "#d1d5db",
  },
  "#9ca3af": {
    name: "gray-400",
    color: "gray",
    value: "400",
    hex: "#9ca3af",
  },
  "#6b7280": {
    name: "gray-500",
    color: "gray",
    value: "500",
    hex: "#6b7280",
  },
  "#4b5563": {
    name: "gray-600",
    color: "gray",
    value: "600",
    hex: "#4b5563",
  },
  "#374151": {
    name: "gray-700",
    color: "gray",
    value: "700",
    hex: "#374151",
  },
  "#1f2937": {
    name: "gray-800",
    color: "gray",
    value: "800",
    hex: "#1f2937",
  },
  "#111827": {
    name: "gray-900",
    color: "gray",
    value: "900",
    hex: "#111827",
  },
  "#fafafa": {
    name: "neutral-50",
    color: "neutral",
    value: "50",
    hex: "#fafafa",
  },
  "#f4f4f5": { name: "zinc-100", color: "zinc", value: "100", hex: "#f4f4f5" },
  "#e4e4e7": { name: "zinc-200", color: "zinc", value: "200", hex: "#e4e4e7" },
  "#d4d4d8": { name: "zinc-300", color: "zinc", value: "300", hex: "#d4d4d8" },
  "#a1a1aa": { name: "zinc-400", color: "zinc", value: "400", hex: "#a1a1aa" },
  "#71717a": { name: "zinc-500", color: "zinc", value: "500", hex: "#71717a" },
  "#52525b": { name: "zinc-600", color: "zinc", value: "600", hex: "#52525b" },
  "#3f3f46": { name: "zinc-700", color: "zinc", value: "700", hex: "#3f3f46" },
  "#27272a": { name: "zinc-800", color: "zinc", value: "800", hex: "#27272a" },
  "#18181b": { name: "zinc-900", color: "zinc", value: "900", hex: "#18181b" },
  "#f5f5f5": {
    name: "neutral-100",
    color: "neutral",
    value: "100",
    hex: "#f5f5f5",
  },
  "#e5e5e5": {
    name: "neutral-200",
    color: "neutral",
    value: "200",
    hex: "#e5e5e5",
  },
  "#d4d4d4": {
    name: "neutral-300",
    color: "neutral",
    value: "300",
    hex: "#d4d4d4",
  },
  "#a3a3a3": {
    name: "neutral-400",
    color: "neutral",
    value: "400",
    hex: "#a3a3a3",
  },
  "#737373": {
    name: "neutral-500",
    color: "neutral",
    value: "500",
    hex: "#737373",
  },
  "#525252": {
    name: "neutral-600",
    color: "neutral",
    value: "600",
    hex: "#525252",
  },
  "#404040": {
    name: "neutral-700",
    color: "neutral",
    value: "700",
    hex: "#404040",
  },
  "#262626": {
    name: "neutral-800",
    color: "neutral",
    value: "800",
    hex: "#262626",
  },
  "#171717": {
    name: "neutral-900",
    color: "neutral",
    value: "900",
    hex: "#171717",
  },
  "#fafaf9": {
    name: "stone-50",
    color: "stone",
    value: "50",
    hex: "#fafaf9",
  },
  "#f5f5f4": {
    name: "stone-100",
    color: "stone",
    value: "100",
    hex: "#f5f5f4",
  },
  "#e7e5e4": {
    name: "stone-200",
    color: "stone",
    value: "200",
    hex: "#e7e5e4",
  },
  "#d6d3d1": {
    name: "stone-300",
    color: "stone",
    value: "300",
    hex: "#d6d3d1",
  },
  "#a8a29e": {
    name: "stone-400",
    color: "stone",
    value: "400",
    hex: "#a8a29e",
  },
  "#78716c": {
    name: "stone-500",
    color: "stone",
    value: "500",
    hex: "#78716c",
  },
  "#57534e": {
    name: "stone-600",
    color: "stone",
    value: "600",
    hex: "#57534e",
  },
  "#44403c": {
    name: "stone-700",
    color: "stone",
    value: "700",
    hex: "#44403c",
  },
  "#292524": {
    name: "stone-800",
    color: "stone",
    value: "800",
    hex: "#292524",
  },
  "#1c1917": {
    name: "stone-900",
    color: "stone",
    value: "900",
    hex: "#1c1917",
  },
  "#fef2f2": { name: "red-50", color: "red", value: "50", hex: "#fef2f2" },
  "#fee2e2": { name: "red-100", color: "red", value: "100", hex: "#fee2e2" },
  "#fecaca": { name: "red-200", color: "red", value: "200", hex: "#fecaca" },
  "#fca5a5": { name: "red-300", color: "red", value: "300", hex: "#fca5a5" },
  "#f87171": { name: "red-400", color: "red", value: "400", hex: "#f87171" },
  "#ef4444": { name: "red-500", color: "red", value: "500", hex: "#ef4444" },
  "#dc2626": { name: "red-600", color: "red", value: "600", hex: "#dc2626" },
  "#b91c1c": { name: "red-700", color: "red", value: "700", hex: "#b91c1c" },
  "#991b1b": { name: "red-800", color: "red", value: "800", hex: "#991b1b" },
  "#7f1d1d": { name: "red-900", color: "red", value: "900", hex: "#7f1d1d" },
  "#fff7ed": {
    name: "orange-50",
    color: "orange",
    value: "50",
    hex: "#fff7ed",
  },
  "#ffedd5": {
    name: "orange-100",
    color: "orange",
    value: "100",
    hex: "#ffedd5",
  },
  "#fed7aa": {
    name: "orange-200",
    color: "orange",
    value: "200",
    hex: "#fed7aa",
  },
  "#fdba74": {
    name: "orange-300",
    color: "orange",
    value: "300",
    hex: "#fdba74",
  },
  "#fb923c": {
    name: "orange-400",
    color: "orange",
    value: "400",
    hex: "#fb923c",
  },
  "#f97316": {
    name: "orange-500",
    color: "orange",
    value: "500",
    hex: "#f97316",
  },
  "#ea580c": {
    name: "orange-600",
    color: "orange",
    value: "600",
    hex: "#ea580c",
  },
  "#c2410c": {
    name: "orange-700",
    color: "orange",
    value: "700",
    hex: "#c2410c",
  },
  "#9a3412": {
    name: "orange-800",
    color: "orange",
    value: "800",
    hex: "#9a3412",
  },
  "#7c2d12": {
    name: "orange-900",
    color: "orange",
    value: "900",
    hex: "#7c2d12",
  },
  "#fffbeb": { name: "amber-50", color: "amber", value: "50", hex: "#fffbeb" },
  "#fef3c7": {
    name: "amber-100",
    color: "amber",
    value: "100",
    hex: "#fef3c7",
  },
  "#fde68a": {
    name: "amber-200",
    color: "amber",
    value: "200",
    hex: "#fde68a",
  },
  "#fcd34d": {
    name: "amber-300",
    color: "amber",
    value: "300",
    hex: "#fcd34d",
  },
  "#fbbf24": {
    name: "amber-400",
    color: "amber",
    value: "400",
    hex: "#fbbf24",
  },
  "#f59e0b": {
    name: "amber-500",
    color: "amber",
    value: "500",
    hex: "#f59e0b",
  },
  "#d97706": {
    name: "amber-600",
    color: "amber",
    value: "600",
    hex: "#d97706",
  },
  "#b45309": {
    name: "amber-700",
    color: "amber",
    value: "700",
    hex: "#b45309",
  },
  "#92400e": {
    name: "amber-800",
    color: "amber",
    value: "800",
    hex: "#92400e",
  },
  "#78350f": {
    name: "amber-900",
    color: "amber",
    value: "900",
    hex: "#78350f",
  },
  "#fefce8": {
    name: "yellow-50",
    color: "yellow",
    value: "50",
    hex: "#fefce8",
  },
  "#fef9c3": {
    name: "yellow-100",
    color: "yellow",
    value: "100",
    hex: "#fef9c3",
  },
  "#fef08a": {
    name: "yellow-200",
    color: "yellow",
    value: "200",
    hex: "#fef08a",
  },
  "#fde047": {
    name: "yellow-300",
    color: "yellow",
    value: "300",
    hex: "#fde047",
  },
  "#facc15": {
    name: "yellow-400",
    color: "yellow",
    value: "400",
    hex: "#facc15",
  },
  "#eab308": {
    name: "yellow-500",
    color: "yellow",
    value: "500",
    hex: "#eab308",
  },
  "#ca8a04": {
    name: "yellow-600",
    color: "yellow",
    value: "600",
    hex: "#ca8a04",
  },
  "#a16207": {
    name: "yellow-700",
    color: "yellow",
    value: "700",
    hex: "#a16207",
  },
  "#854d0e": {
    name: "yellow-800",
    color: "yellow",
    value: "800",
    hex: "#854d0e",
  },
  "#713f12": {
    name: "yellow-900",
    color: "yellow",
    value: "900",
    hex: "#713f12",
  },
  "#f7fee7": { name: "lime-50", color: "lime", value: "50", hex: "#f7fee7" },
  "#ecfccb": { name: "lime-100", color: "lime", value: "100", hex: "#ecfccb" },
  "#d9f99d": { name: "lime-200", color: "lime", value: "200", hex: "#d9f99d" },
  "#bef264": { name: "lime-300", color: "lime", value: "300", hex: "#bef264" },
  "#a3e635": { name: "lime-400", color: "lime", value: "400", hex: "#a3e635" },
  "#84cc16": { name: "lime-500", color: "lime", value: "500", hex: "#84cc16" },
  "#65a30d": { name: "lime-600", color: "lime", value: "600", hex: "#65a30d" },
  "#4d7c0f": { name: "lime-700", color: "lime", value: "700", hex: "#4d7c0f" },
  "#3f6212": { name: "lime-800", color: "lime", value: "800", hex: "#3f6212" },
  "#365314": { name: "lime-900", color: "lime", value: "900", hex: "#365314" },
  "#f0fdf4": { name: "green-50", color: "green", value: "50", hex: "#f0fdf4" },
  "#dcfce7": {
    name: "green-100",
    color: "green",
    value: "100",
    hex: "#dcfce7",
  },
  "#bbf7d0": {
    name: "green-200",
    color: "green",
    value: "200",
    hex: "#bbf7d0",
  },
  "#86efac": {
    name: "green-300",
    color: "green",
    value: "300",
    hex: "#86efac",
  },
  "#4ade80": {
    name: "green-400",
    color: "green",
    value: "400",
    hex: "#4ade80",
  },
  "#22c55e": {
    name: "green-500",
    color: "green",
    value: "500",
    hex: "#22c55e",
  },
  "#16a34a": {
    name: "green-600",
    color: "green",
    value: "600",
    hex: "#16a34a",
  },
  "#15803d": {
    name: "green-700",
    color: "green",
    value: "700",
    hex: "#15803d",
  },
  "#166534": {
    name: "green-800",
    color: "green",
    value: "800",
    hex: "#166534",
  },
  "#14532d": {
    name: "green-900",
    color: "green",
    value: "900",
    hex: "#14532d",
  },
  "#ecfdf5": {
    name: "emerald-50",
    color: "emerald",
    value: "50",
    hex: "#ecfdf5",
  },
  "#d1fae5": {
    name: "emerald-100",
    color: "emerald",
    value: "100",
    hex: "#d1fae5",
  },
  "#a7f3d0": {
    name: "emerald-200",
    color: "emerald",
    value: "200",
    hex: "#a7f3d0",
  },
  "#6ee7b7": {
    name: "emerald-300",
    color: "emerald",
    value: "300",
    hex: "#6ee7b7",
  },
  "#34d399": {
    name: "emerald-400",
    color: "emerald",
    value: "400",
    hex: "#34d399",
  },
  "#10b981": {
    name: "emerald-500",
    color: "emerald",
    value: "500",
    hex: "#10b981",
  },
  "#059669": {
    name: "emerald-600",
    color: "emerald",
    value: "600",
    hex: "#059669",
  },
  "#047857": {
    name: "emerald-700",
    color: "emerald",
    value: "700",
    hex: "#047857",
  },
  "#065f46": {
    name: "emerald-800",
    color: "emerald",
    value: "800",
    hex: "#065f46",
  },
  "#064e3b": {
    name: "emerald-900",
    color: "emerald",
    value: "900",
    hex: "#064e3b",
  },
  "#f0fdfa": { name: "teal-50", color: "teal", value: "50", hex: "#f0fdfa" },
  "#ccfbf1": { name: "teal-100", color: "teal", value: "100", hex: "#ccfbf1" },
  "#99f6e4": { name: "teal-200", color: "teal", value: "200", hex: "#99f6e4" },
  "#5eead4": { name: "teal-300", color: "teal", value: "300", hex: "#5eead4" },
  "#2dd4bf": { name: "teal-400", color: "teal", value: "400", hex: "#2dd4bf" },
  "#14b8a6": { name: "teal-500", color: "teal", value: "500", hex: "#14b8a6" },
  "#0d9488": { name: "teal-600", color: "teal", value: "600", hex: "#0d9488" },
  "#0f766e": { name: "teal-700", color: "teal", value: "700", hex: "#0f766e" },
  "#115e59": { name: "teal-800", color: "teal", value: "800", hex: "#115e59" },
  "#134e4a": { name: "teal-900", color: "teal", value: "900", hex: "#134e4a" },
  "#ecfeff": { name: "cyan-50", color: "cyan", value: "50", hex: "#ecfeff" },
  "#cffafe": { name: "cyan-100", color: "cyan", value: "100", hex: "#cffafe" },
  "#a5f3fc": { name: "cyan-200", color: "cyan", value: "200", hex: "#a5f3fc" },
  "#67e8f9": { name: "cyan-300", color: "cyan", value: "300", hex: "#67e8f9" },
  "#22d3ee": { name: "cyan-400", color: "cyan", value: "400", hex: "#22d3ee" },
  "#06b6d4": { name: "cyan-500", color: "cyan", value: "500", hex: "#06b6d4" },
  "#0891b2": { name: "cyan-600", color: "cyan", value: "600", hex: "#0891b2" },
  "#0e7490": { name: "cyan-700", color: "cyan", value: "700", hex: "#0e7490" },
  "#155e75": { name: "cyan-800", color: "cyan", value: "800", hex: "#155e75" },
  "#164e63": { name: "cyan-900", color: "cyan", value: "900", hex: "#164e63" },
  "#f0f9ff": {
    name: "sky-50",
    color: "sky",
    value: "50",
    hex: "#f0f9ff",
  },
  "#e0f2fe": {
    name: "sky-100",
    color: "sky",
    value: "100",
    hex: "#e0f2fe",
  },
  "#bae6fd": {
    name: "sky-200",
    color: "sky",
    value: "200",
    hex: "#bae6fd",
  },
  "#7dd3fc": {
    name: "sky-300",
    color: "sky",
    value: "300",
    hex: "#7dd3fc",
  },
  "#38bdf8": {
    name: "sky-400",
    color: "sky",
    value: "400",
    hex: "#38bdf8",
  },
  "#0ea5e9": {
    name: "sky-500",
    color: "sky",
    value: "500",
    hex: "#0ea5e9",
  },
  "#0284c7": {
    name: "sky-600",
    color: "sky",
    value: "600",
    hex: "#0284c7",
  },
  "#0369a1": {
    name: "sky-700",
    color: "sky",
    value: "700",
    hex: "#0369a1",
  },
  "#075985": {
    name: "sky-800",
    color: "sky",
    value: "800",
    hex: "#075985",
  },
  "#0c4a6e": {
    name: "sky-900",
    color: "sky",
    value: "900",
    hex: "#0c4a6e",
  },
  "#eff6ff": { name: "blue-50", color: "blue", value: "50", hex: "#eff6ff" },
  "#dbeafe": { name: "blue-100", color: "blue", value: "100", hex: "#dbeafe" },
  "#bfdbfe": { name: "blue-200", color: "blue", value: "200", hex: "#bfdbfe" },
  "#93c5fd": { name: "blue-300", color: "blue", value: "300", hex: "#93c5fd" },
  "#60a5fa": { name: "blue-400", color: "blue", value: "400", hex: "#60a5fa" },
  "#3b82f6": { name: "blue-500", color: "blue", value: "500", hex: "#3b82f6" },
  "#2563eb": { name: "blue-600", color: "blue", value: "600", hex: "#2563eb" },
  "#1d4ed8": { name: "blue-700", color: "blue", value: "700", hex: "#1d4ed8" },
  "#1e40af": { name: "blue-800", color: "blue", value: "800", hex: "#1e40af" },
  "#1e3a8a": { name: "blue-900", color: "blue", value: "900", hex: "#1e3a8a" },
  "#eef2ff": {
    name: "indigo-50",
    color: "indigo",
    value: "50",
    hex: "#eef2ff",
  },
  "#e0e7ff": {
    name: "indigo-100",
    color: "indigo",
    value: "100",
    hex: "#e0e7ff",
  },
  "#c7d2fe": {
    name: "indigo-200",
    color: "indigo",
    value: "200",
    hex: "#c7d2fe",
  },
  "#a5b4fc": {
    name: "indigo-300",
    color: "indigo",
    value: "300",
    hex: "#a5b4fc",
  },
  "#818cf8": {
    name: "indigo-400",
    color: "indigo",
    value: "400",
    hex: "#818cf8",
  },
  "#6366f1": {
    name: "indigo-500",
    color: "indigo",
    value: "500",
    hex: "#6366f1",
  },
  "#4f46e5": {
    name: "indigo-600",
    color: "indigo",
    value: "600",
    hex: "#4f46e5",
  },
  "#4338ca": {
    name: "indigo-700",
    color: "indigo",
    value: "700",
    hex: "#4338ca",
  },
  "#3730a3": {
    name: "indigo-800",
    color: "indigo",
    value: "800",
    hex: "#3730a3",
  },
  "#312e81": {
    name: "indigo-900",
    color: "indigo",
    value: "900",
    hex: "#312e81",
  },
  "#f5f3ff": {
    name: "violet-50",
    color: "violet",
    value: "50",
    hex: "#f5f3ff",
  },
  "#ede9fe": {
    name: "violet-100",
    color: "violet",
    value: "100",
    hex: "#ede9fe",
  },
  "#ddd6fe": {
    name: "violet-200",
    color: "violet",
    value: "200",
    hex: "#ddd6fe",
  },
  "#c4b5fd": {
    name: "violet-300",
    color: "violet",
    value: "300",
    hex: "#c4b5fd",
  },
  "#a78bfa": {
    name: "violet-400",
    color: "violet",
    value: "400",
    hex: "#a78bfa",
  },
  "#8b5cf6": {
    name: "violet-500",
    color: "violet",
    value: "500",
    hex: "#8b5cf6",
  },
  "#7c3aed": {
    name: "violet-600",
    color: "violet",
    value: "600",
    hex: "#7c3aed",
  },
  "#6d28d9": {
    name: "violet-700",
    color: "violet",
    value: "700",
    hex: "#6d28d9",
  },
  "#5b21b6": {
    name: "violet-800",
    color: "violet",
    value: "800",
    hex: "#5b21b6",
  },
  "#4c1d95": {
    name: "violet-900",
    color: "violet",
    value: "900",
    hex: "#4c1d95",
  },
  "#faf5ff": {
    name: "purple-50",
    color: "purple",
    value: "50",
    hex: "#faf5ff",
  },
  "#f3e8ff": {
    name: "purple-100",
    color: "purple",
    value: "100",
    hex: "#f3e8ff",
  },
  "#e9d5ff": {
    name: "purple-200",
    color: "purple",
    value: "200",
    hex: "#e9d5ff",
  },
  "#d8b4fe": {
    name: "purple-300",
    color: "purple",
    value: "300",
    hex: "#d8b4fe",
  },
  "#c084fc": {
    name: "purple-400",
    color: "purple",
    value: "400",
    hex: "#c084fc",
  },
  "#a855f7": {
    name: "purple-500",
    color: "purple",
    value: "500",
    hex: "#a855f7",
  },
  "#9333ea": {
    name: "purple-600",
    color: "purple",
    value: "600",
    hex: "#9333ea",
  },
  "#7e22ce": {
    name: "purple-700",
    color: "purple",
    value: "700",
    hex: "#7e22ce",
  },
  "#6b21a8": {
    name: "purple-800",
    color: "purple",
    value: "800",
    hex: "#6b21a8",
  },
  "#581c87": {
    name: "purple-900",
    color: "purple",
    value: "900",
    hex: "#581c87",
  },
  "#fdf4ff": {
    name: "fuchsia-50",
    color: "fuchsia",
    value: "50",
    hex: "#fdf4ff",
  },
  "#fae8ff": {
    name: "fuchsia-100",
    color: "fuchsia",
    value: "100",
    hex: "#fae8ff",
  },
  "#f5d0fe": {
    name: "fuchsia-200",
    color: "fuchsia",
    value: "200",
    hex: "#f5d0fe",
  },
  "#f0abfc": {
    name: "fuchsia-300",
    color: "fuchsia",
    value: "300",
    hex: "#f0abfc",
  },
  "#e879f9": {
    name: "fuchsia-400",
    color: "fuchsia",
    value: "400",
    hex: "#e879f9",
  },
  "#d946ef": {
    name: "fuchsia-500",
    color: "fuchsia",
    value: "500",
    hex: "#d946ef",
  },
  "#c026d3": {
    name: "fuchsia-600",
    color: "fuchsia",
    value: "600",
    hex: "#c026d3",
  },
  "#a21caf": {
    name: "fuchsia-700",
    color: "fuchsia",
    value: "700",
    hex: "#a21caf",
  },
  "#86198f": {
    name: "fuchsia-800",
    color: "fuchsia",
    value: "800",
    hex: "#86198f",
  },
  "#701a75": {
    name: "fuchsia-900",
    color: "fuchsia",
    value: "900",
    hex: "#701a75",
  },
  "#fdf2f8": { name: "pink-50", color: "pink", value: "50", hex: "#fdf2f8" },
  "#fce7f3": { name: "pink-100", color: "pink", value: "100", hex: "#fce7f3" },
  "#fbcfe8": { name: "pink-200", color: "pink", value: "200", hex: "#fbcfe8" },
  "#f9a8d4": { name: "pink-300", color: "pink", value: "300", hex: "#f9a8d4" },
  "#f472b6": { name: "pink-400", color: "pink", value: "400", hex: "#f472b6" },
  "#ec4899": { name: "pink-500", color: "pink", value: "500", hex: "#ec4899" },
  "#db2777": { name: "pink-600", color: "pink", value: "600", hex: "#db2777" },
  "#be185d": { name: "pink-700", color: "pink", value: "700", hex: "#be185d" },
  "#9d174d": { name: "pink-800", color: "pink", value: "800", hex: "#9d174d" },
  "#831843": { name: "pink-900", color: "pink", value: "900", hex: "#831843" },
  "#fff1f2": { name: "rose-50", color: "rose", value: "50", hex: "#fff1f2" },
  "#ffe4e6": { name: "rose-100", color: "rose", value: "100", hex: "#ffe4e6" },
  "#fecdd3": { name: "rose-200", color: "rose", value: "200", hex: "#fecdd3" },
  "#fda4af": { name: "rose-300", color: "rose", value: "300", hex: "#fda4af" },
  "#fb7185": { name: "rose-400", color: "rose", value: "400", hex: "#fb7185" },
  "#f43f5e": { name: "rose-500", color: "rose", value: "500", hex: "#f43f5e" },
  "#e11d48": { name: "rose-600", color: "rose", value: "600", hex: "#e11d48" },
  "#be123c": { name: "rose-700", color: "rose", value: "700", hex: "#be123c" },
  "#9f1239": { name: "rose-800", color: "rose", value: "800", hex: "#9f1239" },
  "#881337": { name: "rose-900", color: "rose", value: "900", hex: "#881337" },
};

export const getColorObjByHex = (hex, category, useHexOnly = false) => {
  let tw = twHexList[hex];
  if (typeof tw === "object" && useHexOnly == false) {
    return new ColorObj(tw.color, tw.value, hex);
  } else if (category !== null) {
    return new ColorObj(category, "450", hex);
  } else {
    return new ColorObj("custom", "450", hex);
  }
};

export const mergeStyles = (origStyle, themeStyle, classStyle) => {
  //for development merges all three styles together in priority
  let newcl = twMerge(origStyle, themeStyle);
  newcl = twMerge(newcl, classStyle);
  return newcl;
};

export const initVariants = (passedtheme) => {
  let newtheme = Object.assign({}, passedtheme);

  const myColors = Object.keys(newtheme.colors);

  for (const idx in myColors) {
    let category = myColors[idx];
    let hex = passedtheme.colors[category];
    let variants, base;

    //is this a tw color?
    let tw = twHexList[hex];
    if (typeof tw == "object") {
      base = tw.color; //# teal
    } else {
      base = category; //# brand
    }

    variants = makeCustomShades(hex, base, category);

    if (!newtheme.hasOwnProperty("variants")) {
      newtheme.variants = {};
    }
    if (!newtheme.variants.hasOwnProperty(category)) {
      newtheme.variants[category] = {};
    }
    newtheme.variants[category] = variants;
  }
  console.log("variants initialized");
  return newtheme;
};

export const updateVariants = (base, category, passedtheme) => {
  //teal, brand, theme
  //just reset theme variants for one base
  //return them as object
  let hex = passedtheme.colors[category];
  let variants = makeCustomShades(hex, base, category);

  let newtheme = Object.assign({}, passedtheme);

  if (!newtheme.hasOwnProperty("variants")) {
    newtheme.variants = {};
  }
  if (!newtheme.variants.hasOwnProperty(category)) {
    newtheme.variants[category] = {};
  }
  newtheme.variants[category] = variants;
  console.log("variants updated: ", variants);
  return true;
};

export const getCustomVariants = (hex) => {
  let shadeVals = {};

  //home base
  shadeVals[450] = hex;

  let topVal = 225;
  let lightest = "#ffffff";
  let lincr = 1;

  do {
    //recalculate incr
    topVal = topVal - 1;
    lincr = Math.floor(topVal / 5);
    //console.log("lincr: ", lincr);
    lightest = lightenDarkenColor(hex, lincr * 5);
  } while (lightest === "#ffffff");

  //got incr for light
  shadeVals[50] = lightest;

  // console.log("incr for light is :", lincr);
  // console.log("lightest:", lightest);

  //calc the others between
  shadeVals[100] = lightenDarkenColor(hex, lincr * 4);
  shadeVals[200] = lightenDarkenColor(hex, lincr * 3);
  shadeVals[300] = lightenDarkenColor(hex, lincr * 2);
  shadeVals[400] = lightenDarkenColor(hex, lincr * 1);

  //now do the same for black
  let lowVal = -225;
  let darkest = "#000000";
  let dincr = 1;

  do {
    //recalculate incr
    lowVal = lowVal + 1;
    dincr = Math.floor(lowVal / 5);
    // console.log("dincr: ", dincr);
    darkest = lightenDarkenColor(hex, dincr * 5);
  } while (darkest === "#000000");

  shadeVals[900] = darkest;

  // console.log("incr for dark is :", dincr);
  // console.log("darkest:", darkest);

  //calc the others between
  shadeVals[500] = lightenDarkenColor(hex, dincr * 1);
  shadeVals[600] = lightenDarkenColor(hex, dincr * 2);
  shadeVals[700] = lightenDarkenColor(hex, dincr * 3);
  shadeVals[800] = lightenDarkenColor(hex, dincr * 4);
  //console.log(shadeVals);
  return shadeVals;
};
