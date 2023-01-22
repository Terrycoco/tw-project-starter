const ColorTester = (props) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="twGetter"
        className="form-label inline-block  text-gray-700 text-xs"
      >
        Tailwind Color
      </label>
      <div
        className={`h-10 p-3 border border-blackish text-sm font-bold bg-${props.selectedColor} ${props.textColor}`}
      >
        {`${props.selectedColor}`}
      </div>
    </div>
  );
};

export default ColorTester;
