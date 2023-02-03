import twColors from "tailwindcss/colors";
const BLACK = "text-black";
const WHITE = "text-white";

// let colorObjArray = [];
// let colorObjects = {};

// const makeColorObjects = () => {
//   let color;
//   for (let i = 0; i < twColorList.length; i++) {
//     color = twColorList[i];
//     let array = [];
//     let name = `${color}-50`;
//     const obj = {
//       name: name,
//       color: color,
//       value: 50,
//       hex: twColors[color][50],
//     };
//     array.push(obj);
//     colorObjects[obj.hex] = obj;

//     //inner loop
//     for (let v = 100; v < 1000; v = v + 100) {
//       let newname = `${color}-${v}`;
//       let ob = makeColorObj(newname, color, v, twColors[color][v]);
//       array.push(ob);
//     }
//     colorObjArray.push(array);
//     colorObjects[obj.hex] = obj;
//   }
// };

// makeColorObjects();

const getTextColorClass = (hex) => {
  let clr = getTextColorHex(hex);
  return clr == WHITE ? "text-whitish" : "text-blackish";
};

const getTextColorFromHex = (bgColor) => {
  //can adjust threshold lower if want 150?

  if (!isValidHexCode(bgColor)) return BLACK;

  let rgb = hexToRgb(bgColor);

  if (rgb == null) return BLACK;
  let val = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114).valueOf();
  if (val > 160) {
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

const findOne = (arrHaystack, arrNeedle) => {
  //returns true if haystack includes anything in needle
  return arrNeedle.some((v) => arrHaystack.includes(v));
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

const newShade = (hexColor, magnitude) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};

export {
  // colorObjArray,
  // colorObjects,
  getTextColorFromHex,
  // getColorObjByHex,
  newShade,
  isObject,
  setStorage,
  getStorage,
  clearStorage,
};

export const hexToDecimal = (hex) => {
  let str = hex;
  if (str[0] === "#") str = str.slice(1);
  return parseInt(str, 16);
};
