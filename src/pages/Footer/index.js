import React from "react";
import { Button, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className="bg-orange_500 flex font-segoeui items-center justify-center mt-[131px] pb-6 pt-[71px] md:px-5 px-[202px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-auto">
          <div className="flex flex-col gap-6 items-start justify-start pb-4 px-3 w-auto sm:w-full">
            <Text
              className="font-bold text-white_A700_01 w-auto"
              variant="body10"
            >
              FAQ
            </Text>
            <ul className="flex flex-col font-nunitosans gap-4 items-start justify-start pb-4 md:pr-10 sm:pr-5 pr-[90px] w-auto md:w-full common-column-list">
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">question one</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Question 2</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">question 3</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Question 4</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">
                    Litigation Risk Assessment and Strategy
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Patent Prosecution</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start pb-[118px] px-3 w-auto">
            <Text
              className="font-bold text-white_A700_01 w-auto"
              variant="body10"
            >
              Quick links
            </Text>
            <ul className="flex flex-col font-nunitosans gap-4 items-start justify-start pb-4 md:pr-10 sm:pr-5 pr-[212px] w-auto md:w-full common-column-list">
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Link 1</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Link 2</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Link 3</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start pb-[50px] px-3 w-[269px]">
            <Text className="text-white_A700_01 w-auto" variant="body11">
              Other
            </Text>
            <ul className="flex flex-col gap-4 items-start justify-start pb-4 md:pr-10 pr-28 sm:pr-5 w-auto md:w-full common-column-list">
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Privacy Policy</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Terms of Use</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Features</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Success Stories</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="font-normal text-white_A700_01"
                >
                  <Text variant="body10">Contact Us</Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
