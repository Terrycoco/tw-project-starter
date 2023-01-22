import { RSC_MODULE_TYPES } from "next/dist/shared/lib/constants";
import { yiq } from "yiq";
import theme from "../styles/theme";

export const getTextColor = (bgColor) => {
  return yiq(bgColor, {
    colors: { light: theme.colors.whitish, dark: theme.colors.blackish },
  });
};
