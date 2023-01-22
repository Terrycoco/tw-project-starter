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
      const newState = Object.assign({}, themeState);
      newState[action.cat][action.name] = action.value;
      return newState;
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

  const changeHandler = (newValue, cat, name) => {
    console.log(name, "update to: ", newValue);
    dispatch({
      type: UPDATE,
      name: name,
      cat: cat,
      value: newValue,
    });
  };

  const themeForm = (key, value, isParent = false, cat) => {
    if (isParent === true) {
      return (
        <>
          <div id={key} className="text-blackish font-bold text-sm uppercase">
            {key}
          </div>
          {loopThroughTheme(value, cat)}
        </>
      );
    } else {
      if (cat === "colors") {
        return (
          <HexInput
            placeholder="Or Enter a Hex Color"
            defaultValue={value}
            onChange={handleHexColor}
            label={key}
            labelStyle="text-blackish font-bold"
            key={key}
            style={`h-10 border border-black text-sm font-bold  bg-[${hexColor}]`}
            name={key}
            cat="colors"
          />
        );
      } else {
        return (
          <Textarea
            key={key}
            name={key}
            cat={cat}
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

  const loopThroughTheme = (obj, cat) => {
    // console.log("obj param:", obj);
    return Object.keys(obj).map((key) => {
      //isParent?
      if (typeof obj[key] === "object") {
        // console.log("is Parent");
        return themeForm(key, obj[key], true, cat);
      } else {
        // console.log("is not Parent");
        return themeForm(key, obj[key], false, cat);
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
    <div id="page" className={`${mytheme.page.basic}`}>
      <Navbar
        key="styleNav"
        title="Project Stylesheet"
        outerStyles={"shadow-none bg-brand text-whitish"}
        textColor="text-white"
        leftStyles="text-white"
        centerStyles="text-white"
        rightStyles="text-white"
      />

      <section
        id="colors"
        className={`relative ${mytheme.section.padded}`}
        onClick={(e) => toggleColorPicker(e, false)}
      >
        <ColorPicker visible={showPicker} onSelect={handleSelectedColor} />
        <h2 className={mytheme.text.kicker}>Color Palette</h2>
        <h3 className={mytheme.text.h3}>Named Colors</h3>
        <p className="text-xs text-medium mb-3">
          These are named in tailwind.config
        </p>
        <FlexLayout className="gap-5">
          <FlexColumn key="palette" className="w-2/3 pr-0 ">
            <div className="lg:w-3/4">
              {loopThroughTheme({ palette }, "colors")}
            </div>
          </FlexColumn>
          <FlexColumn key="colorplay" className="w-1/3">
            <h3 className={mytheme.text.h3}>Color Playground</h3>
            <div
              className={`h-10 p-3 border border-blackish text-sm font-bold ${selectedColor} ${textColor}`}
            >
              {`${selectedColor}`}
            </div>
            <div
              onClick={(e) => toggleColorPicker(e, true)}
              className={`text-xs mt-1 mb-3 ${theme.text.link}`}
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
              className={`text-xs mt-1 mb-3 ${theme.text.link}`}
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
        <h1 className={theme.text.kicker}>Typography</h1>
        <FlexLayout key="theme-play" className="gap-5">
          <FlexColumn key="textVals" className="w-full md:w-2/3">
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
          <FlexColumn key="playground" className="w-full md:w-1/3">
            {loopThroughTheme({ text }, "text")}
          </FlexColumn>
        </FlexLayout>
      </section>
    </div>
  );
};

export default Stylesheet;

{
}
