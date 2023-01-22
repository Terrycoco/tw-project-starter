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
  let color;
  for (let i = 0; i < twColorList.length - 1; i++) {
    color = twColorList[i];
    let name = `${color}-50`;
    let obj = new olorObj(name, color, 50, twColors[color][50]);
    result[name] = obj;
    //inner loop
    for (let v = 100; v < 1000; v + 100) {
      let thisname = `${color}-${v}`;
      let thisobj = new ColorObj(thisname, color, v, twColors[color][v]);
      result[thisname] = thisobj;
    }
  }
  return result;
};
