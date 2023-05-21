import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder12: "rounded-[12px]",
  CircleBorder20: "rounded-[20px]",
  RoundedBorder8: "rounded-lg",
  RoundedBorder4: "rounded",
  CustomBorderTL4: "rounded-tl rounded-tr",
  CircleBorder25: "rounded-[25px]",
  RoundedBorder41: "rounded-[41px]",
  icbCircleBorder26: "rounded-[26px]",
  icbRoundedBorder4: "rounded",
};
const variants = {
  OutlineBlack9000c: "bg-amber_A700_01 shadow-bs text-white_A700_01",
  OutlineWhiteA700: "bg-white_A700 border-2 border-solid border-white_A700",
  OutlineWhiteA700_1: "border-2 border-solid border-white_A700 text-white_A700",
  FillOrange500: "bg-orange_500 text-white_A700_01",
  OutlineOrange500: "border-2 border-orange_500 border-solid text-orange_500",
  OutlineIndigo100: "bg-gradient  shadow-bs1 text-white_A700_01",
  OutlineGray40001: "bg-gradient  shadow-bs4 text-white_A700_01",
  OutlineWhiteA70033:
    "bg-white_A700_47 border border-solid border-white_A700_33 text-white_A700_01",
  OutlineWhiteA70033_1:
    "bg-white_A700_35 border border-solid border-white_A700_33 text-white_A700_01",
  OutlineAmberA700:
    "bg-amber_A700 border border-amber_A700 border-solid text-white_A700_01",
  OutlineGray900:
    "bg-gray_900 border border-gray_900 border-solid text-white_A700_01",
  OutlineWhiteA700_2:
    "bg-orange_500 border-2 border-solid border-white_A700 text-white_A700",
  FillGray900b7: "bg-gray_900_b7 text-white_A700_01",
  OutlineAmberA70001:
    "border border-amber_A700_01 border-solid text-gray_900_04",
  OutlineBlue800:
    "bg-white_A700_01 border-b-2 border-blue_800 border-solid text-blue_gray_700_01",
  FillAmberA70001: "bg-amber_A700_01 text-white_A700_01",
  OutlineAmberA70001_1:
    "border-2 border-amber_A700_01 border-solid text-amber_A700_01",
  icbOutlineWhiteA70014:
    "bg-white_A700_2d border border-solid border-white_A700_14",
  icbFillDeeppurpleA70019: "bg-deep_purple_A700_19",
  icbFillBlueA70019: "bg-blue_A700_19",
  icbFillGreen80019: "bg-green_800_19",
  icbFillLightblue50019: "bg-light_blue_500_19",
  icbFillOrangeA40019: "bg-orange_A400_19",
  icbFillPurple70019: "bg-purple_700_19",
  icbFillCyan70019: "bg-cyan_700_19",
  icbFillGray10001: "bg-gray_100_01",
};
const sizes = {
  sm: "p-[3px]",
  md: "p-1.5",
  lg: "p-2.5",
  xl: "p-5",
  smIcn: "p-2.5",
  mdIcn: "p-3.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder12",
    "CircleBorder20",
    "RoundedBorder8",
    "RoundedBorder4",
    "CustomBorderTL4",
    "CircleBorder25",
    "RoundedBorder41",
    "icbCircleBorder26",
    "icbRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "OutlineBlack9000c",
    "OutlineWhiteA700",
    "OutlineWhiteA700_1",
    "FillOrange500",
    "OutlineOrange500",
    "OutlineIndigo100",
    "OutlineGray40001",
    "OutlineWhiteA70033",
    "OutlineWhiteA70033_1",
    "OutlineAmberA700",
    "OutlineGray900",
    "OutlineWhiteA700_2",
    "FillGray900b7",
    "OutlineAmberA70001",
    "OutlineBlue800",
    "FillAmberA70001",
    "OutlineAmberA70001_1",
    "icbOutlineWhiteA70014",
    "icbFillDeeppurpleA70019",
    "icbFillBlueA70019",
    "icbFillGreen80019",
    "icbFillLightblue50019",
    "icbFillOrangeA40019",
    "icbFillPurple70019",
    "icbFillCyan70019",
    "icbFillGray10001",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
