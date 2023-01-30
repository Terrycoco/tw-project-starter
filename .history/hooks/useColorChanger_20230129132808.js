const useColorChanger = (className, theme) => {
  let result;
  var re = new RegExp("brand");

  var find = re.test(className); //test if found
  console.log("found?", find);

  var found = re.exec(className);
  console.log("found at:", found.index);

  result = "#0f766e";
  return result;
};

export default useColorChanger;
