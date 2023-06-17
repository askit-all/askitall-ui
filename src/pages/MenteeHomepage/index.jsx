import { Img, Line, Text,ModalForUpvoteError } from "components";
import { secured } from "api/interceptors";
import Header from "components/Header";
import HomePageMenteeOneCard3 from "components/HomePageMenteeOneCard3";
import React, { useState, useEffect } from "react";
import "../../styles/questionaire.css"; // Import the CSS file

const HomepagementeeOnePage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    // Handle button click here
    // For example, navigate to a form page
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Trigger the dialog to open when an error occurs
  const handleShowDialog = () => {

    const userData = JSON.parse(localStorage.getItem("userData"));
    if(userData.type == "mentor"){

    } else{
      setIsOpen(true);
    }

  };

  const fetchCategories = () => {
    secured.get("/categories").then((response) => {
      setCategoryList(response.data.data);
    });
  };

  const fetchQuestions = () => {
    secured
      .get("/questions/148d7f85-39b4-482d-aa07-8c20eaefd64d")
      .then((response) => {
        console.log(response.data);
        setQuestionsList(response.data);
      });
  };

  const reloadQuestions = () => {
    fetchQuestions();
  };

  useEffect(() => {
    fetchCategories();
    fetchQuestions();
  }, []);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto pb-[1rem] w-full responsive-view">
        <Header className="bg-orange_500 w-full" />
        {categoryList && categoryList.length && (
          <HomePageMenteeOneCard3
            onChange={reloadQuestions}
            categoryList={categoryList}
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
                <div className="flex flex-col items-start justify-start mb-0.5 w-[47%] md:w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[48%] md:w-full">
                    <Img
                      src="images/img_ellipse2.png"
                      className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                      alt="ellipseTwo_One"
                    />
                    <Text className="font-bold text-gray_900" variant="body10">
                      Rashmi Singh
                    </Text>
                  </div>
                  <Text
                    className="font-semibold mt-[15px] text-black_900"
                    variant="body10"
                  >
                    {item.question}
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[5px] res-margin-top-thumbs w-[55%] md:w-full">
                    <div className="flex items-center cursor-pointer" onClick={handleShowDialog}>
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
                     {/* Render the ModalForUpvoteError component */}
                     <ModalForUpvoteError
                        isOpen={isOpen}
                        errorMessage="An error occurred. Please fill in the details."
                        onClose={handleClose}
                        onButtonClick={handleButtonClick}
                      />

                    <Img
                      src="images/img_file.svg"
                      className="h-6 ml-[50px] mt-1 w-[23px]"
                      alt="file"
                    />
                    <Text
                      className="font-semibold ml-[15px] mt-[5px] text-gray_500_01"
                      variant="body12"
                    >
                      Dislike
                    </Text>
                  </div>
                </div>
              </div>
              // <Line className="bg-orange_500 h-0.5 mt-5 w-[59%]" />
            ))}
          </>
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </>
  );
};

export default HomepagementeeOnePage;
