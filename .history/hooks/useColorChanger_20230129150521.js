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

    for (const match of matches) {
      console.log("match:", match[0]);
      console.log("match length", match[0].length);
      console.log("match found at " + match.index);
      let suffstart = match.index + match[0].length;
      let end = str.indexOf(" ", match.index);
      //see if this has a variant on it
      let suff = str.substring(suffstart, end);

      if (!suff) {
        console.log("no suffix");
        //get parent color
        result.backgroundColor = `${theme.colors[colors[i]]}`;
        break;
      } else {
        //get variant color
        console.log("suffix found", suff);
        result.backgroundColor = `${theme.variants[colors[i]][suff]}`;
        break;
      }
    }

    console.log(JSON.stringify(result));

    result = "#0f766e";
    return true;
  }
};

export default useColorChanger;
