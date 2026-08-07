import React from "react";
import "./Header.css";

function Header({
  title = "Labor Supply Platform",
}) {
  return (
    <header className="header">
      {title}
    </header>
  );
}

export default Header;
