import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineGray70033: "bg-white_A700_01 shadow-bs2",
  OutlineBlueA20001: "border-2 border-blue_A200_01 border-solid shadow-bs3",
  OutlineIndigo600: "border-2 border-indigo_600 border-solid shadow-bs3",
  FillWhiteA70001: "bg-white_A700_01",
  FillYellow50: "bg-yellow_50",
};
const shapes = {
  RoundedBorder10: "rounded-[10px]",
  RoundedBorder18: "rounded-[18px]",
  CircleBorder23: "rounded-[23px]",
  RoundedBorder7: "rounded-[7px]",
};
const sizes = {
  sm: "p-[7px]",
  md: "pb-[7px] pt-2.5 px-[7px]",
  lg: "pb-3 pt-[17px] px-3",
  xl: "p-[18px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "RoundedBorder18",
    "CircleBorder23",
    "RoundedBorder7",
  ]),
  variant: PropTypes.oneOf([
    "OutlineGray70033",
    "OutlineBlueA20001",
    "OutlineIndigo600",
    "FillWhiteA70001",
    "FillYellow50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
