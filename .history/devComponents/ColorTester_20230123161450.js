import { useState, useEffect } from "react";

const ColorTester = (props) => {
  const [colorObj, setColorObj] = useState(props.colorObj);
  const [key, setKey] = useState("name");
  const [label, setLabel] = "Tailwind Color";

  useEffect(() => {
    setColorObj(props.colorObj);
  }, [props.colorObj]);

  const toggleValue = () => {
    if (key === "name") {
      setKey("hex");
      setLabel("Hex Code");
    } else {
      setKey("name");
      if (colorObj.name[0] === "#") {
        setLabel("No Matching Tailwind Color");
      } else {
        setLabel("Tailwind Color");
      }
    }
  };

  return (
    <div className={props.className}>
      <label
        htmlFor="twGetter"
        className="form-label inline-block  text-secondary text-xs font-bold"
      >
        ${label}
      </label>
      <div
        className={`h-10 p-3 border border-blackish text-sm font-bold bg-${colorObj.name} ${colorObj.textColor}`}
        onClick={toggleValue}
      >
        {`${colorObj[key]}`}
      </div>
    </div>
  );
};

export default ColorTester;
