import React from "react";
import Header from "../header.js";
import Wrapper from "../wrapper/index.js";
import fegrtg1 from "../../assets/fegrtg1.png";
import Image from "next/image.js";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#6BB5B5] to-[#008080] w-full  flex flex-col md:gap-20 ">
      <Wrapper>
        <Header />
        <div className="mt-7 relative flex flex-col gap-12">
          <h1 className="text-white font-spectral uppercase md:text-[40px] text-[30px] font-bold md:leading-normal leading-8 tracking-wide">
            <span>
              Transform Your Life with the Revolutionary CapnoTrainer® GO
            </span>
            <span className="ml-2 inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="205"
                height="45"
                viewBox="0 0 205 45"
                fill="none"
              >
                <g opacity="0.28">
                  <path
                    d="M78.4476 14.2932C101.029 17.8796 123.12 23.3765 147.049 23.1876C158.642 23.0963 170.263 21.2645 180.113 17.8644C189.325 14.6862 195.649 10.0565 198.609 4.2959C194.895 8.1929 190.158 11.4205 183.457 13.8647C176.03 16.5739 167.214 18.1801 158.439 18.833C145.649 19.785 132.527 18.5946 120.162 16.7374C107.554 14.8434 95.1776 12.5197 82.5405 10.6853C70.2802 8.90537 57.4192 7.94061 44.7569 8.65434C33.9195 9.17918 24.0574 11.2951 15.3418 14.8612C24.5142 12.4677 34.0269 11.2608 44.1859 11.2418C55.8044 11.2228 67.3201 12.526 78.4476 14.2932Z"
                    fill="white"
                  />
                  <path
                    d="M62.448 21.9511C70.7502 22.9805 78.7007 24.2812 86.7128 25.8785C96.9724 27.9247 107.047 30.2624 117.635 31.7532C136.174 34.3635 157.406 34.044 171.822 26.2779C165.03 28.542 157.959 29.9024 150.031 30.2599C140.996 30.6668 131.96 29.8719 123.256 28.5573C101.876 25.3284 82.3527 18.5511 59.8923 17.5901C47.5886 17.064 35.7051 18.0706 24.178 20.4933C15.0627 22.4164 7.19904 25.4235 0 29.0302C3.61094 27.9589 7.09625 26.8053 10.8465 25.8862C16.8716 24.408 22.9492 23.3406 29.3283 22.4379C35.3192 21.5898 41.9152 21.2551 48.0888 21.316C52.7457 21.3616 58.1793 21.4542 62.448 21.9511Z"
                    fill="white"
                  />
                  <path
                    d="M178.019 36.3957C165.942 38.9793 153.377 40.1089 140.459 39.9517C129.679 39.5764 119.294 38.258 109 36.4375C96.8815 34.2938 84.6349 31.9853 71.9772 31.056C66.0183 30.6187 60.0709 30.5325 54.096 30.8646C49.0553 31.1448 44.4006 31.9295 39.6797 32.9132C44.7569 32.5697 49.6263 32.3542 54.747 32.486C60.7104 32.6381 66.6076 33.3075 72.3768 34.1341C84.6211 35.7175 96.1118 38.7499 108.057 40.8607C119.799 42.9359 131.595 44.5333 144.013 44.3165C167.378 43.9083 189.501 37.9449 204.312 27.9336C196.131 31.3425 187.607 34.3445 178.019 36.3957Z"
                    fill="white"
                  />
                  <path
                    d="M83.1832 3.57161C94.4225 4.84441 105.077 7.37732 116.065 9.14834C126.864 10.8877 138.138 12.0793 149.368 11.017C158.935 10.1118 167.687 7.66385 173.47 3.26609C165.741 6.24018 157.199 7.64737 147.78 7.73611C136.441 7.84386 125.464 6.03353 114.732 4.19785C104.173 2.39134 93.6483 0.577227 82.5757 0.0954894C72.7021 -0.334271 63.2945 0.658356 54.668 3.34594C58.6398 2.94534 62.5362 2.53712 66.5925 2.53585C72.2294 2.53332 77.6674 2.94789 83.1832 3.57161Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
          </h1>
          <div className="">
            <span className="text-white font-nunito md:text-[36px] text-[26px] font-bold leading-none">
              Breathe Smarter, Live Better
            </span>
            <p className="text-white font-nunito md:text-[16px] text-[12px] font-normal leading-none xl:w-[60%]">
              Breathing is more than just an unconscious action—it’s a
              foundation of health, performance, and emotional well-being. But
              what if your breathing habits are silently holding you back? Enter
              the CapnoTrainer® GO, the groundbreaking tool that merges science,
              psychology, and technology to revolutionize your breathing habits
              and transform your life.
            </p>
          </div>
          <Image
            src={fegrtg1}
            alt="fegrtg1.png"
            className="xl:absolute top-12 -right-40"
          />
        </div>
      </Wrapper>

      <div className="hero_bottom"></div>
    </div>
  );
};

export default Hero;
