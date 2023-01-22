import useStorage from "../utils/useStorage";
import { useState } from "react";

//present theme (as yet unsaved to user)
//ability to copy into clipboard

const ThemeShower = (props) => {
  const [visible, setVisible] = useState(false);
  const theme = useStorage("theme");

  if (visible) {
    return (
      <div className={`${visible} w-full h-screen bg-slate-800 text-white`}>
        I am theme
      </div>
    );
  } else {
    return null;
  }
};

export default ThemeShower;
