import React, { useState, useEffect, useRef } from 'react';
import "./NotificationModal.css";

const NotificationModal = ({ content, children }) => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);
  const handleModalToggle = () => {
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    };

    if (showPopover) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [showPopover]);

  return (
    <div className="popover-container" ref={popoverRef}>
      <div className="popover-trigger" onClick={handleModalToggle}>
        {children}
      </div>
      {showPopover && (
        <div className="popover-content">
          <div className="modal-content">
            <h2>Notifications</h2>
            <ul className="notification-list">
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationModal;
