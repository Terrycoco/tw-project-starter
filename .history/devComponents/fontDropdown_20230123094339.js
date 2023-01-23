import { getFontsByCategory, fonts, getFont } from "../devUtils/fonts";
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
  const [value, setValue] = useState(props.value);
  const [list, setList] = useState(getFontsByCategory());
  const [cat, setCat] = useState();

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  style = props.className ? twMerge(style, props.className) : style;

  const getList = () => {
    let result = [];
    let cats = Object.keys(list); //list of font categories
    cats.forEach((group) => {
      let options = [];
      for (const i in list[group]) {
        let val = list[group][i];
        if (val === value) {
          options.push(
            <option key={val} selected>
              {val}
            </option>
          );
        } else {
          options.push(<option key={val}>{val}</option>);
        }
      }
      result.push(
        <optgroup className="text-xs" label={group.toUpperCase()}>
          {options}
        </optgroup>
      );
    });
    return result;
  };

  const handleSelect = (e) => {
    // console.log("eval:", e.target.value);
    setValue(e.target.value);
    //send to parent newval, key, category
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
