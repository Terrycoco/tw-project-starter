const useColorChanger = (latestClass) => {
  //for dev only -- get around non-safelisted colors
  let colorIdx = cl.indexOf("#");
  if (colorIdx > 0) {
    let hex = latestClass.substr(colorIdx, 7);
    console.log("hex is", hex);

    if (latestClass.substr(colorIdx - 4, 3) == "bg-") {
      return {
        backgroundColor: `${hex}`,
      };
    }
  } else {
    return {};
  }
};

export default useColorChanger;
