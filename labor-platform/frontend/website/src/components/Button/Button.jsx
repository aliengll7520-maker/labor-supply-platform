import React from "react";
import "./Button.css";

function Button({
  text = "Button",
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className="button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
