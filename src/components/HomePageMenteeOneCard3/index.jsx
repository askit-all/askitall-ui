import { secured } from "api/interceptors";
import { Button, Img, Input } from "components";
import useValidator from "hooks/useValidator";
import { useState } from "react";

const HomePageMenteeOneCard3 = (props) => {
  const [question, setQuestion] = useState("");

  const [validator, forceUpdate] = useValidator({
    autoForceUpdate: true,
    validators: {},
  });

  const [type, settype] = useState("");
  const handleChange = (type) => {
    settype(type.target.value);
  };

  const handleAdd = () => {
    const userDetails = JSON.parse(localStorage.getItem("userData"));
    if (validator.allValid()) {
      const payload = {
        type,
        question,
        postedBy: userDetails.userid,
      };

      secured.post("/questions", payload).then((response) => {
        setQuestion("");
        settype("");
        validator.visibleFields = [];
        forceUpdate();

        props.onChange();
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
        <div className="absolute bg-white_A700 flex md:flex-col flex-row gap-5 h-full inset-[0] items-center justify-center m-auto p-5 rounded-[14px] shadow-bs2">
          <Img
            src={
              props.userDetails
                ? props.userDetails.profileImageUrl
                  ? props.userDetails.profileImageUrl
                  : "images/img_ellipse2.png"
                : "images/img_ellipse2.png"
            }
            className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
            alt="ellipseTwo"
          />
          <Input
            wrapClassName="flex w-full"
            className="font-nunitosans font-semibold p-0 placeholder:text-gray_500  text-left text-xl w-full"
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
          <select
            className="rounded-[30px]"
            value={type}
            onChange={handleChange}
            onBlur={() => validator.showMessageFor("type")}
            errors={
              validator.message("type", type, "required")
                ? [validator.message("type", type, "required")]
                : []
            }
          >
            <option value="">Select Category</option>
            {props.categoryList.map((option) => (
              <option key={option.category_id} value={option.category_id}>
                {option.name}
              </option>
            ))}
          </select>

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
