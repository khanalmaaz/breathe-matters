import React from "react";
import vector2 from "../../assets/Vector2.png";
import vector3 from "../../assets/Vector3.png";
import vector4 from "../../assets/Vector4.png";
import person1 from "../../assets/person 1.png";
import semiCircle from "../../assets/semiCircle.png";
import rectangleLeft from "../../assets/Rectangle-left.png";
import Image from "next/image";

const Order = () => {
  return (
    <>
      <div className="flex items-center justify-between relative max-lg:hidden">
        <Image
          src={person1}
          alt="...person1"
          className="absolute left-24 bottom-0"
        />
        <Image
          src={semiCircle}
          alt="...semiCircle"
          className="absolute top-0"
        />
        <Image
          src={vector4}
          alt="...vector4"
          className="absolute top-0 left-[24%]"
        />
        <Image
          src={vector4}
          alt="...vector4"
          className="absolute top-0 left-[25%]"
        />
        <Image
          src={rectangleLeft}
          alt="...rectangleLeft"
          className="absolute bottom-0 -z-[1]"
        />
        <div className="md:w-[30%] rectangle_left relative bg-red-400"></div>
        <div
          className="md:w-[75%] rectangle_right bg-cover bg-center bg-no-repeat flex flex-col gap-20"
          style={{
            alignItems: "end",
            paddingRight: "80px",
          }}
        >
          <h2 className="takeControl tracking-widest text-[50px] font-spectral font-bold text-white text-end break-words underline decoration-wavy decoration-2 underline-offset-[11.5%]">
            Take Control of Your Breath Today!
          </h2>
          <div className="flex flex-col items-start ">
            <p className="font-nunito break-words text-white text-center">
              Invest in the Science of Better Breathing
            </p>
            <p className="font-nunito break-words text-white text-end">
              For a limited time, get your CapnoTrainer<sup>®</sup>GO at an exclusive
              launch price!
            </p>
          </div>
          <div
            className="p-5 inline-flex items-center justify-center relative"
            style={{
              background: "black",
              padding: "40px 20px",
            }}
          >
            <Image
              src={vector2}
              alt="...vector"
              className="absolute top-[-10px] left-[-10px] z-[1]"
            />
            <Image
              src={vector3}
              alt="...vector"
              className="absolute top-[-30px] right-[20px] z-[1]"
            />

            <div className="p-5 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-[#008080] text-base font-extrabold font-nunito">
                Order now and receive a FREE personalized breathing evaluation
                plan!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-lg:flex max-lg:flex-col hidden bg-[#008080] py-10">
        <h2
          className="text-center max-md:text-[26px] diffTheCapnotrainer "
          style={{
            color: "white",
          }}
        >
          Take Control of Your Breath Today!
        </h2>
        <div class="flex flex-col items-center  text-center gap-10">
          <p class="font-nunito break-words text-white text-center">
            Invest in the Science of Better Breathing
          </p>
          <p class="font-nunito break-words text-white">
            For a limited time, get your CapnoTrainer<sup>®</sup>GO at an exclusive launch
            price!
          </p>
          <div
            className="p-5 inline-flex items-center justify-center relative"
            style={{ background: "black", padding: "40px 20px" }}
          >
            <div className="p-5 bg-white rounded-lg inline-flex justify-center items-center gap-2.5">
              <div className="text-[#008080] text-base font-extrabold font-nunito">
                Order now and receive a FREE personalized breathing evaluation
                plan!
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={person1} alt="...person1" />
        </div>
      </div>
    </>
  );
};

export default Order;
