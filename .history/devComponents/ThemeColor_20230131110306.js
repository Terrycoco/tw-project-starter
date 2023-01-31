import { useState, useEffect } from "react";
import ColorVariants from "./ColorVariants";
import { ColorObj, getColorObjByHex } from "../devUtils/twColorUtils";
import { useTheme } from "../hooks";

//don't need theme because colorObj is passed in from stylesheet
//TODO make use of useColorChanger
const ThemeColor = ({ category, ...props }) => {
  const [colorObj, setColorObj] = useState(props.colorObj);
  const [key, setKey] = useState("id");
  const { theme, setTheme } = useTheme();
  const [hex, setHex] = useState(props.colorObj.hex);

  useEffect(() => {
    setColorObj(props.colorObj);
    setHex(props.colorObj.hex);
  }, [props.colorObj.hex, props.colorObj]);

  //when top level colors changes, update color obj
  useEffect(() => {
    if (theme.colors[category] !== hex) {
      let newhex = theme.colors[category];
      setHex(newhex);
      setColorObj(getColorObjByHex(newhex));
    }
  }, [category, theme, hex]);

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

    console.log("incoming obj", obj);
    console.log("existing obj", colorObj);
    let newobj = new ColorObj(colorObj.base, obj.variant, obj.hex);
    console.log("newobj:", newobj);
    setColorObj(newobj);
    console.log(theme);
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
