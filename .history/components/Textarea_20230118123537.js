import { twMerge } from "tailwind-merge";
import { useState } from "react";

const Textarea = (props) => {
  const [value, setValue] = useState(props.defaultValue);

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
        <textarea
          className={twMerge(
            `
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`,
            props.style
          )}
          id={props.name}
          rows={props.rows || 3}
          placeholder={props.placeholder || null}
          defaultValue={props.children}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Textarea;
