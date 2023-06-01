import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";

const enOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepagenewuserOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans gap-[53px] items-center justify-start mx-auto w-full">
        <div className="md:h-[3267px] h-[672px] md:px-5 relative w-full">
          <Text
            className="font-bold ml-[57px] mt-[153px] text-black_900"
            as="h3"
            variant="h3"
          >
            <span className="md:text-[46px] sm:text-[40px] text-gray_900 text-[50px] font-montserrat text-left font-semibold">
              <>
                &quot;Get Answers to <br />
              </>
            </span>
            <span className="md:text-[46px] sm:text-[40px] text-black_900 text-[50px] font-montserrat text-left font-semibold">
              {" "}
            </span>
            <span className="md:text-[46px] sm:text-[40px] text-amber_A700 text-[50px] font-montserrat text-left font-semibold">
              Your Questions
            </span>
            <span className="md:text-[46px] sm:text-[40px] text-black_900 text-[50px] font-montserrat text-left font-semibold">
              <>
                ,<br />{" "}
              </>
            </span>
            <span className="md:text-[46px] sm:text-[40px] text-black_900_01 text-[50px] font-montserrat text-left font-semibold">
              <>Fast and Easy&quot;</>
            </span>
          </Text>
          <div className="absolute font-inter md:h-[3267px] h-[672px] inset-[0] justify-center m-auto w-full">
            <div className="absolute md:h-[3267px] h-[672px] inset-y-[0] my-auto right-[1%] w-[51%] md:w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start pb-[2104.7px] pl-[21px] pr-[34px] pt-[1163.3px] sm:px-5 w-auto">
                    <List
                      className="flex-col gap-11 grid w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white_A700_01 flex flex-1 flex-col gap-[5px] items-center justify-start p-[3px] rounded-[5px] shadow-bs5 w-full">
                        <div className="flex flex-col gap-[9px] h-[100px] items-center justify-start pb-[3px] rounded-[50%] w-[100px]">
                          <Img
                            src="images/img_davidkellypro.png"
                            className="h-[70px] md:h-auto object-cover rounded-tl-[50px] rounded-tr-[50px] w-full"
                            alt="davidkellypro"
                          />
                          <Text
                            className="font-bold text-center text-gray_900_01"
                            variant="body17"
                          >
                            David Kelly
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mb-[60px] pb-0.5 px-0.5">
                          <Text
                            className="leading-[15.00px] text-center text-gray_900_01"
                            variant="body22"
                          >
                            <>
                              General Manager at
                              <br />
                              AppSumo Originals
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700_01 flex flex-1 flex-col gap-[5px] items-center justify-start p-[3px] rounded-[5px] shadow-bs5 w-full">
                        <div className="flex flex-col gap-2 h-[100px] items-center justify-start pb-1 rounded-[50%] w-[100px]">
                          <Img
                            src="images/img_racheljordanjpg.png"
                            className="h-[70px] md:h-auto object-cover rounded-tl-[50px] rounded-tr-[50px] w-full"
                            alt="racheljordanjpg"
                          />
                          <Text
                            className="font-bold text-center text-gray_900_01"
                            variant="body17"
                          >
                            Rachel Jordan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mb-[60px] pb-0.5 px-0.5">
                          <Text
                            className="leading-[15.00px] text-center text-gray_900_01"
                            variant="body22"
                          >
                            <>
                              Chief Experience Officer at
                              <br />
                              Boardontrack
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700_89 flex flex-1 flex-col gap-[5px] items-center justify-start p-[3px] rounded-[5px] shadow-bs5 w-full">
                        <div className="flex flex-col gap-2 h-[100px] items-center justify-start pb-0.5 rounded-[50%] w-[100px]">
                          <Img
                            src="images/img_kevinindigpro.png"
                            className="h-[70px] md:h-auto object-cover rounded-tl-[50px] rounded-tr-[50px] w-full"
                            alt="kevinindigpro"
                          />
                          <Text
                            className="font-bold text-center text-gray_900_01"
                            variant="body16"
                          >
                            Kevin Indig
                          </Text>
                        </div>
                        <Text
                          className="mb-[22px] text-center text-gray_900_01"
                          variant="body22"
                        >
                          Director of SEO at Shopify
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[37%]">
                <div className="flex flex-col items-start justify-start pb-[2104.71px] pl-[21px] pr-[34px] pt-[1163.29px] sm:px-5 w-auto">
                  <List
                    className="flex-col gap-[43px] grid w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700_01 flex flex-1 flex-col gap-[5px] items-center justify-start pb-5 px-5 rounded-[5px] shadow-bs5 w-full">
                      <div className="h-11 md:h-[43px] relative w-4/5">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[29px] rounded-[22px] w-[76%]">
                          <Img
                            src="images/img_croppedmg616.png"
                            className="h-3.5 md:h-auto object-cover rounded-tl-[22px] rounded-tr-[22px] w-full"
                            alt="croppedmg616"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[5%] font-bold inset-x-[0] mx-auto text-center text-gray_900_01 w-max"
                          variant="body16"
                        >
                          Emilia Korczynska
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-11 pb-0.5 px-0.5">
                        <Text
                          className="leading-[15.00px] text-center text-gray_900_01"
                          variant="body22"
                        >
                          <>
                            Head of Marketing at
                            <br />
                            Userpilot
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700_01 flex flex-1 flex-col gap-[9px] items-center justify-start pb-5 px-5 rounded-[5px] shadow-bs5 w-full">
                      <div className="md:h-[95px] h-[98px] relative w-3/5">
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[23px] rounded-[48px] w-full">
                          <Img
                            src="images/img_pjjpg.png"
                            className="h-[72px] md:h-auto object-cover rounded-tl-[48px] rounded-tr-[48px] w-full"
                            alt="pjjpg"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[0] font-bold inset-x-[0] mx-auto text-center text-gray_900_01 w-max"
                          variant="body17"
                        >
                          Positive John
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-11 pb-0.5 px-0.5">
                        <Text
                          className="leading-[15.00px] text-center text-gray_900_01"
                          variant="body22"
                        >
                          <>
                            Conversion Manager at
                            <br />
                            Brainly
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700_89 flex flex-1 flex-col gap-[7px] items-center justify-start pb-2.5 px-2.5 rounded-[5px] shadow-bs5 w-full">
                      <div className="h-[100px] md:h-[95px] relative w-[100px]">
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[23px] rounded-[48px] w-full">
                          <Img
                            src="images/img_itayjpg.png"
                            className="h-[72px] md:h-auto object-cover rounded-tl-[48px] rounded-tr-[48px] w-full"
                            alt="itayjpg"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[0] font-bold inset-x-[0] mx-auto text-center text-gray_900_01 w-max"
                          variant="body16"
                        >
                          Itay Forer
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start pb-0.5 px-0.5">
                        <Text
                          className="leading-[15.00px] text-center text-gray_900_01"
                          variant="body22"
                        >
                          <>
                            Co-founder at Cleanly (YC
                            <br />
                            W15)
                          </>
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[37%]">
                <div className="flex flex-col items-start justify-start pb-[2104.7px] pl-[21px] pr-[34px] pt-[1163.3px] sm:px-5 w-auto">
                  <List
                    className="flex-col gap-11 grid w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700_01 flex flex-1 flex-col gap-2 items-center justify-start pb-[29px] sm:px-5 px-[29px] rounded-[5px] shadow-bs5 w-full">
                      <div className="h-[100px] md:h-[94px] relative w-[100px]">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[22px] rounded-[47px] top-[0] w-full">
                          <Img
                            src="images/img_img20190611wa0008jpg.png"
                            className="h-[72px] md:h-auto object-cover rounded-tl-[47px] rounded-tr-[47px] w-full"
                            alt="img20190611waZero"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[0] font-bold inset-x-[0] mx-auto text-center text-gray_900_01 w-max"
                          variant="body16"
                        >
                          Elijah Toh
                        </Text>
                      </div>
                      <Text
                        className="mb-[51px] text-center text-gray_900_01"
                        variant="body22"
                      >
                        Marketing Director at Wolt
                      </Text>
                    </div>
                    <div className="bg-white_A700_01 flex flex-1 flex-col gap-[7px] items-center justify-start pb-5 px-5 rounded-[5px] shadow-bs5 w-full">
                      <div className="h-[100px] md:h-[94px] relative w-[101px]">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[22px] rounded-[47px] top-[0] w-full">
                          <Img
                            src="images/img_dennyhollicke.png"
                            className="h-[72px] md:h-auto object-cover rounded-tl-[47px] rounded-tr-[47px] w-full"
                            alt="dennyhollicke"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[0] font-bold inset-x-[0] mx-auto text-center text-gray_900_01 w-max"
                          variant="body16"
                        >
                          Denny Hollick
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-11 pb-0.5 px-0.5">
                        <Text
                          className="leading-[15.00px] text-center text-gray_900_01"
                          variant="body22"
                        >
                          <>
                            Director of Product at
                            <br />
                            Unbounce
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700_84 flex flex-1 flex-col gap-[7px] items-center justify-start px-5 rounded-[5px] shadow-bs5 w-full">
                      <div className="h-[100px] md:h-[94px] relative w-[92%]">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[22px] rounded-[47px] top-[0] w-[66%]">
                          <Img
                            src="images/img_buniejpg.png"
                            className="h-[72px] md:h-auto object-cover rounded-tl-[47px] rounded-tr-[47px] w-full"
                            alt="buniejpg"
                          />
                        </div>
                        <Text
                          className="absolute bottom-[0] font-bold inset-x-[0] mx-auto text-center text-gray_900_01 w-max"
                          variant="body16"
                        >
                          Bunie Anyaegbunam
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start px-1.5">
                        <Text
                          className="leading-[15.00px] text-center text-gray_900_01"
                          variant="body22"
                        >
                          <>
                            Chief Marketing Officer at
                            <br />
                            Florence.co.uk
                          </>
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="absolute bg-orange_500 flex sm:flex-col flex-row font-nunitosans sm:gap-5 inset-x-[0] items-center justify-start mx-auto p-2.5 top-[0] w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[147px] ml-5 sm:ml-[0]"
                rightIcon={
                  <Img
                    src="images/img_question.svg"
                    className="mt-px ml-[15px]"
                    alt="question"
                  />
                }
                shape="CircleBorder20"
                size="md"
                variant="OutlineWhiteA700"
              >
                <div className="font-semibold text-amber_A700 text-left text-xl">
                  Mentee
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[145px] sm:ml-[0] ml-[30px]"
                rightIcon={
                  <Img
                    src="images/img_volume.svg"
                    className="mt-px ml-[15px]"
                    alt="volume"
                  />
                }
                shape="CircleBorder20"
                size="md"
                variant="OutlineWhiteA700_1"
              >
                <div className="font-semibold text-left text-white_A700 text-xl">
                  Mentor
                </div>
              </Button>
              <Img
                src="images/img_notification.svg"
                className="h-[26px] sm:ml-[0] ml-[955px]"
                alt="notification"
              />
              <Img
                src="images/img_user.svg"
                className="h-[26px] ml-10 sm:ml-[0]"
                alt="user"
              />
            </div>
            <div className="absolute bottom-[35%] flex sm:flex-col flex-row font-montserrat gap-5 items-center justify-center left-[5%] w-[27%]">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[178px] text-center text-lg text-white_A700_01"
                shape="CircleBorder20"
                size="lg"
                variant="FillOrange500"
              >
                Login
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[178px] text-center text-lg text-orange_500"
                shape="CircleBorder20"
                size="lg"
                variant="OutlineOrange500"
              >
                Login
              </Button>
            </div>
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
                      <div className="h-10 md:h-5 pb-[0.38px] pr-[7.28px] relative w-[109px]">
                        <Text
                          className="absolute font-bold left-[0] text-black_900_e0 top-[9%] w-auto"
                          variant="body14"
                        >
                          Joerg Storm
                        </Text>
                        <Text
                          className="absolute bottom-[1%] font-normal left-[1%] text-black_900_e0 w-auto"
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
          <div className="font-oxygen sm:h-[605px] md:h-[893px] h-[958px] mt-[90px] md:px-5 relative w-full">
            <div className="absolute flex flex-col md:gap-10 gap-[74px] items-center justify-start pb-[195px] right-[6%] top-[0] w-[84%]">
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
                    0k
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
                    0k
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
                    0k
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
            <div className="absolute bg-orange_500 bottom-[0] flex md:flex-col flex-row font-nunitosans md:gap-10 gap-[105px] inset-x-[0] items-center justify-start mx-auto p-[71px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[46px] md:mt-0 mt-6 rotate-[-21deg] w-[26%] md:w-full">
                <div className="flex flex-col items-start justify-start rotate-[21deg] w-full">
                  <div className="flex flex-col items-center justify-start w-4/5 md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[69px] items-center justify-end p-[18px] w-full"
                      style={{
                        backgroundImage: "url('images/img_asset12.svg')",
                      }}
                    >
                      <Text
                        className="font-normal leading-[16.00px] text-black_900"
                        variant="body14"
                      >
                        <>
                          What you think about the <br />
                          bugaati Chiron?
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[63px] mt-3 w-4/5 md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[69px] items-center justify-end p-2.5 rotate-[180deg] w-full"
                      style={{
                        backgroundImage: "url('images/img_asset13.svg')",
                      }}
                    >
                      <Text
                        className="font-normal leading-[16.00px] rotate-[180deg] text-black_900"
                        variant="body14"
                      >
                        <>
                          Yeah! it is nice but i like Rolls
                          <br />
                          royce.... The interior was so <br />
                          amzzing
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[15px] w-4/5 md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[69px] items-center justify-end p-[18px] w-full"
                      style={{
                        backgroundImage: "url('images/img_asset12.svg')",
                      }}
                    >
                      <Text
                        className="font-normal leading-[16.00px] text-black_900"
                        variant="body14"
                      >
                        <>
                          What you think about the <br />
                          bugaati Chiron?
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-16 md:ml-[0] mt-3 w-4/5 md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[69px] items-center justify-end p-2.5 rotate-[180deg] w-full"
                      style={{
                        backgroundImage: "url('images/img_asset13.svg')",
                      }}
                    >
                      <Text
                        className="font-normal leading-[16.00px] rotate-[180deg] text-black_900"
                        variant="body14"
                      >
                        <>
                          Yeah! it is nice but i like Rolls
                          <br />
                          royce.... The interior was so <br />
                          amzzing
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700_01 flex flex-col gap-[23px] items-center justify-start mb-10 md:mt-0 mt-[37px] p-[9px] rounded-[15px]">
                <Text
                  className="font-semibold text-black_900"
                  as="h5"
                  variant="h5"
                >
                  Why us
                </Text>
                <Text
                  className="font-semibold leading-[26.00px] mb-3 text-black_900 w-[97%] sm:w-full"
                  variant="body10"
                >
                  Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque. Ut
                  diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-oxygen items-start justify-start mt-20 pl-[50.44px] pr-[51.56px] md:px-5 w-auto md:w-full">
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
          </div>
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
                src="images/img_easytouse1.svg"
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
                src="images/img_easytouse1.svg"
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
                src="images/img_easytouse1.svg"
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
          <div className="flex flex-col font-oxygen items-start justify-start mt-20 pl-[50.44px] pr-[51.56px] md:px-5 w-auto sm:w-full">
            <Text
              className="text-black_900_e0 text-center w-auto"
              as="h2"
              variant="h2"
            >
              How it is work
            </Text>
          </div>
          <div className="bg-white_A700 font-nunito md:h-[1247px] sm:h-[495px] h-[502px] max-w-[1252px] mt-[119px] mx-auto p-[26px] md:px-5 relative rounded-[50px] shadow-bs7 w-full">
            <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-center mx-auto p-2.5 w-auto">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[159px] items-center justify-between w-auto">
                <Text
                  className="font-medium text-black_900 text-center w-auto"
                  as="h5"
                  variant="h5"
                >
                  Post a Question
                </Text>
                <Text
                  className="font-medium text-black_900 text-center w-auto"
                  as="h5"
                  variant="h5"
                >
                  Share Profile
                </Text>
                <Text
                  className="font-medium text-black_900 text-center w-auto"
                  as="h5"
                  variant="h5"
                >
                  Fix Videocall
                </Text>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row gap-[35px] inset-x-[0] items-center justify-start mx-auto top-[6%] w-auto">
              <div className="md:h-[330px] h-[376px] relative w-[32%] md:w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:h-[330px] h-[364px] p-[15px] relative w-full">
                      <div className="bg-white_A700 h-[330px] m-auto rounded-[50%] shadow-bs8 w-[330px]"></div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto w-[71%]"
                        style={{
                          backgroundImage: "url('images/img_layer2.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-3.5 items-center justify-start mt-[110px]">
                          <Text
                            className="font-abrilfatface text-indigo_A400_01"
                            variant="body4"
                          >
                            Ask a question
                          </Text>
                          <Text
                            className="font-inter font-normal text-deep_purple_300"
                            variant="body9"
                          >
                            Type something...
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[58px] inset-x-[0] mx-auto top-[0] w-[58px]">
                  <div className="absolute bg-orange_500 h-[58px] inset-[0] justify-center m-auto rounded-[50%] w-[58px]"></div>
                  <Text
                    className="absolute font-medium inset-x-[0] mx-auto text-center text-white_A700_01 top-[0] w-max"
                    as="h5"
                    variant="h5"
                  >
                    1
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[35px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                orientation="horizontal"
              >
                <div className="md:h-[364px] h-[376px] relative w-full">
                  <Img
                    src="images/img_group153.svg"
                    className="absolute h-[364px] inset-[0] justify-center m-auto"
                    alt="group153"
                  />
                  <div className="absolute h-[58px] inset-x-[0] mx-auto top-[0] w-[58px]">
                    <div className="absolute bg-orange_500 h-[58px] inset-[0] justify-center m-auto rounded-[50%] w-[58px]"></div>
                    <Text
                      className="absolute font-medium inset-x-[0] mx-auto text-center text-white_A700_01 top-[0] w-max"
                      as="h5"
                      variant="h5"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="md:h-[364px] h-[376px] relative w-full">
                  <Img
                    src="images/img_group153_white_a700.svg"
                    className="absolute h-[364px] inset-[0] justify-center m-auto"
                    alt="group153"
                  />
                  <div className="absolute h-[58px] inset-x-[0] mx-auto top-[0] w-[58px]">
                    <div className="absolute bg-orange_500 h-[58px] inset-[0] justify-center m-auto rounded-[50%] w-[58px]"></div>
                    <Text
                      className="absolute font-medium inset-x-[0] mx-auto text-center text-white_A700_01 top-[0] w-max"
                      as="h5"
                      variant="h5"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <footer className="bg-orange_500 flex font-helvetica items-center justify-center mt-[146px] md:px-5 w-full">
            <div className="h-[221px] sm:h-[381px] md:h-[564px] ml-[262px] mr-[259px] my-20 relative w-[64%] md:w-full">
              <div className="absolute bg-orange_500 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-[115px] w-full">
                <Img
                  src="images/img_frame.svg"
                  className="h-[30px] md:mt-0 mt-[94px]"
                  alt="frame"
                />
                <div className="flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[363px] pt-4 px-4 w-[17%] md:w-full">
                  <ul className="flex flex-col gap-[21px] items-start justify-start mt-[9px] py-[9px] md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="font-normal text-black_900"
                      >
                        <Text variant="body16">Grants</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="font-normal text-black_900"
                      >
                        <Text variant="body16">Break Solana</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="font-normal text-black_900"
                      >
                        <Text variant="body14">Media Kit</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="font-normal text-black_900"
                      >
                        <Text variant="body14">Careers</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="font-normal text-black_900"
                      >
                        <Text variant="body14">Disclaimer</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="flex md:flex-1 flex-col items-start justify-start ml-4 md:ml-[0] md:mt-0 mt-[26px] pr-2.5 py-2.5 md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="font-normal text-black_900"
                    >
                      <Text variant="body14">Ecosystem</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="font-normal mt-5 text-black_900"
                    >
                      <Text variant="body16">Blog</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="font-normal mt-[18px] text-black_900"
                    >
                      <Text variant="body14">Newsletter</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <Text
                className="absolute font-normal right-[11%] text-black_900 top-[0] uppercase"
                variant="body16"
              >
                Get Connected
              </Text>
              <div className="absolute flex flex-row items-center justify-evenly right-[0] top-[0] w-[8%]">
                <Img
                  src="images/img_frame_black_900.svg"
                  className="h-5 w-[19px]"
                  alt="frame_One"
                />
                <SelectBox
                  className="font-normal text-[15px] text-black_900 text-center uppercase w-[66%] sm:w-full"
                  placeholderClassName="text-black_900"
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[17px] mr-[0] w-[17px]"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupSeventyThree"
                  options={enOptionsList}
                  isSearchable={false}
                  placeholder="en"
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomepagenewuserOnePage;
