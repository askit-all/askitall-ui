import React from "react";

import { Button, Img, Input } from "components";

const HomePageMenteeOneCard3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-gradient2  p-px rounded-[20px] w-full ">
          <div className="absolute bg-gradient1  flex flex-col h-max inset-[0] items-center justify-center m-auto outline rounded-[20px] md:w-full">
            <Img
              src="images/img_texture.png"
              className="h-[85px] sm:h-auto object-cover rounded-[20px] w-full"
              alt="texture"
            />
          </div>
        </div>
        <div className="absolute bg-white_A700 flex md:flex-col flex-row gap-5 h-full inset-[0] items-center justify-center m-auto p-5 rounded-[14px] shadow-bs2 w-[63%]">
          <Img
            src="images/img_ellipse2.png"
            className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
            alt="ellipseTwo"
          />
          <Input
            wrapClassName="flex w-[71%] md:w-full"
            className="font-nunitosans font-semibold p-0 placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
            name="language"
            placeholder="|   Ask a Question"
            prefix={
              <Img
                src="images/img_location.svg"
                className="mt-auto mb-px mr-[13px]"
                alt="location"
              />
            }
            shape="CircleBorder23"
            size="sm"
            variant="OutlineGray70033"
          ></Input>
          <Button
            className="cursor-pointer font-bold font-nunitosans min-w-[167px] text-center text-white_A700_01 text-xl"
            shape="CircleBorder20"
            size="md"
            variant="OutlineGray40001"
          >
            {props?.post}
          </Button>
        </div>
      </div>
    </>
  );
};

HomePageMenteeOneCard3.defaultProps = {};

export default HomePageMenteeOneCard3;
