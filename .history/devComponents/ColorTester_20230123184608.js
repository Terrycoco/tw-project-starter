import { useState, useEffect } from "react";

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

  const handleClick = (e) => {
    //send to parent
    this.props.onClick(colorObj);
  };

  return (
    <div className={props.className} onClick={handleClick}>
      <label
        htmlFor="twGetter"
        className="form-label inline-block  text-secondary text-xs font-bold"
      >
        {label}
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
