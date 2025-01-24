import React from "react";
import gym from "../../assets/capno with gym 1.png";
import group2 from "../../assets/Group-2.png";
import group from "../../assets/Group.png";
import Image from "next/image";

const Differece = () => {
  return (
    <div className="flex max-md:flex-col gap-10 max-md:mt-20 relative md:my-32 my-10">
      <Image
        src={group}
        alt="...group"
        className="absolute top-0 left-0 max-md:hidden opacity-30"
      />

      <Image src={gym} alt="...gym" />
      <div className="">
        <h2 className="diffTheCapnotrainer text-start max-md:text-[26px]">
          What Makes the CapnoTrainer® go Different?
        </h2>
        <div className="diff_para flex items-center max-md:flex-col max-md:text-">
          <p className="md:max-w-[528px]">
            Unlike traditional breathing tools that focus on shallow techniques,
            the CapnoTrainer® GO goes deeper. It integrates{" "}
            <span className="text-[#008080]">
              psychophysiology, behavioral analysis, and cutting-edge technology
            </span>{" "}
            to provide a complete understanding of your breath’s role in health
            and performance.
          </p>
          <div className="w-full flex justify-end mb-5">
            <Image src={group2} alt="...group2" className="opacity-30" />
          </div>
        </div>
        <div className="lg:absolute bottom-10 right-10 max-w-[787px]">
          <p className="text-[21px] font-[800] text-[#008080] p-6 bg-white rounded-[10px] text_diff">
            “Breathing is behavior. And behavior can be changed. The
            CapnoTrainer® helps you edit, optimize, and own your breath for
            life.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Differece;
