import Image from "next/image";
import React from "react";
import group from "../../assets/Group-3.png";
import group2 from "../../assets/Group-2.png";
import ellipse from "../../assets/Ellipse.png";
import Wrapper from "../wrapper";

const Transform = () => {
  return (
    <Wrapper>
      <div className="transform py-10 text-center text-white max-w-[1248px] mx-auto md:px-20 px-5 flex flex-col gap-5 relative md:my-32 my-10">
        <Image src={group} alt="group" className="absolute right-0 top-0" />
        <p className="font-spectral text-[24px] font-bold">Don’t Wait</p>
        <h2 className="text-center max-md:text-[26px] diffTheCapnotrainer !text-white">
          Transform Your Breathing Today!
        </h2>
        <p className="text-[16px] mb-5">
          Your breath is your power. Take control with the CapnoTrainer
          <sup>®</sup> GO, <br /> and experience life with greater clarity,
          confidence, and vitality.
        </p>
        <span>
          <button
            className="p-5 bg-white text-[#008080] text-base rounded-lg font-extrabold "
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
             Order Now and Start Your Breathing Journey!
          </button>
        </span>
        <Image
          src={group2}
          alt="group"
          className="absolute left-0 bottom-0 w-[50%]"
        />
        <Image
          src={ellipse}
          alt="...elipse"
          className="absolute bottom-0 right-1/2 translate-x-[50%]"
        />
      </div>
    </Wrapper>
  );
};

export default Transform;
