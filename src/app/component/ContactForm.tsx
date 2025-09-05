"use client";
import Image from "next/image";
import React, { useState } from "react";
import dot from "/public/dot.png";
import DotIndicator from "./DotIndicator";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [phone, setPhone] = useState("");

  return (
    <div id="apply" className="contact_bg lg:mx-[90px] px-4 sm:px-6 md:px-8 relative overflow-hidden pt-[60px] sm:pt-[80px] md:pt-[100px] pb-20 my-20 lg:my-0">
      <div className="inner_contact w-[1170px]  flex-shrink-0 max-w-full mx-auto relative z-10  p-4 rounded-[20px] mb-4 ">
        <div className="flex justify-end mb-2">
          <DotIndicator
            width={11}
            height={11}
            spacing={10}
            bounceDistance={10}
            direction="horizontal"
          />
        </div>

        <h2 className="text-xl md:text-3xl font-semibold text-center mb-6">
          LET our experts <br /> reach out to you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[62px]">
          <input
            type="text"
            placeholder="First Name"
            className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
          />
          <input
            type="text"
            placeholder="Middle Name"
            className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[62px] max-w-[750px] mx-auto">
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputStyle={{
              width: "100%",
              paddingLeft: "60px", // adjust so number doesn't overlap flag
            }}
            buttonStyle={{
              border: "none",
              background: "transparent",
            }}
          />
          <input
            type="email"
            placeholder="Primary Email Address"
            className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
          />
        </div>
        <div className="flex justify-center mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="355"
            height="4"
            viewBox="0 0 355 4"
            fill="none"
          >
            <path
              d="M0.666667 2C0.666667 2.73638 1.26362 3.33333 2 3.33333C2.73638 3.33333 3.33333 2.73638 3.33333 2C3.33333 1.26362 2.73638 0.666667 2 0.666667C1.26362 0.666667 0.666667 1.26362 0.666667 2ZM351.667 2C351.667 2.73638 352.264 3.33333 353 3.33333C353.736 3.33333 354.333 2.73638 354.333 2C354.333 1.26362 353.736 0.666667 353 0.666667C352.264 0.666667 351.667 1.26362 351.667 2ZM2 2V2.25H353V2V1.75H2V2Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 max-w-[750px] mx-auto">
          <input
            type="text"
            placeholder="Preferred Country"
            className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
          />
          <input
            type="text"
            placeholder="Preferred University"
            className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[68px] max-w-[750px] mx-auto">
          <input
            type="text"
            placeholder="Course"
            className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
          />
          <input
            type="text"
            placeholder="Preferred Year"
            className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
          <Image src={dot} alt="" />
          <p>
            I consent to receiving calls, WhatsApp, email form VIE Service with
            the enquiry{" "}
          </p>
        </div>
        <button className="absolute right-0 md:right-10 lg:right-[-100px]  size-[80px] lg:size-[111px] bg-[#084F3D] rounded-full flex items-center justify-center border-[7px] border-[#16AA83] hover:scale-105 transition-transform duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M48.4375 25C48.4375 12.0562 37.9438 1.5625 25 1.5625C12.0562 1.5625 1.5625 12.0562 1.5625 25C1.5625 37.9438 12.0562 48.4375 25 48.4375C37.9438 48.4375 48.4375 37.9438 48.4375 25ZM26.3242 29.018H11.7188V20.982H26.3242V12.5L38.2812 25L26.3242 37.5L26.3242 29.018Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
