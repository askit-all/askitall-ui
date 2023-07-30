import Header from "components/Header";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import { secured } from "api/interceptors";
import { useNavigate } from "react-router-dom";

// CSS styles for the loader
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function NotificationItem({ notification }) {
  const { desc, timestamp } = notification;
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <p className="text-gray-800">{desc}</p>
      <p className="text-gray-500 text-sm">{timestamp}</p>
    </div>
  );
}

function AllNotifications() {
  const [loading, setLoading] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (userData.type == "mentee" && item.notificationFrom) {
      navigate(
        `/mentor-profile/${item.notificationFrom}/fromNotification/${true}`
      );
    }
  };

  const fetchNotifications = () => {
    setLoading(true);
    let url = `/notifications`;
    secured.get(url).then((response) => {
      setNotifications(response.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchNotifications();
  }, []);
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

      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[1rem] w-full responsive-view">
        <Header className="bg-orange_500 w-full" />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Notifications</h1>
          {notifications.length === 0 ? (
            <p className="text-gray-500">No notifications found.</p>
          ) : (
            notifications.map((notification) => (
              <NotificationItem
                onClick={() => handleNavigation(notification)}
                key={notification._id}
                notification={notification}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default AllNotifications;
