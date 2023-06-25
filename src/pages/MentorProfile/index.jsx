import { secured } from "api/interceptors";
import { Button, Img, Line, RatingBar, Text } from "components";
import Header from "components/Header";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import "./mentorProfile.css";

const NewprofilementprPage = () => {
  const [questionsList, setQuestionsList] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [userDetails, setUserDetails] = useState({
    ...JSON.parse(localStorage.getItem("userData")),
    gender: userData.userinfo ? userData.userinfo.gender : "",
    occupation: userData.userinfo ? userData.userinfo.occupation : "",
    aboutyourself: userData.userinfo ? userData.userinfo.aboutyourself : "",
  });

  const [categorySelected, setCategorySelecteed] = useState(null);
  const [categoryList, setCategoryList] = useState(null);

  const [showAddDropdown, setShowAddDropdown] = useState(false);

  const handleInputChange = (fieldName) => (event) => {
    console.log("FIN : ", fieldName);
    setUserDetails({ ...userDetails, [fieldName]: event.target.value });
  };

  const fetchCategories = () => {
    secured.get("/categories").then((response) => {
      setCategoryList(response.data.data);
    });
  };

  const fetchQuestions = () => {
    let url = `/questions/users`;
    secured.get(url).then((response) => {
      if(response?.data?.status){
        setQuestionsList(response.data.data);
      }
      
    });
  };

  const handleViewAllQues = () => {
    // history("/mentee");
  };

  const fetchUserData = () => {
    secured.get("/users").then((response) => {
      setUserDetails(response.data.data);
    });
  };

  const handleCategoryChange = (type) => {
    setCategorySelecteed(type.target.value);
  };

  const handleAddChange = () => {
    setShowAddDropdown(!showAddDropdown);
  };

  const handleCloseDropdown = () => {
    setShowAddDropdown(!showAddDropdown);
    setCategorySelecteed(null);
  };

  const removeCategory = (index) => {
    const updatedCategories = [...userDetails.categories];
    updatedCategories.splice(index, 1);
    setUserDetails({ ...userDetails, categories: updatedCategories });
  };

  const handleUpdate = () => {
    console.log("ISER : ", userDetails);
    let payload = {
      name: userDetails.name,
      email: userDetails.email,
      type : "mentor",
      userinfo : {
        gender: userDetails.userinfo.gender,
        occupation: userDetails.userinfo.occupation,
        aboutyourself: userDetails.userinfo.aboutyourself,
      }
    };
    
    secured.post("/users", payload).then((response) => {
      if(response?.data?.status){
        toast.success("Profile Updated!", {
          icon: "👏",
        });
        fetchUserData();
      }else{
        toast.error("Something went wrong!");
      }
      
    });
  };

  useEffect(() => {
    fetchUserData();
    fetchCategories();
    fetchQuestions();
  }, []);
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-auto w-full responsive-view">
        <Header className="bg-orange_500 w-full" />
        <div className="bg-gradient3  flex flex-col font-segoeui items-center justify-end mx-auto p-[23px] sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-2 items-center justify-start max-w-[1087px] mx-auto md:px-5 w-full">
            <div className="bg-white_A700_01 md:h-[100vh] h-[100vh] md:mt-0 my-[5px] p-2.5 relative rounded shadow-bs12 w-[33%] md:w-full">
              <div className="absolute flex md:h-[100vh] h-[100vh] inset-[0] justify-end m-auto w-[91%]">
                <div className="absolute flex flex-col h-full inset-[0] items-center m-auto w-full">
                  <div className="font-segoeui w-full">
                    <div className="flex flex-col gap-[29px] h-full inset-[0] items-center justify-center m-auto  md:px-10 sm:px-5  w-full">
                      <Img
                        src="images/img_ellipse1_150x150.png"
                        className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                        alt="ellipseOne_One"
                      />
                      <Text
                        className="font-semibold mb-[18px] text-gray_900"
                        variant="body10"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 w-full">
                    {userDetails.categories &&
                      userDetails.categories.length &&
                      userDetails.categories.map((category, index) => (
                        <>
                          <div className=" bg-white_A700_01 flex flex-row items-center justify-between p-1 my-2 rounded">
                            <Text
                              className="font-normal ml-[7px] text-gray_900"
                              variant="body12"
                            >
                              {category.name}
                            </Text>
                            <Img
                              src="images/img_close.svg"
                              className="h-[18px] mr-2.5 w-[18px]"
                              alt="close"
                              name={{ index }}
                              onClick={() => removeCategory(index)}
                            />
                          </div>
                        </>
                      ))}

                    {showAddDropdown && (
                      <>
                        <div className=" bg-white_A700_01 flex flex-row items-center justify-between p-1 my-2 rounded">
                          <select
                            className="rounded-[30px]"
                            value={categorySelected}
                            onChange={handleCategoryChange}
                          >
                            <option value="null">Select Category</option>
                            {categoryList &&
                              categoryList.map((option) => (
                                <option
                                  key={option.category_id}
                                  value={option.category_id}
                                >
                                  {option.name}
                                </option>
                              ))}
                          </select>
                          <Img
                            src="images/img_close.svg"
                            className="h-[18px] mr-2.5 w-[18px]"
                            alt="close"
                            onClick={handleCloseDropdown}
                          />
                        </div>
                      </>
                    )}
                  </div>

                  {!showAddDropdown && (
                    <Text
                      className="font-bold mt-[15px] text-orange_500"
                      variant="body12"
                      onClick={handleAddChange}
                    >
                      Add Categories
                    </Text>
                  )}

                  <Text
                    className="font-nunitosans font-semibold italic mt-[30px] text-gray_900"
                    variant="body10"
                  >
                    Average Rating
                  </Text>
                  <div className="flex flex-row items-center justify-center mt-2.5 w-[55%] md:w-full">
                    <RatingBar
                      className="flex justify-between w-[172px]"
                      value={5}
                      starCount={5}
                      activeColor="#ff9915"
                      size={22}
                    ></RatingBar>
                  </div>
                  {/* <Button
                    className="cursor-pointer font-normal font-segoeui min-w-[117px] mt-[20px] text-base text-center text-white_A700_01"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineAmberA700"
                  >
                    schedule call
                  </Button> */}
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 h-[100vh] flex-col gap-3 items-center justify-start w-[68%] md:w-full">
              <div className="bg-white_A700_01 flex flex-col items-center justify-start pl-1 py-1 rounded w-[99%] md:w-full">
                <div className="flex flex-col gap-[15px] justify-start my-[9px] w-full">
                  <div className="flex flex-row sm:gap-10 gap-[106.15px] items-start justify-start pl-[15px] md:pr-10 sm:pr-5 w-auto md:w-full">
                    <Text
                      className="font-normal text-gray-900 w-auto"
                      variant="body14"
                    >
                      Full Name
                    </Text>
                    <input
                      type="text"
                      className="font-normal text-gray-600-01 w-auto input-style"
                      variant="body14"
                      value={userDetails.name}
                      onChange={handleInputChange("name")}
                    />
                  </div>
                  <Line className="bg-black_900_19 h-px w-[96%]" />
                  <div className="flex flex-row sm:gap-10 gap-[140.15px] items-start justify-start pl-[15px] md:pr-10 sm:pr-5 w-auto md:w-full">
                    <Text
                      className="font-normal text-gray-900 w-auto"
                      variant="body14"
                    >
                      Email
                    </Text>
                    <input
                      type="text"
                      className="font-normal text-gray-600-01 w-auto input-style"
                      variant="body14"
                      value={userDetails.email}
                      onChange={handleInputChange("email")}
                    />
                  </div>
                  <Line className="bg-black_900_19 h-px w-[96%]" />
                  <div className="flex flex-row gap-[98px] pl-[15px] items-start justify-start md:w-full">
                    <Text
                      className="font-normal mb-0.5 text-gray-900"
                      variant="body14"
                    >
                      Occupation
                    </Text>
                    <input
                      type="text"
                      className="font-normal text-gray-600-01 w-auto input-style"
                      variant="body14"
                      value={userDetails.occupation}
                      onChange={handleInputChange("occupation")}
                    />
                  </div>
                  <Line className="bg-black_900_19 h-px w-[96%]" />
                  <div className="flex flex-row sm:gap-10 gap-[131.15px] items-start justify-start pl-[15px] md:pr-10 sm:pr-5 pr-[412.51px] w-auto md:w-full">
                    <Text
                      className="font-normal text-gray-900 w-auto"
                      variant="body16"
                    >
                      Gender
                    </Text>
                    <input
                      type="text"
                      className="font-normal text-gray-600-01 w-auto input-style"
                      variant="body14"
                      value={userDetails?.gender}
                      onChange={handleInputChange("gender")}
                    />
                  </div>
                  <Line className="bg-black_900_19 h-px w-[96%]" />

                  <div className="flex flex-row sm:gap-10 gap-[100.15px] items-start justify-start pl-[15px] md:pr-10 sm:pr-5 w-auto md:w-full">
                    <Text
                      className="font-normal w-[10%] ml-1 md:ml-[0] text-gray-900"
                      variant="body14"
                    >
                      about me
                    </Text>

                    {/* <div className="outer-white"> */}
                    <textarea
                      rows={3}
                      cols={50}
                      className="font-normal text-gray-600-01 w-auto input-style"
                      variant="body14"
                      value={userDetails?.aboutyourself}
                      onChange={handleInputChange("aboutyourself")}
                    />
                    {/* </div> */}
                  </div>
                  <div className="flex sm:flex-col pl-[15px] flex-row sm:gap-10 gap-[108px] items-start justify-start w-[90%] md:w-full">
                    <Button
                      className="cursor-pointer font-normal min-w-[53px] text-base text-center text-white_A700_01"
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineGray900"
                      onClick={handleUpdate}
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700_01 flex flex-col font-nunitosans items-center justify-start mb-2.5 mt-[22px] pb-5 rounded-[16px] shadow-bs10 w-[100%] ">
                <div className="flex flex-col gap-5 items-center justify-start w-full" style={{height:'30vh',overflowY:'auto'}}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NewprofilementprPage;
