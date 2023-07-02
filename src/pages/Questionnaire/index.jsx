import { Img, Line, Text, ModalForUpvoteError } from "components";
import { secured } from "api/interceptors";
import Header from "components/Header";
import HomePageMenteeOneCard3 from "components/HomePageMenteeOneCard3";
import React, { useState, useEffect } from "react";
import "../../styles/questionaire.css"; // Import the CSS file
import { toast } from "react-hot-toast";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

// CSS styles for the loader
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Questionnaire = () => {
  const navigate = useNavigate();

  const [categoryList, setCategoryList] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const handleButtonClick = () => {
    navigate("/mentor-profile");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleEditProfile = (item) => {
    if (item.userType == "mentor") {
      navigate(`/mentor-profile/${item.userid}`);
    } else if (item.userType == "mentee") {
      navigate(`/mentee-profile/${item.userid}`);
    }
  };

  // Trigger the dialog to open when an error occurs
  const handleShowDialog = (question) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData.type == "mentor") {
      setLoading(true);
      secured
        .put("/questions/" + question.questionId + "/upvote", {
          userId: userData._id,
        })
        .then((response) => {
          if (response?.data?.status) {
            toast.success(response?.data?.message, {
              icon: "👏",
            });
            fetchQuestions();
            setLoading(false);
          } else {
            toast.error(response?.data?.message);
            setLoading(false);
          }
        });
    } else {
      setIsOpen(true);
    }
  };

  const fetchCategories = () => {
    secured.get("/categories").then((response) => {
      setCategoryList(response.data.data);
    });
  };

  const fetchQuestions = () => {
    setLoading(true);
    secured.get("/questions").then((response) => {
      if (response?.data?.status) {
        setQuestionsList(response?.data?.data);
        setLoading(false);
      } else {
        toast.error("Something went wrong!");
        setLoading(false);
      }
    });
  };

  const reloadQuestions = () => {
    fetchQuestions();
  };

  const fetchUserData = () => {
    setLoading(true);
    secured.get("/users").then((response) => {
      setUserDetails({
        ...response.data.data,
      });
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchCategories();
    fetchQuestions();
    fetchUserData();
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
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[1rem] w-full responsive-view">
        <Header className="bg-orange_500 w-full" />
        {userDetails && categoryList && categoryList.length && (
          <HomePageMenteeOneCard3
            onChange={reloadQuestions}
            categoryList={categoryList}
            userDetails={userDetails}
            className="responsive-questionaire md:px-5 relative w-full"
          />
        )}

        {questionsList && questionsList.length > 0 ? (
          <>
            {questionsList.map((item, index) => (
              <div
                key={item._id}
                className="bg-white_A700 flex flex-col items-start justify-start mt-5 mx-auto p-5 md:px-5 rounded-[30px] shadow-bs2"
                style={{ width: "calc(97vw - 1rem)" }}
              >
                <div className="flex flex-col items-start justify-start mb-0.5 w-full">
                  <div className="flex flex-row sm:flex-col sm:justify-center gap-[15px] items-center justify-start w-[50%] md:w-full">
                    <div
                      className="flex justify-between items-center"
                      onClick={() => handleEditProfile(item)}
                    >
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
                    </div>

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

                  {!item.isMyQuestion ? (
                    <div className="flex flex-row items-start justify-start md:ml-[0] ml-[5px] res-margin-top-thumbs w-[55%] md:w-full">
                      {!item.isUpvoted ? (
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() => handleShowDialog(item)}
                        >
                          <Img
                            src="images/img_thumbsup.svg"
                            className="h-6 w-[23px]"
                            alt="thumbsup"
                          />
                          <Text
                            className="font-semibold ml-[15px] my-0.5 text-gray_500_01"
                            variant="body12"
                          >
                            Like
                          </Text>
                        </div>
                      ) : (
                        <></>
                      )}

                      {item.isUpvoted ? (
                        <Img
                          src="images/blue-like.png"
                          className="h-6"
                          alt="thumbsup"
                        />
                      ) : (
                        <></>
                      )}

                      {/* Render the ModalForUpvoteError component */}
                      <ModalForUpvoteError
                        isOpen={isOpen}
                        errorMessage="An error occurred. Please fill in the details."
                        onClose={handleClose}
                        onButtonClick={handleButtonClick}
                      />

                      {/* <Img
                      src="images/img_file.svg"
                      className="h-6 ml-[50px] mt-1 w-[23px]"
                      alt="file"
                    />
                    <Text
                      className="font-semibold ml-[15px] mt-[5px] text-gray_500_01"
                      variant="body12"
                    >
                      Dislike
                    </Text> */}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              // <Line className="bg-orange_500 h-0.5 mt-5 w-[59%]" />
            ))}
          </>
        ) : (
          <>{!loading && <p className="mt-5">No items found.</p>}</>
        )}
      </div>
    </>
  );
};

export default Questionnaire;
