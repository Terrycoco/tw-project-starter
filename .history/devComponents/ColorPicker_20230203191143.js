import { SketchPicker } from "react-color";
import { useState } from "react";

const ColorPicker = (props) => {
  const [background, setBackground] = useState("#fff");

  const handleChangeComplete = (color) => {
    setBackground({ background: color.hex });
    props.onSelect(color.hex); //to parent
  };

  return <SketchPicker color={background} onChange={handleChangeComplete} />;
};

export default ColorPicker;
