import React from "react";

import { Button, Img } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[147px] sm:ml-[0] ml-[30px] sm:mt-0 my-2.5"
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
          <div className="font-nunitosans font-semibold text-amber_A700 text-left text-xl">
            Mentee
          </div>
        </Button>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[145px] sm:ml-[0] ml-[30px] sm:mt-0 my-2.5"
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
          <div className="font-nunitosans font-semibold text-left text-white_A700 text-xl">
            Mentor
          </div>
        </Button>
        <Img
          src="images/img_notification.svg"
          className="h-[26px] sm:ml-[0] ml-[955px] sm:mt-0 my-4"
          alt="notification"
        />
        <Img
          src="images/img_user.svg"
          className="h-[26px] ml-10 sm:ml-[0] mr-[50px] sm:mt-0 my-4"
          alt="user"
        />
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
