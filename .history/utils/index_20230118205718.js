import { yiq } from "yiq";
import theme from "../styles/theme";
import twColors from "tailwindcss/colors";

export const getTextColorClass = (bgColor) => {
  return yiq(bgColor, {
    colors: { light: "text-whitish", dark: "text-blackish" },
  });
};

export const getTextColorHex = (bgColor) => {
  if (bgColor.length !== 7) return undefined;
  return yiq(bgColor, {
    colors: { light: theme.colors.whitish, dark: theme.colors.blackish },
  });
};

export const getTWColorObj = (twClassName) => {
  //returns color object from given class
  if (!twClassName) return;
  const cl = twClassName.split("-");
  if (cl.length === 1) {
    //not a class must be hex
    if (cl[0][0] !== "#") return null;
    return { color: cl, value: cl, hex: cl };
  } else if (cl.length === 2) {
    const color = cl[0];
    const val = cl[1];
    const hex = twColors[color][val];
    return { color: color, value: val, hex: hex };
  } else {
    const color = cl[1];
    const val = cl[2];
    const hex = twColors[color][val];
    return { color: color, value: val, hex: hex };
  }
};

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

function ColorObj(name, color, value, hex) {
  this.name = name;
  this.color = color;
  this.value = value;
  this.hex = hex;
}

export const getColorObjects = () => {
  let result = {};
  for (let i = 0; i < twColorList.length - 1; i++) {
    if (i == 0) {
      let name = `${color}-50`;
      let obj = ColorObj(name, twColorList[i], 50, twColors.color[50]);
      result[name] = obj;
    } else {
      let name = `${color}-${v}`;
      let obj = ColorObj(name, twColorList[i], v, twColors.color[v]);
      result[name] = obj;
    }
  }
  return result;
};
