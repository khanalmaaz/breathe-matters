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
      title: "Eliminate Stress and Anxiety",
      subtitle:
        "Learn to control overbreathing, reduce hypocapnia, and maintain balance in challenging situations.",
    },
    {
      img: mental,
      title: "Enhance Mental Clarity and Focus",
      subtitle:
        "Boost oxygen and glucose supply to your brain by aligning your breathing mechanics.",
    },
    {
      img: achieve,
      title: "Achieve Peak Performance",
      subtitle:
        "Whether you’re giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath.",
    },
    {
      img: physical,
      title: "Improve Physical Health",
      subtitle:
        "Address symptoms like shortness of breath, dizziness, and fatigue by optimizing your acid-base physiology.",
    },
  ];
  return (
    <div className="md:my-32 my-10 ">
      <h2 className="text-center max-md:text-[26px] diffTheCapnotrainer tracking-wider">
        What Can the CapnoTrainer<sup>®</sup>GO Do for You?
      </h2>
      <div className="grid grid-cols-4 place-items-center justify-between py-10 max-lg:grid-cols-2 max-sm:grid-cols-1 lg:gap-[100px] gap-10">
        {cardsData?.map((obj, index) => (
          <div key={index} className="w-[288px]">
            <Image src={obj?.img} alt={`...${obj.name}`} />
            <div className="p-5 bg-[#008080] rounded-b-xl">
              <h3 className="text-white font-nunito text-[20px] font-bold leading-normal">
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
