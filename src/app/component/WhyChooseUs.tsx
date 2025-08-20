'use client';

import React from 'react';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion'; // Import easeOut function
import choose1 from '../../../public/choose1.png';
import choose2 from '../../../public/choose2.png';
import choose3 from '../../../public/choose3.png';
import choose4 from '../../../public/choose4.png';
import choose5 from '../../../public/choose5.png';
import choose6 from '../../../public/choose6.png';
import choose7 from '../../../public/choose7.png';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut }
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto mb-16 md:mb-[185px]">
      <div className="bg-[#FFF2DE] rounded-[62px] why_choose mt-8 md:mt-[136px] p-4 md:pt-9 md:ps-12 md:pb-[30px] md:pe-[70px]">
        <h1 className="text-[#533115] text-4xl md:text-[64px] font-extrabold text-center leading-normal uppercase">
          Why Choose Us ?
        </h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-8 md:my-[101px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex flex-col justify-center items-center text-center" variants={cardVariants}>
            <Image className="mb-4 md:mb-5" src={choose1} alt="choose1" width={150} height={150} style={{ objectFit: 'contain' }} />
            <h3 className="text-[#533115] text-lg md:text-[21px] font-extrabold uppercase">
              Expert<br />Guidance
            </h3>
          </motion.div>
          <motion.div className="flex flex-col justify-center items-center text-center" variants={cardVariants}>
            <Image className="mb-4 md:mb-5" src={choose2} alt="choose2" width={150} height={150} style={{ objectFit: 'contain' }} />
            <h3 className="text-[#533115] text-lg md:text-[21px] font-extrabold uppercase">
              Comprehensive<br />Support
            </h3>
          </motion.div>
          <motion.div className="flex flex-col justify-center items-center text-center" variants={cardVariants}>
            <Image className="mb-4 md:mb-5" src={choose3} alt="choose3" width={150} height={150} style={{ objectFit: 'contain' }} />
            <h3 className="text-[#533115] text-lg md:text-[21px] font-extrabold uppercase">
              Personalized<br />Approach
            </h3>
          </motion.div>
          <motion.div className="flex flex-col justify-center items-center text-center" variants={cardVariants}>
            <Image className="mb-4 md:mb-5" src={choose4} alt="choose4" width={150} height={150} style={{ objectFit: 'contain' }} />
            <h3 className="text-[#533115] text-lg md:text-[21px] font-extrabold uppercase">
              Trusted<br />Partnership
            </h3>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-[175px] my-8 md:my-[101px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex flex-col justify-center items-center text-center" variants={cardVariants}>
            <Image className="mb-4 md:mb-5" src={choose5} alt="choose5" width={150} height={150} style={{ objectFit: 'contain' }} />
            <h3 className="text-[#533115] text-lg md:text-[21px] font-extrabold uppercase">
              Transparent<br />Ethical
            </h3>
          </motion.div>
          <motion.div className="flex flex-col justify-center items-center text-center" variants={cardVariants}>
            <Image className="mb-4 md:mb-5" src={choose6} alt="choose6" width={150} height={150} style={{ objectFit: 'contain' }} />
            <h3 className="text-[#533115] text-lg md:text-[21px] font-extrabold uppercase">
              Successful<br />Track Record
            </h3>
          </motion.div>
          <motion.div className="flex flex-col justify-center items-center text-center" variants={cardVariants}>
            <Image className="mb-4 md:mb-5" src={choose7} alt="choose7" width={150} height={150} style={{ objectFit: 'contain' }} />
            <h3 className="text-[#533115] text-lg md:text-[21px] font-extrabold uppercase">
              Continuous<br />Support
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;