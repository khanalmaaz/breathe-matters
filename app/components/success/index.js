import React from "react";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.png";
import Image from "next/image";

const Success = () => {
  const successStories = [
    {
      image: customer1,
      name: "Amanda K",
      role: "Entrepreneur",
      quote:
        '"I thought I knew how to breathe—until I used the CapnoTrainer GO. This device opened my eyes to habits I never realized were harming me. I feel more energized and focused than ever before!"',
    },
    {
      image: customer2,
      name: "Dr. Michael J",
      role: "Clinical Psychologist",
      quote:
        '"As a therapist, the CapnoTrainer®GO has completely transformed how I work with clients. It\'s a game-changer in helping people tackle anxiety and performance issues."',
    },
  ];

  return (
    <div className="relative max-w-[1440px] mx-auto">
      <div className="bg-[#008080] absolute w-full h-[92px] translate-y-[50%] lg:top-24 top-72"></div>

      <div className="bg-[#E6F2F2] lg:px-[123px] px-5 py-10">
        <h2 className="text-center max-md:text-[26px] mb-10 tracking-wider diffTheCapnotrainer">
          Real Success Stories
        </h2>

        <div className="max-w-[1440px] mx-auto mt-[-4px] flex max-lg:flex-col items-center gap-[61px] relative">
          {successStories?.map((story, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#fff] border border-[#008080] rounded-[10px] gap-4 overflow-hidden"
            >
              <p className="text-[#008080]  bg-[#E6F2F2] rounded-b-[16px] p-5 shadow-[0px_10px_10px_-2px_rgba(0,0,0,0.2)]">
                {story?.quote}
              </p>

              <div className="flex items-center justify-center  rounded-b-[10px] border-[#008080] overflow-hidden">
                <div className="flex items-center gap-5 my-[23px]">
                  <Image src={story?.image} alt={story?.name} />
                  <div>
                    <p>{story?.name}</p>
                    <p>{story?.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;
