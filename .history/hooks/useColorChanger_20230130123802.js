const useColorChanger = (str, theme) => {
  //TODO would this be faster with regexp?
  //console.log("got to colorChanger ", str);
  if (!theme || theme == undefined || str == undefined || str.length == 0)
    return;
  let styleObj = {};

  const colors = Object.keys(theme.colors);

  checkForPattern("bg-", styleObj, "backgroundColor");
  checkForPattern("text-", styleObj, "color");

  //console.log("style = ", styleObj);
  return styleObj;

  function checkForPattern(pattern, styleObj, property) {
    for (let i = 0; i < colors.length; i++) {
      let color = colors[i];
      var re = new RegExp(`${pattern}${color}`, "g");
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
          console.log("suff?", str.slice(nextpos + 1, end));
        } else {
          //no suffix
          styleObj[property] = theme.colors[color];
          break;
        }

        // //see if this has a variant on it
        // let suff = str.substring(suffstart, end);
        // console.log("suff: ", suff);

        // if (!suff || suffstart == str.length) {
        //   //console.log("no suffix");
        //   //get parent color
        // } else {
        //   //get variant color
        //   // console.log("suffix found", suff);
        //   styleObj[property] = `${theme.variants[colors][suff].hex}`;
        //   break;
        // }
      } //end matches
    } // end for
  } //end fn
};
export default useColorChanger;
