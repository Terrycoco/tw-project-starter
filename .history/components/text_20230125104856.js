import { theme } from "../../styles/themes";
import { twMerge } from "tailwind-merge";

export const H1 = (props) => {
  let style = theme.text.h1;
  style = props.className ? twMerge(style, props.className) : style;
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};

export const H2 = (props) => {
  let style = theme.text.h2;
  style = props.className ? twMerge(style, props.className) : style;
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};
