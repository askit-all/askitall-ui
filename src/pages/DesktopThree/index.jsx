import React from "react";

import { Button, Img, Text } from "components";

const DesktopThreePage = () => {
  return (
    <>
      <div className="bg-white_A700_01 flex flex-col items-center justify-start mx-auto pb-[49px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="bg-orange_500 h-[60px] shadow-bs9 w-full"></div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1079px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[55px] w-[85%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-[67%] md:w-full">
                <Img
                  src="images/img_menu.svg"
                  className="h-[85px]"
                  alt="menu"
                />
                <Img
                  src="images/img_group130.svg"
                  className="h-[65px] mt-[3px]"
                  alt="group130"
                />
              </div>
              <Text
                className="font-normal font-nunitosans ml-1 md:ml-[0] mt-[43px] text-center text-gray_900"
                variant="body10"
              >
                Terms
              </Text>
              <Text
                className="bg-clip-text bg-gradient4  font-poppins mt-[38px] text-transparent"
                variant="body2"
              >
                <span className="md:text-[32px] sm:text-3xl text-blue_gray_400_02 text-[34px] font-nunitosans text-left font-normal">
                  A{" "}
                </span>
                <a
                  href="javascript:"
                  className="md:text-[32px] sm:text-3xl text-blue_gray_400_02 text-[34px] font-nunitosans text-left font-normal underline"
                >
                  Terms and Conditions agreement
                </a>
                <span className="md:text-[32px] sm:text-3xl text-blue_gray_400_02 text-[34px] font-nunitosans text-left font-normal">
                  <>
                    {" "}
                    is where you let the public know the terms, rules and
                    guidelines for using your website or mobile app. They
                    include topics such as acceptable use, restricted behavior
                    and limitations of liability.
                    <br />
                    This article will get you started with creating your own
                    custom Terms and Conditions agreement. We&#39;ve also put
                    together a Sample Terms and Conditions Template that you can
                    use to help you write your own.
                  </>
                </span>
              </Text>
              <div className="flex md:flex-col flex-row font-nunitosans md:gap-10 gap-[74px] items-center justify-end md:ml-[0] ml-[98px] mt-[47px] w-[83%] md:w-full">
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[339px] sm:text-4xl md:text-[42px] text-[46px] text-amber_A700_01 text-center"
                  shape="RoundedBorder41"
                  size="lg"
                  variant="OutlineAmberA70001_1"
                >
                  Decline{" "}
                </Button>
                <Button
                  className="cursor-pointer font-normal leading-[normal] min-w-[339px] sm:text-4xl md:text-[42px] text-[46px] text-center text-white_A700_01"
                  shape="RoundedBorder41"
                  size="lg"
                  variant="FillAmberA70001"
                >
                  Accept
                </Button>
              </div>
            </div>
            <div className="bg-gray_400_03 flex md:flex-1 flex-col items-center justify-start mb-[122px] py-[152px] w-[2%] md:w-full">
              <div className="bg-amber_A700_01 h-[68px] mb-[323px] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
