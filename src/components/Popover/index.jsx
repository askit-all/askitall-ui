import React, { useState, useEffect, useRef } from 'react';
import "./Popover.css";
import { useNavigate } from "react-router-dom";

const Popover = ({ content, children }) => {
  const history = useNavigate();

  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);
  const handlePopoverToggle = () => {
    setShowPopover(!showPopover);
  };

  const handleEditProfile = () => {
  
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    if(userDetails.type == 'mentor'){
      history("/profile");
    } else if(userDetails.type == 'mentee'){
      history("/profile");
    }

  };

  const handleHomePage = () => {
    history("/questionnaire");
  }

  const handleLogout = () => {
    localStorage.clear();
    setShowPopover(false); // Hide the popover after logout
    // Redirect to login page
    history("/login");
  };

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
    <div className="popover-container" ref={popoverRef}>
      <div className="popover-trigger" onClick={handlePopoverToggle}>
        {children}
      </div>
      {showPopover && (
        <div className="popover-content">
            <ul>
                <li className="pop-inner" onClick={handleHomePage}>Home</li>
                <li className="pop-inner" onClick={handleEditProfile}>Edit Profile</li>
                <li className="pop-inner" onClick={handleLogout}>Logout</li>
            </ul>
        </div>
      )}
    </div>
  );
};

export default Popover;
