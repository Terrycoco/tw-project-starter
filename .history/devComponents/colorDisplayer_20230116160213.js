import { FlexColumn } from "../components/flex";
const ColorDisplayer = (props) => {
  return (
    <FlexColumn className="text-center w-28 ">
      <FlexColumn
        className={`h-28 w-28 ${props.bg} rounded-full justify-center `}
      >
        <span className={`text-xs ${props.text}`}>TEXT COLOR</span>
      </FlexColumn>
      <span>{props.label}</span>
    </FlexColumn>
  );
};

export default ColorDisplayer;
