import React, { useState } from "react";
import {
  isValidHexCode,
  getTWColornameByHex,
  getColorObjByHex,
} from "../devUtils/twColorUtils";
import { getTextColorFromHex } from "../utils";
import { Draggable } from "../components/dnd";
import { validateConfig } from "next/dist/server/config-shared";
import { useTheme } from "../hooks";
import { theme } from "../themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faPaintRoller,
  faPaintBrush,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import ColorPicker from "../devComponents/ColorPicker";

let inputStyle = `
    form-control
    block
    w-full
    px-2
    py-1
    bg-white bg-clip-padding
    border border-solid 
    rounded
    transition
    ease-in-out
    m-0
   focus:bg-white focus:border-blue-600 focus:outline-none
   p-3 h-10 border-blackish text-sm font-bold
`;

let labelStyle = `form-label inline-block  text-gray-700 text-xs`;

const HexInput = (props) => {
  const [hex, setHex] = useState("");
  const [bg, setBg] = useState({ backgroundColor: "#ffffff" });
  const [textColor, setTextColor] = useState("text-blackish");
  const [isError, setIsError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [label, setLabel] = useState("Enter Hex");
  const [showPicker, setShowPicker] = useState(true);

  const handleChange = (e) => {
    let newval = e.target.value;
    if (!newval.startsWith("#")) {
      newval = "#" + newval;
    }
    setHex(newval);
    validate(newval);
  };

  const handleClear = (e) => {
    setHex("");
    setIsValid(false);
    setLabel("Enter Hex");
    setBg({ backgroundColor: "#ffffff" });
    setTextColor("text-blackish");
    document.getElementById("inputbox").focus();
  };

  const validate = (val) => {
    if (val.length == 7 && isValidHexCode(val)) {
      setBg({ backgroundColor: `${val}` });

      //fetch color obj
      let obj = getColorObjByHex(val, null, true);
      setTextColor(obj.textColor);

      //notify if is tw color
      let tw = getTWColornameByHex(val);
      let info = tw ? `(Tailwind Color: ${tw})` : "";
      setLabel(`Hex is valid ${info}`);
      setHex(val);

      // console.log("hexobj:", obj);
      //send it to stylesheet to hold for dragging
      props.onSelect(obj);

      //release for dragging
      setIsValid(true);
    }
  };

  const handleBlur = (e) => {};

  const handleFocus = (e) => {
    if (isError) {
      setIsError(false);
      setBg({ backgroundColor: "#ffffff" });
      setTextColor("text-blackish");
    }
    e.target.select();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const togglePicker = (e) => {
    setShowPicker(!showPicker);
  };

  const selectedFromPicker = (hex) => {
    validate(hex);
  };

  const renderButtons = () => {
    return (
      <div className="relative z-50">
        <div className="flex flex-row justify-between">
          <button type="button" onClick={handleClear}>
            <FontAwesomeIcon icon={faRotateLeft} />
          </button>
          <button
            onClick={() => {
              setShowPicker(true);
            }}
          >
            <FontAwesomeIcon icon={faPaintBrush} />
          </button>
        </div>
        {showPicker ? (
          <ColorPicker onSelect={selectedFromPicker} onClose={toggleMe} />
        ) : null}
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form onBlur={handleSubmit}>
        <label className={theme.text.label}>
          {label}
          <input
            id="inputbox"
            type="text"
            value={hex}
            className={`${inputStyle} ${textColor}`}
            onChange={handleChange}
            style={bg}
            onFocus={handleFocus}
          />
        </label>
      </form>
    );
  };

  return (
    <div
      id={`draghex${props.id}`}
      className="w-full mb-3"
      onClick={handleClose}
    >
      {isValid ? (
        <Draggable id="hexinput">{renderForm()}</Draggable>
      ) : (
        renderForm()
      )}
      <div className="relative z-50">
        <div className="flex flex-row justify-between">
          <button type="button" onClick={handleClear}>
            <FontAwesomeIcon icon={faRotateLeft} />
          </button>
          <button
            onClick={() => {
              setShowPicker(!showPicker);
            }}
          >
            <FontAwesomeIcon icon={faPaintBrush} />
          </button>
        </div>
        {showPicker ? (
          <ColorPicker onSelect={selectedFromPicker} onClose={handleClose} />
        ) : null}
      </div>
    </div>
  );
};

export default HexInput;
