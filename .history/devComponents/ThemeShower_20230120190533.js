import useStorage from "../utils/useStorage"; //do I want to do this?
import { useState, useEffect } from "react";
import { isObject } from "../utils";

//present theme (as yet unsaved to user)
//ability to copy into clipboard

const pre = `const twColors = require("tailwindcss/colors");

const _default = {
    `;

const post = `
};

module.exports = _default;

`;

const ThemeShower = (props) => {
  const [visible, setVisible] = useState(props.visible);
  const [cl, setCl] = useState("hidden");

  const getThemeText = (theme) => {
    const themeObj = theme;
    let result = "";
    console.log(themeObj);
    Object.keys(themeObj).map((key) => {
      if (typeof themeObj[key] === "object") {
        // console.log("is Parent");
        result += `${key}: {\n\r`;
        Object.keys(themeObj[key]).map((innerKey) => {
          result += `   ${innerKey}: "${themeObj[key][innerKey]}",\n\r`;
        });
        result += `},\n\r`;
      } else {
        // console.log("is not Parent");
        result += `${innerKey}: "${themeObj[key][innerKey]}",\n\r`;
      }
    });

    return result;
  };

  useEffect(() => {
    if (props.visible === true) {
      setCl(
        "font-code top-20 mx-auto z-50 w-3/4 min-h-screen bg-zinc-800 text-white p-20"
      );
    } else {
      setCl("hidden");
    }
  }, [props.visible, props.theme]);

  return (
    <div className={cl}>
      <pre key="preamble">{pre}</pre>
      <pre key="themetext">{getThemeText(props.theme)}</pre>
      <pre key="post">{post}</pre>
    </div>
  );
};

export default ThemeShower;
