import { getFontsByCategory } from "../devUtils/fonts";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

let style = `
    form-select 
    form-select-sm
    appearance-none
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     aria-label=".form-select-sm
`;

const FontDropdown = (props) => {
  const [value, setValue] = useState(props.defaultValue);
  const [list, setList] = useState([]);

  useEffect(() => {
    getFontsByCategory(props.cat);
  }, [props.cat]);

  useEffect(() => {
    setValue(props.defaultValue);
  }, [props.defaultValue]);

  style = props.className ? twMerge(style, props.className) : style;

  const getList = () => {
    return list.map((val) => {
      if (val === value) {
        return (
          <option key={val} selected>
            {val}
          </option>
        );
      } else {
        return <option key={val}>{val}</option>;
      }
    });
  };

  const handleSelect = (e) => {
    setValue(e.target.value);
    //send to parent
    props.onChange(e.target.value, props.cat, "fonts");
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <label
          htmlFor="exampleFormControlTextarea1"
          className={twMerge(
            "form-label inline-block text-xs text-gray-700",
            props.labelStyle
          )}
        >
          {props.label}
        </label>
        <select className={style} onChange={handleSelect}>
          {getList()}
        </select>
      </div>
    </div>
  );
};

export default FontDropdown;
