const useColorChanger = (str, theme) => {
  //TODO would this be faster with regexp?
  //console.log("got to colorChanger ", str);
  if (!theme || theme == undefined || str == undefined || str.length == 0)
    return;
  let styleObj = {};

  const colors = Object.keys(theme.colors);

  checkForPattern("bg-", styleObj, "backgroundColor");
  checkForPattern("text-", styleObj, "color");

  console.log("style = ", styleObj);
  return styleObj;

  function checkForPattern(pattern, styleObj, property) {
    for (let i = 0; i < colors.length; i++) {
      let color = colors[i];
      let re = new RegExp(`${pattern}${color}`, "g");
      // console.log("testing: ", re);
      let matches = [...str.matchAll(re)];

      for (const match of matches) {
        // console.log("match:", match[0]);

        //has suffix?
        let matchlen = match[0].length;
        //if next character is "-" then yes else no.
        let nextpos = match.index + matchlen;

        let nextChar = str[nextpos];

        if (nextChar === "-") {
          //has suffix
          let end = str.indexOf(" ", nextpos);
          if (end == -1) {
            end = str.length;
          }
          let suff = str.slice(nextpos + 1, end);
          styleObj[property] = `${theme.variants[color][suff].hex}`;
          break;
        } else {
          //no suffix
          styleObj[property] = theme.colors[color];
          break;
        }
      } //end matches
    } // end for

    //if get here then no match so far
    //check if hex val
    let hre = new RegExp(`${pattern}\\[#`, "g");
    let matches = [...str.matchAll(hre)];
    for (const match of matches) {
      let end = str.indexOf("]", match.index);
      let hex = str.substring(match.index + pattern.length + 1, end);
      console.log("hex:", hex);
      styleObj[property] = hex;
    } //end matche
  } //end fn
};
export default useColorChanger;
