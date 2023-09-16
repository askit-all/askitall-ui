import React, { useEffect, useState } from "react";
import "./tabs.css";
import { Button, Img, Input, Line, Text } from "components";
import ManageBookings from "components/ManageBookings";
import { secured } from "api/interceptors";
import UpcomingBookings from "components/UpcomingBookings";
import { useNavigate } from "react-router-dom";
import CancelledBookings from "components/CancelledBookings";
import PastBookings from "components/PastBookings";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const userData = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <>
      <div className="bg-white_A700_01 flex flex-col items-start justify-start mx-auto px-5 w-full">
        <div className="flex flex-col gap-8 items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text className="font-bold text-gray_900 my-4" as="h5" variant="h5">
              Bookings
            </Text>

            <div className="tabs-container flex flex-wrap sm:flex-col">
              <Tab
                label="Upcoming"
                activeTab={activeTab}
                onClick={handleTabClick}
              />
               {/* <Tab
                label="Pending"
                activeTab={activeTab}
                onClick={handleTabClick}
              /> */}

              <Tab
                label="Past"
                activeTab={activeTab}
                onClick={handleTabClick}
              /> 

              <Tab
                label="Cancelled"
                activeTab={activeTab}
                onClick={handleTabClick}
              />

              {userData.type == "mentor" ? (
                <Tab
                  label="Manage"
                  activeTab={activeTab}
                  onClick={handleTabClick}
                />
              ) : (
                <></>
              )}
            </div>

            <div className="mt-3 w-full">
              {activeTab === "Upcoming" ? <UpcomingBookings /> : <></>}
              {activeTab === "Pending" ? "No Pending booking" : <></>}
              {activeTab === "Past" ? <PastBookings /> : <></>}
              {activeTab === "Cancelled" ? <CancelledBookings /> : <></>}
              {activeTab === "Manage" ? <ManageBookings /> : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Tab = ({ label, content, activeTab, onClick }) => {
  return (
    <div
      className={`tab ${activeTab === label ? "active" : ""}`}
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  );
};

export default Bookings;
