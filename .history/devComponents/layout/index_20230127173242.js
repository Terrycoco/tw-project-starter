import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext";
import useColorChanger from "../../hooks/useColorChanger";

export const Page = (props) => {
  const { theme } = useTheme();
  let cl = theme.layout.page;
  cl = props.className ? twMerge(cl, props.className) : cl;
  let style = useColorChanger(cl);
  return (
    <div className={cl} style={style}>
      {props.children}
    </div>
  );
};
