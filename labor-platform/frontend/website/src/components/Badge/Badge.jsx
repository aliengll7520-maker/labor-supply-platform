import React from "react";

function Badge({
  text = "",
  color = "#1976d2",
}) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 12px",
        backgroundColor: color,
        color: "#ffffff",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
      }}
    >
      {text}
    </span>
  );
}

export default Badge;
