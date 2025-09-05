
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Calendar, HStack } from "rsuite";
import calenderScan from "../../../public/calender_scan.svg";
import Image from "next/image";
import DotIndicator from "./DotIndicator";

const ConsultationCalender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState("");

  const handleSelect = (date: React.SetStateAction<Date>) => {
    setSelectedDate(date);
  };

  const formatDate = (date: Date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
    });
  };

  const formatTime = (date: Date) => {
    if (!date) return "";
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    setCurrentTime(formatTime(new Date()));
  }, []);

  return (
    <div className="px-5 lg:mx-[80px] 2xl:mx-[128px] mb-[152px]" id="consultation">
      <div
        className="bg-[#FEFEFE] mb-[30px] flex flex-wrap lg:flex-row flex-col justify-between lg:rounded-[112px] pt-12 pb-[56px] lg:ps-[43px] lg:pe-[86px]"
        style={{ boxShadow: "0 0 4.6px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex lg:flex-row flex-wrap flex-col gap-[37px]  items-start lg:items-end lg:px-0 px-5">
          <HStack
            spacing={10}
            style={{ height: 540 }}
            alignItems="flex-start"
            className="calender_bg w-full lg:w-[711px] rounded-[112px]"
            wrap
          >
            <Calendar
              compact
              onSelect={handleSelect}
              renderTitle={(date: any) => (
                <div className="text-center w-full font-bold text-sm lg:text-lg">
                  {date.getFullYear()}
                </div>
              )}
              showToday={false}
            />
          </HStack>

          {/* Date & Time Section */}
          <div className="mb-[56px]">
            <div className="mb-[30px]">
              <h2 className="font-bold leading-normal text-[#2C2C2C] text-[48px] meta">Date:</h2>
              <p className="text-[#084F3D] text-[35px]  time border-b border-[#084F3D]">
                {formatDate(selectedDate)}
              </p>
            </div>
            <div className="">
              <h2 className="font-bold leading-normal text-[#2C2C2C] text-[48px] meta">Time:</h2>
              <input
                type="time"
                value={currentTime}
                onChange={(e) => setCurrentTime(e.target.value)}
                className="text-[#084F3D]  time text-[35px] border-b border-[#084F3D] w-fit bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between items-center mb-[56px]">
          <Image src={calenderScan} alt="" />
          <div>
            <button
              className="items-center text-[32px] justify-center mb-1 py-2 px-3 w-fit text-[#084F3D] font-bold flex  h-[53px] flex-col gap-[10.5px] uppercase bg-white"
              style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)" }}>
              Proceed
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="175"
              height="3"
              viewBox="0 0 175 3"
              fill="none"
            >
              <path d="M0 1.5H175" stroke="#084F3D" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      <DotIndicator width={11} height={11} spacing={10} bounceDistance={10} />
    </div>
  );
};

export default ConsultationCalender;
