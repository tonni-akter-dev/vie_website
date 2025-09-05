'use client'
import { motion } from "framer-motion";

export default function OurTeamOurPromise() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-6 sm:p-8 md:p-12 bg-white border-b-2 border-gray-300 rounded-b-[28px] md:rounded-b-[76px] max-w-[1706px] mx-auto mb-12 md:mb-[120px]">
      <div className='w-full sm:px-6 md:px-12  pb-8 sm:pb-[40px] md:pb-[60px]'>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-extrabold text-[#533115] mb-6 sm:mb-8 text-center leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={itemVariants}
        >
          OUR TEAM, OUR PROMISE
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-[32px] text-[#533115] text-center mb-4 sm:mb-6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={itemVariants}
        >
          At the core of VIE is a dedicated team of experienced professionals who are passionate about empowering students. We are not just consultants—we are trusted advisors and long-term partners in your journey.
        </motion.p>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-[32px] text-[#533115] text-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          variants={itemVariants}
        >
          We stay consistently updated with the latest in global education, immigration policies, and industry trends to offer each student accurate, relevant, and personalized guidance.
        </motion.p>
      </div>
    </section>
  );
}