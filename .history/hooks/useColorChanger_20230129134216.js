const useColorChanger = (str, theme) => {
  let result = {};
  let bgHex;
  let fgHex;

  var re = new RegExp(`bg-${brand}`, "g");

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
