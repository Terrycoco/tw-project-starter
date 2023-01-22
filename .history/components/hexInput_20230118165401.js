import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { getTextColorHex, getTWColorObj } from "../utils";

const HexInput = (props) => {
  //value is hex string
  const [value, setValue] = useState(props.defaultValue);
  const [colorObj, setColorObj] = useState(getTWColorObj(props.defaultValue));

  const getHexStyle = () => {
    const textColor = getTextColorHex(colorObj.hex);
    return {
      backgroundColor: `${colorObj.hex}`,
      color: textColor,
    };
  };

  const handleFocus = (event) => event.target.select();

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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //only send result after hit enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let co = getTWColorObj(e.target.value);
      setColorObj(co);
      setValue(co.hex);
      props.onChange(value); //send to parent
    }
  };

  return (
    <div id={`hex${props.key}`} className="w-full mb-3">
      {props.label ? (
        <label htmlFor="exampleFormControlInput4" className={labelStyle}>
          {`${props.label}`}
        </label>
      ) : null}
      <input
        type="text"
        className={inputStyle}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={getHexStyle()}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default HexInput;
