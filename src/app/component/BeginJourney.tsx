'use client'
import React from 'react';
import { motion } from "framer-motion";

const BeginJourney = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className='px-5 max-w-[1430px] mx-auto text-center'>
      <motion.p
        className='text-[#2C2C2C] text-3xl md:text-4xl lg:text-[64px] font-extrabold uppercase mb-5'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={itemVariants}
      >
        Begin Your Journey with Confidence
      </motion.p>
      <motion.p
        className='text-xl md:text-2xl lg:text-[32px] font-bold mb-8 lg:mb-[78px]'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        variants={itemVariants}
      >
        Choosing to study abroad is a life-changing decision. At VIE Services, we’re here to make that journey smooth, informed, and successful. With a dedicated team and a commitment to student-first service, we help you take the right steps toward a brighter future—starting today.
      </motion.p>
      <motion.button
        className='bg-[#533115] filter hover:drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)] py-3 px-[34px] rounded-full text-white text-2xl md:text-3xl lg:text-[40px] font-extrabold uppercase transition-all duration-300 ease-in'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Apply now
      </motion.button>
    </div>
  );
}

export default BeginJourney;