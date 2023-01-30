const useColorChanger = (classNameStr, theme) => {
  let result;
  console.log("inputStr: ", classNameStr);

  //see if string has any of the custom color cats
  let colorKeys = Object.keys(theme.colors);
  console.log("colors:", colorKeys);
  for (const idx in colorKeys) {
    let foundIdx = classNameStr.indexOf(colorKeys[idx]);
    console.log("found at");
  }
  result = "#0f766e";
  return result;
};

export default useColorChanger;
