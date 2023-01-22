import { FlexColumn } from "../components/flex";
const ColorDisplayer = (props) => {
  return (
    <FlexColumn className="text-center w-28 h-28">
      <div className={`  ${props.color} rounded-full`}>
        <span className=" inline-block align-middle text-black">
          TEXT COLOR
        </span>
      </div>
      <span>{props.label}</span>
    </FlexColumn>
  );
};

export default ColorDisplayer;
