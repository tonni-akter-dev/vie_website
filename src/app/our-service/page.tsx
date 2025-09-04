import Image from "next/image";
import React from "react";
import playbtn from "../../../public/playbutton.svg";
import service from "../../../public/service_img.png";
import DotIndicator from "../component/DotIndicator";
import AcademicCounselling from "./components/AcademicCounselling";

const OurService = () => {
  return (
    <div className="lg:mx-[38px] mx-4 py-[60px] lg:py-[120px]">
      {/* Play Button */}
      <div className="mx-auto flex justify-center mb-[-20px]">
        <button>
          <Image src={playbtn} alt="Play Button" />
        </button>
      </div>

      <div
        className="lg:pt-[153px] lg:pb-[116px] py-[60px] lg:px-[32px] px-4 bg-[#FEFEFE] rounded-2xl lg:rounded-[58px]"
        style={{ boxShadow: "0 0 4.6px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <h2 className="lg:text-[64px] text-4xl text-center font-extrabold  uppercase leading-normal mb-[111px]">
          Our Services
        </h2>
        <div>
          <div className="flex gap-3 mb-[71px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="344"
              height="2"
              viewBox="0 0 344 2"
              fill="none"
            >
              <path d="M0 1H343.052" stroke="#533115" strokeWidth="2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="2"
              viewBox="0 0 16 2"
              fill="none"
            >
              <path d="M0 1H16" stroke="#533115" strokeWidth="2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="2"
              viewBox="0 0 16 2"
              fill="none"
            >
              <path d="M0 1H16" stroke="#533115" strokeWidth="2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="2"
              viewBox="0 0 16 2"
              fill="none"
            >
              <path d="M0 1H16" stroke="#533115" strokeWidth="2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="2"
              viewBox="0 0 40 2"
              fill="none"
            >
              <path d="M0 1H40" stroke="#533115" strokeWidth="2" />
            </svg>
          </div>
          <div className="mb-[141px] flex lg:flex-row flex-col justify-between items-center gap-10">
            <div className="max-w-[900px]">
              <h3 className="text-black lg:whitespace-nowrap lg:text-[44px] text-3xl mb-[50px] font-extrabold uppercase ">
                Comprehensive Guidance for <br /> Your Global Education Journey
              </h3>
              <p className="text-black lg:text-[32px] text-2xl">
                At VIE Services, we’re committed to helping you make smart,
                future-proof academic decisions and ensuring every step of your
                study abroad process is seamless and stress-free. From course
                counselling to visa assistance, we provide tailored solutions to
                match your goals, academic profile, and budget.
              </p>
            </div>
            <Image
              className=" w-full rounded-[2px] lg:min-w-[400px] h-[300px]"
              src={service}
              alt=""
            />
          </div>

          <DotIndicator />
        </div>
      <div className="mt-[100px]">
        <AcademicCounselling />
      </div>
      </div>
    </div>
  );
};

export default OurService;
