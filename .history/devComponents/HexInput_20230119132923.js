import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { twHexList } from "./twColorUtils";
import { getTextColorHex } from "../utils";

const HexInput = (props) => {
  //input can be  colorObj or hex string or tw class
  const [value, setValue] = useState(props.defaultValue);
  const [colorObj, setColorObj] = useState(props.defaultValue);
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    updateColorObj(props.defaultValue);
  }, [props.defaultValue]);

  const updateColorObj = (value) => {
    if (value[0] === "#") {
      //see if it is in tw list

      let obj = twHexList[value.toLowerCase()];
      if (typeof obj == "object") {
        console.log("colorObj found:", obj);
        setColorObj(obj);
        let tc = getTextColorHex(obj.hex);
        console.log("tc returned:", tc);
        setTextColor(tc);
      } else {
        setColorObj({
          name: value,
          color: value,
          value: value,
          hex: value,
        });
        setTextColor(getTextColorHex(value));
      }
    } else if (typeof value === "object") {
      setColorObj(value);
      setTextColor(getTextColorHex(value.hex));
    }
  };

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
    let bg = colorObj.hex ? colorObj.hex : "#fff";
    let fg = textColor ? textColor : "#000";
    return {
      backgroundColor: `${bg}`,
      color: `${fg}`,
    };
  };

  const sendValues = (e) => {
    updateColorObj(value);
    let co = colorObj;
    console.log("is thi updated:", textColor);
    props.onChange(co); //send up
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
    e.preventDefault();
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
        autocomplete="nope"
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
