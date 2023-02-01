import React, { useState } from "react";

let inputStyle = `
    form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
   focus:bg-white focus:border-blue-600 focus:outline-none
`;

const NameForm = (props) => {
  const [hex, setHex] = useState("");
  const [bg, setBg] = useState({ backgroundColor: "#000" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${hex}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={hex}
          className={inputStyle}
          onChange={(e) => setHex(e.target.value)}
          style={bg}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NameForm;
