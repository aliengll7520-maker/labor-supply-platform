import React from "react";
import "./Loading.css";

function Loading({
  text = "Đang tải..."
}) {
  return (
    <div className="loading">
      <div className="loading-spinner"></div>

      <div className="loading-text">
        {text}
      </div>
    </div>
  );
}

export default Loading;
