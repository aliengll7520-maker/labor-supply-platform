import React from "react";
import "./Badge.css";

function Badge({
  text = "",
  color = "#1976d2",
}) {
  return (
    <span
      className="badge"
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
}

export default Badge;
