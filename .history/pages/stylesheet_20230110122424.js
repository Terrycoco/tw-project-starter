import React, { useState } from "react";
import Navbar from "../components/Navbar";
import theme from "../styles/tailwind-theme";
import { twMerge } from "tailwind-merge";

const styles = {
  h1: "font-medium leading-none text-5xl mt-0 mb-2 text-blue-600",
  h2: "font-medium leading-none text-4xl mt-0 mb-2 text-blue-600",
};

const Stylesheet = (props) => {
  const [font, setFont] = useState("Roboto");
  return (
    <div id="page" className="">
      <Navbar title="Project Stylesheet" />
      <div className="w-screen min-h-screen overflow-x-hidden overflow-y-hidden">
        <section id="colors" className="grid grid-cols-2 p-6 ">
          <div id="colors-result" className="w-3/4">
            <h1 className="kicker">Color Palette</h1>
            <div className="flex flex-col tablet:flex-row tablet:space-x-2">
              <div className="flex flex-col text-center">
                <div className="w-28 h-28 bg-primary rounded-full"></div>
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
          <div id="colors-play" className="bg-primary-200 w-1/4"></div>
        </section>
        <section id="typography" className="p-6">
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
        </section>
      </div>
    </div>
  );
};

export default Stylesheet;
{
}
