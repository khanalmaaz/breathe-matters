import React from "react";
import Image from "next/image";
import womanyoga from "../../assets/womanyoga.png";
import headache from "../../assets/headache 1.png";
import lowbattery from "../../assets/low-battery 1.png";
import musclePain from "../../assets/muscle-pain 1.png";

const points = [
  {
    title: "Compromise your health:",
    description: "Triggering anxiety, fatigue, and physical discomfort.",
    imgSrc: headache,
  },
  {
    title: "Disrupt your performance:",
    description:
      "Causing focus deficits, memory issues, and suboptimal endurance.",
    imgSrc: lowbattery,
  },
  {
    title: "Exacerbate existing conditions:",
    description:
      "Like asthma, chronic pain, and even stress-related disorders.",
    imgSrc: musclePain,
  },
];

const HiddenPower = () => {
  return (
    <div className="bg-[#E6F2F2] flex md:my-32 my-10 max-lg:flex-col">
      <div className="w-[80%] object-contain max-lg:w-full">
        <Image className="h-full w-full" src={womanyoga} alt="Yoga Woman" />
      </div>
      <div className="flex flex-col justify-between gap-5">
        <p className="text-[#3C3C3C] text-lg font-nunito text-center sm:text-left px-10 pt-10">
          Your breathing isn’t just about oxygen in and carbon dioxide out—it’s
          a complex behavior shaped by triggers, habits, and physiology. When
          misaligned, these habits can:
        </p>
        <div className="grid gap-6 grid-cols-1 px-10">
          {points.map((point, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Image
                className="w-12 h-12 flex-shrink-0"
                src={point.imgSrc}
                alt="Icon"
                width={48}
                height={48}
              />
              <div className="flex flex-col">
                <h3 className="text-[#101010] text-lg font-nunito font-bold">
                  {point.title}
                </h3>
                <p className="text-[#3C3C3C] text-base font-nunito">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#008080] w-full flex justify-center py-6 px-4">
          <p className="text-white text-lg text-left px-10">
            Millions of people suffer the consequences of poor breathing habits.
            But you don’t have to be one of them. With the{" "}
            <span className="font-bold">CapnoTrainer® GO</span>, you’ll unlock a
            scientifically-backed pathway to breathing mastery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPower;
