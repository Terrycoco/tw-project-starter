const useColorChanger = (classNameStr) => {
  //for dev only -- get around non-safelisted colors
  //TODO do this in one loop in case both bg and text are set
  let colorIdx = classNameStr.indexOf("#");
  let result = {};
  if (colorIdx > 0) {
    let hex = classNameStr.substr(colorIdx, 7);

    switch (classNameStr.substr(colorIdx - 4, 3)) {
      case "bg-": {
        result = { backgroundColor: `${hex}` };
        break;
      }
      case "xt-": {
        result = { color: `${hex}` };
        break;
      }
      default:
        return {};
    }
  }
  console.log("result:", result);
  return result;
};

export default useColorChanger;
