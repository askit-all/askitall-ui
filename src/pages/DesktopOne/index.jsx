import { useState } from "react";

import { Img, Text } from "components";
import Header from "components/Header";
import DesktopTwoPage from "pages/DesktopTwo";
import ProfilementeePage from "pages/MenteeProfile";
import NewprofilementprPage from "pages/MentorProfile";
import { useNavigate } from "react-router-dom";

const egJobSearchCareerTransitionEtcOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProfleHome = () => {

  const history = useNavigate();

  const [tabSelected, setTabSelected] = useState("home");
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const handleTabChange = (type) => {
    setTabSelected(type);
  };

  const handleLogout = () => {
    localStorage.clear();
    history("/login");
  };

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto w-full responsive-view">
        <Header className="bg-orange_500 w-full" />
        <div className="bg-white_A700_01 flex sm:flex-col w-full">
          <div className="w-[30%] sm:w-full border-r-2 border-gray-300 p-[1rem]">
            <div className="flex flex-col items-center mb-5">
              <Img
                src={
                  userDetails
                    ? userDetails.profileImageUrl
                      ? userDetails.profileImageUrl
                      : "images/img_ellipse1_150x150.png"
                    : "images/img_ellipse1_150x150.png"
                }
                className="h-20 md:h-auto rounded-[50%] w-20"
                alt="ellipseSeven"
              />
              <div className="my-4">
                <Text
                  className="font-bold my-3 inset-x-[0] mx-auto text-blue_gray_900_06 top-[0] w-max"
                  variant="body6"
                >
                  {userDetails.name}
                </Text>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly sm:w-100">
              <div
                className={`flex justify-evenly items-center my-3 ${
                  tabSelected === "home" ? "tab-selected" : ""
                }`}
                onClick={() => handleTabChange("home")}
              >
                <div className="flex justify-end w-[30%]">
                  <Img
                    src="images/img_home.svg"
                    className="h-5 w-5"
                    alt="home"
                  />
                </div>
                <div className="ml-10 sm:ml-3 w-[70%]">
                  <Text className="font-semibold" variant="body10">
                    Home{" "}
                  </Text>
                </div>
              </div>
              <div
                className={`flex justify-evenly items-center my-3 ${
                  tabSelected === "booking" ? "tab-selected" : ""
                }`}
                onClick={() => handleTabChange("booking")}
              >
                <div className="flex justify-end w-[30%]">
                  <Img
                    src="images/img_clock_blue_gray_900_07.svg"
                    className="h-5 w-5"
                    alt="clock"
                  />
                </div>
                <div className="ml-10 sm:ml-3 w-[70%]">
                  <Text
                    className="font-semibold text-blue_gray_900_07"
                    variant="body10"
                  >
                    Bookings
                  </Text>
                </div>
              </div>

              <div
                className="flex justify-evenly items-center my-3"
                onClick={() => handleLogout()}
              >
                <div className="flex justify-end w-[30%]">
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-5 w-5"
                    alt="arrowright"
                  />
                </div>
                <div className="ml-10 sm:ml-3 w-[70%]">
                  <a
                    href="javascript:"
                    className="font-semibold text-blue_gray_900_07"
                  >
                    <Text variant="body10">Logout</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[70%] sm:w-full md:w-[70%]">
            {tabSelected == "home" &&
            userDetails &&
            userDetails.type == "mentor" ? (
              <NewprofilementprPage showHeader={false} />
            ) : (
              <></>
            )}

            {tabSelected == "home" &&
            userDetails &&
            userDetails.type == "mentee" ? (
              <ProfilementeePage showHeader={false} />
            ) : (
              <></>
            )}

            {tabSelected == "booking" ? <DesktopTwoPage /> : <></>}
          </div>

          {/* <Line className="bg-blue_gray_100_01 h-[786px] md:h-px md:ml-[0] ml-[69px] md:w-full w-px" />
        <div className="flex flex-col gap-[11px] justify-start md:ml-[0] ml-[46px] md:mt-0 mt-[47px] w-[64%] md:w-full">
          <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] w-[46%] md:w-full">
            <div className="flex flex-col gap-[11px] items-start justify-start w-full">
              <div className="flex flex-row gap-[17px] items-center justify-start w-[64%] md:w-full">
                <Text
                  className="font-bold text-gray_900_04"
                  as="h5"
                  variant="h5"
                >
                  Welcome
                </Text>
                <Img
                  src="images/img_fire.svg"
                  className="h-[38px] w-[38px]"
                  alt="fire"
                />
              </div>
              <Text className="font-normal text-blue_gray_500" variant="body6">
                You have no upcoming sessions
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="bg-gray_50_02 flex flex-col items-center justify-start p-2.5 rounded-[12px] shadow-bs13 w-full">
              <div className="flex flex-col items-start justify-start mb-[29px] w-[96%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <Text
                    className="sm:mt-0 mt-[3px] text-gray_900_04 tracking-[0.90px]"
                    variant="body5"
                  >
                    Let’s start with the basics
                  </Text>
                  <div className="h-[35px] relative w-[4%] sm:w-full">
                    <div className="absolute bg-amber_100 h-[25px] inset-[0] justify-center m-auto rounded-[12px] w-[25px]"></div>
                    <Text
                      className="absolute font-normal h-full inset-[0] justify-center m-auto rotate-[-46deg] text-blue_gray_900_07 w-max"
                      variant="body6"
                    >
                      +
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[66px] items-start justify-start mt-[13px] w-auto md:w-full">
                  <Text
                    className="font-normal text-blue_gray_500 w-auto"
                    variant="body6"
                  >
                    Get more by setting up a profile you love.
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_500 w-auto"
                    variant="body6"
                  >
                    50% completed
                  </Text>
                </div>
                <SeekBar
                  inputValue={[null]}
                  trackColors={["#ff9915", "#ffed99"]}
                  thumbClassName="h-[undefinedpx] w-[undefinedpx] flex justify-center items-center rounded-[50%] outline-none"
                  className="flex h-2.5 mt-[19px] rounded-sm w-[52%]"
                  trackClassName="h-[3px] flex rounded-sm w-full"
                />{" "}
                <div className="flex flex-row gap-[18px] items-start justify-start mt-[42px] w-[28%] md:w-full">
                  <Img
                    src="images/img_checkmark_orange_500.svg"
                    className="h-[33px] w-[33px]"
                    alt="checkmark"
                  />
                  <div className="h-[35px] relative w-[74%]">
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto">
                      <Text
                        className="font-normal text-blue_gray_400 tracking-[0.75px]"
                        variant="body6"
                      >
                        Verify email{" "}
                      </Text>
                    </div>
                    <Line className="absolute bg-blue_gray_400 h-px inset-x-[0] mx-auto top-[46%] w-full" />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start mt-3 w-[89%] md:w-full">
                  <div className="border border-orange_500 border-solid h-[33px] md:mt-0 mt-[3px] rounded-[16px] w-[33px]"></div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-[92%] md:w-full">
                    <Text
                      className="font-semibold sm:mt-0 mt-0.5 text-orange_500"
                      variant="body6"
                    >
                      Book yor first session{" "}
                    </Text>
                    <div className="bg-blue_gray_400 h-0.5 mb-[11px] sm:mt-0 mt-[23px] w-[5%]"></div>
                    <Text
                      className="font-normal mb-0.5 text-blue_gray_400"
                      variant="body6"
                    >
                      Learn/network with mentors.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray_100_01 h-px w-full" />
            <div className="bg-orange_500 flex flex-col gap-[33px] items-start justify-end p-7 sm:px-5 rounded-[12px] shadow-bs13 w-full">
              <Text
                className="font-bold ml-3 md:ml-[0] mt-1 text-gray_900"
                variant="body6"
              >
                What is your learning goal today?
              </Text>
              <div className="bg-white_A700_01 flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[13px] p-2.5 rounded-lg w-[98%] md:w-full">
                <SelectBox
                  className="font-normal leading-[normal] sm:ml-[0] ml-[19px] text-blue_gray_400_01 text-left text-xl w-[52%] sm:w-full"
                  placeholderClassName="text-blue_gray_400_01"
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-[7px] mr-[0] w-[13px]"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupSixtyEight"
                  options={egJobSearchCareerTransitionEtcOptionsList}
                  isSearchable={false}
                  placeholder="Eg: Job search , Career transition etc."
                />
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[197px] text-center text-white_A700_01 text-xl"
                  shape="CircleBorder25"
                  size="lg"
                  variant="OutlineGray40001"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div> */}
          {/* <div className="bg-gray_400_02 flex flex-col md:gap-10 gap-[598px] items-center justify-start ml-14 md:ml-[0] md:px-5 w-[2%] md:w-full">
          <div className="bg-gray_300_04 flex flex-col items-center justify-start p-0.5 w-full">
            <Img src="images/img_vector.svg" className="h-1" alt="vector" />
          </div>
          <div className="bg-gray_300_04 flex flex-col items-center justify-end p-0.5 rotate-[180deg] w-full">
            <Img
              src="images/img_vector_gray_600_03.svg"
              className="h-1 mt-[166px]"
              alt="vector_One"
            />
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default ProfleHome;
