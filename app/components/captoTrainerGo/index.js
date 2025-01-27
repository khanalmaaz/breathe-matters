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
    <div className="flex items-center justify-center max-w-[1400px] ">
      <div className="w-full relative lg:px-12 ">
        <div className="gap-5 w-full justify-center flex max-xl:flex-col items-center max-md:my-32 my-10">
          <div className="xl:w-5/12 w-full">
            <div className="flex flex-col items-start text-[#008080] text-center sm:text-left">
              <h2 className="max-md:text-[30px] text-[40px] whitespace-nowrap font-bold flex items-center font-spectral justify-between md:gap-5">
                WHAT IS THE
                <Image src={group3} alt="...group" />
              </h2>
              <h2 className="text-[40px] max-md:text-[30px] font-bold font-spectral">
                CAPNOTRAINER<sup>®</sup> GO?
              </h2>
            </div>

            <p className="md:w-full text-[#3C3C3C] text-[15px] pr-12 max-lg:text-[16px] text-center font-nunito leading-normal font-normal sm:text-left my-5">
              The CapnoTrainer
              <sup>®</sup>
              GO isn’t just a tool—it’s your personal gateway to a healthier,
              more aligned you. Using advanced{" "}
              <span className="font-bold text-[#008080]">
                capnography technology
              </span>
              , it provides real-time insights into your breathing behavior by
              measuring CO2 levels and visualizing your breathing patterns.
              Paired with a guided learning framework, it empowers you to:
            </p>
          </div>
          <div className="relative w-full lg:w-7/12 max-lg:flex max-lg:items-center max-lg:justify-center">
            <Image src={Capno} alt="...capno" />
            <div className="absolute top-[50%] -translate-y-[50%] whitespace-nowrap md:left-[250px] lg:flex flex-col items-start space-y-4 hidden lg:w-[75%]">
              {highlights?.map((highlight, index) => (
                <div key={index} className="highlight">
                  <Image src={Vector} alt="Vector" />
                  <p className="highlight_para">{highlight}</p>
                </div>
              ))}
              <Image
                src={group1}
                alt="...vector"
                className="xl:ml-40 lg:ml-36  ml-auto"
              />
            </div>
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
    </div>
  );
};

export default CapnoTrainer;
