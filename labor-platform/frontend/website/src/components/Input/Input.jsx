import React from "react";
import "./Input.css";

function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
}) {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default Input;
