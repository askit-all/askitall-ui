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

const LoginpagePage = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({ ..._initialFields });

  const [validator, forceUpdate] = useValidator({
    autoForceUpdate: true,
    validators: {},
  });

  const handleChange = (event) => {
    setFormFields((prevState) => {
      const obj = {
        ...prevState,
        [event.target.name]: event.target.value,
      };
      return obj;
    });
  };

  const handleSubmit = () => {
    if (validator.allValid()) {
      const payload = {
        ...formFields,
      };
      secured.post("/users/login", payload).then((response) => {
        setFormFields({ ..._initialFields });
        validator.visibleFields = [];
        forceUpdate();
        console.log(response);

        if (response.data?.success) {
          localStorage.setItem("token", response.data.token);
        }

        toast("Welcome", {
          icon: "👏",
        });

        navigate("/homepagementeeone");
        // write token to cookie
        // redirect to questions page (private route)
      });
    } else {
      validator.showMessages();
    }
  };

  validator.purgeFields();

  return (
    <>
      <div className="bg-white_A700 flex font-nunitosans h-[727px] justify-end mx-auto relative w-full">
        <div className="h-[2455px] md:h-[727px] mt-auto mx-auto pb-[1728px] md:px-5 w-full">
          <Img
            src="images/img_gradient.png"
            className="h-[727px] mx-auto object-cover w-full"
            alt="gradient"
          />
          {/* <div className="absolute flex flex-row gap-[15px] items-center justify-center left-[2%] top-[1%] w-[6%]">
            <Img
              src="images/img_arrowleft.svg"
              className="common-pointer h-6 w-6"
              alt="arrowleft"
              onClick={() => navigate(-1)}
            />
            <Text className="font-bold text-white_A700" variant="body10">
              Back
            </Text>
          </div> */}
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[541px] items-center justify-start right-[10%] top-[4%] w-[33%]"
            style={{ backgroundImage: "url('images/img_group6.png')" }}
          >
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[541px] items-center justify-start p-7 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group6.png')" }}
            >
              <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                <div className="flex flex-col gap-[5px] justify-start w-full">
                  <Text className="text-black_900_02" as="h6" variant="h6">
                    Welcome to AskItAll
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] md:ml-[0] ml-[7px] text-black_900_02"
                    variant="body12"
                  >
                    <>
                      Connect with our community of mentors <br />
                      and mentee{" "}
                      <a style={{ color: "#F48020" }} href="/signup">
                        New to AskItAll? Signup
                      </a>
                    </>
                  </Text>
                </div>
                <Input
                  wrapClassName="mt-[25px] w-full"
                  className="font-semibold p-0 placeholder:text-gray_500 text-gray_500 text-left text-lg w-full"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="OutlineGray70033"
                  value={formFields.email}
                  onChange={handleChange}
                  onBlur={() => validator.showMessageFor("email")}
                  errors={[
                    validator.message(
                      "email",
                      formFields.email,
                      "required|email"
                    ),
                  ]}
                ></Input>
                <Input
                  wrapClassName="mt-5 w-full"
                  className="font-semibold p-0 placeholder:text-gray_500 text-gray_500 text-left text-lg w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="OutlineGray70033"
                  value={formFields.password}
                  onChange={handleChange}
                  onBlur={() => validator.showMessageFor("password")}
                  errors={[
                    validator.message(
                      "password",
                      formFields.password,
                      "required"
                    ),
                  ]}
                ></Input>
                <Button
                  className="cursor-pointer font-bold min-w-[370px] mt-5 text-center text-white_A700_01 text-xl"
                  shape="CircleBorder20"
                  size="md"
                  variant="OutlineIndigo100"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <div className="flex flex-row gap-2.5 items-start justify-between mt-[26px] w-full">
                  <Line className="bg-black_900 h-px mb-2.5 mt-4 w-[44%]" />
                  <Text
                    className="font-semibold text-black_900"
                    variant="body10"
                  >
                    OR
                  </Text>
                  <Line className="bg-black_900 h-px mb-2.5 mt-4 w-[44%]" />
                </div>
                <Input
                  wrapClassName="flex mt-[27px] w-full"
                  className="font-semibold p-0 placeholder:text-black_900_02 text-black_900_02 text-left text-xl w-full"
                  name="continuegoogle"
                  placeholder="Continue with google"
                  prefix={
                    <Img
                      src="images/img_google.svg"
                      className="mt-px mb-0.5 mr-[30px]"
                      alt="google"
                    />
                  }
                  shape="RoundedBorder18"
                  size="sm"
                  variant="OutlineBlueA20001"
                ></Input>
                <Input
                  wrapClassName="flex mt-5 w-full"
                  className="font-semibold p-0 placeholder:text-black_900_02 text-black_900_02 text-left text-xl w-full"
                  name="continuefacebook"
                  placeholder="Continue with facebook"
                  prefix={
                    <div className="h-[26px] mr-7 w-[26px] bg-indigo_600 rounded-[50%] my-px py-1.5 px-[9px] flex justify-center items-center">
                      <Img
                        src="images/img_facebook.svg"
                        className="my-auto"
                        alt="facebook"
                      />
                    </div>
                  }
                  shape="RoundedBorder18"
                  size="sm"
                  variant="OutlineIndigo600"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] md:h-[727px] h-[861px] left-[14%] pb-[134px] md:px-5 w-[26%]">
          <Img
            src="images/img_asset11.png"
            className="h-[727px] mx-auto object-cover"
            alt="assetEleven"
          />
          <Img
            src="images/img_easytouse1.svg"
            className="absolute bottom-[11%] h-[369px] left-[26%]"
            alt="assetEleven_One"
          />
        </div>
      </div>
    </>
  );
};

export default LoginpagePage;
