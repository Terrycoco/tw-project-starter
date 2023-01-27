import { theme } from "../../styles/themes";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext";
import useColorChanger from "../../hooks/useColorChanger";

export const Heading = (props) => {
  const { theme } = useTheme();
  let cl = theme.text.heading;
  cl = props.className ? twMerge(cl, props.className) : cl;
  console.log("heading class is:", cl);
  let style = useColorChanger(cl);
  console.log("heading style is:", style);

  return (
    <div className={cl} style={style}>
      {props.children}
    </div>
  );
};

export const Subhead = (props) => {
  const { theme } = useTheme();
  let style = theme.text.subhead;
  style = props.className ? twMerge(style, props.className) : style;
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
  let style = theme.text.kicker;
  style = props.className ? twMerge(style, props.className) : style;
  return (
    <div className={style} {...props}>
      {props.children}
    </div>
  );
};
