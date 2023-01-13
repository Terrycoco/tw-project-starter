import { twMerge } from "tailwind-merge";

const Textarea = (props) => {
  return (
    <div class="flex justify-center">
      <div class="w-full">
        <label
          htmlFor="exampleFormControlTextarea1"
          className={twMerge(
            "form-label inline-block text-xs text-gray-700",
            props.labelStyles
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
            props.valueStyles
          )}
          id="exampleFormControlTextarea1"
          rows={props.rows || 3}
          placeholder="Your message"
          defaultValue={props.children}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Textarea;
