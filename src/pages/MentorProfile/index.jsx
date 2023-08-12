import { secured } from "api/interceptors";
import { Button, Img, Line, RatingBar, Text } from "components";
import Header from "components/Header";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./mentorProfile.css";

import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import { useRef } from "react";
import ProgressBar from "components/ProgressBar";

// CSS styles for the loader
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const NewprofilementprPage = (props) => {
  const history = useLocation();

  const [questionsList, setQuestionsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const [categorySelected, setCategorySelecteed] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const [showAddDropdown, setShowAddDropdown] = useState(false);

  const [bookings, setBookings] = useState([]);
  const [singleBooking, setSingleBooking] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleInputChange = (fieldName) => (event) => {
    setUserDetails({ ...userDetails, [fieldName]: event.target.value });
  };

  const handleExpertiseInputChange = (event, index, fieldName) => {
    const { value } = event.target;
    const updatedExpertise = [...userDetails.expertise];
    updatedExpertise[index][fieldName] = value;
    setUserDetails({ ...userDetails, expertise: updatedExpertise });
  };

  const { id } = useParams();
  const { fromNotification } = useParams();

  useEffect(() => {
    fetchCategories();
    fetchUserData();
    fetchQuestions();
  }, [history]);

  const fetchQuestions = () => {
    setLoading(true);
    let url = id ? `/questions/users/${id}` : "/questions/users";
    secured.get(url).then((response) => {
      if (response?.data?.status) {
        setQuestionsList(response.data.data);
        setLoading(false);
      }
    });
  };

  const fetchUserData = () => {
    setLoading(true);

    let url = id ? `/users/${id}` : "/users";
    secured.get(url).then((response) => {
      localStorage.setItem("userData", JSON.stringify(response.data.data));
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
        expertise:
          response.data.data.userinfo?.expertise &&
          response.data.data.userinfo?.expertise.length
            ? response.data.data.userinfo?.expertise
            : [],
      });

      if (props.fetchUserDataAgain) {
        props.fetchUserDataAgain();
      }

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

  const addRow = () => {
    let updatedExpertise = [...userDetails.expertise];
    if (updatedExpertise && updatedExpertise.length) {
      if (
        updatedExpertise[updatedExpertise.length - 1].expertise &&
        updatedExpertise[updatedExpertise.length - 1].value
      ) {
        updatedExpertise.push({ expertise: "", value: null });
        setUserDetails({ ...userDetails, expertise: updatedExpertise });
      } else {
        toast.error("Enter Expertise and Value first!");
      }
    } else {
      updatedExpertise.push({ expertise: "", value: null });
      setUserDetails({ ...userDetails, expertise: updatedExpertise });
    }
  };

  const removeRow = (index) => {
    const updatedExpertise = [...userDetails.expertise];
    const expertise = updatedExpertise.splice(index, 1);

    let payload = {
      name: userDetails.name,
      email: userDetails.email,
      type: "mentor",
      userinfo: {
        gender: userDetails.gender,
        occupation: userDetails.occupation,
        aboutyourself: userDetails.aboutyourself,
        expertise: updatedExpertise,
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
        expertise: userDetails.expertise,
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

  const today = new Date();
  const minDate = today.toISOString().substr(0, 10);
  const maxDate = new Date(today.setDate(today.getDate() + 15))
    .toISOString()
    .substr(0, 10);

  const handleInputChangeForBooking = (event, field) => {
    const { value } = event.target;
    const updatedBookings = singleBooking;
    updatedBookings[field] = value;
    setSingleBooking(updatedBookings);
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
      if (response?.data?.status) {
        setUserDetails((prevUserDetails) => ({
          ...prevUserDetails,
          profileImageUrl: response.data.data.imageUrl,
        }));
        if (props.fetchUserDataAgain) {
          props.fetchUserDataAgain();
        }
        setLoading(false);
      }
    });
  };

  const [availableDates, setAvaialableDates] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slots, setSlots] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setSlots([]);
    fetchSlots(date);
  };

  const fetchSlots = async (date) => {
    let url = "/slots/get-all-slots-by-date";
    let payload = {
      date,
      userId: id,
    };
    secured.post(url, payload).then((response) => {
      if (response.data.slots && response.data.slots.length) {
        let finalSlots = response.data.slots.filter((ele) => !ele.status);
        finalSlots.forEach((ele) => {
          ele["startTime"] = ele.slot?.split("-")[0].trimEnd();
        });

        finalSlots = finalSlots.filter(
          (ele) => getTimeDifferenceInMinutes(ele.startTime, ele.date) >= 0
        );
        setSlots(finalSlots);
      }
    });
  };

  const getTimeDifferenceInMinutes = (slotStartTime, slotDate) => {
    // Parse the time string into hours and minutes
    const [time, period] = slotStartTime.split(" ");
    const [hours, minutes] = time.split(":");

    // Convert to 24-hour format
    let hours24 = parseInt(hours, 10);
    if (period.toLowerCase() === "pm" && hours24 < 12) {
      hours24 += 12;
    }

    // Create the slot start time using the current date and time
    const currentDateTime = new Date();
    const slotStartTime24 = new Date(slotDate);
    slotStartTime24.setHours(hours24, minutes, 0, 0);

    const timeDifference = slotStartTime24 - currentDateTime;
    return timeDifference / (1000 * 60); // Convert to minutes
  };

  const handleSlotChange = (slot) => {
    setSelectedSlot(slot);
  };

  const handleScheduleCall = () => {
    // Create payload and perform the API call to schedule the call
    const payload = {
      mentorId: id,
      bookingDate: selectedDate,
      slot: selectedSlot,
    };
    // Call your API endpoint here to schedule the call using the payload
    let url = "/slots/book-slot";
    secured.post(url, payload).then((response) => {
      // if (response.data.slots && response.data.slots.length) {
      toast.success("Slot booked");
      setSelectedSlot(null);
      fetchSlots(selectedDate);
      // }
    });
  };

  const fetchAllSlots = () => {
    let url = "/slots/get-slot-dates";
    let payload = {
      userId: id,
    };
    secured.post(url, payload).then((response) => {
      if (response.data.slotDates && response.data.slotDates.length) {
        setBookings(response.data.slotDates);
      }
    });
  };

  useEffect(() => {
    if (bookings && bookings.length) {
      const groupedData = bookings.reduce((acc, obj) => {
        const key = obj.date;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});

      let dateKeys = Object.keys(groupedData);
      setAvaialableDates(dateKeys);
    }
  }, [bookings]);

  useEffect(() => {
    if (fromNotification) {
      fetchAllSlots();
    }
  }, [fromNotification]);
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
        {props.showHeader == false ? (
          <></>
        ) : (
          <Header className="bg-orange_500 w-full" />
        )}
        {userDetails && (
          <div className="bg-gradient3  flex flex-col font-segoeui items-center justify-end mx-auto p-[23px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-2 w-full">
              <div
                className="bg-white_A700_01 md:mt-0 p-2.5 rounded shadow-bs12 w-[33%] md:w-full"
                // style={{ maxHeight: "calc(100vh - 13rem)" }}
              >
                <div className="flex justify-end m-auto w-[91%]">
                  <div className="flex flex-col h-full inset-[0] items-center m-auto w-full">
                    <div className="font-segoeui w-full">
                      <div className="flex flex-col gap-[29px] h-full inset-[0] items-center justify-center m-auto  md:px-10 sm:px-5  w-full">
                        <Img
                          src={
                            userDetails
                              ? userDetails.profileImageUrl
                                ? userDetails.profileImageUrl
                                : "images/img_ellipse1_150x150.png"
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
                          disabled={id}
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
                      userDetails.categories.length ? (
                        userDetails.categories.map((category, index) => (
                          <>
                            <div className=" bg-white_A700_01 flex flex-row items-center justify-evenly p-1 my-2 rounded">
                              <Text
                                className="font-normal ml-[7px] text-gray_900"
                                variant="body12"
                              >
                                {category.name}
                              </Text>

                              {id ? (
                                <></>
                              ) : (
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[18px] mr-2.5 w-[18px]"
                                  alt="close"
                                  name={{ index }}
                                  onClick={() => removeCategory(index)}
                                />
                              )}
                            </div>
                          </>
                        ))
                      ) : (
                        <></>
                      )}

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

                    {id ? (
                      <></>
                    ) : (
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

                    {fromNotification ? (
                      <div className="flex w-full my-4 flex-col gap-5 justify-evenly items-center bg-white_A700_01 shadow-bs3 p-6">
                        <h2 className="text-xl font-semibold">
                          Select a Date:
                        </h2>
                        <select
                          className="w-full px-4 my-2 border border-gray-300 rounded-md"
                          value={selectedDate}
                          onChange={(e) => handleDateChange(e.target.value)}
                        >
                          <option value={null}>Select a date</option>
                          {availableDates.map((date) => (
                            <option key={date} value={date}>
                              {date.split("T")[0]}
                            </option>
                          ))}
                        </select>

                        {selectedDate && (
                          <div className="w-full">
                            <h2 className="text-xl font-semibold">
                              Select a Slot:
                            </h2>
                            <select
                              className="w-full px-4 my-2 border border-gray-300 rounded-md"
                              value={selectedSlot}
                              onChange={(e) => handleSlotChange(e.target.value)}
                            >
                              <option value="">Select a slot</option>
                              {slots.map((slot) => (
                                <option key={slot.slot} value={slot.slot}>
                                  {slot.slot}
                                </option>
                              ))}
                            </select>

                            {selectedSlot && (
                              <div className="flex justify-center">
                                <button
                                  className="bg-orange-400 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md"
                                  onClick={handleScheduleCall}
                                >
                                  Schedule Call
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <></>
                    )}

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
              <div
                className="flex md:flex-1 flex-col gap-3 items-center w-[66%] justify-start md:w-full"
                // style={{ maxHeight: "calc(100vh - 13rem)" }}
              >
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
                        readOnly={id}
                        value={userDetails.name}
                        onChange={handleInputChange("name")}
                      />
                    </div>
                    {/* <Line className="bg-black_900_19 h-px w-[96%]" /> */}
                    <div className="flex flex-row items-center px-[15px] w-auto">
                      <Text
                        className="font-normal text-gray-900 w-[30%]"
                        variant="body14"
                      >
                        Email
                      </Text>
                      <input
                        type="text"
                        className="font-normal text-gray-600-01 input-style w-[70%]"
                        variant="body14"
                        readOnly={true}
                        value={userDetails.email}
                        onChange={handleInputChange("email")}
                      />
                    </div>
                    {/* <Line className="bg-black_900_19 h-px w-[96%]" /> */}
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
                        readOnly={id}
                        value={userDetails.occupation}
                        onChange={handleInputChange("occupation")}
                      />
                    </div>
                    {/* <Line className="bg-black_900_19 h-px w-[96%]" /> */}
                    <div className="flex flex-row items-center px-[15px] w-auto">
                      <Text
                        className="font-normal text-gray-900 w-[30%]"
                        variant="body16"
                      >
                        Gender
                      </Text>

                      {id ? (
                        <div className="w-70%">
                          <Text
                            className="font-normal ml-5 text-gray-900 w-[30%]"
                            variant="body16"
                          >
                            {userDetails.gender}
                          </Text>
                        </div>
                      ) : (
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
                      )}
                    </div>
                    {/* <Line className="bg-black_900_19 h-px w-[96%]" /> */}

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
                        readOnly={id}
                        className="font-normal text-gray-600-01 w-[70%] input-style"
                        variant="body14"
                        value={userDetails?.aboutyourself}
                        onChange={handleInputChange("aboutyourself")}
                      />
                      {/* </div> */}
                    </div>

                    {id ? (
                      <></>
                    ) : (
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
                    )}
                  </div>
                </div>
                <div className="flex md:flex-col justify-between w-full">
                  <div className="bg-white_A700_01 w-[49%] mb-3 md:w-full p-[1rem] flex flex-col">
                    <div className="flex justify-between items-center">
                      <span className="my-3 font-semibold text-xl">
                        Expertise
                      </span>
                      {id ? (
                        <></>
                      ) : (
                        <>
                          <div className="flex gap-2">
                            <span className="text-3xl" onClick={() => addRow()}>
                              +
                            </span>
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
                        </>
                      )}
                    </div>

                    {!id &&
                    userDetails.expertise &&
                    userDetails.expertise.length ? (
                      <div className="flex my-3 justify-between items-center">
                        <div className="flex flex-col w-full">
                          {userDetails.expertise.map((exper, index) => (
                            <>
                              <div className="flex gap-2 justify-between items-center">
                                <input
                                  type="text"
                                  name="exper"
                                  id="exper"
                                  className="font-normal input-style text-gray-600-01 w-[70%] "
                                  placeholder="Expertise"
                                  value={exper.expertise}
                                  onChange={(e) =>
                                    handleExpertiseInputChange(
                                      e,
                                      index,
                                      "expertise"
                                    )
                                  }
                                />
                                <input
                                  type="number"
                                  min={0}
                                  max={100}
                                  name="experVal"
                                  className="font-normal text-gray-600-01 w-[70%] input-style"
                                  placeholder="Value"
                                  value={exper.value}
                                  onChange={(e) =>
                                    handleExpertiseInputChange(
                                      e,
                                      index,
                                      "value"
                                    )
                                  }
                                />
                                <Img
                                  src="images/img_close.svg"
                                  className="h-[18px] mr-2.5 w-[18px]"
                                  alt="close"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    removeRow(index);
                                  }}
                                />
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    {id &&
                    userDetails.expertise &&
                    userDetails.expertise.length ? (
                      <div className="flex my-3 justify-between items-center">
                        <div className="flex flex-col w-full">
                          {userDetails.expertise.map((exper, index) => (
                            <>
                              <div className="flex justify-between">
                                <span>{exper.expertise}</span>
                                <span>{exper.value}</span>
                              </div>
                              <ProgressBar
                                progress={exper.value}
                                duration={100}
                              />
                            </>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="bg-white_A700_01 w-[49%] mb-3 md:w-full p-[1rem] flex flex-col">
                    <div className="flex justify-between items-center">
                      <span className="my-3 font-semibold text-xl">
                        Analytics
                      </span>
                    </div>

                    <div className="flex flex-wrap my-3 justify-evenly p-[0.5rem] bg-white_A700_01 shadow-bs2 items-center">
                      <Img src="/images/analytics1.png" alt="ellipseOne_One" />
                      <span className="text-xl font-semibold">
                        Total Learning Time
                      </span>
                      <span className="text-2xl text-orange_500">0</span>
                    </div>
                    <div className="flex my-3 flex-wrap justify-evenly p-[0.5rem] bg-white_A700_01 shadow-bs2 items-center">
                      <Img src="/images/analytics2.png" alt="ellipseOne_One" />
                      <span className="text-xl font-semibold">
                        Average Attendence
                      </span>
                      <span className="text-2xl text-orange_500">0</span>
                    </div>
                    <div className="flex flex-wrap my-3 justify-evenly p-[0.5rem] bg-white_A700_01 shadow-bs2 items-center">
                      <Img src="/images/analytics3.png" alt="ellipseOne_One" />
                      <span className="text-xl font-semibold">
                        Session Completed
                      </span>
                      <span className="text-2xl text-orange_500">0</span>
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
