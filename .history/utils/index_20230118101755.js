import { RSC_MODULE_TYPES } from "next/dist/shared/lib/constants";
import { yiq } from "yiq";
import theme from "../styles/theme";

export const getTextColor = (bgColor) => {
  return yiq(bgColor, {
    colors: { light: "text-whitish", dark: "text-blackish" },
  });
};
