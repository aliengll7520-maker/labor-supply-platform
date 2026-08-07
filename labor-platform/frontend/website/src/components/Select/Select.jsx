import React from "react";

function Select({
  options = [],
  value = "",
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        height: "48px",
        padding: "0 16px",
        border: "1px solid #dcdcdc",
        borderRadius: "8px",
        fontSize: "16px",
        boxSizing: "border-box",
      }}
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
