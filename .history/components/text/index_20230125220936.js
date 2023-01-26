import { theme } from "../../styles/themes";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

export const Heading = (props) => {
  const { theme } = useContext(ThemeContext);
  console.log("heading receives theme: ", theme.text.heading);
  let style = "text-heading ";
  console.log("heading newstyle: ", theme.text.heading);
  style = twMerge(style, theme.text.heading);

  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};

export const Subhead = (props) => {
  const { theme } = useContext(ThemeContext);
  let style = theme.text.subhead;
  style = twMerge(style, theme.text.subhead);
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};

export const H3 = (props) => {
  const { theme } = useContext(ThemeContext);
  let style = theme.text.h3;
  style = props.className ? twMerge(style, props.className) : style;
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};

export const Kicker = (props) => {
  const { theme } = useContext(ThemeContext);
  let style = "text-kicker";
  style = twMerge(style, theme.text.kicker);
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};
