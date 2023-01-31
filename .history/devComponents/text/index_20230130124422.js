import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext";
import useColorChanger from "../../hooks/useColorChanger";

export const Heading = (props) => {
  const { theme } = useTheme();
  let cl = theme.text.heading;
  cl = props.className ? twMerge(cl, props.className) : cl;
  let style = useColorChanger(cl, theme);
  return (
    <div className={cl} style={style}>
      {props.children}
    </div>
  );
};

export const Subhead = (props) => {
  const { theme } = useTheme();
  let cl = theme.text.subhead;
  cl = props.className ? twMerge(cl, props.className) : cl;
  let style = useColorChanger(cl, theme);
  return (
    <div className={cl} style={style}>
      {props.children}
    </div>
  );
};

export const H3 = (props) => {
  const { theme } = useTheme();
  let cl = theme.text.h3;
  cl = props.className ? twMerge(cl, props.className) : cl;
  let style = useColorChanger(cl);
  return (
    <div className={cl} style={style}>
      {props.children}
    </div>
  );
};

export const Kicker = (props) => {
  const { theme } = useTheme();
  let cl = theme.text.kicker;
  cl = props.className ? twMerge(cl, props.className) : cl;
  let style = useColorChanger(cl);
  return (
    <div className={cl} style={style}>
      {props.children}
    </div>
  );
};

export const Subtext = (props) => {
  const { theme } = useTheme();
  let cl = theme.text.subtext;
  cl = props.className ? twMerge(cl, props.className) : cl;
  let style = useColorChanger(cl);
  return (
    <div className={cl} style={style}>
      {props.children}
    </div>
  );
};
