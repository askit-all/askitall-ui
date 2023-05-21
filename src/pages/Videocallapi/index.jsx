import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const VideocallapiPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-nunitosans items-center justify-start mx-auto p-[11px] w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between max-w-[1395px] mb-1 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[66%] md:w-full">
            <div className="flex flex-row gap-[15px] items-center justify-start w-[9%] md:w-full">
              <Button
                className="common-pointer flex h-[30px] items-center justify-center w-[30px]"
                onClick={() => navigate(-1)}
                shape="icbRoundedBorder4"
                size="smIcn"
                variant="icbFillGray10001"
              >
                <Img src="images/img_arrowleft_gray_900.svg" alt="arrowleft" />
              </Button>
              <Text className="font-bold text-gray_900" variant="body14">
                Back
              </Text>
            </div>
            <div className="h-[623px] sm:h-[973px] relative w-full">
              <Img
                src="images/img_rectangle22.png"
                className="h-[623px] m-auto object-cover rounded-[22px] w-full"
                alt="rectangleTwentyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-72 h-max inset-[0] items-center justify-center m-auto w-[96%]">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                  <div className="bg-white_A700_47 border border-solid border-white_A700_33 flex flex-col items-center justify-start mb-[91px] p-[7px] rounded-[9px]">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                      <Img
                        src="images/img_rectangle23.png"
                        className="h-[50px] md:h-auto object-cover rounded-lg w-[50px]"
                        alt="rectangleTwentyThree"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start">
                        <Text
                          className="font-normal text-black_900"
                          variant="body14"
                        >
                          Mentee
                        </Text>
                        <Text
                          className="font-semibold text-black_900"
                          variant="body14"
                        >
                          Rashmi Singh
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center mb-[118px] min-w-[127px]"
                    leftIcon={
                      <Img
                        src="images/img_evarecordingfill.svg"
                        className="mr-2.5"
                        alt="eva:recording-fill"
                      />
                    }
                    shape="RoundedBorder8"
                    size="md"
                    variant="OutlineWhiteA70033"
                  >
                    <div className="font-normal text-base text-left text-white_A700_01">
                      Recording
                    </div>
                  </Button>
                  <Img
                    src="images/img_rectangle25.png"
                    className="h-[155px] md:h-auto object-cover rounded-[17px] w-[155px]"
                    alt="rectangleTwentyFive"
                  />
                </div>
                <div className="flex md:flex-col flex-row font-inter md:gap-5 items-end justify-start w-full">
                  <div className="bg-white_A700_1e border border-solid border-white_A700_4c flex md:flex-1 flex-col gap-2.5 items-center justify-center p-[13px] rounded-[23px] w-[6%] md:w-full">
                    <div className="md:h-[50px] h-[84px] mt-[3px] relative w-[29%]">
                      <div className="absolute flex flex-col inset-y-[0] my-auto right-[0] w-1/2">
                        <Line className="bg-gray_500_02 h-[47px] mx-auto w-[3px]" />
                        <Line className="bg-orange_500 h-[54px] mt-[-17px] mx-auto w-[3px] z-[1]" />
                      </div>
                      <div className="absolute bg-white_A700_01 h-1.5 inset-x-[0] mx-auto rounded-[50%] top-[31%] w-1.5"></div>
                    </div>
                    <Img
                      src="images/img_volume_white_a700_01.svg"
                      className="h-3.5 mb-0.5"
                      alt="volume"
                    />
                  </div>
                  <Button
                    className="flex h-[50px] items-center justify-center mb-3 md:ml-[0] ml-[286px] md:mt-0 mt-[78px] w-[50px]"
                    shape="icbCircleBorder26"
                    size="mdIcn"
                    variant="icbOutlineWhiteA70014"
                  >
                    <Img src="images/img_microphone.svg" alt="microphone" />
                  </Button>
                  <div className="bg-red_400_01 flex flex-col h-[74px] items-center justify-start ml-5 md:ml-[0] md:mt-0 mt-[66px] p-[18px] rounded-[21px] w-[74px]">
                    <Img
                      src="images/img_car.svg"
                      className="h-[37px] w-[37px]"
                      alt="car"
                    />
                  </div>
                  <Button
                    className="flex h-[50px] items-center justify-center mb-3 ml-5 md:ml-[0] md:mt-0 mt-[78px] w-[50px]"
                    shape="icbCircleBorder26"
                    size="mdIcn"
                    variant="icbOutlineWhiteA70014"
                  >
                    <Img src="images/img_videocamera.svg" alt="videocamera" />
                  </Button>
                  <Button
                    className="cursor-pointer font-bold min-w-[178px] md:ml-[0] ml-[155px] md:mt-0 mt-[102px] text-[15px] text-center text-white_A700_01"
                    shape="CircleBorder20"
                    size="lg"
                    variant="OutlineWhiteA70033_1"
                  >
                    Rashmika Mandala
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-5 items-center justify-start md:mt-0 mt-1 pb-[15px] rounded-[17px] shadow-bs9 w-[32%] md:w-full">
            <div className="bg-white_A700_66 border border-solid border-white_A700_19 flex flex-col items-start justify-end p-3 rounded-tl-[17px] rounded-tr-[17px] w-full">
              <Text
                className="font-bold md:ml-[0] ml-[3px] text-gray_800_02"
                variant="body14"
              >
                Rashmi Singh
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
              <div className="flex flex-row gap-2.5 items-start justify-start w-[74%] md:w-full">
                <Img
                  src="images/img_ellipse4.png"
                  className="h-[35px] md:h-auto rounded-[50%] w-[35px]"
                  alt="ellipseFour"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[68px] items-center justify-start mt-[17px] p-[18px]"
                  style={{
                    backgroundImage: "url('images/img_asset12_indigo_50.svg')",
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
              <div className="flex flex-row gap-2.5 items-start justify-end md:ml-[0] ml-[109px] w-[74%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[68px] items-center justify-start mt-[15px] p-2.5 rotate-[180deg]"
                  style={{
                    backgroundImage:
                      "url('images/img_asset13_amber_a700_02.svg')",
                  }}
                >
                  <Text
                    className="font-normal leading-[16.00px] rotate-[180deg] text-white_A700_01"
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
                <Img
                  src="images/img_ellipse5.png"
                  className="h-[35px] md:h-auto rounded-[50%] w-[35px]"
                  alt="ellipseFive"
                />
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start w-[74%] md:w-full">
                <Img
                  src="images/img_ellipse4.png"
                  className="h-[35px] md:h-auto rounded-[50%] w-[35px]"
                  alt="ellipseFour_One"
                />
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[68px] items-center justify-start mt-[17px] p-[18px]"
                  style={{
                    backgroundImage: "url('images/img_asset12_indigo_50.svg')",
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
              <div className="flex flex-row gap-2.5 items-start justify-end md:ml-[0] ml-[109px] w-[74%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[68px] items-center justify-start mt-[15px] p-2.5 rotate-[180deg]"
                  style={{
                    backgroundImage:
                      "url('images/img_asset13_amber_a700_02.svg')",
                  }}
                >
                  <Text
                    className="font-normal leading-[16.00px] rotate-[180deg] text-white_A700_01"
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
                <Img
                  src="images/img_ellipse5.png"
                  className="h-[35px] md:h-auto rounded-[50%] w-[35px]"
                  alt="ellipseFive_One"
                />
              </div>
              <div className="bg-white_A700_01 flex flex-row items-center justify-between mt-[229px] pl-[15px] rounded-[10px] shadow-bs2 w-full">
                <Text
                  className="font-normal text-center text-gray_500"
                  variant="body16"
                >
                  Type for msg
                </Text>
                <div className="bg-orange_500 flex flex-col h-[49px] items-center justify-start p-3.5 rounded-br-[10px] rounded-tr-[10px] w-[49px]">
                  <Img src="images/img_send.svg" className="h-4" alt="send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideocallapiPage;
