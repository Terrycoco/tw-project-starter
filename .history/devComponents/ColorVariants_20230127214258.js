import { getCustomColorObjects } from "../devUtils/twColorUtils";
import { useState, useEffect } from "react";

const ColorVariants = (props) => {
  [colorObjs, setColorObjs] = useState([]);

  useEffect(() => {
    setColorObjs(getCustomColorObjects(props.colorname));
  }, [props.colorname]);

  return <div className="flex"></div>;
};

export default ColorVariants;
