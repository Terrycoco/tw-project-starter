import { useState, useEffect } from "react";
import ColorVariants from "./ColorVariants";
import { getColorObjByHex, updateVariants } from "../devUtils/twColorUtils";
import { useTheme } from "../hooks";

//listens to theme for top level
//only acts when receives variant as top
//TODO make use of useColorChanger
const ThemeColor = ({ category, ...props }) => {
  const [colorObj, setColorObj] = useState({});
  const [key, setKey] = useState("id");
  const { theme, setTheme } = useTheme();
  const [hex, setHex] = useState("");

  //when top level colors changes in theme, update colorobj
  useEffect(() => {
    if (theme.colors[category] !== hex) {
      let newhex = theme.colors[category];
      setHex(newhex);
      let co = getColorObjByHex(newhex, category);
      //console.log("ThemeColor receives top color:", co);
      setColorObj(co); //top level
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
    //only time actually set theme
    //receive obj from variants below
    //reset top level and recalc variants
    console.log("ThemeColor receives new obj", obj);
    //let newobj = new ColorObj(colorObj.base, obj.variant, obj.hex);
    let co = getColorObjByHex(obj.hex, category);
    setColorObj(co); //set top level

    let newtheme = Object.assign({}, theme);
    newtheme.colors[category] = obj.hex;
    setTheme(newtheme);
    //updateVariants(co.base, category, theme);
  };

  return (
    <>
      <div className={props.className} onClick={toggleValue}>
        <div className="flex flex-row justify-between align-bottom">
          <label
            htmlFor="twGetter"
            className="form-label inline-block  text-secondary text-xs font-bold"
          >
            {category}
          </label>
          <a className="form-label inline-block  text-secondary text-xs font-normal">
            calculate
          </a>
        </div>
        <div
          className={`h-10 p-3 border border-blackish text-sm font-bold  ${colorObj.textColor}`}
          style={{ backgroundColor: `${colorObj.hex}` }}
        >
          {`${colorObj[key]}`}
        </div>
      </div>
      {props.showVariants ? (
        <ColorVariants
          key={colorObj.hex}
          base={colorObj.base}
          category={category}
        />
      ) : null}
    </>
  );
};

export default ThemeColor;
