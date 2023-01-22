import { twMerge } from "tailwind-merge";
const FlexColumn = (props) => {
  return (
    <div className={twMerge("flex flex-col", props.className)} key={props.key}>
      {props.children}
    </div>
  );
};

export default FlexColumn;
