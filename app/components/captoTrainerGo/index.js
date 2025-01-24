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
    <div className="w-full relative">
      <div className="lg:w-[75%] max-lg:gap-5 w-full flex max-lg:flex-col items-center max-md:my-32 my-10 px-10">
        <div>
          <div className="flex flex-col items-start text-[#008080] text-center sm:text-left">
            <h2 className="text-4xl font-bold flex items-center justify-between gap-5">
              What Is the{" "}
              <Image src={group3} alt="...group" className="opacity-30" />
            </h2>
            <h2 className="text-5xl font-bold">CapnoTrainer® GO?</h2>
          </div>

          <p className="max-w-2xl text-[#3C3C3C] text-lg text-center sm:text-left">
            The CapnoTrainer® GO isn’t just a tool—it’s your personal gateway to
            a healthier, more aligned you. Using advanced{" "}
            <span className="font-bold text-[#008080]">
              capnography technology
            </span>
            , it provides real-time insights into your breathing behavior by
            measuring CO2 levels and visualizing your breathing patterns. Paired
            with a guided learning framework, it empowers you to:
          </p>
        </div>
        <Image src={Capno} alt="...capno" />

        <div className="absolute top-[50%] -translate-y-[50%] right-5 lg:flex flex-col items-start space-y-4 hidden">
          {highlights?.map((highlight, index) => (
            <div key={index} className="highlight">
              <Image src={Vector} alt="Vector" className="opacity-30" />
              <p className="highlight_para">{highlight}</p>
            </div>
          ))}
          <Image src={group1} alt="...vector" className="ml-auto" />
        </div>
        <div className="max-lg:flex max-lg:flex-col items-start space-y-4 hidden">
          {highlights?.map((highlight, index) => (
            <div key={index} className="highlight">
              <Image src={Vector} alt="Vector" className="opacity-30" />
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
