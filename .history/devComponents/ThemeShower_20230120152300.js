import useStorage from "../utils/useStorage";
import { useState, useEffect } from "react";

//present theme (as yet unsaved to user)
//ability to copy into clipboard

const ThemeShower = (props) => {
  const [visible, setVisible] = useState(false);
  const [cl, setCl] = useState("hidden");
  const theme = useStorage("theme");

  useEffect(() => {
    if (visible === true) {
      setCl("w-full h-screen bg-slate-800 text-white");
    } else {
      setCl("hidden");
    }
  }, [visible]);

  return <div className={cl}>I am theme</div>;
};

export default ThemeShower;
