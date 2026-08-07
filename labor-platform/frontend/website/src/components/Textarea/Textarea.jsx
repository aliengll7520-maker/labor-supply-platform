import React from "react";

function Textarea({
  placeholder = "",
  value = "",
  onChange,
  rows = 4,
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      style={{
        width: "100%",
        padding: "12px 16px",
        border: "1px solid #dcdcdc",
        borderRadius: "8px",
        fontSize: "16px",
        resize: "vertical",
        boxSizing: "border-box",
      }}
    />
  );
}

export default Textarea;
