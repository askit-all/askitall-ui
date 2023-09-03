import { useEffect, useRef, useState } from "react";

import { secured } from "api/interceptors";
import { Img, RatingBar, Text } from "components";
import Header from "components/Header";
import Bookings from "pages/Bookings";
import ProfilementeePage from "pages/MenteeProfile";
import NewprofilementprPage from "pages/MentorProfile";
import { useNavigate } from "react-router-dom";

const egJobSearchCareerTransitionEtcOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProfleHome = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [tabSelected, setTabSelected] = useState("profile");
  const [userDetails, setUserDetails] = useState(null);
  const fileInputRef = useRef(null);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchUserData();
    if (userDetails && userDetails.type == "mentor") {
      fetchRating();
    }
  }, [navigate]);

  const fetchRating = () => {
    setLoading(true);
    let url = `/reviews/average-rating/${userDetails?.userid}`;
    secured.get(url).then((response) => {
      if (response?.data) {
        setRating(response?.data?.averageRating);
      }
    });

    setLoading(false);
  };

  const fetchUserData = () => {
    setLoading(true);

    let url = "/users";
    secured.get(url).then((response) => {
      setUserDetails({
        ...response.data.data,
        gender: response.data.data.userinfo
          ? response.data.data.userinfo.gender
          : "",
        occupation: response.data.data.userinfo
          ? response.data.data.userinfo.occupation
          : "",
        aboutyourself: response.data.data.userinfo
          ? response.data.data.userinfo.aboutyourself
          : "",
      });
      setLoading(false);
    });
  };

  const handleTabChange = (type) => {
    if (type === "home") {
      history("/questionnaire");
    }
    setTabSelected(type);
  };

  const handleLogout = () => {
    localStorage.clear();
    history("/login");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    uploadImage(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const uploadImage = (file) => {
    let url = `/users/upload`;
    setLoading(true);
    const formData = new FormData();

    formData.append("image", file);

    secured.post(url, formData).then((response) => {
      if (response?.data?.status) {
        setUserDetails((prevUserDetails) => ({
          ...prevUserDetails,
          profileImageUrl: response.data.data.imageUrl,
        }));

        fetchUserData();

        setLoading(false);
      }
    });
  };

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto w-full responsive-view">
        <Header className="bg-orange_500 w-full" />
        <div className="bg-white_A700_01 flex sm:flex-col w-full">
          <div className="w-[30%] sm:w-full border-r-2 border-gray-300 p-[1rem]">
            <div className="flex flex-col items-center mb-5">
              <Img
                src={
                  userDetails
                    ? userDetails.profileImageUrl
                      ? userDetails.profileImageUrl
                      : "images/img_ellipse2.png"
                    : "images/img_ellipse2.png"
                }
                htmlFor="fileInput"
                onClick={handleClick}
                className="h-20 md:h-auto rounded-[50%] w-20"
                alt="ellipseSeven"
              />

              <input
                id="fileInput"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />

              <div className="my-4">
                <Text
                  className="font-bold my-3 inset-x-[0] mx-auto text-blue_gray_900_06 top-[0] w-max"
                  variant="body6"
                >
                  {userDetails?.name}
                </Text>
              </div>

              {userDetails?.type == "mentor" ? (
                <div className="flex flex-row items-center justify-center mt-2.5 w-[55%] md:w-full">
                  <RatingBar
                    className="flex justify-between w-[172px]"
                    value={rating}
                    starCount={5}
                    activeColor="#ff9915"
                    size={22}
                  ></RatingBar>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly sm:w-100">
              <div
                className={`flex justify-evenly items-center my-3 ${
                  tabSelected === "home" ? "tab-selected" : ""
                }`}
                onClick={() => handleTabChange("home")}
              >
                <div className="flex justify-end w-[30%]">
                  <Img src="images/home.png" className="h-5 w-5" alt="home" />
                </div>
                <div className="ml-10 sm:ml-3 w-[70%]">
                  <Text className="font-semibold" variant="body10">
                    Home{" "}
                  </Text>
                </div>
              </div>
              <div
                className={`flex justify-evenly items-center my-3 ${
                  tabSelected === "profile" ? "tab-selected" : ""
                }`}
                onClick={() => handleTabChange("profile")}
              >
                <div className="flex justify-end w-[30%]">
                  <Img
                    src="images/img_home.svg"
                    className="h-5 w-5"
                    alt="home"
                  />
                </div>
                <div className="ml-10 sm:ml-3 w-[70%]">
                  <Text className="font-semibold" variant="body10">
                    Profile{" "}
                  </Text>
                </div>
              </div>
              <div
                className={`flex justify-evenly items-center my-3 ${
                  tabSelected === "booking" ? "tab-selected" : ""
                }`}
                onClick={() => handleTabChange("booking")}
              >
                <div className="flex justify-end w-[30%]">
                  <Img
                    src="images/img_clock_blue_gray_900_07.svg"
                    className="h-5 w-5"
                    alt="clock"
                  />
                </div>
                <div className="ml-10 sm:ml-3 w-[70%]">
                  <Text
                    className="font-semibold text-blue_gray_900_07"
                    variant="body10"
                  >
                    Bookings
                  </Text>
                </div>
              </div>

              <div
                className="flex justify-evenly items-center my-3"
                onClick={() => handleLogout()}
              >
                <div className="flex justify-end w-[30%]">
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-5 w-5"
                    alt="arrowright"
                  />
                </div>
                <div className="ml-10 sm:ml-3 w-[70%]">
                  <a
                    href="javascript:"
                    className="font-semibold text-blue_gray_900_07"
                  >
                    <Text variant="body10">Logout</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[70%] sm:w-full md:w-[70%]">
            {tabSelected == "profile" &&
            userDetails &&
            userDetails.type == "mentor" ? (
              <NewprofilementprPage
                fetchUserDataAgain={fetchUserData}
                showHeader={false}
                fromProfile={true}
              />
            ) : (
              <></>
            )}

            {tabSelected == "profile" &&
            userDetails &&
            userDetails.type == "mentee" ? (
              <ProfilementeePage
                fetchUserDataAgain={fetchUserData}
                showHeader={false}
                fromProfile={true}
              />
            ) : (
              <></>
            )}

            {tabSelected == "booking" ? <Bookings /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfleHome;
