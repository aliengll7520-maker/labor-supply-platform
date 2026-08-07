import React from "react";

function Checkbox({
  label = "",
  checked = false,
  onChange,
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        gap: "8px",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
