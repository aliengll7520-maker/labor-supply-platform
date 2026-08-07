import React from "react";

function Header({
  title = "Labor Supply Platform",
}) {
  return (
    <header
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#1976d2",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
        fontSize: "20px",
        fontWeight: "600",
      }}
    >
      {title}
    </header>
  );
}

export default Header;
