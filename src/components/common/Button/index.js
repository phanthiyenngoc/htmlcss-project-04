import React from "react";
import "./commonButton.css";

const Button = (props) => {
  return (
    <button className="btn" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
