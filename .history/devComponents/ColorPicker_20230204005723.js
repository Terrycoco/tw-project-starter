import { SketchPicker } from "react-color";
import { useState } from "react";

const ColorPicker = (props) => {
  const [background, setBackground] = useState("#fff");
  const [color, setColor] = useState(props.color ? props.color : "#fff");

  const handleChangeComplete = (color) => {
    // setBackground({ background: color.hex });
    props.onSelect(color.hex); //to parent
  };

  const preventClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClose = () => {
    props.onClose(color.hex);
  };

  return (
    <div
      onClose={handleClose}
      className="absolute top-1"
      onClick={preventClose}
    >
      <SketchPicker default={color} onChangeComplete={handleChangeComplete} />
    </div>
  );
};

export default ColorPicker;