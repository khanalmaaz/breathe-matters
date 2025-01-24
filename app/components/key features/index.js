import React from "react";
import monitor from "../../assets/monitoring 1.png";
import breathwave from "../../assets/Breathwave.png";
import strategies from "../../assets/Breath strategies.png";
import portable from "../../assets/Portable.png";
import Image from "next/image";

const KeyFeatures = () => {
  const keyFeaturesData = [
    {
      icons: monitor,
      title: "Real-Time Monitoring",
      subtitle:
        "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm.",
    },
    {
      icons: breathwave,
      title: "Capnogram Visualization",
      subtitle:
        "Get instant feedback on your breathing mechanics and see the impact of adjustments in real-time.",
    },
    {
      icons: strategies,
      title: "Custom Learning Plans",
      subtitle:
        "Tailored strategies to help you unlearn bad habits and master new ones.",
    },
    {
      icons: portable,
      title: "Interactive Practicums",
      subtitle:
        "Experiment with guided breathing challenges to align behavior with physiology.",
    },
  ];
  return (
    <div className="md:my-32 my-10 ">
      <h2 className="text-center max-md:text-[26px] diffTheCapnotrainer">
        Key Features You’ll Love
      </h2>
      <div className="grid grid-cols-4 place-items-center justify-between py-10 max-md:grid-cols-2 max-sm:grid-cols-1 lg:gap-[100px] gap-10 ">
        {keyFeaturesData?.map((obj, index) => (
          <div key={index} className="flex flex-col gap-2 max-md:items-center">
            <Image src={obj?.icons} alt={`...${obj.name}`} />
            <h3 className="text-[16px] font-bold text-[#101010] leading-normal font-nunito">
              {obj?.title}
            </h3>
            <p className="text-[#3C3C3C] font-[400] leading-normal text-[16px] max-md:text-center">
              {obj?.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
