const useColorChanger = (className, theme) => {
  let result = {};
  var re = new RegExp("brand");

  // var find = re.test(className); //test if found
  // console.log("found?", find);
  var re = /bar/g,
    str = "foobarfoobar";
  while ((match = re.exec(str)) != null) {
    console.log("match found at " + match.index);
  }
  var found = re.exec(className);
  console.log("found at:", found.index);

  result = "#0f766e";
  return result;
};

export default useColorChanger;
