import { secured } from "api/interceptors";
import { Button, Img, Input, Line, Text } from "components";
import useValidator from "hooks/useValidator";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import "../../styles/login.css"; // Import the CSS file

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

  const responseFacebook = (response) => {
    console.log(response);
  };

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
          localStorage.setItem("userData", JSON.stringify(response.data.userData));
        }

        toast("Welcome", {
          icon: "👏",
        });

        navigate("/mentee");
        // write token to cookie
        // redirect to questions page (private route)
      });
    } else {
      validator.showMessages();
    }
  };

  validator.purgeFields();

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
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
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start responsive-right top-[12%] responsive-width-for-login"
            style={{ backgroundImage: "url('images/img_group6.png')" }}
          >
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-7 sm:px-5 w-full"
              style={{
                backgroundImage: "url('images/img_group6.png')",
                height: "calc(80vh - 1rem)",
              }}
            >
              <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                <div className="flex flex-col gap-[5px] justify-start w-full">
                  <Text className="text-black_900_02 responsive-title">
                    Welcome to AskItAll
                  </Text>
                  <Text className="font-normal text-black_900_02 responsive-sub-title">
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
                  wrapClassName="responsive-margin-top w-full"
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
                  wrapClassName="responsive-margin-top w-full"
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
                  className="cursor-pointer font-bold responsive-login-width mt-5 text-center text-white_A700_01 text-xl"
                  shape="CircleBorder20"
                  size="md"
                  variant="OutlineIndigo100"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
                <div className="flex flex-row gap-2.5 items-start justify-between responsive-or w-full">
                  <Line className="bg-black_900 h-px mb-2.5 mt-4 w-[44%]" />
                  <Text
                    className="font-semibold text-black_900"
                  >
                    OR
                  </Text>
                  <Line className="bg-black_900 h-px mb-2.5 mt-4 w-[44%]" />
                </div>
                {/* <Input
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
                ></Input> */}

                <FacebookLogin
                  appId="1590730038099961"
                  autoLoad={false}
                  scope="email"
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <Input
                      wrapClassName="flex responsive-margin-top w-full"
                      className="font-semibold p-0 placeholder:text-black_900_02 text-black_900_02 text-left w-full cursor-pointer text-center responsive-cred-size"
                      name="facebook"
                      placeholder="Continue with facebook"
                      readOnly={true}
                      onClick={renderProps.onClick}
                      prefix={
                        <div className="h-[26px] w-[26px] bg-indigo_600 rounded-[50%] my-px py-1.5 px-[9px] flex justify-center items-center">
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
                  )}
                />

                <br />

                <GoogleOAuthProvider clientId="764117096804-9i1le9ok02l6in3oshr54omg5qisk40o.apps.googleusercontent.com">
                  {profile ? (
                    <div>
                      <img src={profile.picture} alt="user image" />
                      <h3>User Logged in</h3>
                      <p>Name: {profile.name}</p>
                      <p>Email Address: {profile.email}</p>
                      <br />
                      <br />
                      <button onClick={logOut}>Log out</button>
                    </div>
                  ) : (
                    // <button onClick={() => login()}>Sign in with Google 🚀 </button>
                    <Input
                      wrapClassName="flex w-full"
                      className="font-semibold p-0 placeholder:text-black_900_02 text-black_900_02 text-left w-full cursor-pointer text-center responsive-cred-size"
                      name="google"
                      placeholder="Continue with google"
                      readOnly={true}
                      onClick={() => login()}
                      prefix={
                        <Img
                          src="images/img_google.svg"
                          className="mt-px mb-0.5"
                          alt="google"
                        />
                      }
                      shape="RoundedBorder18"
                      size="sm"
                      variant="OutlineBlueA20001"
                    ></Input>
                  )}
                </GoogleOAuthProvider>
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
            className="responsive-height mx-auto object-cover"
            alt="assetEleven"
          />
        </div>
      </div>
    </>
  );
};

export default LoginpagePage;
