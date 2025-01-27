import React from "react";

const Wrapper = ({ children, hero }) => {
  return (
    <div className={`container mx-auto max-sm:max-w-[380px] 2xl:px-20`}>
      {children}
    </div>
  );
};

export default Wrapper;
