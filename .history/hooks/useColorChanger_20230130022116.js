const useColorChanger = (str, theme) => {
  console.log("got to colorChanger ", str);
  if (!theme || theme == undefined || str == undefined || str.length == 0)
    return;
  let styleObj = {};

  const colors = Object.keys(theme.colors);

  checkForPattern("bg-", styleObj, "backgroundColor");
  checkForPattern(`text-`, styleObj, "color");

  console.log("style = ", styleObj);
  return styleObj;
};

export default useColorChanger;

function checkForPattern(pattern, property, styleObj) {
  for (let i = 0; i < colors.length; i++) {
    var re = new RegExp(`${pattern}${colors[i]}`, "g");

    let matches = [...str.matchAll(re)];

    for (const match of matches) {
      // console.log("match:", match[0]);
      // console.log("match length", match[0].length);
      // console.log("match found at " + match.index);
      let suffstart = match.index + match[0].length;
      let end = str.indexOf(" ", match.index);
      //see if this has a variant on it
      let suff = str.substring(suffstart, end);

      if (!suff) {
        //console.log("no suffix");
        //get parent color
        styleObj[property] = theme.colors[colors[i]];
        break;
      } else {
        //get variant color
        // console.log("suffix found", suff);
        styleObj[property] = `${theme.variants[colors[i]][suff]}`;
        break;
      }
    }
  }
}
