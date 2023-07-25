import React from "react";
import "./modalDeleteBooking.css"
const ModalDeleteBooking = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-content">
          <p>{message}</p>
          <div className="modal-buttons">
            <button className="confirm-button" onClick={onConfirm}>
              Yes
            </button>
            <button className="cancel-button" onClick={onCancel}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteBooking;
