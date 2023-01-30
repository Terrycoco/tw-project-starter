import { twMerge } from "tailwind-merge";

const useUpdateStyle = (origStyle, themeStyle, classStyle) => {
  //for development merges all three styles together in priority
  let newcl = twMerge(origStyle, themeStyle);
  newcl = twMerge(newcl, classStyle);
  return newcl;
};

export default useUpdateStyle;
