"use client";

import React, { useState } from "react";
import down from "../../assets/down.png";
import up from "../../assets/up.png";
import Image from "next/image";
import Wrapper from "../wrapper";

const FAQ = () => {
  // const [IsHovered, setIsHovered] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(null);

  const faqData = {
    title: "Frequently Asked Questions",
    questions: [
      {
        question:
          "Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?",
        answer:
          "BreatheMatters is a holistic wellness brand dedicated to improving respiratory health and overall well-being. We offer a curated selection of innovative products designed to enhance the quality of your breathing experience.",
      },
      {
        question:
          "Is it safe to use for health conditions like asthma or anxiety?",
        answer:
          "Yes, it’s ideal for understanding and improving breathing habits that exacerbate these conditions. Consult your healthcare provider if you have specific concerns.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply order your CapnoTrainer® GO, and follow the included guide to begin exploring your breath.",
      },
    ],
  };

  const handleQuestionAccordian = (index) => {
    // setIsHovered(true);
    setQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Wrapper>
      <div className="md:my-32 my-10 md:px-20">
        <div className="text-center flex flex-col gap-[13px]">
          <h2 className="text-center max-md:text-[26px] diffTheCapnotrainer">
            FAQs
          </h2>
        </div>
        <div className="my-5 flex flex-col gap-5 px-5 sm:px-10">
          {faqData?.questions?.map((obj, index) => (
            <div
              key={index}
              className="cursor-pointer border border-[#6BB5B5] p-4 rounded-[6px]"
              onClick={() => handleQuestionAccordian(index)}
              // onMouseLeave={() => {
              //   setIsHovered(false);
              // }}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-[20px] text-[#008080] font-semibold font-lucida pl-3">
                  {obj?.question}
                </h4>

                <Image
                  src={questionIndex === index ? up : down}
                  // src={IsHovered && questionIndex === index ? up : down}
                  alt="Toggle Arrow"
                  className="cursor-pointer max-lg:w-[10px] w-[20px]"
                />
              </div>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  questionIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="text-[16px] text-[#3C3C3C] px-3 py-5">
                  {obj?.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default FAQ;
