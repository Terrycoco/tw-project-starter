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
      console.log(obj.textColor);
      let style = {
        backgroundColor: obj.hex,
      };
      result.push(
        <div
          style={style}
          className={`text-xxs text-center border text-${obj.textColor}`}
        >
          {obj["value"]}
        </div>
      );
    }
    return result;
  };

  return <div className="grid grid-cols-8">{loopThroughVariants()}</div>;
};

export default ColorVariants;
