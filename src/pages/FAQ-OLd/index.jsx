import React from "react";

import { Img, Line, Text } from "components";
import Header from "components/Header";

const FAQPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans gap-[57px] items-center justify-start mx-auto pb-[57px] w-full">
        <Header className="bg-orange_500 w-full" />
        <div className="bg-white_A700_01 md:h-[479px] sm:h-[511px] h-[552px] pt-3 md:px-5 relative rounded-[20px] shadow-bs9 w-[35%] sm:w-full">
          <Text
            className="absolute font-extrabold inset-x-[0] mx-auto text-blue_gray_900_04 text-center top-[2%] w-max"
            as="h3"
            variant="h3"
          >
            FAQ
          </Text>
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[39px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-3.5 w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text className="font-normal text-black_900" variant="body14">
                  What is the definition of a will?
                </Text>
                <Img
                  src="images/img_.png"
                  className="h-[19px] md:h-auto mt-[3px] object-cover"
                  alt="Two"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-3.5 w-full" />
              <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                <Text className="font-normal text-black_900" variant="body14">
                  What happens to chemists when they die?
                </Text>
                <Img
                  src="images/img_.png"
                  className="h-[19px] md:h-auto object-cover"
                  alt="Three"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[13px] w-full" />
              <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between mt-3.5 w-full">
                <Text className="font-normal text-black_900" variant="body14">
                  Why does the leopard find it difficult to hide and stalk?
                </Text>
                <Img
                  src="images/img_.png"
                  className="h-[19px] md:h-auto object-cover"
                  alt="Four"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[13px] w-full" />
              <div className="flex flex-row items-start justify-between mt-3.5 w-full">
                <Text className="font-normal text-black_900" variant="body14">
                  What kind of key opens a banana?
                </Text>
                <Img
                  src="images/img_.png"
                  className="h-[19px] md:h-auto object-cover"
                  alt="Five"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[13px] w-full" />
              <div className="flex flex-row items-start justify-between mt-[13px] w-full">
                <Text className="font-normal text-black_900" variant="body14">
                  <>Where does a tree store it&#39;s stuff?</>
                </Text>
                <Img
                  src="images/img_.png"
                  className="h-[19px] md:h-auto mt-[3px] object-cover"
                  alt="Six"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-3.5 w-full" />
              <div className="flex flex-row items-center justify-between mt-[15px] w-full">
                <Text className="font-normal text-black_900" variant="body14">
                  What dog is known for its punctuality?
                </Text>
                <Img
                  src="images/img_.png"
                  className="h-[19px] md:h-auto object-cover"
                  alt="Seven"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-3 w-full" />
              <div className="flex flex-row items-center justify-between mt-[15px] w-full">
                <Text className="font-normal text-black_900" variant="body14">
                  Name a thing that has four wheels and flies?
                </Text>
                <Img
                  src="images/img_.png"
                  className="h-[19px] md:h-auto object-cover"
                  alt="Eight"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-3 w-full" />
              <div className="flex flex-row items-center justify-between mt-3.5 w-full">
                <Text className="font-normal text-black_900" variant="body14">
                  Why was everyone so tired on the First of April?
                </Text>
                <Img
                  src="images/img_.png"
                  className="h-[19px] md:h-auto object-cover"
                  alt="Nine"
                />
              </div>
              <Line className="bg-blue_gray_100 h-px mt-[13px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
