import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";
import { useNavigate } from "react-router-dom";

const enOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepagenewuserOnePage = () => {
  const history = useNavigate();

  const onClickRegister = () => {
    history("/signup");
  }
  const onClickLogin = () => {
    history("/login");
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans gap-[53px] items-center justify-star w-full">
        <div className="flex md:flex-col gap-11 items-center justify-evenly p-20 sm:p-5 w-full">
          <div>
            <Text className="font-bold text-black_900">
              <span className="md:text-[40px] sm:text-[30px] text-gray_900 text-[50px] font-montserrat text-left font-semibold">
                <>
                  &quot;Get Answers to <br />
                </>
              </span>
              <span className="md:text-[40px] sm:text-[30px] text-black_900 text-[50px] font-montserrat text-left font-semibold">
                {" "}
              </span>
              <span className="md:text-[40px] sm:text-[30px] text-amber_A700 text-[50px] font-montserrat text-left font-semibold">
                Your Questions
              </span>
              <span className="md:text-[40px] sm:text-[30px] text-black_900 text-[50px] font-montserrat text-left font-semibold">
                <>
                  ,<br />{" "}
                </>
              </span>
              <span className="md:text-[40px] sm:text-[30px] text-black_900_01 text-[50px] font-montserrat text-left font-semibold">
                <>Fast and Easy&quot;</>
              </span>
            </Text>
            <div className="flex flex-row mt-5 font-montserrat gap-5 w-full items-center justify-center">
              <Button
                className="cursor-pointer font-medium leading-[normal] text-center text-white_A700_01"
                shape="CircleBorder20"
                size="lg"
                variant="FillOrange500"
                style={{ width: "50%" }}
                onClick={onClickRegister}
              >
                Register
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] text-center text-orange_500"
                shape="CircleBorder20"
                size="lg"
                variant="OutlineOrange500"
                style={{ width: "50%" }}
                onClick={onClickLogin}
              >
                Login
              </Button>
            </div>
          </div>
          <div>
            <img src="images/landing1.png" alt="" />
          </div>
        </div>

        <div className="bg-[#ff9915]" style={{ padding: "5rem 1rem" }}>
          <div className="flex flex-col font-oxygen items-center w-full">
            <Text
              className="text-white mb-11 text-center w-auto"
              as="h2"
              variant="h2"
            >
              How it is work
            </Text>
          </div>
          <div className="bg-white_A700 font-nunito flex md:flex-col rounded-[50px] shadow-bs7 w-full">
            <div className="flex flex-wrap justify-evenly sm:flex-col gap-10">
              <div className="flex flex-col w-[20%] sm:w-full md:w-[40%]">
                <div className="mt-3">
                  <div className="flex w-[20%] sm:w-[15%] my-2 bg-orange_500 justify-center m-auto rounded-[50%]">
                    <Text
                      className="font-medium text-center text-white_A700_01 w-max"
                      as="h5"
                      variant="h5"
                    >
                      1
                    </Text>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Img
                    src="images/ask-a-question-adobeexpress-1@2x.png"
                    className="justify-center w-[25vw] md:w-full"
                    style={{ height: "calc(100vh - 33rem)" }}
                    alt="group153"
                  />
                </div>
                <div className="flex justify-center my-2 items-center">
                  <Text
                    className="font-medium text-center md:text-[40px] sm:text-[30px] text-black_900 text-[50px] w-max"
                    as="h5"
                    variant="h5"
                  >
                    Post a Question
                  </Text>
                </div>
              </div>
              <div className="flex flex-col w-[20%] sm:w-full md:w-[40%]">
                <div className="mt-3">
                  <div className="flex w-[20%] sm:w-[15%] my-2 bg-orange_500 justify-center m-auto rounded-[50%]">
                    <Text
                      className="font-medium text-center text-white_A700_01 w-max"
                      as="h5"
                      variant="h5"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Img
                    src="images/113973share-1@2x.png"
                    className="justify-center w-[25vw] md:w-full"
                    style={{ height: "calc(100vh - 33rem)" }}
                    alt="group153"
                  />
                </div>
                <div className="flex justify-center my-2 items-center">
                  <Text
                    className="font-medium text-center md:text-[40px] sm:text-[30px] text-black_900 text-[50px] w-max"
                    as="h5"
                    variant="h5"
                  >
                    Share Profile
                  </Text>
                </div>
              </div>
              <div className="flex flex-col w-[20%] sm:w-full md:w-[40%]">
                <div className="mt-3">
                  <div className="flex w-[20%] sm:w-[15%] my-2 bg-orange_500 justify-center m-auto rounded-[50%]">
                    <Text
                      className="font-medium text-center text-white_A700_01 w-max"
                      as="h5"
                      variant="h5"
                    >
                      3
                    </Text>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Img
                    src="images/httpslottiefilescom57207videoconferencing@2x.png"
                    className="justify-center w-[25vw] md:w-full"
                    style={{ height: "calc(100vh - 33rem)" }}
                    alt="group153"
                  />
                </div>
                <div className="flex justify-center my-2 items-center">
                  <Text
                    className="font-medium text-center md:text-[40px] sm:text-[30px] text-black_900 text-[50px] w-max"
                    as="h5"
                    variant="h5"
                  >
                    Fix Videocall
                  </Text>
                </div>
              </div>
              <div className="flex flex-col w-[20%] sm:w-full md:w-[40%]">
                <div className="mt-3">
                  <div className="flex w-[20%] sm:w-[15%] my-2 bg-orange_500 justify-center m-auto rounded-[50%]">
                    <Text
                      className="font-medium text-center text-white_A700_01 w-max"
                      as="h5"
                      variant="h5"
                    >
                      4
                    </Text>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Img
                    src="images/131193timemoneyefficiency-1@2x.png"
                    className="justify-center w-[25vw] md:w-full"
                    style={{ height: "calc(100vh - 33rem)" }}
                    alt="group153"
                  />
                </div>
                <div className="flex justify-center my-2 items-center">
                  <Text
                    className="font-medium text-center md:text-[40px] sm:text-[30px] text-black_900 text-[50px] w-max"
                    as="h5"
                    variant="h5"
                  >
                    Pay for Minutes
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col font-oxygen mt-20 pl-[50.44px] pr-[51.56px] md:px-5 w-auto md:w-full">
          <Text
            className="leading-[65.00px] text-black_900_e0 text-center"
            as="h2"
            variant="h2"
          >
            <>
              A delight for you and <br />
              your audience
            </>
          </Text>

          <div className="flex md:flex-col flex-row font-nunito gap-10 items-center justify-center max-w-[980px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="bg-deep_orange_400 flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[91px] items-start justify-start p-[9px] rounded-[50px] shadow-bs7 w-[66%] md:w-full">
              <Img
                src="images/img_easytouse1.svg"
                className="h-[201px] sm:ml-[0] ml-[67px]"
                alt="easytouseOne"
              />
              <Text
                className="font-extrabold sm:mt-0 mt-[51px] text-center text-white_A700_01"
                as="h5"
                variant="h5"
              >
                <>
                  EASY TO <br />
                  USE
                </>
              </Text>
            </div>
            <div className="bg-white_A700_01 flex md:flex-1 flex-col items-center justify-end p-0.5 rounded-[50px] shadow-bs7 w-[31%] md:w-full">
              <Img
                src="images/videoCall.png"
                className="h-36 mt-4"
                alt="videocallOne"
              />
              <Text
                className="font-extrabold text-blue_gray_900_01 text-center"
                as="h5"
                variant="h5"
              >
                Video call
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-nunito gap-10 items-center justify-center max-w-[980px] mt-[27px] mx-auto md:px-5 w-full">
            <div className="bg-white_A700_01 flex md:flex-1 flex-col justify-end p-[3px] rounded-[50px] shadow-bs7 w-[31%] md:w-full">
              <Img
                src="images/DESIGNEDBYFREEPIK.png"
                className="h-[159px] md:ml-[0] ml-[59px] mr-[90px]"
                alt="assetFourteen"
              />
              <Text
                className="mt-1 mx-auto text-blue_gray_900_01 text-center"
                variant="body1"
              >
                Passive Income
              </Text>
            </div>
            <div className="bg-deep_orange_400 flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[86px] items-center justify-center p-3.5 rounded-[50px] shadow-bs7 w-[66%] md:w-full">
              <Img
                src="images/quearySolving.png"
                className="h-48 sm:ml-[0] ml-[52px]"
                alt="quearycolvingOne"
              />
              <Text
                className="font-extrabold mr-[82px] text-center text-white_A700_01"
                as="h5"
                variant="h5"
              >
                <>
                  QUERY
                  <br />
                  SOLVING
                </>
              </Text>
            </div>
          </div>
          <div className="bg-white_A700_01 rounded-[50px] shadow-bs7 flex md:flex-col flex-row font-nunito gap-10 items-center justify-center max-w-[980px] mt-[27px] mx-auto md:px-5 w-full">
            <Img
              src="images/PayAs.png"
              className="h-[159px] md:ml-[0] ml-[59px] mr-[90px]"
              alt="assetFourteen"
            />
            <Text
              className="mt-1 mx-auto text-blue_gray_900_01 text-center"
              variant="body1"
            >
              Pay As You Go
            </Text>
          </div>
        </div>

        <div className="flex flex-col font-montserrat items-center justify-start w-full">
          <div className="bg-orange_500 flex flex-col gap-[47px] items-center justify-end p-[50px] md:px-10 sm:px-5 w-full">
            <Text
              className="font-bold mt-1 text-white_A700_01"
              as="h3"
              variant="h3"
            >
              What people are saying
            </Text>
            <div className="flex flex-col font-oxygen items-center justify-start max-w-[1220px] mx-auto pb-2.5 px-2.5 w-full">
              <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white_A700_01 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[12px] shadow-bs6 w-full">
                    <div className="flex flex-col gap-[19.38px] items-start justify-start sm:px-5 px-7 py-6 w-auto sm:w-full">
                      <Img
                        src="images/img_reply.svg"
                        className="h-[30px] w-[30px]"
                        alt="reply"
                      />
                      <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[43.66px] w-auto">
                        <Text
                          className="font-normal leading-[28.00px] text-black_900_e0"
                          variant="body10"
                        >
                          <>
                            Love the integrations with
                            <br />
                            Calendar, Zoom, WhatsApp and
                            <br />
                            Apple Pay. Makes my life easier
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[165px] w-[85%] md:w-full">
                      <Img
                        src="images/img_image.png"
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        alt="image"
                      />
                      <div className="flex flex-col gap-[-1px] items-start justify-start pb-[0.38px] pr-[5.73px] w-auto">
                        <Text
                          className="font-bold text-black_900_e0 w-auto"
                          variant="body16"
                        >
                          Carly Taylor
                        </Text>
                        <Text
                          className="font-normal text-black_900_e0 w-auto"
                          variant="body18"
                        >
                          80K on LinkedIn
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700_01 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[12px] shadow-bs6 w-full">
                    <div className="flex flex-col gap-[19.38px] items-start justify-start sm:px-5 px-7 py-6 w-auto sm:w-full">
                      <Img
                        src="images/img_reply.svg"
                        className="h-[30px] w-[30px]"
                        alt="reply"
                      />
                      <div className="flex flex-col items-start justify-start pb-6 md:pr-10 sm:pr-5 pr-[52.66px] w-auto">
                        <Text
                          className="font-normal leading-[28.00px] text-black_900_e0"
                          variant="body10"
                        >
                          <>
                            The entire experience is just so
                            <br />
                            seamless. My followers love it
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[13px] items-center justify-start md:pr-10 sm:pr-5 pr-[158px] w-[85%] md:w-full">
                      <Img
                        src="images/img_image_48x48.png"
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        alt="image"
                      />
                      <div className="h-10 md:h-5 pb-[0.38px] pr-[7.28px]  w-[109px]">
                        <Text
                          className=" font-bold text-black_900_e0 w-auto"
                          variant="body14"
                        >
                          Joerg Storm
                        </Text>
                        <Text
                          className=" font-normal text-black_900_e0 w-auto"
                          variant="body18"
                        >
                          300K on LinkedIn
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700_01 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[12px] shadow-bs6 w-full">
                    <div className="flex flex-col gap-[19.38px] items-start justify-start sm:px-5 px-7 py-6 w-auto sm:w-full">
                      <Img
                        src="images/img_reply.svg"
                        className="h-[30px] w-[30px]"
                        alt="reply"
                      />
                      <div className="flex flex-col items-start justify-start sm:pr-5 pr-[24.66px] w-auto">
                        <Text
                          className="font-normal leading-[28.00px] text-black_900_e0"
                          variant="body10"
                        >
                          <>
                            I am on track to earn 6 figures on
                            <br />
                            Topmate. I never imagined I could
                            <br />
                            do this
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[116px] w-[85%] md:w-full">
                      <Img
                        src="images/img_image_1.png"
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        alt="image"
                      />
                      <div className="flex flex-col gap-[-1px] items-start justify-start pb-[0.38px] pr-[5.42px] w-auto">
                        <Text
                          className="font-bold text-black_900_e0 w-auto"
                          variant="body16"
                        >
                          Wanderess Priyanka
                        </Text>
                        <Text
                          className="font-normal text-black_900_e0 w-auto"
                          variant="body17"
                        >
                          141K+ on Instagram
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700_01 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[12px] shadow-bs6 w-full">
                    <div className="flex flex-col gap-[19.38px] items-start justify-start sm:px-5 px-7 py-6 w-auto sm:w-full">
                      <Img
                        src="images/img_reply.svg"
                        className="h-[30px] w-[30px]"
                        alt="reply"
                      />
                      <div className="flex flex-col items-start justify-start pb-6 sm:pr-5 pr-[22.66px] w-auto">
                        <Text
                          className="font-normal leading-[28.00px] text-black_900_e0"
                          variant="body10"
                        >
                          <>
                            All my monetisation now happens
                            <br />
                            in one place
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 pr-36 sm:pr-5 w-[85%] md:w-full">
                      <Img
                        src="images/img_image_2.png"
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        alt="image"
                      />
                      <div className="flex flex-col gap-[-1px] items-start justify-start pb-[0.38px] pr-[2.22px] w-auto">
                        <Text
                          className="font-bold text-black_900_e0 w-auto"
                          variant="body14"
                        >
                          Payal & Gaurav
                        </Text>
                        <Text
                          className="font-normal text-black_900_e0 w-auto"
                          variant="body17"
                        >
                          110K+ on Instagram
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700_01 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[12px] shadow-bs6 w-full">
                    <div className="flex flex-col gap-[19.38px] items-start justify-start sm:px-5 px-7 py-6 w-auto sm:w-full">
                      <Img
                        src="images/img_reply.svg"
                        className="h-[30px] w-[30px]"
                        alt="reply"
                      />
                      <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25.66px] w-auto">
                        <Text
                          className="font-normal leading-[28.00px] text-black_900_e0"
                          variant="body10"
                        >
                          <>
                            The team is extremely helpful and
                            <br />
                            cares a lot about feedback. They
                            <br />
                            keep rolling out new features too!
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-[85%] md:w-full">
                      <Img
                        src="images/img_image_3.png"
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        alt="image"
                      />
                      <div className="flex flex-col gap-[-1px] items-start justify-start pb-[0.38px] w-auto">
                        <Text
                          className="font-bold text-black_900_e0 w-auto"
                          variant="body16"
                        >
                          Lorraine Lee
                        </Text>
                        <Text
                          className="font-normal text-black_900_e0 w-auto"
                          variant="body17"
                        >
                          Speaker, 320K on LinkedIn
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700_01 border border-blue_gray_50 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-[12px] shadow-bs6 w-full">
                    <div className="flex flex-col gap-[19.38px] items-start justify-start sm:px-5 px-7 py-6 w-auto sm:w-full">
                      <Img
                        src="images/img_reply.svg"
                        className="h-[30px] w-[30px]"
                        alt="reply"
                      />
                      <div className="flex flex-col items-start justify-start pb-6 md:pr-10 sm:pr-5 pr-[54.66px] w-auto">
                        <Text
                          className="font-normal leading-[28.00px] text-black_900_e0"
                          variant="body10"
                        >
                          <>
                            It was so easy to setup, almost
                            <br />
                            magical
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-start md:pr-10 sm:pr-5 pr-[164px] w-[85%] md:w-full">
                      <Img
                        src="images/img_image_4.png"
                        className="h-12 md:h-auto rounded-[50%] w-12"
                        alt="image"
                      />
                      <div className="flex flex-col gap-[-1px] items-start justify-start pb-[0.38px] pr-[0.72px] w-auto">
                        <Text
                          className="font-bold text-black_900_e0 w-auto"
                          variant="body14"
                        >
                          Bart Jaworski
                        </Text>
                        <Text
                          className="font-normal text-black_900_e0 w-auto"
                          variant="body18"
                        >
                          Sr PM, Microsoft
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-oxygen mt-[90px] md:px-5  w-full">
            <div className=" flex flex-col md:gap-10 gap-[74px] items-center justify-start">
              <div className="flex flex-col items-start justify-start pl-[50.44px] pr-[51.56px] md:px-10 sm:px-5 w-auto md:w-full">
                <Text
                  className="leading-[65.00px] text-black_900_e0 text-center"
                  as="h2"
                  variant="h2"
                >
                  <>
                    It&#39;s how you monetise your
                    <br />
                    audience
                  </>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-10 sm:px-5 px-[150px] w-auto md:w-full">
                <div className="flex flex-col gap-2 items-center justify-start pl-[103.8px] pr-[104.2px] md:px-10 sm:px-5 w-auto">
                  <Text
                    className="text-black_900_e0 text-center w-auto"
                    as="h1"
                    variant="h1"
                  >
                    15
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_600 text-center w-auto"
                    variant="body12"
                  >
                    Creators
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start pl-[103.8px] pr-[104.2px] md:px-10 sm:px-5 w-auto">
                  <Text
                    className="text-black_900_e0 text-center w-auto"
                    as="h1"
                    variant="h1"
                  >
                    10k
                  </Text>
                  <Text
                    className="text-blue_gray_600 text-center w-auto"
                    variant="body13"
                  >
                    Sessions
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start pl-[65.92px] pr-[66.08px] md:px-10 sm:px-5 w-auto">
                  <Text
                    className="text-black_900_e0 text-center w-auto"
                    as="h1"
                    variant="h1"
                  >
                    100k
                  </Text>
                  <Text
                    className="font-normal text-blue_gray_600 text-center w-auto"
                    variant="body12"
                  >
                    Followers connected
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-orange_500 flex font-helvetica items-center justify-center mt-[146px] md:px-5 w-full">
            <div className="flex flex-col w-full">
              <div className="flex justify-center items-center p-8">
                <div
                  style={{
                    background: "rgba(217, 217, 217, 1)",
                    height: "15vh",
                    width: "40vw",
                  }}
                ></div>
              </div>
              <div className="my-5 w-full flex flex-wrap justify-center gap-3 items-center">
                <pre className="text-white">FAQ | </pre>
                <pre className="text-white">Contact Us | </pre>
                <pre className="text-white">Guidelines | </pre>
                <pre className="text-white">Careers | </pre>
                <pre className="text-white">Investors | </pre>
                <pre className="text-white">Modern Slavery Act Statement</pre>
              </div>

              <div className="my-5 mb-10 w-full flex flex-wrap justify-center gap-3 items-center">
                <pre className="text-white"> © 2023 ASKITSLL | </pre>
                <pre className="text-white">All Rights Reserved</pre>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepagenewuserOnePage;
