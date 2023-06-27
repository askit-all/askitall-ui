import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const TermsandconditionPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[1rem] w-full responsive-view">
        <Header className="bg-orange_500 w-full" />
        {/* <div className="flex justify-between">
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[147px] md:ml-[0] ml-[30px] md:mt-0 my-2.5"
            rightIcon={
              <Img
                src="images/img_question_white_a700.svg"
                className="mt-px ml-[15px]"
                alt="question"
              />
            }
            shape="CircleBorder20"
            size="md"
            variant="OutlineWhiteA700_2"
          >
            <div className="font-semibold text-left text-white_A700 text-xl">
              Mentee
            </div>
          </Button>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[145px] md:ml-[0] ml-[30px] md:mt-0 my-2.5"
            rightIcon={
              <Img
                src="images/img_volume_amber_a700_01.svg"
                className="mt-px ml-[15px]"
                alt="volume"
              />
            }
            shape="CircleBorder20"
            size="md"
            variant="OutlineWhiteA700"
          >
            <div className="font-semibold text-amber_A700_01 text-left text-xl">
              Mentor
            </div>
          </Button>
          <Img
            src="images/img_notification.svg"
            className="h-[26px] md:ml-[0] md:mt-0 my-4"
            alt="notification"
          />
          <Img
            src="images/img_ellipse6.png"
            className="h-9 md:h-auto ml-8 md:ml-[0] mr-[42px] md:mt-0 my-[11px] rounded-[50%] w-9"
            alt="ellipseSix"
          />
        </div> */}

        <Text
          className="font-nunito mt-[43px] text-blue_gray_900_04 text-center tracking-[-0.96px]"
          as="h4"
          variant="h4"
        >
          Terms and conditions
        </Text>
        <div
          className="bg-white_A700 flex flex-col items-start justify-start mt-5 p-5 md:px-5 rounded-[30px] shadow-bs2"
          style={{ margin: "1rem" }}
        >
          <Text className="font-medium font-nunito leading-[34.00px] text-black_900 ">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.Vorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
            efficitur neque. Ut diam quam, semper iaculis condimentum ac,
            vestibulum eu nisl.Vorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
            turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam
            quam, semper iaculis condimentum ac, vestibulum eu nisl.Vorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
            et velit interdum, ac aliquet odio mattis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut
            commodo efficitur neque. Ut diam quam, semper iaculis condimentum
            ac, vestibulum eu nisl.Vorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
            turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam
            quam, semper iaculis condimentum ac, vestibulum eu nisl.
          </Text>
        </div>
      </div>
    </>
  );
};

export default TermsandconditionPage;
