import { PropTypes } from "prop-types";
import { makeCustomShades } from "../devUtils/twColorUtils";
import { useState, useEffect } from "react";
import { useTheme } from "hooks"; //theme was updated in stylesheet

const ColorVariantBox = ({category, variant}) => {
  const {theme} = useTheme();
  const [obj, setObj] = useState(theme.variants[category][variant]);
  
  let style = {
    backgroundColor: obj.hex,
  };

  const handleSelect = (e) => {
    onSelect(obj);
  };

  return (
    <div
      id={obj.hex}
      key={`${props.base}${key}`}
      className={`flex flex-col justify-center flex-1 h-6 text-xs text-center  ${obj.textColor}`}
      style={style}
      onClick={handleSelect}
    >
      {obj.variant}
    </div>
  );
};

const ColorVariants = (props) => {
  const { theme, setTheme } = useTheme();
  const [base, setBase] = useState(props.base);
  const [label, setLabel] = useState("variant");
  const [variants, setVariants] = useState(theme.variants[props.category]);

  const handleSelect = (e, obj) => {
    //make this one the parent color
    props.onSelect(obj); //send up to parent
  };

  const loopThroughVariants = () => {
    let result = [];
    if (typeof variants == "object") {
      let keys = Object.keys(variants);
      for (const idx in keys) {
        let key = keys[idx];
        if (key === "DEFAULT") {
          continue;
        }
        let obj = variants[key];
        result.push(<ColorVariantBox key={`${props.category}${props.}`};
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
