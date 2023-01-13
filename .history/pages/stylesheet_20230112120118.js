import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import theme from "../styles/theme";
import { twMerge } from "tailwind-merge";
import ColorPicker from "../devComponents/ColorPicker";

const styles = {
  section: "grid grid-cols-4 pr-3",
  result: "py-6 col-span-3",
  play: "flex flex-col space-y-2 py-6 px-3 bg-primary-200",
  palette: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    text: "bg-text-text-normal",
  },
};

const Stylesheet = (props) => {
  const [elemStyles, setElemStyles] = useState({
    h1: theme.h1,
    h2: theme.h2,
    h3: theme.h3,
    base: theme.base,
  });

  const [selectedColor, setSelectedColor] = useState("");

  const changeHandler = (newValue, name) => {
    setElemStyles((prevValues) => {
      return { ...prevValues, [name]: newValue };
    });
  };

  console.log("primary:", styles.palette.primary);

  return (
    <div id="page" className="w-full min-h-screen">
      <Navbar title="Project Stylesheet" />
      <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-hidden px-6">
        <ColorPicker />
        <section id="colors" className={styles.section}>
          <div id="colors-result" className={styles.result}>
            <h1 className="kicker">Color Palette</h1>
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
          </div>
          <div id="colors-play" className={styles.play}>
            <div className="kicker">Color</div>
            <button>Select Color</button>
          </div>
        </section>
        <section id="typography" className={styles.section}>
          <div id="typography-result" className={styles.result}>
            <h1 className="kicker">Typography</h1>
            <div>
              <h1 className={elemStyles.h1}>Use H1 heading for bold display</h1>
              <h2 className={elemStyles.h2}>
                Use H2 Heading for section heads
              </h2>
              <h3 className={elemStyles.h3}>This is H3 Subheading</h3>
              <div className={elemStyles.base}>
                <p>
                  This is the p (paragraph) style. To change any style, go to
                  globals.css file and alter the base layer for the element, or
                  the component layer for custom classes. Kicker here is a
                  custom class.
                </p>
                <p>
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
