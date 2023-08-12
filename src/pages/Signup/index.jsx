import { secured, opened } from "api/interceptors";
import { Button, Img, Input, Line, Text } from "components";
import useValidator from "hooks/useValidator";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import linkedInLoginImage from "../../assets/images/linkedinimage.png";
import "../../styles/signup.css"; // Import the CSS file

const _initialFields = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const _linkedInConfig = {
  clientId: "77a7m25hnyodov",
  redirectUrl: "http://localhost:3000/signup",
  oauthUrl:
    "https://www.linkedin.com/oauth/v2/authorization?response_type=code",
  scope: "r_liteprofile%20r_emailaddress",
  state: "123456",
};

const SignupPage = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({ ..._initialFields });

  const token = localStorage.getItem("token");
  const [validator, forceUpdate] = useValidator({
    autoForceUpdate: true,
    validators: {},
  });

  useEffect(() => {
    if (token) {
      navigate("/questionnaire");
    }
  }, [navigate]);

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
      opened.post("/users/register", payload).then((response) => {
        setFormFields({ ..._initialFields });
        validator.visibleFields = [];
        forceUpdate();

        toast.success("Joined! You may now login in");

        navigate("/login");
      });
    } else {
      validator.showMessages();
    }
  };

  validator.purgeFields();

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);

  function handleGoogleCallbackResponse(response) {
    const userObj = jwt_decode(response.credential);
    secured
      .post("/users/saveLoginInfoGoogle", {
        name: `${userObj?.given_name} ${userObj?.family_name}`,
        email: userObj?.email,
      })
      .then((response) => {
        toast(response?.data?.message, {
          icon: "👏",
        });

        if (response?.data?.data?.success) {
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem(
            "userData",
            JSON.stringify(response?.data?.data?.userData)
          );
          navigate("/questionnaire");
        }
      });
  }

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (
        typeof window.google !== "undefined" &&
        window.google.accounts &&
        window.google.accounts.id
      ) {
        window.google.accounts.id.initialize({
          client_id:
            "602685784094-t7l06k06cikhpnhbmfuld0hmg36n9cbn.apps.googleusercontent.com",
          callback: handleGoogleCallbackResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("googleSingin"),
          {
            theme: "outline",
            size: "large",
          }
        );
      } else {
        setTimeout(initializeGoogleSignIn, 100);
      }
    };
    initializeGoogleSignIn();
  }, []);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    setProfile(null);
  };

  const onLinkedInClick = () => {
    const { clientId, redirectUrl, oauthUrl, scope, state } = _linkedInConfig;
    const linkedinUrl = `${oauthUrl}&client_id=${clientId}&scope=${scope}&state=${state}&redirect_uri=${redirectUrl}`;
    const width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;
    window.open(
      linkedinUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  };

  useEffect(() => {
    if (window.opener && window.opener !== window) {
      const code = getCodeFromWindowURL(window.location.href);
      window.opener.postMessage({ type: "code", code: code }, "*");
      window.close();
    }
    window.addEventListener("message", handlePostMessage);

    return () => {
      window.removeEventListener("message", handlePostMessage);
    };
  }, []);

  const handlePostMessage = (event) => {
    if (event.data.type === "code") {
      const { code } = event.data;
      getUserCredentials(code);
    }
  };

  const getCodeFromWindowURL = (url) => {
    const popupWindowURL = new URL(url);
    return popupWindowURL.searchParams.get("code");
  };

  const getUserCredentials = (code) => {
    secured
      .get(
        `/users/loginByLinkedin?code=${code}&redirectUrl=${_linkedInConfig.redirectUrl}`
      )
      .then((response) => {
        toast(response?.data?.message, {
          icon: "👏",
        });

        if (response?.data?.data?.success) {
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem(
            "userData",
            JSON.stringify(response?.data?.data?.userData)
          );
          navigate("/questionnaire");
        }
      });
  };

  return (
    <>
      <div className="bg-white_A700 flex font-nunitosans justify-end mx-auto relative w-full">
        <div className="w-full">
          <Img
            src="images/img_gradient.png"
            className="mx-auto object-cover w-full h-[100vh]"
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
            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start top-[4%] responsive-right responsive-form-width"
            style={{ backgroundImage: "url('images/img_group6.png')" }}
          >
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-7 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group6.png')" }}
            >
              <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                <div className="flex flex-col gap-[5px] justify-start w-full">
                  <Text className="text-black_900_02 responsive-title">
                    Welcome to AskItAll
                  </Text>
                  <Text className="font-normal leading-[24.00px] md:ml-[0] ml-[7px] text-black_900_02 responsive-sub-title">
                    <>
                      Connect with our community of mentors <br />
                      and mentee{" "}
                      <a style={{ color: "#F48020" }} href="/login">
                        Already a member? Login
                      </a>
                    </>
                  </Text>
                </div>
                <Input
                  wrapClassName="mt-[10px] w-full responsive-input-height"
                  className="font-semibold p-0 placeholder:text-gray_500 text-gray_500 text-left text-lg w-full"
                  type="text"
                  name="name"
                  placeholder="Name"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="OutlineGray70033"
                  value={formFields.name}
                  onChange={handleChange}
                  onBlur={() => validator.showMessageFor("name")}
                  errors={[
                    validator.message("name", formFields.name, "required"),
                  ]}
                ></Input>
                <Input
                  wrapClassName="mt-[10px] w-full responsive-input-height"
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
                  wrapClassName="mt-[10px] w-full responsive-input-height"
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
                <Input
                  wrapClassName="mt-[10px] w-full responsive-input-height"
                  className="font-semibold p-0 placeholder:text-gray_500 text-gray_500 text-left text-lg w-full"
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="OutlineGray70033"
                  value={formFields.password2}
                  onChange={handleChange}
                  onBlur={() => validator.showMessageFor("confirm_password")}
                  errors={[
                    validator.message(
                      "confirm_password",
                      formFields.password2,
                      `required|in:${formFields.password}`,
                      { messages: { in: "Passwords need to match!" } }
                    ),
                  ]}
                ></Input>
                <Button
                  className="cursor-pointer font-bold responsive-join-btn mt-5 text-center text-white_A700_01 text-xl"
                  shape="CircleBorder20"
                  size="md"
                  variant="OutlineIndigo100"
                  onClick={handleSubmit}
                >
                  Join
                </Button>
                <div className="flex flex-row gap-2.5 items-start justify-between responsve-margin-top w-full">
                  <Line className="bg-black_900 h-px mb-2.5 mt-4 w-[44%]" />
                  <Text
                    className="font-semibold text-black_900"
                    variant="body10"
                  >
                    OR
                  </Text>
                  <Line className="bg-black_900 h-px mb-2.5 mt-4 w-[44%]" />
                </div>
                {/* <Input
                  wrapClassName="flex mt-[27px] w-full"
                  className="font-semibold p-0 placeholder:text-black_900_02 text-black_900_02 text-left text-xl w-full"
                  name="google"
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
                  wrapClassName="flex mt-[10px] w-full"
                  className="font-semibold p-0 placeholder:text-black_900_02 text-black_900_02 text-left text-xl w-full"
                  name="facebook"
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
                ></Input> */}

                <div id="googleSingin"></div>
                <br />
                <img
                  src={linkedInLoginImage}
                  alt="Sign in with LinkedIn"
                  onClick={onLinkedInClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-[0] left-[14%] md:px-5"
          style={{ height: "calc(100vh - 1rem)" }}
        >
          <Img
            src="images/Asset 1 1.png"
            className="responsive-image mx-auto object-cover"
            alt="assetEleven"
          />
          {/* <Img
            src="images/img_easytouse1.svg"
            className="absolute bottom-[11%] h-[369px] left-[26%]"
            alt="assetEleven_One"
          /> */}
        </div>
      </div>
    </>
  );
};

export default SignupPage;
