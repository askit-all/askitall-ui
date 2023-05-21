import React from "react";

import { Button, Img, Text } from "components";

const AboutusPage = () => {
  return (
    <>
      <div className="bg-gray_50_01 flex flex-col font-nunitosans sm:gap-10 md:gap-10 gap-[74px] items-center justify-start mx-auto pb-[157px] w-full">
        <div className="md:h-[460px] h-[522px] md:px-5 relative w-full">
          <Img
            src="images/img_1stone1.png"
            className="absolute h-[450px] inset-[0] justify-center m-auto object-cover w-[42%]"
            alt="1stoneOne"
          />
          <div className="absolute bg-orange_500 flex flex-row inset-x-[0] items-center justify-start mx-auto p-2.5 shadow-bs9 top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-5 w-[97%]">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[147px]"
                rightIcon={
                  <Img
                    src="images/img_question_white_a700.svg"
                    className="mt-px ml-[15px]"
                    alt="question"
                  />
                }
                shape="CircleBorder20"
                size="md"
                variant="OutlineWhiteA700_2"
              >
                <div className="font-semibold text-left text-white_A700 text-xl">
                  Mentee
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[145px] md:ml-[0] ml-[30px]"
                rightIcon={
                  <Img
                    src="images/img_volume_amber_a700_01.svg"
                    className="mt-px ml-[15px]"
                    alt="volume"
                  />
                }
                shape="CircleBorder20"
                size="md"
                variant="OutlineWhiteA700"
              >
                <div className="font-semibold text-amber_A700_01 text-left text-xl">
                  Mentor
                </div>
              </Button>
              <Img
                src="images/img_notification.svg"
                className="h-[26px] md:ml-[0] ml-[955px]"
                alt="notification"
              />
              <Img
                src="images/img_ellipse6.png"
                className="h-9 md:h-auto ml-8 md:ml-[0] rounded-[50%] w-9"
                alt="ellipseSix"
              />
            </div>
          </div>
          <div className="absolute bg-amber_A700_66 bottom-[0] flex flex-col font-commissioner inset-x-[0] items-center justify-end mx-auto p-2 w-full">
            <Text
              className="font-semibold mt-[395px] text-center text-white_A700_01 tracking-[-0.80px]"
              as="h5"
              variant="h5"
            >
              WHAT WE ARE AND WHAT WE AIM
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[38px] items-start justify-start md:px-5">
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
