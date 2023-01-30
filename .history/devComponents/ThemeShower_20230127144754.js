import useStorage from "../utils/useStorage"; //do I want to do this?
import { useState, useEffect } from "react";
import { isObject } from "../utils";
import { FlexLayout } from "../components/flex";
import { useTheme } from "../hooks";
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
  const [cl, setCl] = useState("hidden");
  const [showAlert, setShowAlert] = useState(false);
  const { theme } = useTheme();

  const getThemeToRender = () => {
    let rendered = loopThroughTheme(theme, "");
    console.log(rendered);
  };

  const printOut = (obj, key, isParent, isChild) => {
    let ind = isChild ? "   " : "";
    if (isParent === true) {
      return "Im a parent";
    } else {
      return "im not a parent";
    }
  };

  function loopThroughTheme(obj, result, isChild = false) {
    let indent = isChild ? `   ` : ``;
    for (var k in obj) {
      if (typeof obj[k] === "object" && obj[k] !== null) {
        //is parent
        result += `${indent}${k}: {\n\r`;
        result = loopThroughTheme(obj[k], result, true);
        result += `${indent}},\n\r`;
      } else if (obj.hasOwnProperty(k)) {
        result += `IAMA CHILD   ${k}: "${obj[k]}",\n\r`;
      }
    }
    return result;
  }

  // const addLine = (key, val, isParent, output) => {
  //   if (isParent === true) {
  //     output += `${key}: {\n\r\t`;
  //     console.log("output so far:", output);
  //     loopThroughTheme(val, output);
  //   } else {
  //     output += `   ${key}: "${val}",/n/r`;
  //     console.log("children output so far:", output);
  //   }
  //   return output;
  // };

  // const loopThroughTheme = (obj, output = "") => {
  //   return Object.keys(obj).map((key) => {
  //     //isParent?
  //     if (typeof obj[key] === "object") {
  //       // console.log("is Parent");
  //       output = addLine(key, obj[key], true, output);
  //     } else {
  //       // console.log("is not Parent");
  //       output = addLine(key, obj[key], false, output);
  //     }
  //   });
  // };
  // const loopThroughTheme = (themeObj, keyName, isChild = false) => {
  //   console.log("themeObj sent in:", keyName, themeObj);
  //   console.log("output so far", output);
  //   //for each key in this object
  //   Object.keys(themeObj).map((key) => {
  //     console.log("thiskey: ", key, "val:", themeObj[key]);

  //     //if child is another object loop again
  //     if (typeof themeObj[key] === "object") {
  //       console.log("isParent");
  //       output += `${key}: {\n\r`;
  //       loopThroughTheme(themeObj[key], key, true, output);
  //       output += `},\n\r`;
  //     } else {
  //       console.log("isChild");
  //       //this has an end value
  //       let indent = isChild ? `/t` : null;
  //       output += `${indent} ${key}: "${themeObj[key]}",/n/r`;
  //     }
  //   });
  //   return output;
  // };

  const getThemeToCopy = () => {
    const themeObj = theme;
    return loopThroughTheme(themeObj, "theme");
  };

  useEffect(() => {
    if (props.visible === true) {
      setCl("visible w-full mx-auto");
    } else {
      setCl("hidden");
    }
  }, [props.visible]);

  const copy = () => {
    // Get the text field
    var copyText = `${pre} ${getThemeToCopy()} ${post}`;
    navigator.clipboard.writeText(copyText);
    console.log("text copied");
    // Alert the copied text
    setShowAlert(true);
    setTimeout(closeAlert, 3000);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const renderAlert = () => {
    if (showAlert == true) {
      return (
        <div
          className={`leading-tight flex flex-col justify-center items-center bg-green-500 text-whitish text-xs px-3 font-medium`}
        >
          Copied!
        </div>
      );
    } else {
      return null;
    }
  };

  const closeMe = () => {
    props.onClose(false);
  };

  return (
    <div className={cl} onClick={closeMe}>
      <div className="mx-auto w-3/4">
        <FlexLayout className={"py-4 justify-between h-20"}>
          <div>
            This is your new adjusted theme. Copy and paste it into{" "}
            <b>styles/theme.js</b>.
          </div>
          <FlexLayout className="justify-end space-x-3">
            {renderAlert()}
            <button
              className="h-auto inline-block px-6  bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out}"
              onClick={copy}
            >
              Copy
            </button>
          </FlexLayout>
        </FlexLayout>
        <div className="font-mono top-0 w-full z-50  min-h-screen bg-zinc-700 text-whitish pt-2 px-20">
          <pre className="whitespace-pre" key="preamble">
            {pre}
          </pre>
          <pre className="whitespace-pre" key="themetext">
            {getThemeToRender()}
          </pre>
          <pre className="whitespace-pre" key="post">
            {post}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ThemeShower;
