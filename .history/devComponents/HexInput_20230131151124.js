import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { twHexList } from "../devUtils/twColorUtils";
import { getTextColorFromHex } from "../utils";

const HexInput = (props) => {
  //input can be  colorObj or hex string or tw class
  const [value, setValue] = useState(props.value);
  const [colorObj, setColorObj] = useState({});
  const [textColor, setTextColor] = useState("text-black");

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

  const getBoxStyle = () => {
    let bg = colorObj.hex ? colorObj.hex : "#fff";

    return {
      backgroundColor: `${bg}`,
    };
  };

  const sendValues = (e) => {
    let co = colorObj;
    props.onChange(co); //send up to stylesheet
  };

  const handleFocus = (event) => event.target.select();
  const handleBlur = (e) => {
    sendValues(e);
  };

  const handleChange = (e) => {
    if (e.target.value[0] !== "#") {
      setValue("#" + e.target.value);
    } else {
      setValue("#" + e.target.value);
    }
  };

  //only send result after hit enter or blue
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendValues(e);
    }
  };

  return (
    <div id={`hex${props.id}`} className="w-full mb-3">
      {props.label ? (
        <label htmlFor="exampleFormControlInput4" className={labelStyle}>
          {`${props.label} `}
        </label>
      ) : null}
      <input
        type="text"
        autoComplete="nope"
        className={`${inputStyle} ${textColor}`}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={getBoxStyle()}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default HexInput;
