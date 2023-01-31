import { useState, useEffect } from "react";
import ColorVariants from "./ColorVariants";
import { useTheme } from "../hooks";

//don't need theme because colorObj is passed in from stylesheet
//TODO make use of useColorChanger
const ThemeColor = ({ category, ...props }) => {
  const [colorObj, setColorObj] = useState(props.colorObj);
  const [key, setKey] = useState("id");
  const { theme } = useTheme();

  useEffect(() => {
    setColorObj(props.colorObj);
    console.log("colorTheme received colorobj: ", props.colorObj);
  }, [props.colorObj]);

  const toggleValue = () => {
    if (key === "id") {
      setKey("hex");
    } else {
      setKey("id");
    }
  };

  return (
    <>
      <div className={props.className} onClick={toggleValue}>
        <label
          htmlFor="twGetter"
          className="form-label inline-block  text-secondary text-xs font-bold"
        >
          {category}
        </label>
        <div
          className={`h-10 p-3 border border-blackish text-sm font-bold bg-${colorObj.id} ${colorObj.textColor}`}
        >
          {`${colorObj[key]}`}
        </div>
      </div>
      {props.showVariants ? <ColorVariants base={colorObj.base} /> : null}
    </>
  );
};

export default ThemeColor;
