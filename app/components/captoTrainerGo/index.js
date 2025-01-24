import React from "react";
import Vector from "../../assets/Vector.png";
import Capno from "../../assets/Capno.png";
import group1 from "../../assets/Group-1.png";
import group3 from "../../assets/Group-3.png";
import Image from "next/image";

const highlights = [
  "Identify and correct dysfunctional breathing habits.",
  "Understand the triggers and motivations behind your habits.",
  "Optimize your respiration for health, focus, and performance.",
];

const CapnoTrainer = () => {
  return (
    <div className="w-full relative px-12">
      <div className="lg:w-[75%] max-lg:gap-5 w-full flex max-lg:flex-col items-center max-md:my-32 my-10 px-10">
        <div>
          <div className="flex flex-col items-start text-[#008080] text-center sm:text-left">
            <h2 className="text-[40px] font-bold flex items-center font-spectral justify-between gap-5">
              WHAT IS THE
              <Image src={group3} alt="...group" />
            </h2>
            <h2 className="text-[50px] font-bold font-spectral">
              CAPNOTRAINER<sup>®</sup> GO?
            </h2>
          </div>

          <p className=" md:w-[528px] text-[#3C3C3C] text-[16px] text-center font-nunito leading-normal font-normal sm:text-left">
            The CapnoTrainer
            <sup>®</sup>
            GO isn’t just a tool—it’s your personal gateway to a healthier, more
            aligned you. Using advanced{" "}
            <span className="font-bold text-[#008080]">
              capnography technology
            </span>
            , it provides real-time insights into your breathing behavior by
            measuring CO2 levels and visualizing your breathing patterns. Paired
            with a guided learning framework, it empowers you to:
          </p>
        </div>
        <Image src={Capno} alt="...capno" />

        <div className="absolute top-[50%] -translate-y-[50%] right-0 lg:flex flex-col items-start space-y-4 hidden">
          {highlights?.map((highlight, index) => (
            <div key={index} className="highlight">
              <Image src={Vector} alt="Vector" />
              <p className="highlight_para">{highlight}</p>
            </div>
          ))}
          <Image src={group1} alt="...vector" className="ml-auto" />
        </div>
        <div className="max-lg:flex max-lg:flex-col items-start space-y-4 hidden">
          {highlights?.map((highlight, index) => (
            <div key={index} className="highlight">
              <Image src={Vector} alt="Vector" />
              <p className="highlight_para">{highlight}</p>
            </div>
          ))}
          <Image src={group1} alt="...vector" className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default CapnoTrainer;
