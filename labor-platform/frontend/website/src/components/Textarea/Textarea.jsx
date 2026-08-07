import React from "react";
import "./Textarea.css";

function Textarea({
  placeholder = "",
  value = "",
  onChange,
  rows = 4,
}) {
  return (
    <textarea
      className="textarea"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  );
}

export default Textarea;
