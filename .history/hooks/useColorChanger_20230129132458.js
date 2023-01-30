const useColorChanger = (className, theme) => {
  let result;
  var re = new RegExp("xyz");

  var find = re.test(className); //test if found
  console.log("found?", find);

  var where = re.exec(className);
  console.log("where:", where);

  result = "#0f766e";
  return result;
};

export default useColorChanger;
