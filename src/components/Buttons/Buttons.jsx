import React from "react";

const Buttons = () => {
  const Button = ({ type = "button", onClick, children, ...rest }) => {
    return (
      <button type={type} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  };
};

export default Buttons;
