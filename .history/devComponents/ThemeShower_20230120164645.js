import useStorage from "../utils/useStorage";
import { useState, useEffect } from "react";

//present theme (as yet unsaved to user)
//ability to copy into clipboard

const pre = `const twColors = require("tailwindcss/colors");

/* a Theme is just a list of Tailwind combos (string) that you use often
make any changes below */

const _default = {

    `;

const post = `
};

module.exports = _default;

`;

const ThemeShower = (props) => {
  const [visible, setVisible] = useState(props.visible);
  const [cl, setCl] = useState("hidden");
  const theme = useStorage("theme");

  useEffect(() => {
    if (props.visible === true) {
      setCl(
        "font-code top-20 mx-auto z-50 w-3/4 h-screen bg-zinc-800 text-white p-20"
      );
    } else {
      setCl("hidden");
    }
  }, [props.visible]);

  return (
    <div className={cl}>
      <pre>{pre}</pre>
    </div>
  );
};

export default ThemeShower;
