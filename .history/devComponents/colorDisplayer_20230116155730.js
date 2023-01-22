import { FlexColumn } from "../components/flex";
const ColorDisplayer = (props) => {
  return (
    <FlexColumn className="text-center w-28 h-28">
      <FlexColumn className={`${props.color} rounded-full`}>
        <span className=" inline-block align-middle text-black">
          TEXT COLOR
        </span>
      </FlexColumn>
      <span>{props.label}</span>
    </FlexColumn>
  );
};

export default ColorDisplayer;
