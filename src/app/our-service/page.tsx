"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import playbtn from "../../../public/playbutton.svg";
import service from "../../../public/service_img.png";
import DotIndicator from "../component/DotIndicator";
import AcademicCounselling from "./components/AcademicCounselling";
import { useRouter } from "next/navigation";

const OurService = () => {
    const router = useRouter();

  return (
    <div className="lg:mx-[38px] mx-4 py-[60px] lg:py-[120px] relative">
      {/* Play Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto flex justify-center mb-[-20px]"
      >
        <button  onClick={() => router.back()}>
          <Image src={playbtn} alt="Play Button" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:pt-[153px] lg:pb-[116px] py-[60px] lg:px-[32px] px-4 bg-[#FEFEFE] rounded-2xl lg:rounded-[58px]"
        style={{ boxShadow: "0 0 4.6px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:text-[64px] text-4xl text-center font-extrabold uppercase leading-normal mb-[111px]"
        >
          Our Services
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex gap-3 mb-[71px] overflow-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="344"
            height="2"
            viewBox="0 0 344 2"
            fill="none"
          >
            <path d="M0 1H343.052" stroke="#533115" strokeWidth="2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="2"
            viewBox="0 0 16 2"
            fill="none"
          >
            <path d="M0 1H16" stroke="#533115" strokeWidth="2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="2"
            viewBox="0 0 16 2"
            fill="none"
          >
            <path d="M0 1H16" stroke="#533115" strokeWidth="2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="2"
            viewBox="0 0 16 2"
            fill="none"
          >
            <path d="M0 1H16" stroke="#533115" strokeWidth="2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="2"
            viewBox="0 0 40 2"
            fill="none"
          >
            <path d="M0 1H40" stroke="#533115" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Text + Image */}
        <div className="mb-[141px] flex lg:flex-row flex-col justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-[900px]"
          >
            <h3 className="text-black lg:whitespace-nowrap lg:text-[44px] text-3xl mb-[50px] font-extrabold uppercase ">
              Comprehensive Guidance for <br /> Your Global Education Journey
            </h3>
            <p className="text-black lg:text-[32px] text-2xl">
              At VIE Services, we’re committed to helping you make smart,
              future-proof academic decisions and ensuring every step of your
              study abroad process is seamless and stress-free. From course
              counselling to visa assistance, we provide tailored solutions to
              match your goals, academic profile, and budget.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              className="w-full rounded-[2px] lg:min-w-[400px] h-[300px]"
              src={service}
              alt=""
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <DotIndicator />
        </motion.div>
        {/* Academic Counselling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-[100px]"
        >
          <AcademicCounselling />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto flex justify-center absolute bottom-12 lg:bottom-16 left-1/2 -translate-x-1/2 "
        >
          <button  onClick={() => router.back()}>
            <Image src={playbtn} alt="Play Button" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurService;
