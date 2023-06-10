import { Button, Img } from "components";
import React from "react";
import "../../styles/header.css";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex justify-between p-3 m-2">
          <div className="flex items-center head-men-width justify-between">
            <Button
              className="cursor-pointer flex items-center"
              rightIcon={
                <Img
                  src="images/img_question.svg"
                  className="mt-px ml-[15px]"
                  alt="question"
                />
              }
              shape="CircleBorder20"
              size="sm"
              variant="OutlineWhiteA700"
            >
              <div className="font-nunitosans font-semibold text-amber_A700 text-left">
                <a href="/mentee"> Mentee</a>
              </div>
            </Button>
            <Button
              href="/mentor"
              className="cursor-pointer flex items-center"
              rightIcon={
                <Img
                  src="images/img_volume.svg"
                  className="mt-px ml-[15px] mr-[5px]"
                  alt="volume"
                />
              }
              shape="CircleBorder20"
              size="sm"
              variant="OutlineWhiteA700_1"
            >
              <div className="font-nunitosans font-semibold text-left text-white_A700">
                <a href="/mentor"> Mentor</a>
              </div>
            </Button>
          </div>

          <div className="flex items-center head-btn-width justify-between">
            <Img
            className="head-img-width"
              src="images/img_notification.svg"
              alt="notification"
            />
            <Img
              src="images/img_user.svg"
              alt="user"
              className="head-img-width"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
