import { useState, useEffect } from "react";

const ColorTester = (props) => {
  const [colorObj, setColorObj] = useState(props.colorObj);

  return (
    <div className="mb-3">
      <label
        htmlFor="twGetter"
        className="form-label inline-block  text-gray-700 text-xs"
      >
        Tailwind Color
      </label>
      <div
        className={`h-10 p-3 border border-blackish text-sm font-bold bg-${colorObj.name} ${props.textColor}`}
      >
        {`${colorObj.hex}`}
      </div>
    </div>
  );
};

export default ColorTester;
