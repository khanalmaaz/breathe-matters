import React from "react";

const Wrapper = ({ children, px = "56" }) => {
  return <div className={`px-20`}>{children}</div>;
};

export default Wrapper;
