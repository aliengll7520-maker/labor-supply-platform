import React from "react";

function Modal({
  open = false,
  title = "",
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <h3>{title}</h3>

        <div>{children}</div>

        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            width: "100%",
            height: "44px",
            border: "none",
            borderRadius: "8px",
            background: "#1976d2",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

export default Modal;
