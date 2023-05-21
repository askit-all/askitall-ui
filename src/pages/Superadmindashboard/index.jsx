import React from "react";

import { Button, Img, Input, Text } from "components";
import SuperAdminDashboardCheckboxactive from "components/SuperAdminDashboardCheckboxactive";

const SuperadmindashboardPage = () => {
  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[313px] w-full">
        <div className="flex flex-col gap-[30px] items-center justify-start w-full">
          <div className="bg-orange_500 h-[60px] shadow-bs9 w-full"></div>
          <div className="flex md:flex-col flex-row gap-[47px] items-center justify-start max-w-[1197px] mx-auto md:px-5 w-full">
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[19px] items-center justify-start p-[11px] rounded-[16px] shadow-bs2 w-[21%] md:w-full">
              <Text className="text-black_900" variant="body7">
                Intrests
              </Text>
              <div className="flex flex-col font-inter gap-2.5 items-center justify-start mb-[477px] w-[48%] md:w-full">
                <SuperAdminDashboardCheckboxactive
                  className="flex flex-row items-center justify-start w-full"
                  checkbox="Checkbox"
                />
                <SuperAdminDashboardCheckboxactive
                  className="flex flex-row items-center justify-start w-full"
                  checkbox="Checkbox"
                />
                <SuperAdminDashboardCheckboxactive
                  className="flex flex-row items-center justify-start w-full"
                  checkbox="Checkbox"
                />
                <SuperAdminDashboardCheckboxactive
                  className="flex flex-row items-center justify-start w-full"
                  checkbox="Checkbox"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[76%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white_A700 flex sm:flex-col flex-row gap-5 items-center justify-between p-5 rounded-[14px] shadow-bs2 w-full">
                  <Input
                    wrapClassName="sm:flex-1 sm:w-full"
                    className="font-semibold p-0 placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
                    type="text"
                    name="groupFortySix"
                    placeholder="Search by names"
                    shape="CircleBorder23"
                    size="md"
                    variant="OutlineGray70033"
                  ></Input>
                  <Button
                    className="cursor-pointer font-bold min-w-[167px] text-center text-white_A700_01 text-xl"
                    shape="CircleBorder20"
                    size="md"
                    variant="OutlineGray40001"
                  >
                    search
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-end mt-10 p-[17px] rounded-[15px] shadow-bs2 w-full">
                  <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-0.5 w-[46%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-[48%] md:w-full">
                        <Img
                          src="images/img_ellipse2.png"
                          className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                          alt="ellipseTwo"
                        />
                        <Text
                          className="font-bold text-gray_900"
                          variant="body10"
                        >
                          Rashmi Singh
                        </Text>
                      </div>
                      <Text
                        className="font-semibold text-black_900"
                        variant="body10"
                      >
                        Why is first step in marketing is important ?
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-end mt-[15px] p-[17px] rounded-[15px] shadow-bs2 w-full">
                  <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-0.5 w-[46%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-[48%] md:w-full">
                        <Img
                          src="images/img_ellipse2.png"
                          className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                          alt="ellipseTwo_One"
                        />
                        <Text
                          className="font-bold text-gray_900"
                          variant="body10"
                        >
                          Rashmi Singh
                        </Text>
                      </div>
                      <Text
                        className="font-semibold text-black_900"
                        variant="body10"
                      >
                        Why is first step in marketing is important ?
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-end mt-[15px] p-[17px] rounded-[15px] shadow-bs2 w-full">
                  <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-0.5 w-[46%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-start w-[48%] md:w-full">
                        <Img
                          src="images/img_ellipse2.png"
                          className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                          alt="ellipseTwo_Two"
                        />
                        <Text
                          className="font-bold text-gray_900"
                          variant="body10"
                        >
                          Rashmi Singh
                        </Text>
                      </div>
                      <Text
                        className="font-semibold text-black_900"
                        variant="body10"
                      >
                        Why is first step in marketing is important ?
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-start justify-end p-[17px] rounded-[15px] shadow-bs2 w-full">
                <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-0.5 w-[46%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[15px] items-center justify-start w-[48%] md:w-full">
                      <Img
                        src="images/img_ellipse2.png"
                        className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                        alt="ellipseTwo_Three"
                      />
                      <Text
                        className="font-bold text-gray_900"
                        variant="body10"
                      >
                        Rashmi Singh
                      </Text>
                    </div>
                    <Text
                      className="font-semibold text-black_900"
                      variant="body10"
                    >
                      Why is first step in marketing is important ?
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperadmindashboardPage;
