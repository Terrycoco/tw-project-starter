import React, { useState } from "react";
import { isValidHexCode } from "../devUtils/twColorUtils";
import { getTextColorFromHex } from "../utils";

let inputStyle = `
    form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
   focus:bg-white focus:border-blue-600 focus:outline-none
`;

let labelStyle = `form-label inline-block  text-gray-700 text-xs`;

const NameForm = (props) => {
  const [hex, setHex] = useState("");
  const [bg, setBg] = useState({ backgroundColor: "#ffffff" });
  const [textColor, setTextColor] = useState("text-blackish");

  const handleChange = (e) => {
    if (!e.target.value.startsWith("#")) {
      setHex("#" + e.target.value);
    } else {
      setHex(e.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let valid = isValidHexCode(hex);

    if (valid) {
      setBg({ backgroundColor: `${hex}` });
      setTextColor(getTextColorFromHex(hex));
      alert(`${valid} Submitting Name ${hex}`);
    } else {
      alert(`${valid} not Submitting Name ${hex}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className={labelStyle}>
        Hex Code:
        <input
          type="text"
          value={hex}
          className={`${inputStyle} ${textColor}`}
          onChange={handleChange}
          style={bg}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NameForm;
