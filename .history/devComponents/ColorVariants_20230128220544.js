import {
  getCustomColorObjectsArray,
  makeCustomShades,
} from "../devUtils/twColorUtils";
import { useState, useEffect } from "react";
import { useTheme } from "hooks";

const ColorVariants = (props) => {
  const { theme, setTheme } = useTheme();
  const [colorObjs, setColorObjs] = useState(
    getCustomColorObjectsArray(props.hex, props.colorname)
  );

  //if hex changes, that changes everything
  useEffect(() => {
    if (props.hex !== theme.colors[props.colorname]) {
      let variantsObj = makeCustomShades(props.hex, props.colorname);

      setColorObjs(getCustomColorObjectsArray(props.hex, props.colorname));
      let newtheme = Object.assign({}, theme);
      newtheme.variants[colorobj] = variantsObj;
      setTheme(newtheme);
    }
  }, [props.hex, props.colorname, theme, setTheme]);

  // const updateVariants = useCallback((props.hex, props.colorname) => {
  //   let variantObj = makeCustomShades(props.hex, props.colorname);
  //   let newtheme = Object.assign({}, theme);
  //   newtheme.variants[colorname] = variantObj;
  //   setTheme(newtheme);
  // });
  // }, [props.hex]);

  const loopThroughVariants = () => {
    let result = [];
    for (const idx in colorObjs) {
      let obj = colorObjs[idx];

      let style = {
        backgroundColor: obj.hex,
      };
      result.push(
        <div
          key={`${props.colorname}${idx}`}
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
