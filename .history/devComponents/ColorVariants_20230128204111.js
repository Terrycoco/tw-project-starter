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

  useEffect(() => {
    console.log(makeCustomShades(props.hex, props.colorname));
    setColorObjs(getCustomColorObjectsArray(props.hex, props.colorname));
  }, [props.hex, props.colorname]);

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
