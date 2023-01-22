import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { getTextColorHex } from "../utils";

const HexInput = (props) => {
  //input can be  colorObj or hex string or tw class
  const [value, setValue] = useState(props.defaultValue);
  const [colorObj, setColorObj] = useState(props.defaultValue);

  let inputStyle = `
    form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
`;
  inputStyle = props.style ? twMerge(inputStyle, props.style) : inputStyle;
  let labelStyle = `form-label inline-block  text-gray-700 text-xs`;
  labelStyle = props.labelStyle
    ? twMerge(labelStyle, props.labelStyle)
    : labelStyle;

  const getBoxStyle = () => {
    //const textColor = getTextColorHex(colorObj.hex);
    const textColor = "#000";
    return {
      backgroundColor: `${colorObj.hex}`,
      color: textColor,
    };
  };

  const sendValues = (e) => {
    //let co = getTWColorObj(e.target.value);
    //console.log("colorobj: ", co);
    //setColorObj(co);
    //setValue(co.hex);
    // props.onChange(value); //send
  };

  const handleFocus = (event) => event.target.select();
  const handleBlur = (e) => {
    sendValues(e);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
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
        className={inputStyle}
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
