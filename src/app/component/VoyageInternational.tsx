import React from "react";
import Dart from "../../../public/assets/about-us/icons/dart.svg"
import Telescope from "../../../public/assets/about-us/icons/telescope.svg"

const VoyageInternational = () => {
  return (
    <div className="max-w-[1534px] mx-auto px-4 sm:px-6 lg:px-8 mb-[120px]">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#533115] uppercase pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[50px] text-center">
        Voyage International Education Services
      </h1>

      {/* Subheader */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[50px] text-center">
        Your Gateway to Global Education
      </h2>

      {/* First text section */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[32px] pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[50px] leading-relaxed text-center">
        At Voyage International, we are dedicated to transforming dreams into
        reality by providing comprehensive educational consulting services. Our
        mission is to guide students through every step of their international
        education journey, from university selection to visa processing.
      </p>

      {/* Second text section */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[32px] pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[120px] leading-relaxed text-center">
        With years of experience and a deep understanding of global education
        systems, we have successfully helped thousands of students achieve their
        academic goals across various countries including the USA, UK, Canada,
        Australia, and many more.
      </p>

  <div className="mainDiv max-w-[1432px] mx-auto flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-0 justify-center items-start md:items-stretch p-4 sm:p-6 md:p-12">
          {/* Mission */}
          <div className="parent relative w-full md:w-1/2  border-2 border-[#48553B] rounded-[20px] p-6 sm:p-8 md:p-10 shadow-sm overflow-visible">
            
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-[90%] sm:w-[70%] md:w-[60%] lg:w-[356px] max-w-[356px] h-[29px] bg-green-800 rounded-t-[40px]  indicator z-10"></div>
            {/* Circles for Mission: desktop-only right-middle */}
            <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-white rounded-full border-3 border-[#353E2B]"></div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img src={Dart.src} alt="Mission Icon" className="w-32 h-32" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#48553B] mb-4 sm:mb-6">OUR MISSION</h2>
              <p className="text-[#48553B] text-base sm:text-lg md:text-3xl leading-7 sm:leading-8 md:leading-10 text-center">
                To empower students with the knowledge, resources, and guidance needed to pursue
                quality higher education abroad and to unlock global opportunities with confidence
                and clarity.
              </p>
            </div>
          </div>

          {/* Connector */}
          <div className="hidden md:flex items-center justify-center w-16 lg:w-32 xl:w-[200px]">
            <div className="w-full h-[3px] bg-[#48553B]"></div>
          </div>

          {/* Vision */}
          <div className=" parent relative w-full md:w-1/2 border-2 border-[#533115] rounded-[20px] px-6 py-8 sm:px-8 sm:py-12 md:px-8 md:py-16 shadow-sm overflow-visible">
            
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-[90%] sm:w-[70%] md:w-[60%] lg:w-[356px] max-w-[356px] h-[29px] bg-amber-900 rounded-t-[40px] indicator z-10"></div>
            {/* Circles for Vision: desktop-only left-middle */}
            <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-white rounded-full border-3 border-[#533115]"></div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img src={Telescope.src} alt="Vision Icon" className="w-32 h-32" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#533115] mb-4 sm:mb-6">OUR VISION</h2>
              <p className="text-[#533115] text-base sm:text-lg md:text-3xl leading-7 sm:leading-8 md:leading-10 text-center">
                To be recognized as one of the most trusted and effective education consultancy
                firms—bridging students to a world-class education and a better future through
                transparent, ethical, and student-first services.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default VoyageInternational;
