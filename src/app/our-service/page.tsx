import Image from "next/image";
import React from "react";
import playbtn from "../../../public/playbutton.svg";

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
        className="lg:pt-[153px] lg:pb-[90px] py-[60px] lg:px-[64px] px-4 bg-[#FEFEFE] rounded-2xl lg:rounded-[58px]"
        style={{ boxShadow: "0 0 4.6px 0 rgba(0, 0, 0, 0.25)" }}
      ></div>
    </div>
  );
};

export default OurService;
