import React, { useState } from "react";
import { isValidHexCode } from "../devUtils/twColorUtils";
import { getTextColorFromHex } from "../utils";
import { Draggable } from "../components/dnd";

let inputStyle = `
    form-control
    block
    w-full
    px-2
    py-1
    bg-white bg-clip-padding
    border border-solid 
    rounded
    transition
    ease-in-out
    m-0
   focus:bg-white focus:border-blue-600 focus:outline-none
   p-3 h-10 border-blackish text-sm font-bold
`;

let labelStyle = `form-label inline-block  text-gray-700 text-xs`;

const HexInput = (props) => {
  const [hex, setHex] = useState("");
  const [bg, setBg] = useState({ backgroundColor: "#ffffff" });
  const [textColor, setTextColor] = useState("text-blackish");
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    if (!e.target.value.startsWith("#")) {
      setHex("#" + e.target.value);
    } else {
      setHex(e.target.value);
    }
  };

  const handleFocus = (e) => {
    if (isError) {
      e.target.select();
      setIsError(false);
      setBg({ backgroundColor: "#ffffff" });
      setTextColor("text-blackish");
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsValid(isValidHexCode(hex));

    if (isValid) {
      setIsValid(true);
      setBg({ backgroundColor: `${hex}` });
      setTextColor(getTextColorFromHex(hex));
    } else {
      setIsValid(false);
      setTextColor("text-red-500");
      setIsError(true);
    }
  };

  const renderForm = () => {
    return (
      <div id={`hex${props.id}`} className="w-full mb-3">
        <form onSubmit={handleSubmit}>
          <label className={labelStyle}>
            Hex Code:
            <input
              type="text"
              value={hex}
              className={`${inputStyle} ${textColor}`}
              onChange={handleChange}
              style={bg}
              onFocus={handleFocus}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };

  return isValid === true ? (
    <Draggable id="hexinput">{renderForm()}</Draggable>
  ) : (
    renderForm()
  );
};

export default HexInput;
