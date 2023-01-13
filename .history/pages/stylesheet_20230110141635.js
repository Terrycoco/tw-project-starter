import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import theme from "../styles/theme";
import { twMerge } from "tailwind-merge";

const styles = {
  section: "grid grid-cols-4 border border-blue-400",
  result: "py-3 col-span-3",
  play: "flex flex-col space-y-2 p-3 bg-primary-200",
  palette: {
    primary: "bg-primary-200",
    secondary: "bg-secondary",
    text: "bg-text-normal",
  },
  h1: theme.h1,
  h2: theme.h2,
  base: theme.base,
};

const onValuesChange = (incoming) => {
  console.log("values inconing:", incoming);
};

const Stylesheet = (props) => {
  const [h1, setH1] = useState(theme.h1);
  return (
    <div id="page" className="w-full min-h-screen">
      <Navbar title="Project Stylesheet" />
      <div className="w-full min-h-screen overflow-x-hidden overflow-y-hidden px-6">
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
          </div>
        </section>
        <section id="typography" className={styles.section}>
          <div id="typography-result" className={styles.result}>
            <h1 className="kicker">Typography</h1>
            <h1 className={h1}>Use H1 heading for bold display</h1>
            <h2 className={styles.h2}>Use h2 Heading for section heads</h2>
            <h3>This is h3 subheading</h3>
            <p>
              This is the p (paragraph) style. To change any style, go to
              globals.css file and alter the base layer for the element, or the
              component layer for custom classes. Kicker here is a custom class.
            </p>
            <p>
              As you can see, paragraphs have some spacing between themselves.
              This can be altered in the base p style in typography.css.
            </p>
          </div>
          <div id="typography-play" className={styles.play}>
            <div className="kicker">Typography</div>
            <Textarea
              id="h1"
              label="H1"
              labelStyles="text-blue-900 font-bold"
              valueStyles="text-xs"
              rows="2"
              onChange={onValuesChange}
            >
              {styles.h1}
            </Textarea>
            <Textarea
              id="h2"
              label="H2"
              labelStyles="text-blue-900 font-bold"
              valueStyles="text-xs"
              rows="2"
              onChange={onValuesChange}
            >
              {styles.h2}
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
