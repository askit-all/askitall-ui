import React, { useState, useEffect } from "react";
import Header from "components/Header";
import "./menteeProfile.css";
import { secured } from "api/interceptors";
import { Button, Img, Input, Line, Text } from "components";
import { useNavigate } from "react-router-dom";

const ProfilementeePage = () => {
  const history = useNavigate();

  const [questionsList, setQuestionsList] = useState([]);
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const fetchQuestions = () => {
    let url = `/questions/user/${userDetails.userid}`;
    secured.get(url).then((response) => {
      console.log(response.data);
      setQuestionsList(response.data);
    });
  };

  const handleViewAllQues = () => {
    history("/mentee");
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto w-full responsive-view">
        <Header className="bg-orange_500 w-full" />
        <div className="font-segoeui w-full">
          <div className="bg-white_A700_01 my-7 flex flex-col items-end justify-start max-w-[1055px] mx-auto pr-3.5 md:px-5 py-3.5 w-full">
            <div className=" mt-[22px] relative w-full">
              <div className="custom-flex md:gap-5 inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[58px] top-[0] w-full">
                <div className="flex flex-col relative custom-image">
                  <div className="md:h-[149px] h-[173px] mx-auto pb-6 sm:px-5 px-6 w-full">
                    <Img
                      src="images/img_images.png"
                      className="h-[149px] mx-auto object-cover w-[71%]"
                      alt="images"
                    />
                    <Button
                      className="cursor-pointer font-normal mx-auto text-[15px] text-center text-white_A700_01 change-pic"
                      size="lg"
                      variant="FillGray900b7"
                    >
                      Change Photo
                    </Button>
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

                  <div className=" set-bot flex flex-col items-center justify-start">
                    <div className="flex flex-row sm:gap-10 items-start w-full">
                      <Text
                        className="font-semibold ml-[13px] text-gray_900_04"
                        variant="body14"
                        style={{ alignSelf: "center" }}
                      >
                        Name
                      </Text>
                      <input
                        type="text"
                        className="font-normal  ml-[40px] text-gray-600-01 w-auto input-style"
                        variant="body14"
                        value={userDetails.name}
                        // onChange={handleInputChange("name")}
                      />
                      {/* <Text
                      className="font-semibold mb-[15px] ml-[40px] text-amber_A700"
                      variant="body14"
                    >
                      {userDetails.name}
                    </Text> */}
                    </div>
                    <div className="h-10 sm:h-28 relative w-full">
                      <div className="flex flex-row sm:gap-10 items-start ml-[15px] w-[76%]">
                        <Text
                          className="font-semibold text-gray_900_040 "
                          variant="body14"
                          style={{ alignSelf: "center" }}
                        >
                          Email
                        </Text>
                        <input
                          type="text"
                          className="font-normal  ml-[40px] text-gray-600-01 w-auto input-style"
                          variant="body14"
                          value={userDetails.email}
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
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold mb-[166px] min-w-[102px] md:ml-[0] ml-[29px] text-base text-center text-white_A700_01"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillAmberA70001"
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
                  <div className="flex flex-col items-center justify-start">
                    {questionsList && questionsList.length ? (
                      questionsList.map((ques) => (
                        <span className="ques-data">{ques.question}</span>
                      ))
                    ) : (
                      <></>
                    )}

                    <Button
                      className="cursor-pointer font-semibold min-w-[102px] mt-[29px] text-base text-center text-white_A700_01"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillAmberA70001"
                      onClick={handleViewAllQues}
                    >
                      View all
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilementeePage;
