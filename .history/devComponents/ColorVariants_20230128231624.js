import {
  getCustomColorObjectsArray,
  makeCustomShades,
} from "../devUtils/twColorUtils";
import { useState, useEffect } from "react";
import { useTheme } from "hooks"; //theme was updated in stylesheet

const ColorVariants = (props) => {
  const { theme, setTheme } = useTheme();
  const [hex, setHex] = useState(theme[props.colorname]);
  const [colorObjs, setColorObjs] = useState(
    getCustomColorObjectsArray(props.hex, props.colorname)
  );

  useEffect(() => {
    let newhex = theme.colors[props.colorname];
    //check to see if hex has changed for this theme color
    if (newhex !== hex) {
      setHex(newhex);
      // console.log("newhex", newhex, "oldhex:", hex);
      let newtheme = Object.assign({}, theme);
      let variantsObj = makeCustomShades(newhex, props.colorname);
      // console.log("returned vars:", variantsObj);

      // setColorObjs(getCustomColorObjectsArray(newhex, props.colorname));

      newtheme.variants[props.colorname] = variantsObj;
      // console.log("variants changed?", newtheme);
      setTheme(newtheme);
    }
  }, [hex, props.colorname, theme, setTheme]);

  const loopThroughVariants = () => {
    let result = [];
    let keys = Object.keys(theme.variants[props.colorname]);
    for (const key in keys) {
      let obj = theme.variants[colorname][key];

      let style = {
        backgroundColor: obj.hex,
      };
      result.push(
        <div
          key={`${props.colorname}${key}`}
          style={style}
          className={`flex flex-col justify-center flex-1 h-6 text-xs text-center  ${obj.textColor}`}
        >
          {obj["value"]}
        </div>
      );
    }
    return result;
  };

  return <div className="flex flex-row no-wrap">{loopThroughVariants()}</div>;
};

export default ColorVariants;
