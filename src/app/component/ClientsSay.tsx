"use client";
import React from "react";
import DotIndicator from "./DotIndicator";
import { testimonials } from "../utils/data";
import { motion, easeOut } from "framer-motion";

const ClientsSay = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // one by one
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <div className="mt-[120px] mb-10 md:mb-[100px] lg:mx-[130px]">
      <div
        className="px-5 lg:px-[72px] rounded-4xl lg:rounded-[112px] xl:h-[548px] pt-12 pb-12 xl:pb-0 bg-[#FEFEFE]"
        style={{ boxShadow: "0 0 4.6px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <motion.h2
          className="uppercase text-[#2C2C2C] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          What our clients say!
        </motion.h2>

        {/* Divider Line */}
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="421"
            height="3"
            viewBox="0 0 421 3"
            fill="none"
          >
            <path d="M0 1.5H421" stroke="#353E2B" strokeWidth="2" />
          </svg>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="client_say grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6.5 pt-[103px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-[55px] border border-[#084F3D] py-[42px] px-[47px]"
              style={{
                boxShadow:
                  "0 -1px 4px 0 rgba(0, 0, 0, 0.25) inset, 0 3px 4px 0 rgba(0, 0, 0, 0.25)",
              }}
              variants={cardVariants}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#084F3D" />
                </svg>
              </div>

              {/* Dots */}
              <div className="mb-3">
                <DotIndicator
                  width={5}
                  spacing={5}
                  height={5}
                  bounceDistance={6}
                  direction="horizontal"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl text-[#353E2B] font-medium text-center mt-1.5 mb-3.5 uppercase">
                {item.name}
              </h3>

              {/* Stars */}
              <div className="h-[176px] overflow-y-scroll">
                <div className="flex justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="15"
                    viewBox="0 0 120 15"
                    fill="none"
                  >
                    <path
                      d="M3.06 15L4.36 9.45395L0 5.72368L5.76 5.23026L8 0L10.24 5.23026L16 5.72368L11.64 9.45395L12.94 15L8 12.0592L3.06 15Z"
                      fill="#E6CA28"
                    />
                    <path
                      d="M29.06 15L30.36 9.45395L26 5.72368L31.76 5.23026L34 0L36.24 5.23026L42 5.72368L37.64 9.45395L38.94 15L34 12.0592L29.06 15Z"
                      fill="#E6CA28"
                    />
                    <path
                      d="M55.06 15L56.36 9.45395L52 5.72368L57.76 5.23026L60 0L62.24 5.23026L68 5.72368L63.64 9.45395L64.94 15L60 12.0592L55.06 15Z"
                      fill="#E6CA28"
                    />
                    <path
                      d="M81.06 15L82.36 9.45395L78 5.72368L83.76 5.23026L86 0L88.24 5.23026L94 5.72368L89.64 9.45395L90.94 15L86 12.0592L81.06 15Z"
                      fill="#E6CA28"
                    />
                    <path
                      d="M107.06 15L108.36 9.45395L104 5.72368L109.76 5.23026L112 0L114.24 5.23026L120 5.72368L115.64 9.45395L116.94 15L112 12.0592L107.06 15Z"
                      fill="#E6CA28"
                    />
                  </svg>
                </div>

                {/* Review */}
                <p className="text-sm font-medium text-black">{item.review}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsSay;
