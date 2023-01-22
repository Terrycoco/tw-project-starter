import { ReactSVG } from "react-svg";

/*
IMPORTANT
When loading an svg file, make sure you delete all 
class, fill, and stroke properties
then TWs fill-{color} will work
*/

const SVGLoader = (props) => {
  let style = props.className.replace("text", "fill");
  return <ReactSVG src={props.src} className={style} {...props} />;
};

export default SVGLoader;
