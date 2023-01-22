import { yiq } from "yiq";
import theme from "../styles/theme";
import twColors from "tailwindcss/colors";

export const getTextColorClass = (bgColor) => {
  return yiq(bgColor, {
    colors: { light: "text-whitish", dark: "text-blackish" },
  });
};

export const getTextColorHex = (bgColor, threshold = 186) => {
  if (!isValidHexCode(bgColor)) return "#000";
  let rgb = hexToRgb(bgColor);
  if (rgb == null) return "#000";
  if (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > threshold) {
    return "#000000";
  } else {
    return "#ffffff";
  }
  // return yiq(bgColor, {
  //   colors: { light: "fff", dark: "000" },
  // });
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

const makeColorObj = (name, color, value, hex) => {
  return {
    name: name,
    color: color,
    value: value,
    hex: hex,
  };
};

export const getColorObjects = () => {
  let result = [];

  let color;
  for (let i = 0; i < twColorList.length; i++) {
    color = twColorList[i];
    let array = [];
    let name = `${color}-50`;
    const obj = {
      name: name,
      color: color,
      value: 50,
      hex: twColors[color][50],
    };
    array.push(obj);

    //inner loop
    for (let v = 100; v < 1000; v = v + 100) {
      let newname = `${color}-${v}`;
      let ob = makeColorObj(newname, color, v, twColors[color][v]);
      array.push(ob);
    }
    result.push(array);
  }

  return result;
};

export function isValidHexCode(str) {
  // Regex to check valid
  // hexadecimalColor_code
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  // if str
  // is empty return false
  if (str == null) {
    return "false";
  }

  // Return true if the str
  // matched the ReGex
  if (regex.test(str) == true) {
    return "true";
  } else {
    return "false";
  }
}

export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
