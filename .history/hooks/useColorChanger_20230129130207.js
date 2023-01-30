const useColorChanger = (classNameStr, theme) => {
  let result;

  //see if string has any of the custom color cats
  let colorKeys = Object.keys(theme.colors);
  for (const idx in colorKeys) {
    var re = new RegExp(colorKeys[idx], "g");
    let match = classNameStr.match(re);
    console.log("match", match);
  }
  result = "#0f766e";
  return result;
};

export default useColorChanger;
