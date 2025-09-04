"use client"; // Required for Framer Motion in Next.js 13+

import { University } from "@/app/utils/data";
import Link from "next/link";
import React from "react";
import FormDetails from "./Form";
import { motion } from "framer-motion";

type IProps = {
  data: University;
};

const Overview: React.FC<IProps> = ({ data }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-[84px] mb-[50px]">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <Link
          href="#"
          className="
            text-black
            font-bold
            text-4xl lg:text-[48px] mb-6
            font-[Creato Display]
            underline
            underline-offset-auto
            decoration-solid
          "
        >
          Overview
        </Link>
        <div
          className="text-2xl lg:text-[32px] text-black leading-normal"
          dangerouslySetInnerHTML={{ __html: data.overview }}
        />
      </motion.div>

      {/* Right Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <FormDetails data={data} />
      </motion.div>
    </div>
  );
};

export default Overview;
