import { theme } from "../../styles/themes";
import { twMerge } from "tailwind-merge";

export const H1 = (props) => {
  let style = theme.text.h1;
  //todo merge
  return <div className={style}>{props.children}</div>;
};

export const H2 = (props) => {
  let style = theme.text.h1;
  //todo merge
  return <div className={style}>{props.children}</div>;
};
