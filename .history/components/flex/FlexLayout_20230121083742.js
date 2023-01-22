import { twMerge } from "tailwind-merge";
const FlexLayout = (props) => {
  return (
    <div
      className={twMerge("flex flex-col md:flex-row w-full", props.className)}
      key={props.key}
    >
      {props.children}
    </div>
  );
};

export default FlexLayout;
