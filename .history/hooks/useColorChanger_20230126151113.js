const useColorChanger = (latestClass) => {
  //for dev only -- get around non-safelisted colors
  let colorIdx = cl.indexOf("#");
  let result = {};
  if (colorIdx > 0) {
    let hex = latestClass.substr(colorIdx, 7);

    switch (latestClass.substr(colorIdx - 4, 3)) {
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
  return result;
};

export default useColorChanger;
