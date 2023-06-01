import React from "react";

import { Button, Img, Text } from "components";

const HomepagenewuserPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="font-nunitosans h-[716px] md:px-5 relative w-full">
          <div className="h-[716px] m-auto w-full">
            <div className="absolute h-[675px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="bg-gradient3  flex flex-col h-full items-start justify-start m-auto p-[50px] md:px-10 sm:px-5 w-full">
                <Text
                  className="font-bold mb-[205px] mt-[167px] text-black_900"
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
              </div>
              <Img
                src="images/img_ellipse1.png"
                className="absolute h-[467px] object-cover right-[0] top-[0] w-[36%]"
                alt="ellipseOne"
              />
            </div>
            <Img
              src="images/img_saly31.png"
              className="absolute h-[716px] inset-y-[0] my-auto object-cover right-[3%] w-[53%]"
              alt="salyThirtyOne"
            />
          </div>
          <div className="absolute bg-white_A700 flex flex-row inset-x-[0] items-center justify-center mx-auto p-[13px] shadow-bs9 top-[0] w-full">
            <div className="flex flex-row items-center justify-between w-[32%]">
              <Text className="font-semibold text-gray_900" variant="body10">
                Become a mentor
              </Text>
              <Text className="font-semibold text-gray_900" variant="body10">
                Find a mentor
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col font-inter gap-8 items-center justify-start max-w-[1440px] mt-[9px] md:px-10 sm:px-5 px-[515px] py-[60px] w-full">
          <div className="flex flex-col gap-4 items-center justify-start pl-2 pr-[7.58px] w-auto md:w-full">
            <Text
              className="text-center text-orange_500 w-auto"
              variant="body5"
            >
              Learn and grow across expertise for free
            </Text>
            <Text
              className="font-normal text-black_900_b2 text-center w-auto"
              variant="body12"
            >
              Find mentors from product fields across the globe
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[890px] mx-auto px-[5px] w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-10 items-center justify-center w-[70%] md:w-full">
                <div className="bg-white_A700_01 flex flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs10 w-auto">
                  <Button
                    className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                    size="smIcn"
                    variant="icbFillDeeppurpleA70019"
                  >
                    <Img
                      src="images/img_lightbulb.svg"
                      className="h-8"
                      alt="lightbulb"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start pb-1.5 pr-[5.88px] w-auto">
                    <Text
                      className="font-bold text-blue_gray_900_03 w-auto"
                      variant="body9"
                    >
                      Design
                    </Text>
                    <Text
                      className="text-blue_gray_500 w-auto"
                      variant="body22"
                    >
                      10727 mentors
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700_01 flex flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs10 w-auto">
                  <Button
                    className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                    size="smIcn"
                    variant="icbFillBlueA70019"
                  >
                    <Img
                      src="images/img_settings.svg"
                      className="h-8"
                      alt="settings"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start pb-1.5 pr-[2.91px] w-auto">
                    <Text
                      className="text-blue_gray_900_03 w-auto"
                      variant="body8"
                    >
                      Product Management
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_500 w-auto"
                      variant="body18"
                    >
                      0 mentors
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[69%] md:w-full">
                  <div className="bg-white_A700_01 flex flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs10 w-auto">
                    <Button
                      className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                      size="smIcn"
                      variant="icbFillGreen80019"
                    >
                      <Img
                        src="images/img_image_green_500.svg"
                        className="h-8"
                        alt="image_One"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start pb-1.5 pr-[0.16px] w-auto">
                      <Text
                        className="text-blue_gray_900_03 w-auto"
                        variant="body8"
                      >
                        Data Science
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_500 w-auto"
                        variant="body18"
                      >
                        258 mentors
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700_01 flex flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs10 w-auto">
                    <Button
                      className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                      size="smIcn"
                      variant="icbFillLightblue50019"
                    >
                      <Img
                        src="images/img_image_light_blue_500.svg"
                        className="h-8"
                        alt="image_Two"
                      />
                    </Button>
                    <div className="flex flex-col items-start justify-start pb-1.5 pr-[4.33px] w-auto">
                      <Text
                        className="text-blue_gray_900_03 w-auto"
                        variant="body8"
                      >
                        Content Writing
                      </Text>
                      <Text
                        className="font-normal text-blue_gray_500 w-auto"
                        variant="body18"
                      >
                        493 mentors
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700_01 flex flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs10 w-auto">
                  <Button
                    className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                    size="smIcn"
                    variant="icbFillOrangeA40019"
                  >
                    <Img
                      src="images/img_volume_orange_a400.svg"
                      className="h-8"
                      alt="volume"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start pb-1.5 pr-[2.56px] w-auto">
                    <Text
                      className="text-blue_gray_900_03 w-auto"
                      variant="body8"
                    >
                      Marketing
                    </Text>
                    <Text
                      className="text-blue_gray_500 w-auto"
                      variant="body22"
                    >
                      1530 mentors
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-[84%] md:w-full">
                <div className="bg-white_A700_01 flex flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs10 w-auto sm:w-full">
                  <Button
                    className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                    size="smIcn"
                    variant="icbFillPurple70019"
                  >
                    <Img
                      src="images/img_clock.svg"
                      className="h-8"
                      alt="clock"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start pb-1.5 pr-[3.7px] w-auto">
                    <Text
                      className="text-blue_gray_900_03 w-auto"
                      variant="body8"
                    >
                      Software Development
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_500 w-auto"
                      variant="body18"
                    >
                      50 mentors
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700_01 flex flex-row gap-4 items-start justify-start p-6 sm:px-5 rounded-[16px] shadow-bs10 w-auto">
                  <Button
                    className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                    size="smIcn"
                    variant="icbFillCyan70019"
                  >
                    <Img
                      src="images/img_image_cyan_700.svg"
                      className="h-8"
                      alt="image_Three"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start pb-1.5 pr-[7.38px] w-auto">
                    <Text
                      className="font-bold text-blue_gray_900_03 w-auto"
                      variant="body9"
                    >
                      Product Research
                    </Text>
                    <Text
                      className="font-normal text-blue_gray_500 w-auto"
                      variant="body18"
                    >
                      2976 mentors
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-bold min-w-[227px] text-[15px] text-center text-white_A700_01"
            shape="RoundedBorder8"
            size="xl"
            variant="FillOrange500"
          >
            Explore all mentors
          </Button>
        </div>
        <div className="flex flex-col font-nunitosans items-center justify-start max-w-[984px] mt-[79px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex flex-col relative w-[23%] md:w-full">
              <div className="bg-white_A700_01 border border-gray_200_01 border-solid flex flex-col gap-[13px] items-center justify-center mx-auto p-4 rounded shadow-bs11 w-full">
                <Img
                  src="images/img_testimonial3jpg.png"
                  className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                  alt="testimonial3jpg"
                />
                <div className="flex flex-col items-center justify-end mb-[13px] w-[99%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray_900_04 text-center"
                      variant="body20"
                    >
                      Dramatically maintain clicks-
                    </Text>
                    <Text
                      className="text-blue_gray_900_04 text-center"
                      variant="body20"
                    >
                      and-mortar solutions without
                    </Text>
                    <Text
                      className="mt-0.5 text-blue_gray_900_04 text-center"
                      variant="body20"
                    >
                      functional solutions.
                    </Text>
                    <Text
                      className="mt-[3px] text-blue_gray_900_04 text-center"
                      variant="body20"
                    >
                      Completely synergize resource
                    </Text>
                  </div>
                  <Text
                    className="mt-0.5 text-blue_gray_900_04 text-center"
                    variant="body20"
                  >
                    taxing relationships via premier
                  </Text>
                  <Text
                    className="mt-0.5 text-blue_gray_900_04 text-center"
                    variant="body20"
                  >
                    niche markets. Professionally
                  </Text>
                  <Text
                    className="text-blue_gray_900_04 text-center"
                    variant="body20"
                  >
                    cultivate.
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-normal min-w-[186px] mt-[-13.61px] mx-auto text-[12.08px] text-center text-white_A700_01 z-[1]"
                shape="RoundedBorder12"
                size="md"
                variant="OutlineBlack9000c"
              >
                EMILIANO AQUILANI
              </Button>
            </div>
            <div className="flex flex-col relative w-[29%] md:w-full">
              <div className="bg-white_A700_01 border border-gray_200_01 border-solid flex flex-col gap-[17px] items-center justify-center mx-auto p-5 rounded shadow-bs11 w-full">
                <Img
                  src="images/img_testimonial3jpg_90x90.png"
                  className="h-[90px] md:h-auto rounded-[50%] w-[90px]"
                  alt="testimonial3jpg_One"
                />
                <div className="flex flex-col items-center justify-start mb-[17px]">
                  <Text
                    className="leading-[25.00px] text-blue_gray_900_04 text-center"
                    variant="body15"
                  >
                    <>
                      Dramatically maintain clicks-
                      <br />
                      and-mortar solutions without
                      <br />
                      functional solutions.
                      <br />
                      Completely synergize resource
                      <br />
                      taxing relationships via premier
                      <br />
                      niche markets. Professionally
                      <br />
                      cultivate.
                    </>
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-normal min-w-[179px] mt-[-17px] mx-auto text-[13.12px] text-center text-white_A700_01 z-[1]"
                shape="RoundedBorder12"
                size="lg"
                variant="OutlineBlack9000c"
              >
                ANNA ITURBE
              </Button>
            </div>
            <div className="flex flex-col relative w-[23%] md:w-full">
              <div className="bg-white_A700_01 border border-gray_200_01 border-solid flex flex-col gap-[13px] items-center justify-center mx-auto p-4 rounded shadow-bs11 w-full">
                <Img
                  src="images/img_testimonial3jpg.png"
                  className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                  alt="testimonial3jpg_Two"
                />
                <div className="flex flex-col items-center justify-end mb-[13px] w-[99%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray_900_04 text-center"
                      variant="body21"
                    >
                      Dramatically maintain clicks-
                    </Text>
                    <Text
                      className="text-blue_gray_900_04 text-center"
                      variant="body21"
                    >
                      and-mortar solutions without
                    </Text>
                    <Text
                      className="mt-0.5 text-blue_gray_900_04 text-center"
                      variant="body21"
                    >
                      functional solutions.
                    </Text>
                    <Text
                      className="mt-[3px] text-blue_gray_900_04 text-center"
                      variant="body21"
                    >
                      Completely synergize resource
                    </Text>
                  </div>
                  <Text
                    className="mt-0.5 text-blue_gray_900_04 text-center"
                    variant="body21"
                  >
                    taxing relationships via premier
                  </Text>
                  <Text
                    className="mt-0.5 text-blue_gray_900_04 text-center"
                    variant="body21"
                  >
                    niche markets. Professionally
                  </Text>
                  <Text
                    className="text-blue_gray_900_04 text-center"
                    variant="body21"
                  >
                    cultivate.
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-normal min-w-[160px] mt-[-13.61px] mx-auto text-[11.2px] text-center text-white_A700_01 z-[1]"
                shape="RoundedBorder12"
                size="md"
                variant="OutlineBlack9000c"
              >
                LARA ATKINSON
              </Button>
            </div>
          </div>
        </div>
        <Text
          className="font-inter mt-[100px] text-center text-orange_500"
          variant="body5"
        >
          WHY US
        </Text>
        <Text
          className="font-commissioner font-semibold leading-[26.00px] mt-[49px] text-gray_800_01 text-justify w-[48%] sm:w-full"
          variant="body12"
        >
          Roffers.co.uk (Roffers LTD) is the UK’s first hyperlocal online
          platform that helps local merchants to connect with their potential
          customers in real-time. With Roffers, merchants can build a strong
          brand presence and increase high visibility to get discovered easily.
        </Text>
        <footer className="bg-orange_500 flex font-segoeui items-center justify-center mt-[131px] pb-6 pt-[71px] md:px-5 px-[202px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-auto">
            <div className="flex flex-col gap-6 items-start justify-start pb-4 px-3 w-auto sm:w-full">
              <Text
                className="font-bold text-white_A700_01 w-auto"
                variant="body10"
              >
                FAQ
              </Text>
              <ul className="flex flex-col font-nunitosans gap-4 items-start justify-start pb-4 md:pr-10 sm:pr-5 pr-[90px] w-auto md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">question one</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Question 2</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">question 3</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Question 4</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">
                      Litigation Risk Assessment and Strategy
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Patent Prosecution</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start pb-[118px] px-3 w-auto">
              <Text
                className="font-bold text-white_A700_01 w-auto"
                variant="body10"
              >
                Quick links
              </Text>
              <ul className="flex flex-col font-nunitosans gap-4 items-start justify-start pb-4 md:pr-10 sm:pr-5 pr-[212px] w-auto md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Link 1</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Link 2</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Link 3</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start pb-[50px] px-3 w-[269px]">
              <Text className="text-white_A700_01 w-auto" variant="body11">
                Other
              </Text>
              <ul className="flex flex-col gap-4 items-start justify-start pb-4 md:pr-10 pr-28 sm:pr-5 w-auto md:w-full common-column-list">
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Privacy Policy</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Terms of Use</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Features</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Success Stories</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="font-normal text-white_A700_01"
                  >
                    <Text variant="body10">Contact Us</Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepagenewuserPage;
