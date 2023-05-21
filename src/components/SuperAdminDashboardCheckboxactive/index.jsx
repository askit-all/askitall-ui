import React from "react";

import { Img, Text } from "components";

const SuperAdminDashboardCheckboxactive = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_checkmark.svg"
          className="h-6 w-6"
          alt="checkmark"
        />
        <Text
          className="font-inter font-normal text-black_900"
          variant="body14"
        >
          {props?.checkbox}
        </Text>
      </div>
    </>
  );
};

SuperAdminDashboardCheckboxactive.defaultProps = { checkbox: "Checkbox" };

export default SuperAdminDashboardCheckboxactive;
