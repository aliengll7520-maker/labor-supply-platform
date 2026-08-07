import React from "react";
import "./Select.css";

function Select({
  options = [],
  value = "",
  onChange,
}) {
  return (
    <select
      className="select"
      value={value}
      onChange={onChange}
    >
      {options.map((item, index) => (
        <option
          key={index}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
