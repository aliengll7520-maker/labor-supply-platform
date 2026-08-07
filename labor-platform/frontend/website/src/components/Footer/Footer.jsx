import React from "react";
import "./Footer.css";

function Footer({
  text = "© Labor Supply Platform",
}) {
  return (
    <footer className="footer">
      {text}
    </footer>
  );
}

export default Footer;
