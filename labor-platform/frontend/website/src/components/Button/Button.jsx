import React from "react";

function Button({
  text = "Button",
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%",
        height: "48px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#1976d2",
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "600",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
