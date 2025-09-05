"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // 👈 Added
import s1 from "../../../public/s1.svg";
import s2 from "../../../public/s2.svg";
import s3 from "../../../public/s3.svg";
import s4 from "../../../public/s4.svg";
import s5 from "../../../public/s5.svg";
import s6 from "../../../public/s6.svg";
import s7 from "../../../public/s7.svg";
import s8 from "../../../public/s8.svg";
import s9 from "../../../public/s9.svg";
import s11 from "../../../public/s11.png";
import s12 from "../../../public/s22.png";
import s13 from "../../../public/s33.png";
import s14 from "../../../public/s55.png";
import s15 from "../../../public/s10.png";
import s16 from "../../../public/s66.png";
import s17 from "../../../public/s77.png";
import s18 from "../../../public/s88.png";
import s19 from "../../../public/s99.png";
import arrowRight from "../../../public/arrowright.svg";
import arrRightBig from "../../../public/arrRightBig.png";
import arrowleftBig from "../../../public/arrowleftBig.svg";
import SmallStudyabroad from "./SmallStudyabroad";
import MediumAbroad from "./MediumAbroad";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const StudyAbroad = () => {
  return (
    <div className="mx-5 lg:mx-[77px]">
      <motion.h2
        className="uppercase text-[#2C2C2C] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-7 mt-10 lg:mt-[110px]"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        STEPS TO STUDY ABROAD WITH VIE
      </motion.h2>

      <motion.div
        className="pt-10 lg:pt-[115px] pb-[70px] 2xl:px-[280px] bg-[#F5F5F5] rounded-2xl lg:rounded-[105px] lg:h-[1256px] relative "
        style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.14)" }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative Arrows */}
        <div>
          <Image
            className="hidden xl:block absolute right-[12%] top-[17%]"
            src={arrRightBig}
            alt=""
          />
        </div>
        <div>
          <Image
            className="hidden xl:block absolute left-[12%] bottom-[28%]"
            src={arrowleftBig}
            alt=""
          />
        </div>

        {/* Steps Row 1 */}
        <div className=" hidden lg:flex flex-wrap lg:gap-y-[90px] gap-10 2xl:gap-[125px] justify-center items-center">
          {[
            {
              defaultImg: s1,
              hoverImg: s11,
              text: "Make an </br> enquiry",
            },
            {
              defaultImg: s2,
              hoverImg: s12,
              text: "Receive expert </br> Counselling",
            },
            {
              defaultImg: s3,
              hoverImg: s13,
              text: "Submit your </br> application",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="group"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-10 2xl:gap-[94px]">
                <div className="w-[183px] h-[192px] flex items-center flex-col">
                  <Image
                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                    src={step.defaultImg}
                    alt="Step default"
                  />
                  <Image
                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                    src={step.hoverImg}
                    alt="Step hover"
                  />
                  <p
                    className="text-base xl:text-[36px] text-[#2C2C2C] font-bold capitalize text-center mt-2 whitespace-nowrap"
                    dangerouslySetInnerHTML={{ __html: step.text }}
                  />
                </div>
                {i < 2 && <Image src={arrowRight} alt="Arrow" />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className=" hidden lg:flex flex-wrap lg:gap-y-[90px] gap-10 2xl:gap-[125px] justify-center items-center mt-20 lg:mt-[180px]">
          {[
            { defaultImg: s4, hoverImg: s14, text: "Apply for </br> your Visa" },
            { defaultImg: s5, hoverImg: s15, text: "Document </br> Finalization" },
            { defaultImg: s6, hoverImg: s16, text: "Receive your </br> admission offer" },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="group"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-10 2xl:gap-[94px]">
                <div className="w-[183px] h-[192px] flex items-center flex-col">
                  <Image
                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                    src={step.defaultImg}
                    alt="Step default"
                  />
                  <Image
                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                    src={step.hoverImg}
                    alt="Step hover"
                  />
                  <p
                    className="text-base xl:text-[36px] text-[#2C2C2C] font-bold capitalize text-center mt-2 whitespace-nowrap"
                    dangerouslySetInnerHTML={{ __html: step.text }}
                  />
                </div>
                {i < 2 && <Image src={arrowRight} alt="Arrow" />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 3 */}
        <div className=" hidden lg:flex flex-wrap lg:gap-y-[90px] gap-10 2xl:gap-[125px] justify-center items-center mt-20 lg:mt-[180px]">
          {[
            { defaultImg: s7, hoverImg: s17, text: "Attend Pre-departure </br> briefing" },
            { defaultImg: s8, hoverImg: s18, text: "Plan your </br> travel" },
            { defaultImg: s9, hoverImg: s19, text: "Achieve your </br> dreams" },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="group"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-10 2xl:gap-[94px]">
                <div className="w-[183px] h-[192px] flex items-center flex-col">
                  <Image
                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                    src={step.defaultImg}
                    alt="Step default"
                  />
                  <Image
                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                    src={step.hoverImg}
                    alt="Step hover"
                  />
                  <p
                    className="text-base xl:text-[36px] text-[#2C2C2C] font-bold capitalize text-center mt-2 whitespace-nowrap"
                    dangerouslySetInnerHTML={{ __html: step.text }}
                  />
                </div>
                {i < 2 && <Image src={arrowRight} alt="Arrow" />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* sm + md devices */}
        <MediumAbroad />
        <SmallStudyabroad />
      </motion.div>
    </div>
  );
};

export default StudyAbroad;
