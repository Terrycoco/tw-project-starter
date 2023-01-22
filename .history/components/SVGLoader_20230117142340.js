import { ReactSVG } from "react-svg";

const SVGLoader = (props) => {
  return <ReactSVG src={props.src} className={props.className} {...props} />;
};

export default SVGLoader;
