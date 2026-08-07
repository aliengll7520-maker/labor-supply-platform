import React from "react";

function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={{
        width: "100%",
        height: "48px",
        padding: "0 16px",
        border: "1px solid #dcdcdc",
        borderRadius: "8px",
        outline: "none",
        fontSize: "16px",
        boxSizing: "border-box",
      }}
    />
  );
}

export default Input;
