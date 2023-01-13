import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import theme from "../styles/tailwind-theme";
import { twMerge } from "tailwind-merge";

const styles = {
  section: "grid grid-cols-4 border border-blue-400",
  result: "col-span-3",
  play: "flex flex-col space-y-2 p-3 bg-primary-200",
  palette: {
    primary: "bg-primary-200",
  },
  h1: "font-medium leading-none text-5xl mt-0 mb-2 text-blue-600",
  h2: "font-medium leading-none text-4xl mt-0 mb-2 text-blue-600",
};

const Stylesheet = (props) => {
  const [font, setFont] = useState("Roboto");
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
                  className={`w-28 h-28 ${styles.palette.primary}  bg-primary rounded-full`}
                ></div>
                <span>primary</span>
              </div>
              <div className="flex flex-col text-center">
                <div className="w-28 h-28 bg-secondary rounded-full"></div>
                <span>secondary</span>
              </div>
              <div className="flex flex-col text-center">
                <div className="w-28 h-28 bg-text rounded-full"></div>
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
            <h1 className={styles.h1}>Use H1 heading for bold display</h1>
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
            <Input label="H1" />
            <Input label="H2" />
            <Input label="H3" />
            <Input label="H4" />
            <Input label="kicker" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stylesheet;
{
}
