import React, { useEffect } from "react";

import { Button, Line, Text } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const BookingpagePage = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-nunitosans gap-[30px] justify-start mx-auto pb-[1564px] w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-orange_500 w-full" />
        </div>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[203px] md:px-5 w-[26%] md:w-full">
          <Text className="font-bold text-black_900" as="h5" variant="h5">
            Booking
          </Text>
          <Text className="font-normal text-black_900" variant="body10">
            This Session takes time..
          </Text>
          <div className="flex flex-col items-center justify-start mt-7 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                <Text className="font-normal text-orange_500" variant="body10">
                  Upcomming
                </Text>
                <Text className="font-normal text-black_900" variant="body10">
                  Pending
                </Text>
                <Text
                  className="font-normal mt-0.5 text-black_900"
                  variant="body10"
                >
                  past
                </Text>
                <Text
                  className="font-normal mb-0.5 text-black_900"
                  variant="body10"
                >
                  Cancelled
                </Text>
              </div>
              <Line className="bg-orange_500 h-[3px] md:ml-[0] ml-[3px] w-[29%]" />
            </div>
          </div>
          <Text
            className="font-normal mt-[19px] text-black_900"
            variant="body10"
          >
            You have no up comming{" "}
          </Text>
          <Button
            className="cursor-pointer font-bold min-w-[243px] mt-[191px] text-center text-white_A700_01 text-xl"
            shape="CircleBorder20"
            size="md"
            variant="OutlineGray40001"
          >
            Explore mentors
          </Button>
        </div>
      </div>
    </>
  );
};

export default BookingpagePage;
