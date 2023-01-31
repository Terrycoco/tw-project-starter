import { useState, useEffect } from "react";
import ColorVariants from "./ColorVariants";
import { ColorObj } from "../devUtils/twColorUtils";
import { useTheme } from "../hooks";

//don't need theme because colorObj is passed in from stylesheet
//TODO make use of useColorChanger
const ThemeColor = ({ category, ...props }) => {
  const [colorObj, setColorObj] = useState(props.colorObj);
  const [key, setKey] = useState("id");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setColorObj(props.colorObj);
    // console.log("colorTheme received colorobj: ", props.colorObj);
  }, [props.colorObj]);

  const toggleValue = () => {
    if (key === "id") {
      setKey("hex");
    } else {
      setKey("id");
    }
  };

  const selectVariant = (obj) => {
    //make top obj the variant instead
    //but keep the base and category of this one
    setColorObj(new ColorObj(props.base, props.category, obj.hex));
    let newtheme = Object.assign({}, theme);
    newtheme.colors[category] = obj.hex;
    setTheme(newtheme);
  };

  return (
    <>
      <div className={props.className} onClick={toggleValue}>
        <label
          htmlFor="twGetter"
          className="form-label inline-block  text-secondary text-xs font-bold"
        >
          {category}
        </label>
        <div
          className={`h-10 p-3 border border-blackish text-sm font-bold bg-${colorObj.id} ${colorObj.textColor}`}
        >
          {`${colorObj[key]}`}
        </div>
      </div>
      {props.showVariants ? (
        <ColorVariants
          key={colorObj.id}
          base={colorObj.base}
          category={category}
          onSelect={selectVariant}
        />
      ) : null}
    </>
  );
};

export default ThemeColor;
