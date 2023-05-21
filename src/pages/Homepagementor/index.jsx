import React from "react";

import { Img, List, Text } from "components";
import Header from "components/Header";
import SuperAdminDashboardCheckboxactive from "components/SuperAdminDashboardCheckboxactive";

const HomepagementorPage = () => {
  return (
    <>
      <div className="bg-white_A700_01 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[84px] w-full">
        <div className="flex flex-col gap-[30px] items-center justify-start w-full">
          <Header className="bg-orange_500 flex flex-row items-center justify-center md:px-5 shadow-bs9 w-full" />
          <div className="flex md:flex-col flex-row gap-[47px] items-center justify-start max-w-[1197px] mx-auto md:px-5 w-full">
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[21px] items-center justify-start p-[9px] rounded-[16px] shadow-bs2 w-[21%] md:w-full">
              <Text className="text-black_900" variant="body7">
                Your Intrests
              </Text>
              <div className="flex flex-col font-inter gap-2.5 items-center justify-start mb-[353px] w-[47%] md:w-full">
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
            <List
              className="md:flex-1 flex-col gap-[15px] grid w-[76%] md:w-full"
              orientation="vertical"
            >
              <div className="bg-white_A700 flex flex-col items-start justify-end p-[17px] rounded-[15px] shadow-bs2 w-full">
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
              <div className="bg-white_A700 flex flex-col items-start justify-end p-[17px] rounded-[15px] shadow-bs2 w-full">
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
              <div className="bg-white_A700 flex flex-col items-start justify-end p-[17px] rounded-[15px] shadow-bs2 w-full">
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
              <div className="bg-white_A700 flex flex-col items-start justify-end p-[17px] rounded-[15px] shadow-bs2 w-full">
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
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagementorPage;
