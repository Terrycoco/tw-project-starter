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
        console.log("match:", re);

        //has suffix?
        let matchlen = re.length;
        //if next character is "-" then yes else no.
        console.log("next ch", str[match.index + matchlen + 1]);

        let suffstart = match.index + match[0].length;
        console.log("suffstart: ", suffstart, str.length);
        let end = str.indexOf(" ", match.index);
        if (end == -1) {
          console.log("no end:", str.length, match[0]);
          end = str.length;
        }

        //see if this has a variant on it
        let suff = str.substring(suffstart, end);
        console.log("suff: ", suff);

        if (!suff || suffstart == str.length) {
          //console.log("no suffix");
          //get parent color
          styleObj[property] = theme.colors[color];
          break;
        } else {
          //get variant color
          // console.log("suffix found", suff);
          styleObj[property] = `${theme.variants[colors][suff].hex}`;
          break;
        }
      } //end matches
    } // end for
  } //end fn
};
export default useColorChanger;
