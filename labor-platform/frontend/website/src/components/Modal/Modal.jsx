import React from "react";
import "./Modal.css";
import Button from "../Button/Button";

function Modal({
  open = false,
  title = "",
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="modal-title">{title}</h3>

        {children}

        <div className="modal-footer">
          <Button
            text="Đóng"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
