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

const ThemeShower = ({ theme, ...props }) => {
  const [visible, setVisible] = useState(props.visible);
  const [cl, setCl] = useState("hidden");
  const [themeText, setThemeText] = useState("");

  const getThemeText = (themeObj) => {
    for (const key in themeObj) {
      if (isObject(themeObj[key])) {
        for (const innerKey in themeObj[key]) {
          console.log(`${innerKey}: ${obj[key][innerKey]}`);
        }
      } else {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  };

  useEffect(() => {}, [props.theme]);

  useEffect(() => {
    if (props.visible === true) {
      setCl(
        "font-code top-20 mx-auto z-50 w-3/4 h-screen bg-zinc-800 text-white p-20"
      );
    } else {
      setCl("hidden");
    }
  }, [props.visible]);

  return (
    <div className={cl}>
      <pre>{pre}</pre>
      <pre></pre>
      <pre>{post}</pre>
    </div>
  );
};

export default ThemeShower;
