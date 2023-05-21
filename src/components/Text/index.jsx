import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-[76px]",
  h2: "font-bold sm:text-[37px] md:text-[43px] text-[51px]",
  h3: "sm:text-[40px] md:text-[46px] text-[50px]",
  h4: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h5: "sm:text-4xl md:text-[38px] text-[40px]",
  h6: "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  body1: "font-extrabold sm:text-[31px] md:text-[33px] text-[35px]",
  body2: "font-medium sm:text-3xl md:text-[32px] text-[34px]",
  body3: "font-semibold sm:text-[29px] md:text-[31px] text-[33px]",
  body4: "font-normal md:text-3xl sm:text-[28px] text-[32px]",
  body5: "font-bold text-3xl sm:text-[26px] md:text-[28px]",
  body6: "sm:text-[21px] md:text-[23px] text-[25px]",
  body7: "font-semibold text-2xl md:text-[22px] sm:text-xl",
  body8: "font-bold sm:text-[19px] md:text-[21px] text-[23px]",
  body9: "text-[22px] sm:text-lg md:text-xl",
  body10: "text-xl",
  body11: "font-bold text-[19px]",
  body12: "text-lg",
  body13: "font-normal text-[17px]",
  body14: "text-base",
  body15: "font-normal text-[15.93px]",
  body16: "text-[15px]",
  body17: "text-sm",
  body18: "text-[13px]",
  body19: "font-normal text-[12.8px]",
  body20: "font-normal text-[12.67px]",
  body21: "font-normal text-[12.6px]",
  body22: "font-normal text-xs",
  body23: "font-normal text-[11.8px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
