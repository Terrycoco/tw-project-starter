import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { getTextColor } from "../utils";

const HexInput = (props) => {
  const [value, setValue] = useState(props.defaultValue);

  const getHexStyle = () => {
    const textColor = getTextColor(value);
    return {
      backgroundColor: `${value}`,
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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //only send result after hit enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.onChange(value);
    }
  };

  return (
    <input
      type="text"
      className={inputStyle}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      style={getHexStyle()}
      onFocus={handleFocus}
    />
  );
};

export default HexInput;
