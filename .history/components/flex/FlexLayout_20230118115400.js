import { twMerge } from "tailwind-merge";
const FlexLayout = (props) => {
  return (
    <div className={twMerge("flex md:flex-row w-full", props.className)}>
      {props.children}
    </div>
  );
};

export default FlexLayout;
