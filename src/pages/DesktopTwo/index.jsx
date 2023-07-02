import React, { useState } from "react";
import "./tabs.css";
import { Button, Img, Input, Line, Text } from "components";

const DesktopTwoPage = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <>
      <div className="bg-white_A700_01 flex sm:flex-col md:flex-col flex-row font-nunitosans sm:gap-5 md:gap-5 items-start justify-start mx-auto md:px-10 sm:px-5 px-[100px] w-full">
        {/* <div className="flex flex-col gap-[34px] items-start justify-start md:mt-0 mt-[57px] w-[21%] md:w-full">
          <div className="flex flex-row gap-[21px] items-center justify-between w-full">
            <Img
              src="images/img_ellipse7.png"
              className="h-20 md:h-auto rounded-[50%] w-20"
              alt="ellipseSeven"
            />
            <div className="md:h-[35px] h-[62px] relative w-[61%]">
              <Text
                className="absolute font-bold inset-x-[0] mx-auto text-blue_gray_900_06 top-[0] w-max"
                variant="body6"
              >
                Anand Singh
              </Text>
              <Text
                className="absolute bottom-[0] font-normal left-[0] text-blue_gray_500"
                variant="body10"
              >
                View Profile
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[26px] items-center justify-start ml-0.5 md:ml-[0] w-[73%] md:w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-auto">
              <Img
                src="images/img_home_blue_gray_900_07.svg"
                className="h-5 w-5"
                alt="home"
              />
              <div className="flex flex-col gap-10 items-start justify-start w-auto">
                <Img
                  src="images/img_contrast.svg"
                  className="h-5 w-5"
                  alt="contrast"
                />
                <Img
                  src="images/img_clock_orange_500.svg"
                  className="h-5 w-5"
                  alt="clock"
                />
                <Img
                  src="images/img_trophy.svg"
                  className="h-5 w-5"
                  alt="trophy"
                />
                <Img
                  src="images/img_user_blue_gray_900_07.svg"
                  className="h-5 w-5"
                  alt="user"
                />
                <Img src="images/img_map.svg" className="h-5 w-5" alt="map" />
                <Img
                  src="images/img_arrowright.svg"
                  className="h-5 w-5"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[33px] items-start justify-start">
              <Text
                className="font-semibold text-blue_gray_900_07"
                variant="body10"
              >
                Home{" "}
              </Text>
              <Text
                className="font-semibold text-blue_gray_900_07"
                variant="body10"
              >
                Messages
              </Text>
              <Text className="font-semibold text-orange_500" variant="body10">
                Bookings
              </Text>
              <Text
                className="font-semibold text-blue_gray_900_07"
                variant="body10"
              >
                Achievements
              </Text>
              <Text
                className="font-semibold text-blue_gray_900_07"
                variant="body10"
              >
                Connections
              </Text>
              <Text
                className="font-semibold text-blue_gray_900_07"
                variant="body10"
              >
                Group Sessions
              </Text>
              <a
                href="javascript:"
                className="font-semibold text-blue_gray_900_07"
              >
                <Text variant="body10">Logout</Text>
              </a>
            </div>
          </div>
        </div>
        <Line className="bg-blue_gray_100_01 h-[786px] md:h-px md:ml-[0] ml-[69px] md:w-full w-px" /> */}
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[63px] md:mt-0 mt-[72px] w-[68%] md:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text className="font-bold text-gray_900" as="h5" variant="h5">
                Bookings
              </Text>

              <div className="tabs-container">
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
              </div>

              <div className="tab-content">
                {activeTab === "Upcoming" ? "No Upcoming booking" : <></>}
                {activeTab === "Pending" ? "No Pending booking" : <></>}
                {activeTab === "Past" ? "No Past booking" : <></>}
                {activeTab === "Cancelled" ? "No Cancelled booking" : <></>}
              </div>
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

export default DesktopTwoPage;
