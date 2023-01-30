const useColorChanger = (str, theme) => {
  let result = {};
  let bgHex;
  let fgHex;
  const colors = Object.keys(theme.colors);

  for (let i = 0; i < colors.length; i++) {
    var pattern = `bg-${color}`;
    var re = new RegExp(pattern, "g");
    let matches = [...str.matchAll(re)];
    matches.forEach((match) => {
      console.log("match found at " + match.index);
    });
  }

  // let matches = [...str.matchAll(re)];
  // console.log("matches:", matches);
  // matches.forEach((match) => {
  //   console.log("match found at " + match.index);
  // });

  result = "#0f766e";
  return result;
};

export default useColorChanger;
