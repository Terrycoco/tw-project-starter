import { SketchPicker } from "react-color";
import { useState } from "react";

const ColorPicker = (props) => {
  const [background, setBackground] = useState("#fff");

  const handleChangeComplete = (color) => {
    setBackground({ background: color.hex });
  };

  return (
    <div className={props.isVisible ? "visible" : "hidden"}>
      <SketchPicker
        color={background}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
};

export default ColorPicker;
