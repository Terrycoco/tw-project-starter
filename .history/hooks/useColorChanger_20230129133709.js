const useColorChanger = (str, theme) => {
  let result = {};
  var re = new RegExp("brand", "g");

  // var find = re.test(className); //test if found
  // console.log("found?", find);
  // let regexp = /bar/g;
  // let str = "foobarfoobar";

  let matches = [...str.matchAll(re)];
  console.log("matches:", matches);
  matches.forEach((match) => {
    console.log("match found at " + match.index);
  });
  // var found = re.exec(className);
  // console.log("found at:", found.index);

  result = "#0f766e";
  return result;
};

export default useColorChanger;
