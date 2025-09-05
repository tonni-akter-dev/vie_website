"use client";
import React from "react";
import { motion } from "framer-motion";
import StudyAbroad from "./StudyAbroad";
import DotIndicator from "./DotIndicator";

const VoyageService = () => {
  return (
    <div>
      {/* Heading */}
      <motion.h2
        className="uppercase text-[#2C2C2C] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-6 mt-[142px]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        voyage International Services
      </motion.h2>

      {/* Dot indicator */}
      <motion.div
        className="mb-[46px]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <DotIndicator width={11} height={11} spacing={10} bounceDistance={10} />
      </motion.div>

      {/* Paragraph */}
      <motion.p
        className="px-4  text-[#2C2C2C]  text-2xl lg:text-[42px] text-normal text-center max-w-[1670px] w-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        If you’re looking to unlock the outstanding academic and personal growth
        opportunities <br className="lg:block hidden" />  that Australia offers, VIE
        Services is your trusted partner at every stage. Whether you’ve <br className="lg:block hidden" /> already
        chosen your path or are still exploring options, we provide expert guidance
        on <br className="lg:block hidden" /> course selection, application processes, visa requirements, and all the
        preparations <br className="lg:block hidden" /> needed for your journey to Australia.
      </motion.p>
        <StudyAbroad />
    </div>
  );
};

export default VoyageService;
