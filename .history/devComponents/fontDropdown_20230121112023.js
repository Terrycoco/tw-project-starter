import { getFontsByCategory } from "../devUtils/fonts";
import { twMerge } from "tailwind-merge";

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
  style = props.className ? twMerge(style, props.className) : style;

  const getList = () => {
    const list = getFontsByCategory(props.cat);
    return list.map((val) => {
      return <option key={val}>{val}</option>;
    });
  };

  return (
    <select className={style}>
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
};

export default FontDropdown;