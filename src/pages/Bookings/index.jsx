import React, { useState } from "react";
import "./tabs.css";
import { Button, Img, Input, Line, Text } from "components";
import ManageBookings from "components/ManageBookings";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <>
      <div className="bg-white_A700_01 flex flex-col items-start justify-start mx-auto px-5 md:px-10 w-full">
        <div className="flex flex-col gap-8 items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text className="font-bold text-gray_900" as="h5" variant="h5">
              Bookings
            </Text>

            <div className="tabs-container flex flex-wrap sm:flex-col">
              <Tab
                label="Upcoming"
                activeTab={activeTab}
                onClick={handleTabClick}
              />
              <Tab
                label="Pending"
                activeTab={activeTab}
                onClick={handleTabClick}
              />

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

              <Tab
                label="Manage"
                activeTab={activeTab}
                onClick={handleTabClick}
              />
            </div>

            <div className="tab-content w-full">
              {activeTab === "Upcoming" ? "No Upcoming booking" : <></>}
              {activeTab === "Pending" ? "No Pending booking" : <></>}
              {activeTab === "Past" ? "No Past booking" : <></>}
              {activeTab === "Cancelled" ? "No Cancelled booking" : <></>}
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
