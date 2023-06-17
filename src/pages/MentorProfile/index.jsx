import React from "react";
import Header from "components/Header";
import { Button, Img, Line, RatingBar, Text } from "components";
import "./mentorProfile.css";

const NewprofilementprPage = () => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[1rem] w-full responsive-view">
        <Header className="bg-orange_500 w-full" />
        <div className="bg-gradient3  flex flex-col font-segoeui items-center justify-end mx-auto p-[23px] sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-2 items-center justify-start max-w-[1087px] mx-auto md:px-5 w-full">
            <div className="bg-white_A700_01 md:h-[100vh] h-[100vh] md:mt-0 my-[5px] p-2.5 relative rounded shadow-bs12 w-[33%] md:w-full">
              <div className="absolute flex md:h-[100vh] h-[100vh] inset-[0] justify-end m-auto w-[91%]">
                <div className="absolute flex flex-col h-full inset-[0] items-center m-auto w-full">
                  <div className="font-segoeui w-full">
                    <div className="flex flex-col gap-[29px] h-full inset-[0] items-center justify-center m-auto  md:px-10 sm:px-5  w-full">
                      <Img
                        src="images/img_ellipse1_150x150.png"
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        alt="ellipseOne_One"
                      />
                      <Text
                        className="font-semibold mb-[18px] text-gray_900"
                        variant="body10"
                      >
                        Interests
                      </Text>
                    </div>

                  </div>

                  <div className=" flex flex-col items-center justify-start  w-[45%]">
                    <div className="bg-white_A700_01 flex flex-row items-center justify-between p-1 rounded shadow-bs12 w-full">
                      <Text
                        className="font-normal ml-[7px] text-gray_900"
                        variant="body12"
                      >
                        Interest 1
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="h-[18px] mr-2.5 w-[18px]"
                        alt="close"
                      />
                    </div>
                  </div>
                  <div className=" bg-white_A700_01 flex flex-row items-center justify-between  p-1 rounded shadow-bs12 w-[45%]">
                    <Text
                      className="font-normal ml-[7px] text-gray_900"
                      variant="body12"
                    >
                      Interest 1
                    </Text>
                    <Img
                      src="images/img_close.svg"
                      className="h-[18px] mr-2.5 w-[18px]"
                      alt="close_One"
                    />
                  </div>
                  <div className=" bg-white_A700_01 flex flex-row items-center justify-between p-1  rounded shadow-bs12 w-[45%]">
                    <Text
                      className="font-normal ml-[7px] text-gray_900"
                      variant="body12"
                    >
                      Interest 1
                    </Text>
                    <Img
                      src="images/img_close.svg"
                      className="h-[18px] mr-2.5 w-[18px]"
                      alt="close_Two"
                    />
                  </div>
                  <div className=" bg-white_A700_01 flex flex-row items-center justify-between p-1  rounded shadow-bs12 w-[45%]">
                    <Text
                      className="font-normal ml-[7px] text-gray_900"
                      variant="body12"
                    >
                      Interest 1
                    </Text>
                    <Img
                      src="images/img_close.svg"
                      className="h-[18px] mr-2.5 w-[18px]"
                      alt="close_Three"
                    />
                  </div>

                  
                  <Text
                      className="font-bold mt-[15px] text-orange_500"
                      variant="body12"
                    >
                      Add Interets
                    </Text>

                  <Text
                    className="font-nunitosans font-semibold italic mt-[30px] text-gray_900"
                    variant="body10"
                  >
                    Average Rating
                  </Text>
                  <div className="flex flex-row items-center justify-center mt-2.5 w-[55%] md:w-full">
                    <RatingBar
                      className="flex justify-between w-[172px]"
                      value={5}
                      starCount={5}
                      activeColor="#ff9915"
                      size={22}
                    ></RatingBar>
                  </div>
                  <Button
                    className="cursor-pointer font-normal font-segoeui min-w-[117px] mt-[20px] text-base text-center text-white_A700_01"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineAmberA700"
                  >
                    schedule call
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 h-[100vh] flex-col gap-3 items-center justify-start w-[68%] md:w-full">
              <div className="bg-white_A700_01 flex flex-col items-center justify-start pl-1 py-1 rounded w-[99%] md:w-full">
                <div className="flex flex-col gap-[15px] justify-start my-[9px] w-full">
                  <div className="flex flex-row sm:gap-10 gap-[106.15px] items-start justify-start pl-[15px] md:pr-10 sm:pr-5 w-auto md:w-full">
                    <Text
                      className="font-normal text-gray-900 w-auto"
                      variant="body14"
                    >
                      Full Name
                    </Text>
                    <Text
                      className="font-normal text-gray_600_01 w-auto"
                      variant="body14"
                    >
                      {userDetails.name}
                    </Text>
                  </div>
                  <Line className="bg-black_900_19 h-px w-[96%]" />
                  <div className="flex flex-row sm:gap-10 gap-[140.15px] items-start justify-start pl-[15px] md:pr-10 sm:pr-5 w-auto md:w-full">
                    <Text
                      className="font-normal text-gray-900 w-auto"
                      variant="body14"
                    >
                      Email
                    </Text>
                    <Text
                      className="font-normal text-gray_600_01 w-auto"
                      variant="body16"
                    >
                      {userDetails.email}
                    </Text>
                  </div>
                  <Line className="bg-black_900_19 h-px w-[96%]" />
                  <div className="flex flex-row gap-[98px] pl-[15px] items-start justify-start md:w-full">
                    <Text
                      className="font-normal mb-0.5 text-gray-900"
                      variant="body14"
                    >
                      Occupation
                    </Text>
                    <Text
                      className="font-normal mt-0.5 text-gray_600_01"
                      variant="body14"
                    >
                      Graphics and Web development
                    </Text>
                  </div>
                  <Line className="bg-black_900_19 h-px w-[96%]" />
                  <div className="flex flex-row sm:gap-10 gap-[131.15px] items-start justify-start pl-[15px] md:pr-10 sm:pr-5 pr-[412.51px] w-auto md:w-full">
                    <Text
                      className="font-normal text-gray-900 w-auto"
                      variant="body16"
                    >
                      Gender
                    </Text>
                    <Text
                      className="font-normal text-gray_600_01 w-auto"
                      variant="body14"
                    >
                      Male
                    </Text>
                  </div>
                  <Line className="bg-black_900_19 h-px w-[96%]" />

                  <div className="flex flex-row sm:gap-10 gap-[100.15px] items-start justify-start pl-[15px] md:pr-10 sm:pr-5 w-auto md:w-full">
                    <Text
                      className="font-normal w-[25%] ml-1 md:ml-[0] text-gray-900"
                      variant="body14"
                    >
                      about me
                    </Text>

                    <div className="outer-white">
                      <Text
                        className="leading-[15.00px] ml-3 md:ml-[0] text-gray_600_01 w-[98%] sm:w-full"
                        variant="body22"
                      >
                        Norem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra,{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col pl-[15px] flex-row sm:gap-10 gap-[108px] items-start justify-start w-[90%] md:w-full">
                    <Button
                      className="cursor-pointer font-normal min-w-[53px] text-base text-center text-white_A700_01"
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineGray900"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
              {/* <div className="flex md:flex-col flex-row gap-4 items-start justify-start pb-4 px-2 w-auto md:w-full">
                <div className="bg-white_A700_01 flex flex-col items-start justify-start rounded shadow-bs12 w-auto">
                  <div className="flex flex-col items-center justify-end p-2.5 rounded w-full">
                    <div className="flex flex-col items-start justify-start mt-[5px] w-[97%] md:w-full">
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[130.5px] w-auto">
                        <Text
                          className="font-normal italic text-gray_900 w-auto"
                          variant="body14"
                        >
                          Experties
                        </Text>
                      </div>
                      <Text
                        className="mt-[18px] text-gray-900"
                        variant="body19"
                      >
                        Web Design
                      </Text>
                      <div className="h-[5px] overflow-hidden md:pr-10 sm:pr-5 pr-[63.47px] relative w-auto">
                        <div className="w-full h-full absolute bg-blue_gray_50_01 rounded-[2px]"></div>
                        <div
                          className="h-full absolute bg-amber_A700"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-1 w-full">
                        <Text
                          className="mt-[17px] text-gray-900"
                          variant="body19"
                        >
                          Website Markup
                        </Text>
                        <Text
                          className="font-semibold mb-[17px] text-blue_gray_900_05"
                          variant="body18"
                        >
                          80%
                        </Text>
                      </div>
                      <div className="h-[5px] overflow-hidden md:pr-10 sm:pr-5 pr-[88.86px] relative w-auto">
                        <div className="w-full h-full absolute bg-blue_gray_50_01 rounded-[2px]"></div>
                        <div
                          className="h-full absolute bg-amber_A700"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-1 w-full">
                        <Text
                          className="mt-[17px] text-gray-900"
                          variant="body19"
                        >
                          One Page
                        </Text>
                        <Text
                          className="font-semibold mb-[17px] text-blue_gray_900_05"
                          variant="body18"
                        >
                          80%
                        </Text>
                      </div>
                      <div className="h-[5px] overflow-hidden sm:pr-5 pr-[34.91px] relative w-auto">
                        <div className="w-full h-full absolute bg-blue_gray_50_01 rounded-[2px]"></div>
                        <div
                          className="h-full absolute bg-amber_A700"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[291px] mt-[3px] text-blue_gray_900_05"
                        variant="body18"
                      >
                        80%
                      </Text>
                      <Text className="text-gray-900" variant="body23">
                        Mobile Template
                      </Text>
                      <div className="h-[5px] mt-0.5 overflow-hidden md:pr-10 sm:pr-5 pr-[142.81px] relative w-auto">
                        <div className="w-full h-full absolute bg-blue_gray_50_01 rounded-[2px]"></div>
                        <div
                          className="h-full absolute bg-amber_A700"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[3px] w-full">
                        <Text
                          className="mt-[17px] text-gray-900"
                          variant="body19"
                        >
                          Backend API
                        </Text>
                        <Text
                          className="font-semibold mb-[17px] text-blue_gray_900_05"
                          variant="body18"
                        >
                          80%
                        </Text>
                      </div>
                      <div className="h-[5px] overflow-hidden md:pr-10 sm:pr-5 pr-[107.91px] relative w-auto">
                        <div className="w-full h-full absolute bg-blue_gray_50_01 rounded-[2px]"></div>
                        <div
                          className="h-full absolute bg-amber_A700"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                      <Text
                        className="font-semibold md:ml-[0] ml-[291px] mt-[3px] text-blue_gray_900_05"
                        variant="body18"
                      >
                        80%
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="font-nunitosans h-[292px] relative w-[349px]">
                  <div className="bg-white_A700_01 h-[292px] m-auto rounded shadow-bs12 w-full"></div>
                  <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto p-3 w-full">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] md:pr-10 sm:pr-5 pr-[130.51px] w-auto">
                      <Text
                        className="font-semibold text-blue_gray_900_05 w-auto"
                        variant="body10"
                      >
                        Analytics
                      </Text>
                    </div>
                    <div className="h-[50px] md:h-[76px] mt-7 relative w-[99%]">
                      <div className="bg-white_A700_01 flex flex-col h-full items-start justify-end m-auto p-1.5 rounded-[5px] shadow-bs2 w-full">
                        <Img
                          src="images/img_home.svg"
                          className="h-9"
                          alt="home"
                        />
                      </div>
                      <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between my-auto right-[3%] w-[76%]">
                        <Text
                          className="font-semibold text-blue_gray_900_05"
                          variant="body10"
                        >
                          Total learning time
                        </Text>
                        <Text
                          className="font-semibold text-orange_500"
                          variant="body10"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                    <div className="h-[50px] md:h-[68px] mt-5 relative w-[99%]">
                      <div className="bg-white_A700_01 flex flex-col h-full items-start justify-end m-auto p-1.5 rounded-[5px] shadow-bs2 w-full">
                        <Img
                          src="images/img_calendar.svg"
                          className="h-9 ml-1.5 md:ml-[0] w-[37px]"
                          alt="calendar"
                        />
                      </div>
                      <div className="absolute flex flex-row h-max inset-y-[0] items-center justify-between my-auto right-[3%] w-[76%]">
                        <Text
                          className="font-semibold text-blue_gray_900_05"
                          variant="body10"
                        >
                          Average Attendance
                        </Text>
                        <Text
                          className="font-semibold text-orange_500"
                          variant="body10"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[50px] items-end justify-start my-5 p-[9px] w-[99%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group36.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-[55px] items-start justify-end w-[81%] md:w-full">
                        <Text
                          className="font-semibold text-blue_gray_900_05"
                          variant="body10"
                        >
                          Sessions Complted
                        </Text>
                        <Text
                          className="font-semibold text-orange_500"
                          variant="body10"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewprofilementprPage;
