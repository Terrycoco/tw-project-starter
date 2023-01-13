import React, { useState, useReducer } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import theme from "../styles/theme"; //can use a different theme that you create, but call it theme
import { twMerge } from "tailwind-merge";
import ColorPicker from "../devComponents/ColorPicker";

const styles = {
  section: "grid grid-cols-4 pr-3 mb-12",
  result: "py-6 col-span-3",
  play: "flex flex-col space-y-2 py-6 px-3 bg-primary-200",
  palette: {
    primary: "bg-primary-500",
    secondary: "bg-secondary",
    text: "text-clr-normal",
  },
};

const initialState = theme;
const UPDATE = "update_item";

const reducer = (themeState, action) => {
  console.log("new action:", action);
  switch (action.type) {
    case UPDATE: {
      return {
        //find if there, else add it
        ...themeState,
        [action.name]: action.payload,
      };
    }
    default: {
      return themeState;
    }
  }
};

const Stylesheet = (props) => {
  //styles from theme to play with
  const [themeState, dispatch] = useReducer(reducer, initialState);

  const [selectedColor, setSelectedColor] = useState("");
  const [textColor, setTextColor] = useState("text-black");
  const [showPicker, setShowPicker] = useState(false);

  const changeHandler = (newValue, name) => {
    dispatch({
      type: UPDATE,
      name: name,
      payload: newValue,
    });
  };

  const themeForm = (key, value, isParent = false) => {
    if (isParent) {
      return (
        <>
          <div key={key} className="kicker uppercase">
            {key}
          </div>
          {loopThroughTheme(value)}
        </>
      );
    } else {
      return (
        <Textarea
          key={key}
          name={key}
          label={key}
          labelStyles="text-blue-900 font-bold"
          valueStyles="text-xs"
          rows="3"
          onChange={changeHandler}
        >
          {value}
        </Textarea>
      );
    }
  };

  const loopThroughTheme = (obj) => {
    console.log("obj param:", obj);
    Object.keys(obj).map((key) => {
      //isParent?
      if (typeof obj[key] === "object") {
        console.log("is Parent");
        return themeForm(key, obj[key], true);
      } else {
        console.log("is not Parent");
        return themeForm(key, obj[key], false);
      }
    });
  };

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
    const val = color.split("-");
    if (val[2] >= "500") {
      setTextColor("text-white");
    } else {
      setTextColor("text-black");
    }
  };

  const handleColorPicker = (e) => {
    setShowPicker(!showPicker);
  };

  return (
    <div id="page" className="w-full min-h-screen">
      <Navbar title="Project Stylesheet" onClick={handleColorPicker} />
      <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-hidden px-6">
        <ColorPicker visible={showPicker} onSelect={handleSelectedColor} />

        <section id="colors" className={styles.section}>
          <div id="colors-result" className={styles.result}>
            <h1 className={themeState.kicker}>Color Palette</h1>

            <div className="flex flex-col tablet:flex-row tablet:space-x-2">
              <div className="flex flex-col text-center">
                <div
                  className={`w-28 h-28 ${styles.palette.primary}  rounded-full`}
                ></div>
                <span>primary</span>
              </div>
              <div className="flex flex-col text-center">
                <div
                  className={`w-28 h-28 ${styles.palette.secondary}  rounded-full`}
                ></div>
                <span>secondary</span>
              </div>
              <div className="flex flex-col text-center">
                <div
                  className={`w-28 h-28 ${styles.palette.text}  rounded-full`}
                ></div>
                <span>text</span>
              </div>
            </div>
            <div
              className={`mt-2 p-3 w-1/2 h-10 border border-black text-xs  ${selectedColor} ${textColor}`}
            >
              {`${selectedColor}`}
            </div>
          </div>
          <div id="colors-play" className={styles.play}>
            <div className={themeState.kicker}>Color</div>
            <button>Select Color</button>
          </div>
        </section>

        <section id="typography" className={styles.section}>
          <div id="typography-result" className={styles.result}>
            <h1 className={themeState.kicker}>Typography</h1>
            <div>
              <h1 className={themeState.h1}>Use H1 heading for bold display</h1>
              <h2 className={themeState.h2}>
                Use H2 Heading for section heads
              </h2>
              <h3 className={themeState.h3}>This is H3 Subheading</h3>
              <div className={themeState.base}>
                <p className={themeState.p}>
                  This is the p (paragraph) style. It is defined in the theme.
                  You may also use globals.css as usual.
                </p>
                <p className={themeState.p}>
                  As you can see, paragraphs have some spacing between
                  themselves. This can be altered in the base p style in the
                  theme, or in the globals.css file.
                </p>
              </div>
            </div>
          </div>
          <div id="typography-play" className={styles.play}>
            {loopThroughTheme({ themeState })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stylesheet;
{
}
