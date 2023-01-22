const ColorDisplayer = (props) => {
  return (
    <div className="flex flex-col text-center">
      <div className={`w-28 h-28 ${props.color} rounded-full`}>
        <span className="text-black">TEXT COLOR</span>
      </div>
      <span>{props.label}</span>
    </div>
  );
};

export default ColorDisplayer;
