"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import es1 from "../../../public/es1.png";
import es2 from "../../../public/es2.png";
import es3 from "../../../public/es3.png";
import es4 from "../../../public/es4.png";
import es5 from "../../../public/es5.png";
import es6 from "../../../public/es6.png";
import es7 from "../../../public/es7.png";
import es8 from "../../../public/es8.png";
import es9 from "../../../public/es9.png";
import es10 from "../../../public/es10.png";
import es11 from "../../../public/es11.png";
import es12 from "../../../public/es12.png";

const images = [es1, es2, es3, es4, es5, es6, es7, es8, es9, es10, es11, es12];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};


const EstimatedUniversity = () => {
  return (
    <div className="lg:mx-[110px] mt-20">
      <h2 className="uppercase text-[#084F3D] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-10 lg:mb-[70px]">
        our esteemed university affiliates
      </h2>

      {/* Animated grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#FEFEFE] px-8 pt-6 pb-[50px] rounded-[58px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {images.map((src, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <Image className="cursor-pointer w-full" src={src} alt={`university-${idx + 1}`} />
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <button className="flex mx-auto cursor-pointer justify-center items-center mt-[-33px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#16AA83" />
          <circle cx="37.5" cy="37.5" r="32.5" fill="#CBF0E7" />
          <path d="M37 55L20 29H54L37 55Z" fill="#084F3D" />
        </svg>
      </button>
    </div>
  );
};

export default EstimatedUniversity;
