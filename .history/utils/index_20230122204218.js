import twColors from "tailwindcss/colors";
const BLACK = "#000000";
const WHITE = "#ffffff";

let colorObjArray = [];
let colorObjects = {};

const makeColorObjArray = () => {
  let color;
  for (let i = 0; i < twColorList.length; i++) {
    color = twColorList[i];
    let array = [];
    let name = `${color}-50`;
    const obj = {
      name: name,
      color: color,
      value: 50,
      hex: twColors[color][50],
    };
    array.push(obj);
    colorObjects[obj.hex] = obj;

    //inner loop
    for (let v = 100; v < 1000; v = v + 100) {
      let newname = `${color}-${v}`;
      let ob = makeColorObj(newname, color, v, twColors[color][v]);
      array.push(ob);
    }
    colorObjArray.push(array);
    colorObjects[obj.hex] = obj;
  }
};

const getTextColorClass = (hex) => {
  let clr = getTextColorHex(hex);
  return clr == WHITE ? "text-whitish" : "text-blackish";
};

const getTextColorHex = (bgColor) => {
  //can adjust threshold lower if want 150?

  if (!isValidHexCode(bgColor)) return BLACK;

  let rgb = hexToRgb(bgColor);

  if (rgb == null) return BLACK;
  let val = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114).valueOf();
  // console.log("val: ", val);
  if (val > 186) {
    return BLACK;
  } else {
    return WHITE;
  }
};

const twColorList = [
  "red",
  "pink",
  "rose",
  "fuchsia",
  "purple",
  "violet",
  "indigo",
  "blue",
  "sky",
  "cyan",
  "teal",
  "emerald",
  "green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "stone",
  "neutral",
  "zinc",
  "gray",
  "slate",
];

const makeColorObj = (name, color, value, hex) => {
  return {
    name: name,
    color: color,
    value: value,
    hex: hex,
  };
};

function isValidHexCode(str) {
  // Regex to check valid
  // hexadecimalColor_code
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  // if str
  // is empty return false
  if (str == null) {
    return "false";
  }

  // Return true if the str
  // matched the ReGex
  if (regex.test(str) == true) {
    return "true";
  } else {
    return "false";
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const isObject = (val) => {
  if (val === null) {
    return false;
  }
  return typeof val === "object";
};

const setStorage = (itemName, data) => {
  window.localStorage.setItem(itemName, JSON.stringify(data));
};
const getStorage = (itemName) => {
  return JSON.parse(window.localStorage.getItem(itemName));
};

const clearStorage = (itemName) => {
  window.localStorage.removeItem(itemName);
};

export {
  colorObjArray,
  colorObjects,
  getTextColorHex,
  twColorList,
  isObject,
  setStorage,
  getStorage,
  clearStorage,
};
