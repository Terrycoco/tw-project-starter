import { getFontsByCategory, fonts } from "../devUtils/fonts";
import { twMerge } from "tailwind-merge";
import { useEffect, useState, useContext } from "react";
import { useTheme } from "../context/ThemeContext";

let style = `
    form-select 
    form-select-sm
    text-base
    appearance-none
    block
    w-full
    px-2
    py-1
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
  const [list, setList] = useState(getFontsByCategory());
  const [cat, setCat] = useState();
  const { theme } = useTheme();
  // useEffect(() => {
  //   setValue(props.value);
  // }, [props.value]);

  style = props.className ? twMerge(style, props.className) : style;

  const getList = () => {
    let result = [];
    let cats = Object.keys(list); //list of font categories
    cats.forEach((group) => {
      let options = [];
      for (const i in list[group]) {
        let val = list[group][i];
        options.push(<option key={val}>{val}</option>);
      }
      result.push(
        <optgroup key={group} className="text-base" label={group.toUpperCase()}>
          {options}
        </optgroup>
      );
    });
    return result;
  };

  const handleSelect = (e) => {
    setValue(e.target.value);
    //send to parent newval, key, category
    props.onChange(e.target.value, props.cat, "fonts");
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <label
          htmlFor="exampleFormControlTextarea1"
          className={theme.text.label}
        >
          {props.label}
        </label>
        <select className={style} onChange={handleSelect} value={value}>
          {getList()}
        </select>
      </div>
    </div>
  );
};

export default FontDropdown;
