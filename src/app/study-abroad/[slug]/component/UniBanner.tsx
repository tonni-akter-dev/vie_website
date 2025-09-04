"use client"; // required for Framer Motion in Next.js 13+

import { University } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type IProps = {
  data: University;
};

const UniBanner: React.FC<IProps> = ({ data }) => {
  return (
    <div className="mb-[38px] flex lg:flex-row flex-col h-full lg:h-[440px]">
      {/* Left Info Box */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:w-[475px] w-full bg-[#F5F5F5] px-6 pt-5 pb-8 flex flex-col justify-center items-start text-start"
        style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <Image
          className="lg:w-[310px] object-contain h-[197px] mb-[34px] mx-auto"
          style={{
            mixBlendMode: "darken",
            aspectRatio: "107/68",
          }}
          src={data.image}
          alt=""
        />
        <h3 className="text-[26px] text-[#313131] font-extrabold">
          {data.name}
        </h3>
        <p className="text-black font-normal mb-1 text-base">
          Sydney and Canberra, Australia
        </p>
        <p className="text-black font-normal mb-[35px] text-base hover:underline">
          <Link
            href={
              data.website.startsWith("http")
                ? data.website
                : `https://${data.website}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.website}
          </Link>
        </p>
        <div className="mx-auto">
          <button className="text-white text-xl font-medium py-1 px-2.5 bg-[#D43C18] rounded-[11px]">
            Apply with VIE Services
          </button>
        </div>
      </motion.div>

      {/* Right Banner Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <Image className="h-full object-cover" src={data.uniBanner} alt="" />
      </motion.div>
    </div>
  );
};

export default UniBanner;
