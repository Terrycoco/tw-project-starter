import {
  getCustomColorObjectsArray,
  makeCustomShades,
} from "../devUtils/twColorUtils";
import { useState, useEffect } from "react";
import { useTheme } from "hooks"; //theme was updated in stylesheet

const ColorVariants = (props) => {
  const { theme, setTheme } = useTheme();
  const [hex, setHex] = useState(theme.colors[props.base]);
  const [label, setLabel] = useState("variant");

  useEffect(() => {
    let newhex = theme.colors[props.base];
    //check to see if hex has changed for this theme color
    if (newhex !== hex) {
      setHex(newhex);
      // console.log("newhex", newhex, "oldhex:", hex);
      let newtheme = Object.assign({}, theme);
      let variantsObj = makeCustomShades(newhex, props.base);
      // console.log("returned vars:", variantsObj);

      // setColorObjs(getCustomColorObjectsArray(newhex, props.colorname));

      newtheme.variants[props.base] = variantsObj;
      // console.log("variants changed?", newtheme);
      setTheme(newtheme);
    }
  }, [hex, props.base, theme, setTheme]);

  const loopThroughVariants = () => {
    let result = [];
    let keys = Object.keys(theme.variants[props.base]);
    for (const idx in keys) {
      let key = keys[idx];
      if (key === "DEFAULT") {
        continue;
      }
      let obj = theme.variants[props.base][key];
      // console.log("obj:", obj);

      let style = {
        backgroundColor: obj.hex,
      };

      result.push(
        <div
          key={`${props.base}${key}`}
          className={`flex flex-col justify-center flex-1 h-6 text-xs text-center  ${obj.textColor}`}
          style={style}
        >
          {obj[label]}
        </div>
      );
    }
    return result;
  };

  return <div className="flex flex-row no-wrap">{loopThroughVariants()}</div>;
};

export default ColorVariants;
