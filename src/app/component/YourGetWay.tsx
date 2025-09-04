import Image from "next/image";
import React from "react";
import Pic from "../../..//public/assets/about-us/Plane-in-Sunset 1.png";

export default function YourGetWay() {
  return (
    <section className="px-4 sm:px-6 md:px-16 py-8 md:py-10 bg-white max-w-[1483px] mx-auto my-10 md:my-[120px]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-[#2C2C2C] leading-tight mb-6">
        YOUR GATEWAY TO HIGHER EDUCATION <br /> IN ABROAD
      </h1>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-y-8 md:gap-y-0 md:gap-x-[92px]">
        <div className="w-full md:w-[60%] space-y-6">
          <p className="text-base sm:text-lg md:text-3xl text-gray-800 leading-10 md:pt-6">
            Specializing in study pathways to Abroad, VIE Services provides
            end-to-end support— from choosing the right university to securing
            your student visa. Our goal is to make your international education
            journey smooth, informed, and successful.
          </p>
          <p className="text-base sm:text-lg md:text-3xl text-gray-800 leading-10">
            Whether {`you're`} seeking admission to a top-ranked institution,
            exploring scholarship opportunities, or searching for the ideal
            course aligned with your career ambitions, VIE Services is here to
            turn your aspirations into reality.
          </p>
        </div>
        <div className="w-full md:w-[40%] mt-6 md:mt-0 flex-shrink-0">
          <Image
            src={Pic.src}
            alt="Airplane flying towards sunset"
            width={500}
            height={350}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
