import React from "react";
import "./faq.css";
import { Img, Line, Text } from "components";
import Header from "components/Header";

const FAQTwoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[1rem] w-full responsive-view">
        {/* <div className="flex flex-col gap-[57px] justify-start w-full"> */}
        <Header className="bg-orange_500 w-full" />
        <div className="flex custom-flex md:gap-10 gap-[71px] items-start justify-start md:ml-[0] ml-[157px] md:px-5 w-[73%] md:w-full">
          <Img
            src="images/img_completd1.png"
            className="h-[472px] md:h-auto md:mt-0 mt-6 object-cover w-[472px] sm:w-full"
            alt="completdOne"
          />
          <div
            className="bg-white_A700_01 pt-3 relative rounded-[20px] shadow-bs9"
            style={{ margin: "1rem" }}
          >
            <Text
              className="font-extrabold mx-auto text-blue_gray_900_04 text-center w-max"
              as="h3"
              variant="h3"
            >
              FAQ
            </Text>
            <div className="flex flex-col items-center justify-end mx-auto p-[39px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start mt-3.5 w-full" style={{ height: "calc(100vh - 18rem)", overflowY: "auto" }}>
                <div
                  className="flex flex-row items-start justify-between w-full"
                  
                >
                  <Text className="font-normal text-black_900" variant="body14">
                    What is the definition of a will?
                  </Text>
                  <Img
                    src="images/img_.png"
                    className="h-[19px] md:h-auto mt-[3px] object-cover"
                    alt="Ten"
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
                    alt="Eleven"
                  />
                </div>
                <Line className="bg-blue_gray_100 h-px mt-[13px] w-full" />
                <div className="flex flex-row gap-[13px] items-center justify-between mt-3.5 w-full">
                  <Text className="font-normal text-black_900" variant="body14">
                    Why does the leopard find it difficult to hide and stalk?
                  </Text>
                  <Img
                    src="images/img_.png"
                    className="h-[19px] md:h-auto object-cover"
                    alt="Twelve"
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
                    alt="Thirteen"
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
                    alt="Fourteen"
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
                    alt="Fifteen"
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
                    alt="Sixteen"
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
                    alt="Seventeen"
                  />
                </div>
                <Line className="bg-blue_gray_100 h-px mt-[13px] w-full" />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default FAQTwoPage;
