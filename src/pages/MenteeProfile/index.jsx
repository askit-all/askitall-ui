import { css } from "@emotion/react";
import { secured } from "api/interceptors";
import { Button, Img, Text } from "components";
import Header from "components/Header";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import "./menteeProfile.css";

// CSS styles for the loader
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ProfilementeePage = () => {
  const [loading, setLoading] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  const fileInputRef = useRef(null);

  const fetchUserData = () => {
    setLoading(true);
    secured.get("/users").then((response) => {
      console.log("res", response.data.data);
      setUserDetails({
        ...response.data.data,
        aboutyourself: response.data.data.userinfo
          ? response.data.data.userinfo.aboutyourself
          : "",
      });
      setLoading(false);
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    uploadImage(file);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (fieldName) => (event) => {
    setUserDetails({ ...userDetails, [fieldName]: event.target.value });
  };

  const handleUpdate = () => {
    let payload = {
      name: userDetails.name,
      email: userDetails.email,
      type: "mentee",
      profileImageUrl: userDetails.profileImageUrl,
      userinfo: {
        aboutyourself: userDetails.aboutyourself,
      },
    };

    setLoading(true);
    secured.post("/users", payload).then((response) => {
      if (response?.data?.status) {
        toast.success("Profile Updated!", {
          icon: "👏",
        });
        fetchUserData();
        setLoading(false);
      } else {
        toast.error("Something went wrong!");
        setLoading(false);
      }
    });
  };

  const fetchQuestions = () => {
    let url = `/questions/users`;
    setLoading(true);
    secured.get(url).then((response) => {
      console.log(response.data);
      if (response?.data?.status) {
        setQuestionsList(response.data.data);
        setLoading(false);
      }
    });
  };

  const uploadImage = (file) => {
    let url = `/users/upload`;
    setLoading(true);
    const formData = new FormData();
   
    formData.append("image", file);
   
    secured.post(url, formData).then((response) => {
      console.log(response.data);
      if (response?.data?.status) {
        setUserDetails((prevUserDetails) => ({
          ...prevUserDetails,
          profileImageUrl: response.data.data.imageUrl,
        }));
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    fetchUserData();
    fetchQuestions();
  }, []);

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <BeatLoader
            color="#FF0000"
            css={override}
            size={15}
            loading={loading}
          />
        </div>
      )}
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto w-full responsive-view">
        <Header
          className="bg-orange_500 w-full"
          style={{ height: "30vh", overflowY: "auto" }}
        />
        <div className="font-segoeui w-full">
          {userDetails && (
            <div className="bg-white_A700_01 my-7 flex flex-col items-end justify-start max-w-[1055px] mx-auto pr-3.5 md:px-5 py-3.5 w-full">
              <div className=" mt-[22px] relative w-full">
                <div className="custom-flex md:gap-5 inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[58px] top-[0] w-full">
                  <div className="flex flex-col relative custom-image">
                    <div className="md:h-[149px] h-[173px] mx-auto pb-6 sm:px-5 px-6 w-full">
                      <Img
                        src={
                          userDetails
                            ? userDetails.profileImageUrl
                            : "images/img_ellipse1_150x150.png"
                        }
                        className="h-[149px] mx-auto object-cover"
                        style={{ width: "100%" }}
                        alt="images"
                      />
                      <Button
                        className="cursor-pointer font-normal mx-auto text-[15px] text-center text-white_A700_01 change-pic"
                        size="lg"
                        variant="FillGray900b7"
                        htmlFor="fileInput"
                        onClick={handleClick}
                      >
                        Change Photo
                      </Button>
                      <input
                        id="fileInput"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[30px] w-[51%] md:w-full">
                    <Text
                      className="font-normal text-blue_gray_900_04"
                      variant="body10"
                    >
                      {userDetails.name}
                    </Text>
                    <Text
                      className="font-normal mt-[5px] text-amber_A700"
                      variant="body14"
                    >
                      Mentee{" "}
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-full">
                      <Text
                        className="mt-[3px] text-gray_600_02"
                        variant="body22"
                      >
                        Questions Posted:
                      </Text>
                      <Text
                        className="font-semibold text-blue_gray_700_01"
                        variant="body16"
                      >
                        {questionsList.length}
                      </Text>
                    </div>
                    <div className="border-b border-gray_300_03 border-solid flex flex-col items-start justify-start mt-4 w-full">
                      <Button
                        className="cursor-pointer font-semibold min-w-[78px] text-base text-blue_gray_700_01 text-center"
                        shape="CustomBorderTL4"
                        size="lg"
                        variant="OutlineBlue800"
                      >
                        About
                      </Button>
                    </div>

                    <div className="w-full set-bot flex flex-col items-center justify-start">
                      <div className="flex flex-row sm:gap-10 items-start w-full">
                        <Text
                          className="font-semibold ml-[13px] text-gray_900_04"
                          variant="body14"
                          style={{ alignSelf: "center", width: "20%" }}
                        >
                          Name
                        </Text>
                        <input
                          type="text"
                          className="font-normal  ml-[40px] text-gray-600-01 w-auto input-style"
                          variant="body14"
                          value={userDetails.name}
                          style={{ width: "80%" }}
                          onChange={handleInputChange("name")}
                        />
                        {/* <Text
                      className="font-semibold mb-[15px] ml-[40px] text-amber_A700"
                      variant="body14"
                    >
                      {userDetails.name}
                    </Text> */}
                      </div>
                      <div className="h-10 sm:h-28 relative w-full">
                        <div className="flex flex-row sm:gap-10 items-start ml-[15px]">
                          <Text
                            className="font-semibold text-gray_900_040 "
                            variant="body14"
                            style={{ alignSelf: "center", width: "20%" }}
                          >
                            Email
                          </Text>
                          <input
                            type="text"
                            className="font-normal  ml-[40px] text-gray-600-01 w-auto input-style"
                            variant="body14"
                            readOnly={true}
                            value={userDetails.email}
                            style={{ width: "80%" }}
                            // onChange={handleInputChange("email")}
                          />
                          {/* <Text
                        className="font-semibold text-amber_A700 ml-[40px]"
                        variant="body14"
                      >
                        {userDetails.email}
                      </Text> */}
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="flex flex-row sm:gap-10 items-start ml-[15px]">
                          <Text
                            className="font-semibold text-gray_900_040 "
                            variant="body14"
                            style={{ alignSelf: "center", width: "20%" }}
                          >
                            About me
                          </Text>

                          <textarea
                            rows={3}
                            cols={50}
                            className="font-normal  ml-[40px] text-gray-600-01 w-auto input-style"
                            variant="body14"
                            value={userDetails?.aboutyourself}
                            onChange={handleInputChange("aboutyourself")}
                            style={{ width: "80%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold mb-[166px] min-w-[102px] md:ml-[0] ml-[29px] text-base text-center text-white_A700_01"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillAmberA70001"
                    onClick={handleUpdate}
                  >
                    Update
                  </Button>
                </div>
              </div>

              <div className="bg-white_A700_01 flex flex-col font-nunitosans items-center justify-start mb-2.5 mt-[22px] pb-5 rounded-[16px] shadow-bs10 w-[100%] ">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="bg-amber_A700_01 flex flex-col items-start justify-end p-2.5 w-full">
                    <Text
                      className="font-bold md:ml-[0] ml-[9px] text-white_A700_01"
                      variant="body10"
                    >
                      Questions posted{" "}
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[35px] items-start justify-between w-[96%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      {questionsList && questionsList.length > 0 ? (
                        <>
                          {questionsList.map((item, index) => (
                            <div
                              key={item._id}
                              className="bg-white_A700 flex flex-col items-start justify-start w-full mt-5 mx-auto p-5 md:px-5 rounded-[30px] shadow-bs2"
                            >
                              <div className="flex flex-col items-start justify-start mb-0.5 w-[47%] md:w-full">
                                <div className="flex flex-row sm:flex-col sm:justify-center gap-[15px] items-center justify-start md:w-full">
                                  <Img
                                    src={
                                      item.profileImageUrl
                                        ? item.profileImageUrl
                                        : "images/img_ellipse2.png"
                                    }
                                    className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                    alt="ellipseTwo_One"
                                  />
                                  <Text
                                    className="font-bold text-gray_900"
                                    variant="body10"
                                  >
                                    {item.username}
                                  </Text>

                                  <div className="flex items-center">
                                    <span>Category : </span>
                                    <Text
                                      className="font-bold text-gray_900"
                                      variant="body10"
                                    >
                                      {item.categoryName}
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="font-semibold mt-[15px] text-black_900"
                                  variant="body10"
                                >
                                  {item.question}
                                </Text>
                              </div>
                            </div>
                            // <Line className="bg-orange_500 h-0.5 mt-5 w-[59%]" />
                          ))}
                        </>
                      ) : (
                        <p className="mt-5">No items found.</p>
                      )}

                      {/* <Button
                      className="cursor-pointer font-semibold min-w-[102px] mt-[29px] text-base text-center text-white_A700_01"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillAmberA70001"
                      onClick={handleViewAllQues}
                    >
                      View all
                    </Button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilementeePage;
