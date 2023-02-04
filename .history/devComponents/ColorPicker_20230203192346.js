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
    <div onClose={handleClose} className="absolute z-50">
      <SketchPicker color={background} onChange={handleChangeComplete} />
    </div>
  );
};

export default ColorPicker;
