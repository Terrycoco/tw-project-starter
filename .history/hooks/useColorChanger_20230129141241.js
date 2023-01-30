const useColorChanger = (str, theme) => {
  let result = {};
  let bgHex;
  let fgHex;
  const colors = Object.keys(theme.colors);
  console.log("colors: ", colors);

  for (let i = 0; i < colors.length; i++) {
    var pattern = `bg-${colors[i]}`;
    var re = new RegExp(pattern, "g");
    let matches = [...str.matchAll(re)];

    matches.forEach((match) => {
      console.log("match:", match);
      console.log("match found at " + match.index);
      //see if this has a variant on it
      let suff = str.substring(match.index + match.length - 1, 4);
      console.log("suff: ", suff);
    });
  }

  // let matches = [...str.matchAll(re)];
  // console.log("matches:", matches);
  // matches.forEach((match) => {
  //   console.log("match found at " + match.index);
  // });

  result = "#0f766e";
  return true;
};

export default useColorChanger;
