const useColorChanger = (classNameStr, theme) => {
  let result;
  var re = new RegExp("brand");

  var find = re.test(classNameStr);
  console.log("found?", true);
  result = "#0f766e";
  return result;
};

export default useColorChanger;
