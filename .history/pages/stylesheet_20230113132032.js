import React, { useState, useReducer } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import theme from "../styles/theme";
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

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.itemkey]: action.payload,
      };
    }
    case "UPDATE_ITEM": {
      return {
        ...state,
        [action.id]: { ...state[action.id], ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
};

const Stylesheet = (props) => {
  //styles from theme to play with
  const [state, dispatch] = useReducer(reducer, initialState);

  const [selectedColor, setSelectedColor] = useState("");
  const [textColor, setTextColor] = useState("text-black");
  const [showPicker, setShowPicker] = useState(false);

  const changeHandler = (newValue, name) => {
    setElemStyles((prevValues) => {
      return { ...prevValues, [name]: newValue };
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
            <h1 className={elemStyles.kicker}>Color Palette</h1>

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
            <div className={elemStyles.kicker}>Color</div>
            <button>Select Color</button>
          </div>
        </section>

        <section id="typography" className={styles.section}>
          <div id="typography-result" className={styles.result}>
            <h1 className={elemStyles.kicker}>Typography</h1>
            <div>
              <h1 className={elemStyles.h1}>Use H1 heading for bold display</h1>
              <h2 className={elemStyles.h2}>
                Use H2 Heading for section heads
              </h2>
              <h3 className={elemStyles.h3}>This is H3 Subheading</h3>
              <div className={elemStyles.base}>
                <p className={elemStyles.p}>
                  This is the p (paragraph) style. To change any style, go to
                  globals.css file and alter the base layer for the element, or
                  the component layer for custom classes. Kicker here is a
                  custom class.
                </p>
                <p className={elemStyles.p}>
                  As you can see, paragraphs have some spacing between
                  themselves. This can be altered in the base p style in
                  typography.css.
                </p>
              </div>
            </div>
          </div>
          <div id="typography-play" className={styles.play}>
            <div className="kicker">Typography</div>
            <Textarea
              name="h1"
              label="H1"
              labelStyles="text-blue-900 font-bold"
              valueStyles="text-xs"
              rows="3"
              onChange={changeHandler}
            >
              {elemStyles.h1}
            </Textarea>
            <Textarea
              name="h2"
              label="H2"
              labelStyles="text-blue-900 font-bold"
              valueStyles="text-xs"
              rows="3"
              onChange={changeHandler}
            >
              {elemStyles.h2}
            </Textarea>
            <Textarea
              name="h3"
              label="H3"
              labelStyles="text-blue-900 font-bold"
              valueStyles="text-xs"
              rows="3"
              onChange={changeHandler}
            >
              {elemStyles.h3}
            </Textarea>
            <Textarea
              name="base"
              label="Base"
              labelStyles="text-blue-900 font-bold"
              valueStyles="text-xs"
              rows="3"
              onChange={changeHandler}
            >
              {elemStyles.base}
            </Textarea>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stylesheet;
{
}
