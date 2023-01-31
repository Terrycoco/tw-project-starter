import { PropTypes } from "prop-types";
import {
  getCustomColorObjectsArray,
  makeCustomShades,
} from "../devUtils/twColorUtils";
import { useState, useEffect } from "react";
import { useTheme } from "hooks"; //theme was updated in stylesheet

const ColorVariants = (props) => {
  const { theme, setTheme } = useTheme();
  const [base, setBase] = useState(props.base);
  const [label, setLabel] = useState("variant");

  useEffect(() => {
    //only when base color name changes
    if (props.base !== base) {
      setBase(props.base);
      //get new parent hex from theme
      let newhex = theme.colors[props.category];
      //get variants of this new color
      let variantsObj = makeCustomShades(newhex, props.base);
      console.log("variants returned:", variantsObj);
      //update theme with new variants
      let newtheme = Object.assign({}, theme);
      newtheme.variants[props.category] = variantsObj;
      setTheme(newtheme);
    }
  }, [base, props.base, props.category, theme, setTheme]);

  const handleSelect = (e) => {
    //make this one the parent color
    let thishex = e.target.id;
    console.log("variant's hex:", thishex);
    let newtheme = Object.assign({}, theme);
    newtheme.colors[props.category] = thishex;
    console.log("newtheme:", newtheme);
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
            id={obj.hex}
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
