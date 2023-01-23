import useStorage from "../utils/useStorage"; //do I want to do this?
import { useState, useEffect } from "react";
import { isObject } from "../utils";
import { FlexLayout } from "../components/flex";
import { getStorage } from "../utils";
import { theme as mytheme } from "../styles/themes/theme";

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
  const [theme, setTheme] = useState({});

  //on init page check storage to see if theme is there
  useEffect(() => {
    let stored = getStorage("theme");
    if (!stored) {
      //   //nothing in storage let's put the theme as is
      setStorage("theme", mytheme);
      setTheme(mystate);
    } else {
      setTheme(stored);
    }

    //IN CASE IT GETS FUCKED UP
    // clearStorage("theme");
    // setStorage(initialState);
    // setTheme(initialState);
  }, []);

  const getThemeText = () => {
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

  const getThemeToCopy = () => {
    const themeObj = theme;
    let result = "";
    Object.keys(themeObj).map((key) => {
      if (typeof themeObj[key] === "object") {
        // console.log("is Parent");
        result += `${key}: {`;
        Object.keys(themeObj[key]).map((innerKey) => {
          result += `   ${innerKey}: "${themeObj[key][innerKey]}",`;
        });
        result += `},`;
      } else {
        // console.log("is not Parent");
        result += `${innerKey}: "${themeObj[key][innerKey]}",`;
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

  return (
    <div className={cl}>
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
          {getThemeText()}
        </pre>
        <pre className="whitespace-pre" key="post">
          {post}
        </pre>
      </div>
    </div>
  );
};

export default ThemeShower;
