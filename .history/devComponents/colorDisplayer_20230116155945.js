import { FlexColumn } from "../components/flex";
const ColorDisplayer = (props) => {
  return (
    <FlexColumn className="text-center w-28 ">
      <FlexColumn className={`min-h-28 ${props.color} rounded-full`}>
        <span className="justify-center text-xs text-black">TEXT COLOR</span>
      </FlexColumn>
      <span>{props.label}</span>
    </FlexColumn>
  );
};

export default ColorDisplayer;
