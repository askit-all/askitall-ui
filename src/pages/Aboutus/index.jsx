import React from "react";
import "./about.css";
import { Button, Img, Text } from "components";
import Header from "components/Header";

const AboutusPage = () => {
  return (
    <>
    <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[1rem] w-full responsive-view">
        {/* <div className="flex flex-col gap-[57px] justify-start w-full"> */}
        <Header className="bg-orange_500 w-full" />
        
        
          <div className=" bg-amber_A700_66  flex flex-col font-commissioner  items-center justify-end mx-auto p-2 w-full">
          <Img
            src="images/img_1stone1.png"
            className=" h-[450px] justify-center m-auto object-cover w-[42%]"
            alt="1stoneOne"
          />
            <Text
              className="custom-text font-semibold text-center text-white_A700_01 tracking-[-0.80px]"
            >
              WHAT WE ARE AND WHAT WE AIM
            </Text>
          </div>
     
        <div className="bg-white_A700 flex flex-col items-start justify-start mt-5 mx-auto p-5 md:px-5 rounded-[30px] shadow-bs2" style={{margin:'1rem'}}>
          <Text
            className="font-rubik text-gray_800_01 tracking-[-0.66px]"
            variant="body3"
          >
            About Us
          </Text>
          <Text
            className="font-commissioner font-semibold leading-[26.00px] text-gray_800_01 text-justify w-full"
            variant="body12"
          >
            Roffers.co.uk (Roffers LTD) is the UK’s first hyperlocal online
            platform that helps local merchants to connect with their potential
            customers in real-time. With Roffers, merchants can build a strong
            brand presence and increase high visibility to get discovered
            easily.
          </Text>
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
