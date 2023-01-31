import { useState, useEffect } from "react";
import ColorVariants from "../devComponents/ColorVariants";

//don't need theme because colorObj is passed in from stylesheet
//TODO make use of useColorChanger
const ColorTester = ({ label, ...props }) => {
  const [colorObj, setColorObj] = useState(props.colorObj);
  const [key, setKey] = useState("name");

  useEffect(() => {
    setColorObj(props.colorObj);
  }, [props.colorObj]);

  return (
    <>
      <div className={props.className}>
        <label
          htmlFor="twGetter"
          className="form-label inline-block  text-secondary text-xs font-bold"
        >
          {label}
        </label>
        <div
          className={`h-10 p-3 border border-blackish text-sm font-bold bg-${colorObj.name} ${colorObj.textColor}`}
        >
          {`${colorObj[key]}`}
        </div>
      </div>
      {props.showVariants ? (
        <ColorVariants key={`${colorObj.colorname}${colorObj.id}`} />
      ) : null}
    </>
  );
};

export default ColorTester;
