import React, { useState } from "react";

const NameForm = (props) {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NameForm;
