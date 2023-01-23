//IMPORTANT!!! Any page with .dev.js will be viewable in dev environment only
//TO PUBLISH ANY PAGE IT MUST be named youpagename.page.js
import {
  fontVariables,
  getFontsByCategory,
  getFontClassName,
  fonts as allFonts,
} from "../devUtils/fonts";
import React, { useState, useReducer, useEffect, useCallback } from "react";
import { setStorage, getStorage, clearStorage } from "../utils";
import { DndContext } from "@dnd-kit/core";
////import { Draggable, Droppable } from "../components/dnd";
import Navbar from "../devComponents/Navbar";
import HexInput from "../devComponents/HexInput";
import Textarea from "../components/Textarea";

//can use a different theme that you create, but call it theme in component
import { theme as mytheme } from "../styles/themes";

import { twMerge } from "tailwind-merge";
import ColorPicker from "../devComponents/ColorPicker";
import ColorTester from "../devComponents/ColorTester";
import { FlexLayout, FlexColumn } from "../components/flex";
import FontDropdown from "../devComponents/FontDropdown";
import ThemeShower from "../devComponents/ThemeShower";

const styles = {
  section: "my-12",
  result: "py-6 col-span-3",
  palette: {
    primary: "bg-primary text-primary-text",
    secondary: "bg-secondary",
    accent: "text-normal",
  },
};

const defaultColorObj = {
  name: "white",
  color: "white",
  hex: "#FFFFFF",
  textColor: "text-blackish",
};

const initialState = mytheme;
const fontCategories = Object.keys(mytheme.fonts);
const UPDATE = "update_item";

//store in localStorage here?
const reducer = (themeState, action) => {
  // console.log("new action:", action);
  switch (action.type) {
    case UPDATE: {
      let newState = Object.assign({}, themeState);
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
  //const [theme, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState(initialState);

  //const [selectedColor, setSelectedColor] = useState("");
  const [selectedColorObj, setSelectedColorObj] = useState(defaultColorObj);
  const [hexColor, setHexColor] = useState("#FFFFFF");
  //const [textColor, setTextColor] = useState("text-blackish");
  const [showPicker, setShowPicker] = useState(false);
  const [palette, setPalette] = useState(initialState.colors);
  const [text, setText] = useState(initialState.text);
  const [fonts, setFonts] = useState(initialState.fonts);
  //const [isDropped, setIsDropped] = useState(false);
  const [showTheme, setShowTheme] = useState(false);

  //on init page check storage to see if theme is there
  useEffect(() => {
    let stored = getStorage("theme");
    console.log("stored: ", stored);
    if (!stored) {
      //   //nothing in storage let's put the theme as is
      setStorage("theme", initialState);
      setTheme(initialState);
    } else {
      setTheme(stored);
    }

    //IN CASE IT GETS FUCKED UP
    // clearStorage("theme");
    // setStorage(initialState);
    // setTheme(initialState);
  }, []);

  //when theme changes set storage
  useEffect(() => {
    setStorage("theme", theme); //could also useEffect here
  }, [theme]);

  const updateTheme = (newValue, name, cat) => {
    let newtheme = Object.assign({}, theme);
    newtheme[cat][name] = newValue;
    setTheme(newtheme);
    console.log("newtheme:", newtheme);
  };

  const themeForm = (key, value, isParent = false, cat) => {
    if (isParent === true) {
      return (
        <>
          <div className="text-secondary mt-6 font-bold text-sm uppercase">
            {key}
          </div>
          {loopThroughTheme(value, cat)}
        </>
      );
    } else {
      if (cat === "colors") {
        return (
          <HexInput
            id={key}
            placeholder="Or Enter a Hex Color"
            value={value}
            onChange={handleHexColor}
            label={key}
            labelStyle="text-blackish font-bold"
            key={key}
            style={`h-10 border border-black text-sm font-bold`}
            name={key}
            cat="colors"
          />
        );
      } else if (cat === "fonts") {
        return (
          <FontDropdown
            key={key}
            name={key}
            cat={key}
            label={key}
            labelStyle="text-blackish font-bold"
            style="text-xs w-full"
            onChange={updateTheme}
            id={key}
            defaultValue={value}
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
            onChange={updateTheme}
            id={key}
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

  const handleSelectedColor = (colorObj) => {
    if (!colorObj || !colorObj.name) return;
    console.log("receivd: ", colorObj);
    //let tc = getTextColorClass(colorObj.hex);
    //colorObj.textColor = tc;
    setSelectedColorObj(colorObj);
    // setSelectedColor(colorObj.name);
  };

  const handleHexColor = (key, colorObj) => {
    console.log("received co:", key, colorObj);
    let newtheme = Object.assign({}, theme);
    newtheme.colors[key] = colorObj.hex;
    setTheme(newtheme);
  };

  const toggleTheme = (val) => {
    console.log("got to tog:", val);
    if (val === false) {
      setShowTheme(false);
      return;
    }
    let currVal = showTheme;
    setShowPicker(false);
    if (currVal === false) {
      window.scrollTo(0, 0);
    }
    setShowTheme(!currVal);
  };

  const resetTheme = () => {
    //reload initial into state
    //TODO WARN USER FIRST
    clearStorage("theme");
    setStorage("theme", initialState);
    setTheme(initialState);
    //TODO SHOW SUCCESS
  };

  const toggleColorPicker = (e, open) => {
    e.preventDefault;
    e.stopPropagation();
    if (open === true) {
      setShowPicker(true);
    } else {
      setShowPicker(false);
    }
  };

  const getClasses = (cat, name) => {
    console.log("get classes for ", cat, name);
    let cl = theme[cat][name];
    cl += getFontClass(cl, name);
    return cl;
  };

  const getFontClass = (elementClass) => {
    let result;
    for (const fontCat in fontCategories) {
      if (elementClass.includes(`font-${fontCat}`)) {
        return " " + getFontClassName(theme.fonts[fontCat]);
      } else {
        return " " + getFontClassName(theme.fonts.base);
      }
    }
  };

  return (
    <div id="page" className={` ${mytheme.page.basic} ${fontVariables}`}>
      <Navbar
        key="navbar"
        title="Project Stylesheet"
        outerStyles={"shadow-none bg-brand text-whitish"}
        textColor="text-white"
        leftStyles="text-white"
        centerStyles="text-white"
        rightStyles="text-white"
        onThemeClick={toggleTheme}
        onThemeReset={resetTheme}
      />
      <ColorPicker
        key="colorPicker"
        visible={showPicker}
        onSelect={handleSelectedColor}
      />
      <ThemeShower
        key="themeShower"
        visible={showTheme}
        theme={theme}
        onClose={toggleTheme}
      />

      {/* color section */}
      <section
        id="colors"
        className={`relative ${mytheme.section.padded}`}
        onClick={(e) => toggleColorPicker(e, false)}
      >
        <div className={getClasses("text", "kicker")}>Colors</div>
        <h2 className={getClasses("text", "h2")}>Theme Colors</h2>
        <p className="text-sm text-medium mt-1 ">
          These are named in <b>tailwind.config</b> and your <b>theme.js</b>{" "}
          file
        </p>

        <FlexLayout className="mt-5 gap-5" key="topsection">
          <FlexColumn key="col1" className="w-2/3 pr-0 ">
            <div className="lg:w-3/4">
              {loopThroughTheme({ palette }, "colors")}
            </div>
          </FlexColumn>

          <FlexColumn key="col2" className="w-1/3">
            <h3 className={getClasses("text", "h3")}>Color Playground</h3>
            <ColorTester
              key="tester"
              colorObj={selectedColorObj}
              className="mt-3"
            />
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
              label="Or Enter Any Hex Value"
              key="hexInput"
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

      {/* typography section */}
      <section
        id="typography"
        className={`${theme.section.padded}`}
        onClick={(e) => toggleColorPicker(e, false)}
      >
        <h1 className={getClasses("text", "kicker")}>Typography</h1>
        <FlexLayout key="themeplay" className="gap-5">
          <FlexColumn key="textVals" className="w-full md:w-2/3">
            <div>
              <h1 id="h1test" className={getClasses("text", "h1")}>
                Use H1 heading for bold display
              </h1>
              <h2 className={getClasses("text", "h2")}>
                Use H2 Heading for section heads
              </h2>

              <h3 className={getClasses("text", "h3")}>
                This is H3 Subheading
              </h3>
              <p className={getClasses("text", "p")}>
                This is the p (paragraph) style. It is defined in the theme. You
                may also use globals.css if you prefer.
              </p>
              <p className={getClasses("text", "p")}>
                As you can see, paragraphs have some spacing between themselves.
                This can be altered in the base p style in the theme, or in the
                globals.css file.
              </p>
              <h3 className={getClasses("text", "h3")}>
                Typography Lessons Learned
              </h3>
              <p className={getClasses("text", "p")}>
                I have found that putting a mt (margin top) is better than
                margin bottom. You don't know what's coming, but you know where
                you've been. That way if the next line wants to be a sort of
                subtext, it won't have to deal with the bottom margin from the
                previous element.
              </p>
              <p className={getClasses("text", "p")}>
                Paragraphs should be limited in length, so as to be readable.
                Experiment with these max widths:
              </p>
              <ul>
                <li>max-w-md (28rem/448px)</li>
                <li>max-w-lg (32rem/512px)</li>
                <li>max-w-xl (36rem/576px)</li>
              </ul>
            </div>
          </FlexColumn>
          <FlexColumn key="playground" className="w-full md:w-1/3">
            {loopThroughTheme({ fonts }, "fonts")}
            {loopThroughTheme({ text }, "text")}
          </FlexColumn>
        </FlexLayout>
      </section>
    </div>
  );
};

const safelist = `
  text-brand
  text-secondary
  text-blackish
  text-whitish
  text-accent
`;

export default Stylesheet;
