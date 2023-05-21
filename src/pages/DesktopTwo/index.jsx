import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const DesktopTwoPage = () => {
  return (
    <>
      <div className="bg-white_A700_01 flex sm:flex-col md:flex-col flex-row font-nunitosans sm:gap-5 md:gap-5 items-start justify-start mx-auto md:px-10 sm:px-5 px-[100px] w-full">
        <div className="flex flex-col gap-[34px] items-start justify-start md:mt-0 mt-[57px] w-[21%] md:w-full">
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
        <Line className="bg-blue_gray_100_01 h-[786px] md:h-px md:ml-[0] ml-[69px] md:w-full w-px" />
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[63px] md:mt-0 mt-[72px] w-[68%] md:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text className="font-bold text-gray_900" as="h5" variant="h5">
                Bookings
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[18px] w-[91%] md:w-full">
                <Text className="font-normal text-black_900" variant="body6">
                  <span className="md:text-[23px] sm:text-[21px] text-blue_gray_900_07 text-[25px] font-nunitosans text-left">
                    This session sre following your local timezone
                  </span>
                  <span className="md:text-[23px] sm:text-[21px] text-black_900 text-[25px] font-nunitosans text-left">
                    {" "}
                  </span>
                  <span className="md:text-[23px] sm:text-[21px] text-black_900 text-[25px] font-nunitosans text-left font-semibold">
                    Asia/Calcutta
                  </span>
                  <span className="md:text-[23px] sm:text-[21px] text-black_900 text-[25px] font-nunitosans text-left">
                    {" "}
                  </span>
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[5px] text-amber_A700_01"
                  variant="body6"
                >
                  Update
                </Text>
              </div>
              <Input
                wrapClassName="flex mt-[22px] w-[93%]"
                className="font-normal md:text-[21px] p-0 placeholder:text-black_900 sm:text-[19px] text-[23px] text-black_900 text-left w-full"
                name="language_Three"
                placeholder="Keep track of the quality of sessions as you go. View Quality "
                prefix={
                  <div className="mt-px mb-1.5 mr-[11px] sm:w-full sm:mx-0 w-[3%] bg-orange_500">
                    <Img
                      src="images/img_airplane.svg"
                      className="my-auto"
                      alt="airplane"
                    />
                  </div>
                }
                shape="RoundedBorder10"
                size="lg"
                variant="FillYellow50"
              ></Input>
              <div className="flex flex-col items-center justify-start mt-10 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-3/5 md:w-full">
                    <Text
                      className="font-semibold text-black_900"
                      variant="body10"
                    >
                      Upcoming{" "}
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[69px] text-black_900"
                      variant="body10"
                    >
                      Pending
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[77px] text-black_900"
                      variant="body10"
                    >
                      Past{" "}
                    </Text>
                    <Text
                      className="font-semibold sm:ml-[0] ml-[57px] text-black_900"
                      variant="body10"
                    >
                      Cancelled
                    </Text>
                  </div>
                  <div className="h-0.5 md:h-1 mt-0.5 relative w-full">
                    <Line className="absolute bg-blue_gray_100_01 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                    <Line className="absolute bg-orange_500 h-0.5 inset-y-[0] left-[0] my-auto w-[12%]" />
                  </div>
                </div>
              </div>
              <Text
                className="font-semibold mt-[35px] text-blue_gray_500"
                variant="body10"
              >
                You have no upcoming booking - start sharing a conversation with
                a mentor.
              </Text>
            </div>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[243px] text-center text-white_A700_01 text-xl"
              shape="CircleBorder25"
              size="lg"
              variant="OutlineGray40001"
            >
              Explore mentors
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
