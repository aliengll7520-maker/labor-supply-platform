import React from "react";
import "./Checkbox.css";

function Checkbox({
  label = "",
  checked = false,
  onChange,
}) {
  return (
    <label className="checkbox">
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
