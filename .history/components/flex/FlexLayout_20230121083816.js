import { twMerge } from "tailwind-merge";
const FlexLayout = (props) => {
  return (
    <div
      className={twMerge("flex flex-col md:flex-row w-full", props.className)}
    >
      {props.children}
    </div>
  );
};

export default FlexLayout;
