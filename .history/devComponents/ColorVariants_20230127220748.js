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
      result.push(<div className="border bg-white">{obj["value"]}</div>);
    }
    return result;
  };

  return <div className="grid grid-cols-8">{loopThroughVariants()}</div>;
};

export default ColorVariants;
