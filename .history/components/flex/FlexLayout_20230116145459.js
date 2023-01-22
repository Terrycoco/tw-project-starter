import { twMerge } from "tailwind-merge";
const FlexLayout = (props) => {
  return (
    <div className={twMerge("flex tablet:flex-row", props.className)}>
      {props.children}
    </div>
  );
};

export default FlexLayout;
