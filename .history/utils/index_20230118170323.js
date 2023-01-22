import { yiq } from "yiq";
import theme from "../styles/theme";
import twColors from "tailwindcss/colors";

export const getTextColorClass = (bgColor) => {
  return yiq(bgColor, {
    colors: { light: "text-whitish", dark: "text-blackish" },
  });
};

export const getTextColorHex = (bgColor) => {
  if (bgColor.length != 7) return undefined;
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
  } else {
    const color = cl[1];
    const val = cl[2];
    const hex = twColors[color][val];

    return { color: color, value: val, hex: hex };
  }
};
