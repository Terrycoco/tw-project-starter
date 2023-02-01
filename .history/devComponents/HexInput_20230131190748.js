import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { twHexList, isValidHexCode } from "../devUtils/twColorUtils";
import { getTextColorFromHex } from "../utils";

const HexInput = (props) => {
  //input can be  colorObj or hex string or tw class
  const [input, setInput] = useState("");
  // const [colorObj, setColorObj] = useState({});
  const [textColor, setTextColor] = useState("text-black");
  const [bg, setBg] = useState({ backgroundColor: "#fff" });

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
  inputStyle = props.style ? twMerge(inputStyle, props.style) : inputStyle;
  let labelStyle = `form-label inline-block  text-gray-700 text-xs`;
  labelStyle = props.labelStyle
    ? twMerge(labelStyle, props.labelStyle)
    : labelStyle;

  const sendValues = (e) => {
    if (isValidHexCode(input)) {
      setBg({ backgroundColor: `${input}` });
      console.log("input", input);
    }
  };

  // const handleFocus = (event) => event.target.select();
  const handleBlur = (e) => {
    sendValues(e);
  };

  function handleChange(e) {
    e.preventDefault();

    setInput(e.target.value);
  }

  //only send result after hit enter or blue
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendValues(e);
    }
  };

  return (
    <div id={`hex${props.id}`} className="w-full mb-3">
      {props.label ? (
        <label htmlFor="hexInput" className={labelStyle}>
          {`${props.label} `}
        </label>
      ) : null}
      <input
        name="hexInput"
        type="text"
        autoComplete="off"
        className={`${inputStyle} ${textColor}`}
        placeholder={props.placeholder}
        onKeyDown={handleKeyDown}
        style={bg}
        onBlur={handleBlur}
        id="hexinput"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default HexInput;
