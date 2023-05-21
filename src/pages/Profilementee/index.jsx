import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const ProfilementeePage = () => {
  return (
    <>
      <div className="bg-gradient3  flex flex-col font-segoeui items-center justify-start mx-auto p-[25px] sm:px-5 w-full">
        <div className="bg-white_A700_01 flex flex-col items-end justify-start max-w-[1055px] mx-auto pr-3.5 md:px-5 py-3.5 w-full">
          <div className="sm:h-[218px] h-[301px] md:h-[562px] mt-[22px] relative w-full">
            <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[58px] top-[0] w-full">
              <div className="flex flex-col relative w-[33%] md:w-full">
                <div className="md:h-[149px] h-[173px] mx-auto pb-6 sm:px-5 px-6 w-full">
                  <Img
                    src="images/img_images.png"
                    className="h-[149px] mx-auto object-cover w-[71%]"
                    alt="images"
                  />
                  <Button
                    className="absolute bottom-[0] cursor-pointer font-normal inset-x-[0] min-w-[225px] mx-auto text-[15px] text-center text-white_A700_01"
                    size="lg"
                    variant="FillGray900b7"
                  >
                    Change Photo
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[225px] mt-[-7.8px] mx-auto text-base text-center text-gray_900_04 z-[1]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineAmberA70001"
                >
                  Chat Now
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[30px] w-[51%] md:w-full">
                <Text
                  className="font-normal text-blue_gray_900_04"
                  variant="body10"
                >
                  Kshiti Ghelani
                </Text>
                <Text
                  className="font-normal mt-[5px] text-amber_A700"
                  variant="body14"
                >
                  Mentee{" "}
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start mt-[22px] w-full">
                  <Text className="mt-[3px] text-gray_600_02" variant="body22">
                    Questions Posted:
                  </Text>
                  <Text
                    className="font-semibold text-blue_gray_700_01"
                    variant="body16"
                  >
                    632
                  </Text>
                </div>
                <div className="border-b border-gray_300_03 border-solid flex flex-col items-start justify-start mt-4 w-full">
                  <Button
                    className="cursor-pointer font-semibold min-w-[78px] text-base text-blue_gray_700_01 text-center"
                    shape="CustomBorderTL4"
                    size="lg"
                    variant="OutlineBlue800"
                  >
                    About
                  </Button>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold mb-[166px] min-w-[102px] md:ml-[0] ml-[29px] text-base text-center text-white_A700_01"
                shape="RoundedBorder4"
                size="sm"
                variant="FillAmberA70001"
              >
                Edit Profile
              </Button>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[68%]">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="font-semibold mb-[15px] ml-[13px] text-gray_900_04"
                  variant="body14"
                >
                  Name
                </Text>
                <Text
                  className="font-semibold mb-[15px] mr-[271px] text-amber_A700"
                  variant="body14"
                >
                  Kshiti123
                </Text>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="font-semibold mb-[15px] ml-[13px] text-gray_900_04"
                  variant="body14"
                >
                  Gender
                </Text>
                <Text
                  className="font-semibold mb-[15px] mr-[285px] text-amber_A700"
                  variant="body14"
                >
                  female
                </Text>
              </div>
              <div className="h-10 sm:h-28 relative w-full">
                <div className="flex flex-row sm:gap-10 h-full items-start justify-between ml-[15px] w-[76%]">
                  <Text
                    className="font-semibold text-gray_900_04"
                    variant="body14"
                  >
                    Email
                  </Text>
                  <Text
                    className="font-semibold text-amber_A700"
                    variant="body14"
                  >
                    kshitighelani@gmail.com
                  </Text>
                </div>
                <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-full inset-[0] items-start justify-center m-auto w-full">
                  <Text
                    className="font-semibold mb-[15px] sm:ml-[0] ml-[13px] text-gray_900_04"
                    variant="body14"
                  >
                    Email
                  </Text>
                  <Text
                    className="font-semibold mb-[13px] mr-[152px] text-amber_A700"
                    variant="body14"
                  >
                    kshitighelani@gmail.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[290px] items-start justify-end w-[68%] md:w-full">
            <Text
              className="font-semibold mb-[15px] text-gray_900_04"
              variant="body14"
            >
              interests
            </Text>
            <Text
              className="font-semibold mb-[13px] mr-[87px] text-amber_A700"
              variant="body14"
            >
              Cricket, Poetry, singing, Designing
            </Text>
          </div>
          <div className="bg-white_A700_01 flex flex-col font-nunitosans items-center justify-start mb-2.5 mr-[49px] mt-[22px] pb-5 rounded-[16px] shadow-bs10 w-[90%] md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="bg-amber_A700_01 flex flex-col items-start justify-end p-2.5 w-full">
                <Text
                  className="font-bold md:ml-[0] ml-[9px] text-white_A700_01"
                  variant="body10"
                >
                  Questions posted{" "}
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-[96%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Input
                    wrapClassName="w-full"
                    className="font-semibold p-0 placeholder:text-black_900 text-black_900 text-left text-xl w-full"
                    name="groupTwo"
                    placeholder="Lorem ipsuim"
                    shape="RoundedBorder7"
                    size="xl"
                    variant="FillWhiteA70001"
                  ></Input>
                  <Input
                    wrapClassName="mt-2.5 w-full"
                    className="font-semibold p-0 placeholder:text-black_900 text-black_900 text-left text-xl w-full"
                    name="groupThree"
                    placeholder="Lorem ipsuim"
                    shape="RoundedBorder7"
                    size="xl"
                    variant="FillWhiteA70001"
                  ></Input>
                  <Input
                    wrapClassName="mt-2.5 w-full"
                    className="font-semibold p-0 placeholder:text-black_900 text-black_900 text-left text-xl w-full"
                    name="groupFour"
                    placeholder="Lorem ipsuim"
                    shape="RoundedBorder7"
                    size="xl"
                    variant="FillWhiteA70001"
                  ></Input>
                  <Input
                    wrapClassName="mt-2.5 w-full"
                    className="font-semibold p-0 placeholder:text-black_900 text-black_900 text-left text-xl w-full"
                    name="groupFive"
                    placeholder="Lorem ipsuim"
                    shape="RoundedBorder7"
                    size="xl"
                    variant="FillWhiteA70001"
                  ></Input>
                  <Button
                    className="cursor-pointer font-semibold min-w-[102px] mt-[29px] text-base text-center text-white_A700_01"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillAmberA70001"
                  >
                    View all
                  </Button>
                </div>
                <Line className="bg-gray_900_05 h-[107px] md:h-[3px] mb-[217px] md:mt-0 mt-7 w-[3px] md:w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilementeePage;
