"use client";
import React from "react";
import Dart from "../../../public/assets/about-us/icons/dart.svg";
import Telescope from "../../../public/assets/about-us/icons/telescope.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const VoyageInternational = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="max-w-[1534px] mx-auto px-4 sm:px-6 lg:px-8 mb-[120px]">
      {/* Header */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#533115] uppercase pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[50px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={itemVariants}
      >
        Voyage International Education Services
      </motion.h1>

      {/* Subheader */}
      <motion.h2
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[50px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        variants={itemVariants}
      >
        Your Trusted Partner in International Education.
      </motion.h2>

      {/* First text section */}
      <motion.p
        className="text-base md:text-lg lg:text-[32px] pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-[50px] leading-relaxed text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.4}
        variants={itemVariants}
      >
        At VIE Services (Voyage International Education Services), we specialize
        in guiding students through every step of their journey to study in
        Australia/ abroad With years of industry experience and a strong network
        of institutional partners, we offer expert, end-to-end support to help
        students achieve their academic and career goals through international
        education.
      </motion.p>

      {/* Second text section */}
      <motion.p
        className="text-base md:text-lg lg:text-[32px] pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-[120px] leading-relaxed text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.6}
        variants={itemVariants}
      >
        Whether you're exploring course options, applying to universities, or
        preparing for life abroad, our team provides the clarity, structure, and
        confidence you need to make informed decisions.
      </motion.p>

      <div className="mainDiv  lg:max-w-[1432px] mx-auto flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-0 justify-center items-start md:items-stretch p-0 lg:p-12">
        {/* Mission */}
        <motion.div
          className="parent relative w-full md:w-1/2 border-2 border-[#48553B] rounded-[20px] p-4 lg:p-[35px] shadow-sm overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.8}
          variants={itemVariants}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-[90%] sm:w-[70%] md:w-[60%] lg:w-[356px] max-w-[356px] h-[29px] 
          bg-[#48553B] rounded-t-[40px] indicator z-10"></div>
          {/* Circles for Mission: desktop-only right-middle */}
          <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-white rounded-full border-3 border-[#48553B]"></div>
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <Image src={Dart} alt="Mission Icon" className="w-32 h-32" />
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#48553B] mb-4 sm:mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1.0}
              variants={itemVariants}
            >
              OUR MISSION
            </motion.h2>
            <motion.p
              className="text-[#48553B] text-base sm:text-lg md:text-3xl leading-7 sm:leading-8 md:leading-10 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1.2}
              variants={itemVariants}
            >
              To empower students with the knowledge, resources, and guidance
              needed to pursue quality higher education abroad and to unlock
              global opportunities with confidence and clarity.
            </motion.p>
          </div>
        </motion.div>

        {/* Connector */}
        <motion.div
          className="hidden md:flex items-center justify-center w-16 lg:w-32 xl:w-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1.4}
          variants={itemVariants}
        >
          <div className="w-full h-[3px] bg-[#48553B]"></div>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="parent relative w-full md:w-1/2 border-2 border-[#533115] rounded-[20px] px-6 py-8 sm:px-8 sm:py-12 md:px-8 md:py-16 shadow-sm overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1.6}
          variants={itemVariants}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-[90%] sm:w-[70%] md:w-[60%] lg:w-[356px] max-w-[356px] h-[29px] bg-[#533115] rounded-t-[40px] indicator z-10"></div>
          {/* Circles for Vision: desktop-only left-middle */}
          <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-white rounded-full border-3 border-[#533115]"></div>
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <Image src={Telescope} alt="Vision Icon" className="w-32 h-32" />
            </motion.div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#533115] mb-4 sm:mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1.8}
              variants={itemVariants}
            >
              OUR VISION
            </motion.h2>
            <motion.p
              className="text-[#533115] text-base sm:text-lg md:text-3xl leading-7 sm:leading-8 md:leading-10 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2.0}
              variants={itemVariants}
            >
              To be recognized as one of the most trusted and effective
              education consultancy firms—bridging students to a world-class
              education and a better future through transparent, ethical, and
              student-first services.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VoyageInternational;
