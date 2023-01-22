import { ReactSVG } from "react-svg";

const SVGLoader = (props) => {
  return <ReactSVG src={props.src} className={props.className} />;
};

export default SVGLoader;
