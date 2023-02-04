import { SketchPicker } from "react-color";
import { useState } from "react";

const ColorPicker = (props) => {
  const [background, setBackground] = useState("#fff");
  const [color, setColor] = useState(props.color ? props.color : "#fff");

  const handleChangeComplete = (color) => {
    setBackground({ background: color.hex });
    props.onSelect(color.hex); //to parent
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <div onClose={handleClose} className="absolute top-0">
      <SketchPicker color={color} onChange={handleChangeComplete} />
    </div>
  );
};

export default ColorPicker;
