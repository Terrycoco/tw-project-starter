import { twMerge } from "tailwind-merge";
import { useState } from "react";

const HexInput = (props) => {
  const [value, setValue] = useState(props.defaultValue);

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
    <div className="mb-3 xl:w-96">
      <label
        htmlFor="exampleFormControlInput4"
        className="form-label inline-block  text-gray-700 text-xs"
      >
        {props.label}
      </label>
      <input
        type="text"
        className={inputStyle}
        id={props.key}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ backgroundColor: "#FF0000" }}
      />
      {value}
    </div>
  );
};

export default HexInput;
