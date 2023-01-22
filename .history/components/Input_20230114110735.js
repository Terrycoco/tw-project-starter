import { twMerge } from "tailwind-merge";

const Input = (props) => {
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

  inputStyle = props.inputStyle ? twMerge(style, props.inputStyle) : style;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //only send result after hit enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.onChange(value, props.name);
    }
  };

  return (
    <div class="mb-3 xl:w-96">
      <label
        htmlFor="exampleFormControlInput4"
        className="form-label inline-block  text-gray-700 text-xs"
      >
        {props.label}
      </label>
      <input
        type="text"
        className={inputStyle}
        id="exampleFormControlInput4"
        placeholder="Form control sm"
        defaultValue={props.defaultValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
