import useStorage from "../utils/useStorage"; //do I want to do this?
import { useState, useEffect } from "react";
import { isObject } from "../utils";
import { FlexLayout } from "../components/flex";
import { theme } from "../tailwind.dev.config";

//present theme (as yet unsaved to user)
//ability to copy into clipboard

const pre = `
//theme.js

const twColors = require("tailwindcss/colors");
const _default = {
    `;

const post = `
};

module.exports = _default;

`;

const ThemeShower = (props) => {
  const [visible, setVisible] = useState(props.visible);
  const [cl, setCl] = useState("hidden");
  const [showAlert, setShowAlert] = useState(false);

  const getThemeText = (theme) => {
    const themeObj = theme;
    let result = "";
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
      setCl("visible w-3/4 mx-auto");
    } else {
      setCl("hidden");
    }
  }, [props.visible, props.theme]);

  const copy = () => {
    // Get the text field
    var copyText = `${pre} ${getThemeText(props.theme)} ${post}`;
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    setShowAlert(true);
    setTimeout(closeAlert(), 3000);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className={cl}>
      <FlexLayout className={"py-4 justify-between"}>
        <div className="">
          This is your new adjusted theme. Copy and paste it into theme.js.
        </div>
        <div className="hid"
        <button className={`h-auto ${props.theme.buttons.sm}`} onClick={copy}>
          Copy
        </button>
      </FlexLayout>
      <div className="font-code top-0 w-full z-50  min-h-screen bg-zinc-700 text-whitish pt-2 px-20">
        <pre key="preamble">{pre}</pre>
        <pre key="themetext">{getThemeText(props.theme)}</pre>
        <pre key="post">{post}</pre>
      </div>
    </div>
  );
};

export default ThemeShower;
