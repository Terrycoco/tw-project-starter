const ColorDisplayer = (props) => {
  return (
    <div className="flex flex-col text-center">
      <div className={`w-28 h-28 ${props.color}  rounded-full`}></div>
      <span>{props.label}</span>
    </div>
  );
};
