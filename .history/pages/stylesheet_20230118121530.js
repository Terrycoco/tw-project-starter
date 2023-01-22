import React, { useState, useReducer } from "react";
import Navbar from "../components/Navbar";
import HexInput from "../components/HexInput";
import Textarea from "../components/Textarea";
import mytheme from "../styles/theme"; //can use a different theme that you create, but call it theme in component
import { twMerge } from "tailwind-merge";
import ColorPicker from "../devComponents/ColorPicker";
import ColorDisplayer from "../devComponents/ColorDisplayer";
import { FlexLayout, FlexColumn } from "../components/flex";

const styles = {
  section: "my-12",
  result: "py-6 col-span-3",
  palette: {
    primary: "bg-primary text-primary-text",
    secondary: "bg-secondary",
    accent: "text-normal",
  },
};

const initialState = mytheme;
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
  const [theme, dispatch] = useReducer(reducer, initialState);
  const [selectedColor, setSelectedColor] = useState("");
  const [hexColor, setHexColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("text-blackish");
  const [showPicker, setShowPicker] = useState(false);
  const [palette, setPalette] = useState(initialState.colors);
  const [text, setText] = useState(initialState.text);

  const changeHandler = (newValue, name) => {
    dispatch({
      type: UPDATE,
      name: name,
      payload: newValue,
    });
  };

  const themeForm = (key, value, isParent = false, isColor) => {
    if (isParent === true) {
      return (
        <>
          <div id={key} className="text-blackish font-bold text-sm uppercase">
            {key}
          </div>
          {loopThroughTheme(value, isColor)}
        </>
      );
    } else {
      if (isColor === true) {
        return (
          <HexInput
            placeholder="Or Enter a Hex Color"
            defaultValue={value}
            onChange={handleHexColor}
            label={key}
            labelStyle="text-blackish font-bold"
            key={key}
            style={`w-1/2 h-10 border border-black text-sm font-bold  bg-[${hexColor}]`}
          />
        );
      } else {
        return (
          <Textarea
            key={key}
            name={key}
            label={key}
            labelStyle="text-blackish font-bold"
            style="text-xs w-full"
            rows="2"
            onChange={changeHandler}
          >
            {value}
          </Textarea>
        );
      }
    }
  };

  const loopThroughTheme = (obj, isColor = false) => {
    // console.log("obj param:", obj);
    return Object.keys(obj).map((key) => {
      //isParent?
      if (typeof obj[key] === "object") {
        // console.log("is Parent");
        return themeForm(key, obj[key], true, isColor);
      } else {
        // console.log("is not Parent");
        return themeForm(key, obj[key], false, isColor);
      }
    });
  };

  const handleSelectedColor = (color) => {
    if (!color) return;
    setSelectedColor(color);
    const val = color.split("-");
    if (val[2] >= "500") {
      setTextColor("text-white");
    } else {
      setTextColor("text-black");
    }
  };

  const handleHexColor = (color) => {
    setHexColor(color);
  };

  const toggleColorPicker = (e, open) => {
    e.preventDefault;
    e.stopPropagation();
    console.log("got here: ", open);
    if (open === true) {
      setShowPicker(true);
    } else {
      setShowPicker(false);
    }
  };

  return (
    <div id="page" className={mytheme.page.basic}>
      <Navbar
        key="styleNav"
        title="Project Stylesheet"
        outerStyles={"shadow-none bg-brand text-whitish"}
        textColor="text-white"
        leftStyles="text-white"
        centerStyles="text-white"
        rightStyles="text-white"
      />
      <ColorPicker visible={showPicker} onSelect={handleSelectedColor} />
      <section
        id="colors"
        className={mytheme.section.padded}
        onClick={(e) => toggleColorPicker(e, false)}
      >
        <h2 className={mytheme.text.h2}>Color Palette</h2>
        <FlexLayout>
          <FlexColumn key="palette" className="w-2/3">
            <h3 className={mytheme.text.h3}>Named Colors</h3>
            <p className="text-xs text-medium mb-3">
              These are named in tailwind.config
            </p>
            {loopThroughTheme({ palette }, true)}
          </FlexColumn>
          <FlexColumn key="colorplay" className="w-1/3">
            <h3 className={mytheme.text.h3}>Color Playground</h3>
            <div
              className={`w-1/2 h-10 p-3 border border-blackish text-sm font-bold ${selectedColor} ${textColor}`}
            >
              {`${selectedColor}`}
            </div>
            <div
              onClick={(e) => toggleColorPicker(e, true)}
              className={`text-xs mt-1 mb-3 ${theme.link}`}
            >
              See Tailwind Colors
            </div>

            <HexInput
              placeholder="Or Enter a Hex Color"
              defaultValue={hexColor}
              onChange={handleHexColor}
              key="hexColor"
              style={` p-3 h-10 border border-blackish text-sm font-bold bg-[${hexColor}]`}
            />

            <a
              id="openAdobe"
              target="_blank"
              href="https://color.adobe.com/create/color-wheel"
              rel="noopener noreferrer"
              className={`text-xs mt-1 mb-3 ${theme.link}`}
            >
              Go to Adobe Colors
            </a>
          </FlexColumn>
        </FlexLayout>
      </section>

      <section
        id="typography"
        className={mytheme.section.padded}
        onClick={(e) => toggleColorPicker(e, false)}
      >
        <FlexLayout key="theme-play">
          <FlexColumn key="textVals" className="w-2/3 pr-10">
            <h1 className={theme.text.kicker}>Typography</h1>
            <div>
              <h1 className={theme.text.h1}>Use H1 heading for bold display</h1>
              <h2 className={theme.text.h2}>
                Use H2 Heading for section heads
              </h2>
              <h3 className={theme.text.h3}>This is H3 Subheading</h3>
              <div className={theme.text.base}>
                <p className={theme.text.p}>
                  This is the p (paragraph) style. It is defined in the theme.
                  You may also use globals.css as usual.
                </p>
                <p className={theme.text.p}>
                  As you can see, paragraphs have some spacing between
                  themselves. This can be altered in the base p style in the
                  theme, or in the globals.css file.
                </p>
              </div>
            </div>
          </FlexColumn>
          <FlexColumn key="playground" className="w-1/3">
            {loopThroughTheme({ text }, false)}
          </FlexColumn>
        </FlexLayout>
      </section>
    </div>
  );
};

export default Stylesheet;

{
  /* <FlexColumn
          key="results"
          className="w-2/3 min-h-screen overflow-x-hidden overflow-y-hidden px-6"
        >
          <section
            id="colors"
            className={styles.section}
            onClick={(e) => toggleColorPicker(e, false)}
          >
            <div id="colors-result" className={styles.result}>
              <h2 className={theme.kicker}>Color Palette</h2>
              <h3 className={theme.h3}>Named Colors</h3>
              <p className="text-xs text-medium mb-3">
                These are named in tailwind.config
              </p>
              <div className="mt-3 flex flex-col tablet:flex-row tablet:space-x-2">
                <ColorDisplayer
                  key="p"
                  label="primary"
                  color={styles.palette.primary}
                />
                <ColorDisplayer
                  key="plight"
                  label="primary-light"
                  color={styles.palette.primaryLight}
                />
                <ColorDisplayer
                  key="pdark"
                  label="primary-dark"
                  color={styles.palette.primaryDark}
                />
              </div>
              <div className="mt-3 flex flex-col tablet:flex-row tablet:space-x-2">
                <ColorDisplayer
                  key="s"
                  label="secondary"
                  color={styles.palette.secondary}
                />
                <ColorDisplayer
                  key="slight"
                  label="secondary-light"
                  color={styles.palette.secondaryLight}
                />
                <ColorDisplayer
                  key="sdark"
                  label="secondary-dark"
                  color={styles.palette.secondaryDark}
                />
              </div>

              <div id="colorplay" className="flex flex-col py-8">
                <h3 className={theme.h3}>Color Playground</h3>
                <div
                  className={`w-1/2 h-10 p-3 border border-black text-sm font-bold ${selectedColor} ${textColor}`}
                >
                  {`${selectedColor}`}
                </div>
                <div
                  onClick={(e) => toggleColorPicker(e, true)}
                  className={`text-xs mt-1 mb-3 ${theme.link}`}
                >
                  See Tailwind Colors
                </div>

                <HexInput
                  placeholder="Or Enter a Hex Color"
                  defaultValue={hexColor}
                  onChange={handleHexColor}
                  key="hexColor"
                  style={` p-3 w-1/2 h-10 border border-black text-sm font-bold  bg-[${hexColor}]`}
                />

                <a
                  id="openAdobe"
                  target="_blank"
                  href="https://color.adobe.com/create/color-wheel"
                  rel="noopener noreferrer"
                  className={`text-xs mt-1 mb-3 ${theme.link}`}
                >
                  Go to Adobe Colors
                </a>
              </div>
            </div>
            <div id="colors-play" className={styles.play}></div>
          </section>

          <section id="typography" className={styles.section}>
            <div id="typography-result" className={styles.result}>
              <h1 className={theme.kicker}>Typography</h1>
              <div>
                <h1 className={theme.h1}>Use H1 heading for bold display</h1>
                <h2 className={theme.h2}>Use H2 Heading for section heads</h2>
                <h3 className={theme.h3}>This is H3 Subheading</h3>
                <div className={theme.base}>
                  <p className={theme.p}>
                    This is the p (paragraph) style. It is defined in the theme.
                    You may also use globals.css as usual.
                  </p>
                  <p className={theme.p}>
                    As you can see, paragraphs have some spacing between
                    themselves. This can be altered in the base p style in the
                    theme, or in the globals.css file.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FlexColumn>
        <FlexColumn key="typography-play" className={"styles.play"}>
          {loopThroughTheme({ theme })}
        </FlexColumn>
      </FlexLayout>

*/
}
