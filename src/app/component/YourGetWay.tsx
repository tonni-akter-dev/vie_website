'use client'
import Image from "next/image";
import React from "react";
import Pic from "../../..//public/assets/about-us/Plane-in-Sunset 1.png";
import { motion } from "framer-motion";

export default function YourGetWay() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="px-4 sm:px-6 md:px-16 py-8 md:py-10 bg-white max-w-[1483px] mx-auto my-10 md:my-[120px]">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold text-[#2C2C2C] leading-tight mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={itemVariants}
      >
        YOUR GATEWAY TO HIGHER EDUCATION <br /> IN ABROAD
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-y-8 md:gap-y-10 md:gap-x-[92px]">
        <div className="w-full lg:w-[60%] space-y-6">
          <motion.p
            className="text-base sm:text-lg md:text-3xl text-gray-800 leading-10 md:pt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={itemVariants}
          >
            Specializing in study pathways to Abroad, VIE Services provides
            end-to-end support— from choosing the right university to securing
            your student visa. Our goal is to make your international education
            journey smooth, informed, and successful.
          </motion.p>
          <motion.p
            className="text-base sm:text-lg md:text-3xl text-gray-800 leading-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            variants={itemVariants}
          >
            Whether {`you're`} seeking admission to a top-ranked institution,
            exploring scholarship opportunities, or searching for the ideal
            course aligned with your career ambitions, VIE Services is here to
            turn your aspirations into reality.
          </motion.p>
        </div>
        <motion.div
          className="w-full md:w-[40%] mt-6 md:mt-0 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Image
            src={Pic}
            alt="Airplane flying towards sunset"
            className="lg:w-[500px] rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}