import { SketchPicker } from "react-color";

const ColorPicker = (props) => {
  return (
    <div className={props.isVisible ? "visible" : "hidden"}>
      <SketchPicker />
    </div>
  );
};

export default ColorPicker;
