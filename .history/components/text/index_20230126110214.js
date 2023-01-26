import { theme } from "../../styles/themes";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../context/ThemeContext";

export const Heading = (props) => {
  const { theme } = useTheme();
  console.log("heading receives theme: ", theme.text.heading);
  let style = "";
  style = twMerge(style, theme.text.heading);
  console.log("heading newstyle: ", style);
  return <div className={style}>{props.children}</div>;
};

export const Subhead = (props) => {
  const { theme } = useTheme();
  let style = "";
  style = twMerge(style, theme.text.subhead);
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};

export const H3 = (props) => {
  const { theme } = useTheme();
  let style = theme.text.h3;
  style = props.className ? twMerge(style, props.className) : style;
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};

export const Kicker = (props) => {
  const { theme } = useTheme();
  let style = "";
  style = twMerge(style, theme.text.kicker);
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};
