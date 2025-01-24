import React from "react";
import stress from "../../assets/Eliminate Stress and Anxiety.png";
import mental from "../../assets/mental.png";
import achieve from "../../assets/Achieve Peak Performance.png";
import physical from "../../assets/Improve Physical Health.png";
import Image from "next/image";

const WhatWeCanDo = () => {
  const cardsData = [
    {
      img: stress,
      title: "Real-Time Monitoring",
      subtitle:
        "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm.",
    },
    {
      img: mental,
      title: "Capnogram Visualization",
      subtitle:
        "Get instant feedback on your breathing mechanics and see the impact in real-time.",
    },
    {
      img: achieve,
      title: "Custom Learning Plans",
      subtitle:
        "Tailored strategies to help you unlearn bad habits and master new ones.",
    },
    {
      img: physical,
      title: "Interactive Practicums",
      subtitle:
        "Experiment with guided breathing challenges to align behavior with physiology.",
    },
  ];
  return (
    <div className="md:my-32 my-10 ">
      <h2 className="text-center max-md:text-[26px] diffTheCapnotrainer">
        What Can the CapnoTrainer®GO Do for You?
      </h2>
      <div className="grid grid-cols-4 place-items-center justify-between py-10 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:gap-[100px] gap-10">
        {cardsData?.map((obj, index) => (
          <div key={index} className="w-[288px]">
            <Image src={obj?.img} alt={`...${obj.name}`} />
            <div className="p-5 bg-[#008080] rounded-b-xl">
              <h3 className="text-white font-nunito text-[20px] font-bold leading-none">
                {obj?.title}
              </h3>
              <p className="text-white font-nunito text-[16px] font-normal leading-normal">
                {obj?.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeCanDo;
