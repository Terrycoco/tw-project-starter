//IMPORTANT!!! Any page with .dev.js will be viewable in dev environment only
//TO PUBLISH ANY PAGE IT MUST be named youpagename.page.js
import { useColorChanger, useTheme } from "../hooks";
import {
  fontVariables,
  getFontClassName,
  fonts as allFonts,
} from "../devUtils/fonts";
import {
  getColorObjByHex,
  DEFAULTCOLOROBJ,
  updateVariants,
} from "../devUtils/twColorUtils";
import React, { useState, useEffect, useContext } from "react";
import { setStorage, getStorage, clearStorage, newShade } from "../utils";
import { DndContext } from "@dnd-kit/core";
import { Draggable, Droppable } from "../components/dnd";
import Navbar from "../devComponents/Navbar";
import HexInput from "../devComponents/HexInput";
import Textarea from "../devComponents/Textarea";
import ColorPicker from "../devComponents/ColorPicker";
import ColorTester from "../devComponents/ColorTester";
import ThemeColor from "../devComponents/ThemeColor";
import { FlexLayout, FlexColumn } from "../components/flex";
import FontDropdown from "../devComponents/FontDropdown";
import ThemeShower from "../devComponents/ThemeShower";
import { Heading, Subhead, Kicker, H3, Subtext } from "../devComponents/text";
import { Page } from "../devComponents/layout";
import { requestToBodyStream } from "next/dist/server/body-streams";

const styles = {
  section: "my-12",
  result: "py-6 col-span-3",
  palette: {
    primary: "bg-primary text-primary-text",
    secondary: "bg-secondary",
    accent: "text-normal",
  },
};

// //store in localStorage here?
// const reducer = (themeState, action) => {
//   // console.log("new action:", action);
//   switch (action.type) {
//     case UPDATE: {
//       let newState = Object.assign({}, themeState);
//       newState[action.cat][action.name] = action.value;
//       return newState;
//     }
//     default: {
//       return themeState;
//     }
//   }
// };

const Stylesheet = (props) => {
  //styles from theme to play with
  const [showModal, setShowModal] = useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedColorObj, setSelectedColorObj] = useState({});
  const [testerColorObj, setTesterColorObj] = useState(DEFAULTCOLOROBJ);
  const [hexColorObj, setHexColorObj] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [palette, setPalette] = useState({});
  const [text, setText] = useState({});
  const [fonts, setFonts] = useState({});
  const [showTheme, setShowTheme] = useState(false);

  //dnd stuff
  const [parent, setParent] = useState(null);

  const handleDragStart = (event) => {
    //setActiveId(event.active.id);
    if (event.active.id === "tester") {
      //put tester's colorobj as selected
      let testerco = Object.assign({}, testerColorObj);
      setSelectedColorObj(testerco);
    } else if (event.active.id === "hexinput") {
      let co = Object.assign({}, hexColorObj);
      setSelectedColorObj(co);
    }
  };

  const handleDragEnd = (event) => {
    const { over } = event;
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
    if (over) {
      updateTheme(selectedColorObj.hex, over.id, "colors");
      //update variants here since we know the category
      console.log("selectedColorObj", selectedColorObj);
      updateVariants(selectedColorObj.base, over.id, theme);
    }
  };

  //on init page check storage to see if theme is there
  // useEffect(() => {
  //   // let stored = getStorage("theme");
  //   // console.log("stored: ", stored);
  //   // if (!stored) {
  //   //   //   //nothing in storage let's put the theme as is
  //   //   setStorage("theme", initialState);
  //   //   setTheme(initialState);
  //   // } else {
  //   //   setTheme(stored);
  //   // }

  //   //IN CASE STORAGE GETS FUCKED UP COMMENT ABOVE and RUN THIS
  //   clearStorage("theme");
  //   setStorage(initialState);
  //   setTheme(initialState);
  // }, []);

  //when theme changes update state

  useEffect(() => {
    //setStorage("theme", theme);
    //console.log("storage updated");
    setPalette(theme.colors);
    setFonts(theme.fonts);
    setText(theme.text);
  }, [theme]);

  const updateTheme = (newValue, name, cat) => {
    //#hex , brand, colors
    let newtheme = Object.assign({}, theme);
    newtheme[cat][name] = newValue;
    setTheme(newtheme);
  };

  const themeForm = (key, value, isParent = false, cat) => {
    if (isParent === true) {
      return (
        <>
          <H3 className={getClasses(cat, key)}>{key}</H3>
          {loopThroughTheme(value, cat)}
        </>
      );
    } else {
      if (cat === "colors") {
        let colorObj = getColorObjByHex(value);
        return (
          <Droppable key={key} id={key}>
            <ThemeColor
              id={`id${key}`}
              key={key}
              category={key}
              colorObj={colorObj}
              className="mt-3"
              showVariants={true}
            />
          </Droppable>
        );
      } else if (cat === "fonts") {
        return (
          <FontDropdown
            key={key}
            name={key}
            cat={key}
            label={key}
            labelStyle={getClasses("text", "label")}
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
            labelStyle={getClasses("text", "label")}
            className="text-xs w-full"
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

  const handlePickerColorChange = (colorObj) => {
    //coming in from picker => send to tester
    if (!colorObj || !colorObj.id) return;
    setSelectedColorObj(colorObj);
    //console.log("stylsheet receives", colorObj);
    setTesterColorObj(colorObj);
  };

  const setObjFromHex = (obj) => {
    //do this when dragging starts
    setHexColorObj(obj);
  };

  const toggleTheme = (val) => {
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
    //   //reload initial into state
    //   clearStorage("theme");
    //   setStorage("theme", initialState);
    //   setTheme(initialState);
    //   //todo alert success
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
    if (!theme) return;

    let cl = theme[cat][name];
    cl += getFontClass(cl, name);
    //console.log("get classes for ", cat, name, ": ", cl);
    return cl;
  };

  const getFontClass = (elementClass = "") => {
    let result = " " + getFontClassName(theme.fonts.base);
    const fontCategories = Object.keys(theme.fonts);
    fontCategories.forEach((cat) => {
      let fontClass = `font-${cat}`;
      let fontName = theme.fonts[cat];

      if (elementClass.includes(fontClass)) {
        result = " " + getFontClassName(fontName);
      }
    });

    return result;
  };

  //DEV: leave font variables at page level here (they're needed to safelist fonts);
  return (
    <Page
      id="page"
      className={`relative ${getClasses("layout", "page")} ${fontVariables}`}
    >
      <Navbar
        key="navbar"
        title="Project Stylesheet"
        className={getClasses("layout", "header")}
        textColor="text-white"
        leftStyles="text-white"
        centerStyles="text-white"
        rightStyles="text-white"
        onThemeClick={toggleTheme}
        onThemeReset={resetTheme}
        id="devNavbar"
      />

      <ColorPicker
        key="colorPicker"
        visible={showPicker}
        onSelect={handlePickerColorChange}
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
        className={theme.layout.section}
        onClick={(e) => toggleColorPicker(e, false)}
      >
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <Kicker className={getClasses("text", "kicker")}>colors</Kicker>
          <Heading className={getClasses("text", "heading")}>
            Theme colors
          </Heading>
          <Subtext className={getClasses("text", "subtext")}>
            These are named in <b>tailwind.config</b> and your <b>theme.js</b>{" "}
            file
          </Subtext>

          <FlexLayout className="mt-5 gap-5" key="topsection">
            <FlexColumn
              key="c-col1"
              className="w-full md:w-2/3 pr-0 max-h-screen overlow-auto"
            >
              <div className="w-full">
                {loopThroughTheme({ palette }, "colors")}
              </div>
            </FlexColumn>

            <FlexColumn key="c-col2" className="w-full md:w-1/3">
              <div className="container bg-secondary bg-opacity-5 px-4 pb-3 md:mt-20">
                <H3 className={getClasses("text", "h3")}>color playground</H3>
                <Subtext className={getClasses("text", "subtext")}>
                  Drag and drop into palette category to change
                </Subtext>
                <Draggable id="tester">
                  <ColorTester
                    key="tester"
                    colorObj={testerColorObj}
                    className="mt-3"
                  />
                </Draggable>
                <div
                  onClick={(e) => toggleColorPicker(e, true)}
                  className={`text-xs mt-1 mb-3 ${theme.text.link}`}
                >
                  See Tailwind Colors
                </div>

                <HexInput
                  placeholder="Or Enter a Hex Color"
                  onDragStart={setObjFromHexInput}
                  key="hexInputForm"
                  style={` p-3 h-10 border border-blackish text-sm font-bold `}
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
              </div>
            </FlexColumn>
          </FlexLayout>
        </DndContext>
      </section>

      {/* typography section */}
      <section
        id="typography"
        className={theme.layout.section}
        onClick={(e) => toggleColorPicker(e, false)}
      >
        <Kicker className={getClasses("text", "kicker")}>typography</Kicker>
        <FlexLayout key="themeplay" className="gap-5">
          <FlexColumn key="textVals" className="w-full md:w-2/3 md:pr-12">
            <Heading id="h1test" className={getClasses("text", "heading")}>
              Content that&apos;s{" "}
              <span style={useColorChanger("text-brand", theme)}>easy</span> to
              read
            </Heading>
            <Subhead className={getClasses("text", "subhead")}>
              Typography Lessons Learned{" "}
            </Subhead>
            <div>
              <H3 className={getClasses("text", "h3")}>
                Too many fonts spoil the soup
              </H3>
              <p className={getClasses("text", "p")}>
                Try to limit the number of fonts. You may have one for the
                content, one for headers if you want, and maybe one more if your
                need something special. Too many looks amateurish and cluttered.
                Four categories should be enough.
              </p>
              <H3 className={getClasses("text", "h3")}>
                Spacing is a good thing
              </H3>

              <p className={getClasses("text", "p")}>interesting</p>
              <p className={getClasses("text", "p")}>
                As you can see, paragraphs have some spacing between themselves.
                This can be altered in the base p style in the theme, or in the
                globals.css file.
              </p>
              <H3 className={getClasses("text", "h3")}>
                Don't make them work too hard
              </H3>

              <p className={getClasses("text", "p")}>
                Paragraphs should be limited in length, so as to be readable.
                For paragraphs, experiment with these max widths:
              </p>
              <ul>
                <li>max-w-md (28rem/448px)</li>
                <li>max-w-lg (32rem/512px)</li>
                <li>max-w-xl (36rem/576px)</li>
              </ul>
            </div>
          </FlexColumn>
          <FlexColumn key="playground" className="w-full md:w-1/3">
            <div className="container  bg-secondary bg-opacity-5 px-3 pb-3">
              <H3 className={getClasses("text", "h3")}>
                typography playground
              </H3>
              {loopThroughTheme({ fonts }, "fonts")}
              {loopThroughTheme({ text }, "text")}
            </div>
          </FlexColumn>
        </FlexLayout>
      </section>

      <section
        id="layout"
        className={theme.layout.section}
        onClick={(e) => toggleColorPicker(e, false)}
      >
        <Kicker className={getClasses("text", "kicker")}>Layout</Kicker>
        <FlexLayout key="themeplay" className="gap-5">
          <FlexColumn
            key="l-col1"
            className="w-full md:w-2/3 pr-0 max-h-screen overlow-auto"
          >
            <Heading id="h1test" className={getClasses("text", "heading")}>
              Layout elements
            </Heading>
            <Subhead className={getClasses("text", "subhead")}>
              Containers love padding{" "}
            </Subhead>
          </FlexColumn>
          <FlexColumn key="lo-col2" className="w-full md:w-1/3">
            <div className="container  bg-secondary bg-opacity-5 px-3 pb-3">
              <H3 className={getClasses("text", "h3")}>layout playground</H3>
              {loopThroughTheme(theme.layout, "layout")}
            </div>
          </FlexColumn>
        </FlexLayout>
      </section>
    </Page>
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
