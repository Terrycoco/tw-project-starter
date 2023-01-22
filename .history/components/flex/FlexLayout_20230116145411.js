import { twMerge } from "tailwind-merge";
const FlexLayout = (props) => {
  return <div className="flex tablet:flex-row">{props.children}</div>;
};

export default FlexLayout;
