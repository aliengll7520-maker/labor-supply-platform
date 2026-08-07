import React from "react";
import "./Toast.css";

function Toast({
  show = false,
  message = "",
  type = "success",
}) {
  if (!show) return null;

  return (
    <div className={`toast toast-${type}`}>
      {message}
    </div>
  );
}

export default Toast;
