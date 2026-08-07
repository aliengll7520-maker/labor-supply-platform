import React from "react";

function Footer({
  text = "© Labor Supply Platform",
}) {
  return (
    <footer
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#f5f5f5",
        color: "#666666",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      {text}
    </footer>
  );
}

export default Footer;
