import React, { useState, useEffect, useRef } from "react";
import "./NotificationModal.css";
import { secured } from "api/interceptors";

import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

// CSS styles for the loader
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const NotificationModal = ({ children }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [loading, setLoading] = useState(false);
  const popoverRef = useRef(null);
  const handleModalToggle = () => {
    setShowPopover(!showPopover);
  };

  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = () => {
    setLoading(true);
    let url = `/notifications`;
    secured.get(url).then((response) => {
      setNotifications(response.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (showPopover) fetchNotifications();
  }, [showPopover]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    };

    if (showPopover) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showPopover]);

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <BeatLoader
            color="#FF0000"
            css={override}
            size={15}
            loading={loading}
          />
        </div>
      )}
      <div className="popover-container" ref={popoverRef}>
        <div className="popover-trigger" onClick={handleModalToggle}>
          {children}
        </div>
        {showPopover && (
          <div className="popover-content-noti">
            <div className="modal-content">
              <h2>Notifications List</h2>
              <ul className="notification-list">
                {notifications && notifications.length ? (
                  notifications.map((notification,index) => (
                    <>
                      <li key={index}>{notification.desc}</li>
                      <hr />
                    </>
                  ))
                ) : (
                  <>
                    <span className="flex justify-center mt-3">
                      No Notifications
                    </span>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationModal;
