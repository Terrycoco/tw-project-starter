import { getCustomColorObjects } from "../devUtils/twColorUtils";
import { useState, useEffect } from "react";

const ColorVariants = (props) => {
  const [colorObjs, setColorObjs] = useState([]);

  useEffect(() => {
    setColorObjs(getCustomColorObjects(props.colorname));
  }, [props.colorname]);

  const loopThroughVariants = () => {
    let result = [];
    for (const idx in colorObjs) {
      let obj = colorObjs[idx];
      console.log(obj);
      let style = {
        backgroundColor: obj.hex,
      };
      result.push(
        <div
          style={style}
          className={`flex flex-col justify-center flex-1 h-6 text-xs text-center border ${obj.textColor}`}
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
