import { useState, useEffect } from "react";
import ColorVariants from "../devComponents/ColorVariants";

const ColorTester = (props) => {
  const [colorObj, setColorObj] = useState(props.colorObj);
  const [key, setKey] = useState("name");
  const [label, setLabel] = useState(props.label);

  useEffect(() => {
    setColorObj(props.colorObj);
  }, [props.colorObj]);

  const toggleValue = () => {
    if (key === "name") {
      setKey("hex");
    } else {
      setKey("name");
    }
  };

  return (
    <>
      <div className={props.className} onClick={toggleValue}>
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
      {props.showVariants ? <ColorVariants colorname={label} /> : null}
    </>
  );
};

export default ColorTester;
