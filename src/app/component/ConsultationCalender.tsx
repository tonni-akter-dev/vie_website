/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Calendar, HStack } from "rsuite";
import Image from "next/image";
import calenderScan from "../../../public/calender_scan.svg";
import DotIndicator from "./DotIndicator";
import { motion } from "framer-motion";

const ConsultationCalender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState("");

  const handleSelect = (date: Date) => setSelectedDate(date);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="px-5 lg:mx-[80px] 2xl:mx-[128px] mb-[152px]"
      id="consultation"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div
        className="bg-[#FEFEFE] flex flex-wrap lg:flex-row flex-col justify-between lg:rounded-[112px] pt-12 pb-[56px] lg:ps-[43px] lg:pe-[86px] mb-[30px]"
        style={{ boxShadow: "0 0 4.6px 0 rgba(0, 0, 0, 0.25)" }}
      >
        {/* Left Side - Calendar & Date/Time */}
        <motion.div
          className="flex flex-col lg:flex-row gap-[37px] items-start lg:items-end lg:px-0 px-5"
          variants={itemVariants}
        >
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
              <h2 className="font-bold leading-normal text-[#2C2C2C] text-[48px] meta">
                Date:
              </h2>
              <p className="text-[#084F3D] text-[35px] time border-b border-[#084F3D]">
                {formatDate(selectedDate)}
              </p>
            </div>
            <div>
              <h2 className="font-bold leading-normal text-[#2C2C2C] text-[48px] meta">
                Time:
              </h2>
              <input
                type="time"
                value={currentTime}
                onChange={(e) => setCurrentTime(e.target.value)}
                className="text-[#084F3D] text-[35px] border-b border-[#084F3D] w-fit bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image & Proceed Button */}
        <motion.div
          className="flex flex-col justify-between items-center mb-[56px]"
          variants={rightItemVariants}
        >
          <Image src={calenderScan} alt="Calendar Scan" />
          <div className="flex flex-col items-center gap-3">
            <button
              className="flex items-center justify-center py-2 px-3 w-fit text-[32px] text-[#084F3D] font-bold h-[53px] uppercase bg-white"
              style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)" }}
            >
              Proceed
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="175" height="3" viewBox="0 0 175 3" fill="none">
              <path d="M0 1.5H175" stroke="#084F3D" strokeWidth="2" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Bottom Dot Indicator */}
      <DotIndicator width={11} height={11} spacing={10} bounceDistance={10} />
    </motion.div>
  );
};

export default ConsultationCalender;
