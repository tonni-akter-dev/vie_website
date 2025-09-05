import React from "react";
import service1 from "../../../public/service1.png";
import service2 from "../../../public/service2.png";
import service3 from "../../../public/service3.png";
import service4 from "../../../public/service4.png";
import service5 from "../../../public/service5.png";
import service6 from "../../../public/service6.png";
import service7 from "../../../public/service7.png";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      pic: service1,
      title: "Expert Guidance",
      desc: "Our consultants are highly experienced and stay updated on the latest educational and immigration policies",
    },
    {
      pic: service2,
      title: "Comprehensive Support",
      desc: "From course selection to visa application and pre-departure planning we’re with you at every stage.",
    },
    {
      pic: service3,
      title: "Personalized Approach",
      desc: "Every student is different. We take the time to understand your goals and tailor solutions accordingly.",
    },
    {
      pic: service4,
      title: "Trusted Partnerships",
      desc: "We work closely with a wide network of reputable universities and institutions in Australia.",
    },
    {
      pic: service5,
      title: "Transparent & Ethical",
      desc: "We believe in honesty, accountability, and ethical service in everything we do.",
    },
    {
      pic: service6,
      title: "Successful Track Record",
      desc: "We’ve helped many students successfully secure admission and visas to leading institutions.",
    },
    {
      pic: service7,
      title: "Ongoing Assistance",
      desc: "Our support doesn’t end after your visa is approved. We’re here before, during, and after your journey.",
    },
  ];
  return (
    <div className="max-w-[1644px] mx-auto px-4 sm:px-6 md:px-8 mb-[60px] md:mb-[90px] lg:mb-[120px]">
      <div>
        <p className="text-center text-[#2C2C2C] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold mb-3 md:mb-5">
          Why VIE Services?
        </p>
        <p className="text-[#2C2C2C] text-lg sm:text-xl md:text-2xl lg:text-[32px] text-center mb-8 md:mb-16 lg:mb-[100px]">
          At VIE, we bring together deep industry expertise, a highly
          personalized approach, <br /> and long-term support to ensure student
          success. Here’s what sets us apart:
        </p>
      </div>
      <div className="grid grid-cols-3 items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-[42px]">
        {services.map((service, index) => (
          <div
            key={index}
            className={`circle rounded-full text-center flex flex-col items-center justify-center p-8 lg:p-10 transition-all duration-300 ease-in w-full max-w-[500px] 
        ${index === services.length - 1 ? "col-start-2" : ""}`} // center last item
          >
            <Image
              src={service.pic}
              alt={service.title}
              className="mx-auto mb-3 md:mb-5"
            />
            <p className="text-[#533115] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-extrabold mb-2 md:mb-5">
              {service.title}
            </p>
            <p className="text-[#533115] text-base sm:text-lg md:text-xl lg:text-[25px] font-medium">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
