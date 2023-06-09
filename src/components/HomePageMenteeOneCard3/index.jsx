import { secured } from "api/interceptors";
import { Button, Img, Input, Line, Text } from "components";
import useValidator from "hooks/useValidator";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const _initialFields = {
  email: "",
  password: "",
};

const HomePageMenteeOneCard3 = (props) => {
  const [question, setQuestion] = useState("");

  const [validator, forceUpdate] = useValidator({
    autoForceUpdate: true,
    validators: {},
  });

  const handleAdd = () => {
    if (validator.allValid()) {
      const payload = {
        type: "engineering",
        question,
      };

      secured.post("/questions", payload).then((response) => {
        setQuestion("");
        validator.visibleFields = [];
        forceUpdate();

        // TODO:
        // call fetch questions api
        // store it into context/reducer
        // pass data to the question list
      });
    } else {
      validator.showMessages();
    }
  };

  validator.purgeFields();

  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-gradient2  p-px rounded-[20px] w-full "></div>
        <div className="absolute bg-white_A700 flex md:flex-col flex-row gap-5 h-full inset-[0] items-center justify-center m-auto p-5 rounded-[14px] shadow-bs2 w-[63%]">
          <Img
            src="images/img_ellipse2.png"
            className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
            alt="ellipseTwo"
          />
          <Input
            wrapClassName="flex w-full"
            className="font-nunitosans font-semibold p-0 placeholder:text-gray_500 text-gray_500 text-left text-xl w-full"
            name="language"
            placeholder="   Ask a Question"
            // prefix={
            //   <Img
            //     src="images/img_location.svg"
            //     className="mt-auto mb-px mr-[13px]"
            //     alt="location"
            //   />
            // }
            shape="CircleBorder23"
            size="sm"
            variant="OutlineGray70033"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onBlur={() => validator.showMessageFor("question")}
            errors={
              validator.message("question", question, "required")
                ? [validator.message("question", question, "required")]
                : []
            }
          ></Input>
          <Button
            className="cursor-pointer font-bold font-nunitosans min-w-[167px] text-center text-white_A700_01 text-xl"
            shape="CircleBorder20"
            size="md"
            variant="OutlineGray40001"
            onClick={handleAdd}
          >
            Post
          </Button>
        </div>
      </div>
    </>
  );
};

HomePageMenteeOneCard3.defaultProps = {};

export default HomePageMenteeOneCard3;
