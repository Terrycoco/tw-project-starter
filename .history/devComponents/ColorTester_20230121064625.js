import { useState, useEffect } from "react";

const ColorTester = (props) => {
  const [colorObj, setColorObj] = useState(props.colorObj);
  const [key, setKey] = useState("name");

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
    <div className={props.className}>
      <label
        htmlFor="twGetter"
        className="form-label inline-block  text-gray-700 text-xs font-bold"
      >
        Tailwind Color
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
