import useStorage from "../utils/useStorage";
import { useState } from "react";

//present theme (as yet unsaved to user)
//ability to copy into clipboard

const ThemeShower = (props) => {
  const [visible, setVisible] = useState(false);
  const theme = useStorage("theme");
  return (
  { visible ? 
    <div className={`${visible}`}>I am theme</div>
    : null
  };
};

export default ThemeShower;
