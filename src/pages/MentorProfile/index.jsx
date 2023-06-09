import { secured } from "api/interceptors";
import { Button, Img, Line, RatingBar, Text } from "components";
import Header from "components/Header";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import "./mentorProfile.css";

import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import { useRef } from "react";

// CSS styles for the loader
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const NewprofilementprPage = () => {
  const [questionsList, setQuestionsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const [categorySelected, setCategorySelecteed] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const [showAddDropdown, setShowAddDropdown] = useState(false);

  const handleInputChange = (fieldName) => (event) => {
    setUserDetails({ ...userDetails, [fieldName]: event.target.value });
  };

  const fetchQuestions = () => {
    setLoading(true);
    let url = `/questions/users`;
    secured.get(url).then((response) => {
      if (response?.data?.status) {
        setQuestionsList(response.data.data);
        setLoading(false);
      }
    });
  };

  const fetchUserData = () => {
    setLoading(true);
    secured.get("/users").then((response) => {
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

  const handleCategoryChange = (type) => {
    setCategorySelecteed(type.target.value);

    if (type.target.value) {
      let payload = {
        category_id: [
          ...userDetails.categories.map((ele) => ele.category_id),
          type.target.value,
        ],
      };

      setLoading(true);
      secured.post("/users/assign-category/", payload).then((response) => {
        if (response?.data?.status) {
          toast.success("Profile Updated!", {
            icon: "👏",
          });
          setShowAddDropdown(!showAddDropdown);
          setCategorySelecteed("");
          fetchCategories();
          fetchUserData();
          setLoading(false);
        } else {
          toast.error("Something went wrong!");
          setLoading(false);
        }
      });
    }
  };

  const handleAddChange = () => {
    setShowAddDropdown(!showAddDropdown);
  };

  const handleCloseDropdown = () => {
    setShowAddDropdown(!showAddDropdown);
    setCategorySelecteed("");
  };

  const removeCategory = (index) => {
    const updatedCategories = [...userDetails.categories];
    const category = updatedCategories.splice(index, 1);

    setUserDetails({ ...userDetails, categories: updatedCategories });
    let payload = {
      category_id: category[0].category_id,
    };

    setLoading(true);
    secured.post("/users/remove-category/", payload).then((response) => {
      if (response?.data?.status) {
        toast.success("Profile Updated!", {
          icon: "👏",
        });
        setCategorySelecteed("");
        fetchCategories();
        fetchUserData();
        setLoading(false);
      } else {
        toast.error("Something went wrong!");
        setLoading(false);
      }
    });
  };

  const handleUpdate = () => {
    let payload = {
      name: userDetails.name,
      email: userDetails.email,
      type: "mentor",
      userinfo: {
        gender: userDetails.gender,
        occupation: userDetails.occupation,
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

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (categoryList.length && userDetails.categories.length) {
      const filteredArray = categoryList.filter(
        (item1) =>
          !userDetails.categories.some(
            (item2) => item2.category_id === item1.category_id
          )
      );
      console.log("ttyv", filteredArray);
      setCategoryList(filteredArray);
    }
  }, [userDetails]);

  const fetchCategories = () => {
    setLoading(true);
    secured.get("/categories").then((response) => {
      if (response?.data?.status) {
        setCategoryList(response.data.data);
      }
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
    fetchCategories();
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
        <Header className="bg-orange_500 w-full" />
        {userDetails && (
          <div className="bg-gradient3  flex flex-col font-segoeui items-center justify-end mx-auto p-[23px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-2 justify-evenly w-full">
              <div
                className="bg-white_A700_01 md:mt-0 p-2.5 rounded shadow-bs12 w-[33%] md:w-full"
                style={{ height: "calc(100vh - 13rem)" }}
              >
                <div className="flex justify-end m-auto w-[91%]">
                  <div className="flex flex-col h-full inset-[0] items-center m-auto w-full">
                    <div className="font-segoeui w-full">
                      <div className="flex flex-col gap-[29px] h-full inset-[0] items-center justify-center m-auto  md:px-10 sm:px-5  w-full">
                        <Img
                          src={
                            userDetails
                              ? userDetails.profileImageUrl
                              : "images/img_ellipse1_150x150.png"
                          }
                          className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
                          alt="ellipseOne_One"
                          htmlFor="fileInput"
                          onClick={handleClick}
                        />
                        <input
                          id="fileInput"
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          style={{ display: "none" }}
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
                        userDetails.categories.length ?
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
                        )) : <></>}

                      {showAddDropdown && (
                        <>
                          <div className=" bg-white_A700_01 flex flex-row items-center justify-between p-1 my-2 rounded">
                            <select
                              className="rounded-[30px]"
                              value={categorySelected}
                              onChange={handleCategoryChange}
                            >
                              <option value="">Select Category</option>
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

                    <Text
                      className="font-bold mt-[15px] text-orange_500"
                      variant="body12"
                      onClick={handleAddChange}
                    >
                      Add Categories
                    </Text>

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
              <div className="flex md:flex-1 flex-col gap-3 items-center justify-start md:w-full">
                <div className="bg-white_A700_01 flex flex-col items-center justify-start pl-1 py-1 rounded w-[99%] md:w-full">
                  <div className="flex flex-col gap-[15px] justify-start my-[9px] w-full">
                    <div className="flex flex-row items-center px-[15px] w-auto">
                      <Text
                        className="font-normal text-gray-900 w-[30%]"
                        variant="body14"
                      >
                        Full Name
                      </Text>
                      <input
                        type="text"
                        className="font-normal text-gray-600-01 input-style w-[70%]"
                        variant="body14"
                        value={userDetails.name}
                        onChange={handleInputChange("name")}
                      />
                    </div>
                    <Line className="bg-black_900_19 h-px w-[96%]" />
                    <div className="flex flex-row items-center px-[15px] w-auto">
                      <Text
                        className="font-normal text-gray-900 w-[30%]"
                        variant="body14"
                      >
                        Email
                      </Text>
                      <input
                        type="text"
                        className="font-normal text-gray-600-01 w-auto input-style w-[70%]"
                        variant="body14"
                        readOnly={true}
                        value={userDetails.email}
                        onChange={handleInputChange("email")}
                      />
                    </div>
                    <Line className="bg-black_900_19 h-px w-[96%]" />
                    <div className="flex flex-row items-center px-[15px] w-auto">
                      <Text
                        className="font-normal mb-0.5 text-gray-900 w-[30%]"
                        variant="body14"
                      >
                        Occupation
                      </Text>
                      <input
                        type="text"
                        className="font-normal text-gray-600-01 input-style w-[70%]"
                        variant="body14"
                        value={userDetails.occupation}
                        onChange={handleInputChange("occupation")}
                      />
                    </div>
                    <Line className="bg-black_900_19 h-px w-[96%]" />
                    <div className="flex flex-row items-center px-[15px] w-auto">
                      <Text
                        className="font-normal text-gray-900 w-[30%]"
                        variant="body16"
                      >
                        Gender
                      </Text>
                      <div className=" w-[70%]">
                        <label className="ml-5">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={userDetails.gender === "male"}
                            onChange={handleInputChange("gender")}
                          />
                          Male
                        </label>
                        <label className="ml-5">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={userDetails.gender === "female"}
                            onChange={handleInputChange("gender")}
                          />
                          Female
                        </label>
                        <label className="ml-5">
                          <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={userDetails.gender === "other"}
                            onChange={handleInputChange("gender")}
                          />
                          Other
                        </label>
                      </div>
                    </div>
                    <Line className="bg-black_900_19 h-px w-[96%]" />

                    <div className="flex flex-row items-center px-[15px] w-auto">
                      <Text
                        className="font-normal w-[30%] ml-1 md:ml-[0] text-gray-900"
                        variant="body14"
                      >
                        about me
                      </Text>

                      {/* <div className="outer-white"> */}
                      <textarea
                        rows={3}
                        cols={50}
                        className="font-normal text-gray-600-01 w-[70%] input-style"
                        variant="body14"
                        value={userDetails?.aboutyourself}
                        onChange={handleInputChange("aboutyourself")}
                      />
                      {/* </div> */}
                    </div>
                    <div className="flex sm:flex-col px-[15px] flex-row sm:gap-10 gap-[108px] items-start justify-start w-[90%] md:w-full">
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
    </>
  );
};

export default NewprofilementprPage;
