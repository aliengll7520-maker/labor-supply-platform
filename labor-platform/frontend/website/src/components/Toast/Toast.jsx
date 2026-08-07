import React from "react";

function Toast({
  show = false,
  message = "",
  type = "success",
}) {
  if (!show) return null;

  const background =
    type === "success"
      ? "#2e7d32"
      : type === "error"
      ? "#d32f2f"
      : "#1976d2";

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        minWidth: "260px",
        padding: "14px 18px",
        backgroundColor: background,
        color: "#ffffff",
        borderRadius: "8px",
        fontSize: "14px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
}

export default Toast;
