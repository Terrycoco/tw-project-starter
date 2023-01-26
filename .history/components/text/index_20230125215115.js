import { theme } from "../../styles/themes";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

export const Heading = (props) => {
  const { theme } = useContext(ThemeContext);
  let style = "text-heading " + theme.text.h1;
  style = props.className ? twMerge(style, props.className) : style;

  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};

export const Subhead = (props) => {
  const { theme } = useContext(ThemeContext);
  let style = theme.text.h2;
  style = props.className ? twMerge(style, props.className) : style;
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
  let style = "text-kicker " + theme.text.kicker;
  style = props.className ? twMerge(style, props.className) : style;
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};
