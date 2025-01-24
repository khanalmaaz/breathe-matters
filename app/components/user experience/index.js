import React from "react";
import feedback from "../../assets/feedback interface 1.png";
import monitor from "../../assets/Monitor Your Progress 1.png";
import waveform from "../../assets/real-time PCO2 waveform analysis 1.png";
import Group from "../../assets/Group-2.png";
import Wrapper from "../wrapper";
import Image from "next/image";

const UserExp = () => {
  const cards = [
    {
      title: "See Your Breathing in Action",
      description:
        "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.",
      imageSrc: waveform,
    },
    {
      title: "Monitor Your Progress",
      description:
        "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.",
      imageSrc: monitor,
    },
    {
      title: "Receive Tailored Feedback",
      description:
        "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
      imageSrc: feedback,
    },
  ];

  return (
    <div className="bg-[#E6F2F2] md:mt-32 mt-10 flex flex-col items-center">
      <Wrapper>
        <div className="flex flex-col items-center">
          <div className="md:py-20 py-10 font-spectral flex flex-col items-start">
            <p className="text-[16.331px] text-left font-bold font-spectral leading-normal tracking-wider uppercase">
              Experience the
            </p>
            <h2 className="max-md:text-[30px] text-[40px] text-[#008080] max-md:text-center font-spectral font-bold leading-[25px] uppercase">
              Power of CapnoTrainer<sup>®</sup> GO
            </h2>
          </div>
          <div className="flex max-lg:flex-col items-center justify-between gap-10">
            {cards?.map((card, index) => (
              <div
                key={index + 1}
                className="card rounded-xl w-[329px] h-[329px]"
              >
                <Image src={card.imageSrc} alt={card.title} />
                <div className="px-5 py-2">
                  <h3 className="font-nunito text-[20px] font-bold text-[#008080]">
                    {card.title}
                  </h3>
                  <p className="font-nunito text-[14px] font-normal leading-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image src={Group} alt="...group" className="mt-10" />
      </Wrapper>
    </div>
  );
};

export default UserExp;
