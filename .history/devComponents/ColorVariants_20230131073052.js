import { PropTypes } from "prop-types";
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
    //doesn't need to trigger when only base changes
    let newhex = theme.colors[props.category];
    console.log(props.category, " varisnts recd base:", props.base);
    //check to see if hex has changed for this theme color
    if (newhex !== hex) {
      setHex(newhex);
      console.log("newhex", newhex, "oldhex:", hex);
      let newtheme = Object.assign({}, theme);
      let variantsObj = makeCustomShades(newhex, props.base);
      console.log("returned vars:", variantsObj);

      // setColorObjs(getCustomColorObjectsArray(newhex, props.colorname));

      newtheme.variants[props.category] = variantsObj;
      // console.log("variants changed?", newtheme);
      setTheme(newtheme);
    }
  }, [hex, props.base, props.category, theme, setTheme]);

  const handleSelect = (e) => {
    //make this one the defalt
    console.log("new base hex:", hex);
    let newtheme = Object.assign({}, theme);
    newtheme.colors[props.category] = hex;
    setTheme(newtheme);
  };

  const loopThroughVariants = () => {
    let result = [];
    if (typeof theme.variants[props.category] === "object") {
      let keys = Object.keys(theme.variants[props.category]);
      for (const idx in keys) {
        let key = keys[idx];
        if (key === "DEFAULT") {
          continue;
        }
        let obj = theme.variants[props.category][key];
        // console.log("obj:", obj);

        let style = {
          backgroundColor: obj.hex,
        };

        result.push(
          <div
            id={`${props.base}${key}`}
            key={`${props.base}${key}`}
            className={`flex flex-col justify-center flex-1 h-6 text-xs text-center  ${obj.textColor}`}
            style={style}
            onClick={handleSelect}
          >
            {obj[label]}
          </div>
        );
      }
      return result;
    } else {
      return null;
    }
  };

  return <div className="flex flex-row no-wrap">{loopThroughVariants()}</div>;
};

//NOTE: component receives variants from theme
ColorVariants.propTypes = {
  base: PropTypes.string, //this is the tw color name without the variant
  category: PropTypes.string, //this is the theme color category (brand, accent)
};

export default ColorVariants;
