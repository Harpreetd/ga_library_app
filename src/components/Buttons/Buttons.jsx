import React from "react";

const Buttons = (props) => {
  const { text, onClick } = props;
  return (
    <button className="primary-btn btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Buttons;
