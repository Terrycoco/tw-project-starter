import React, { useState } from "react";
import { isValidHexCode } from "../devUtils/twColorUtils";

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
  const [bg, setBg] = useState({ backgroundColor: "#fff" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValidHexCode(hex)) {
      alert(`Submitting Name ${hex}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className={labelStyle}>
        Hex Code:
        <input
          type="text"
          value={hex}
          className={inputStyle}
          onChange={(e) => setHex(e.target.value)}
          style={bg}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NameForm;
