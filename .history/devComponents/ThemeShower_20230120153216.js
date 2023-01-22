import useStorage from "../utils/useStorage";
import { useState, useEffect } from "react";

//present theme (as yet unsaved to user)
//ability to copy into clipboard

const ThemeShower = (props) => {
  const [visible, setVisible] = useState(props.visible);
  const [cl, setCl] = useState("hidden");
  const theme = useStorage("theme");

  useEffect(() => {
    if (visible === true) {
      setCl("top-20 mx-auto z-50 w-full h-screen bg-slate-800 text-white");
    } else {
      setCl("hidden");
    }
  }, [visible]);

  return <div className={cl}>I am theme</div>;
};

export default ThemeShower;
