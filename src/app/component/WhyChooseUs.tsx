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
import choosebg from '../../../public/choose-bg.png';

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
    <div>
      <h2 className='uppercase text-[#2C2C2C] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-6 mt-[130px]'>
        Considering Studying in Australia
      </h2>
      <div className='flex justify-center items-center gap-1 mb-6'>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" /> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11 " viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" /> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 6 5" fill="none"> <ellipse cx="3.40586" cy="2.5" rx="2.59434" ry="2.5" fill="#533115" /> </svg>
      </div>
      <Image className='w-full object-cover' src={choosebg} alt="" />
      <p className='text-[32px] text-[#2C2C2C] font-bold lg:w-[1462px] w-full text-center mx-auto mt-6'>If you’re exploring the exceptional academic and personal growth opportunities Australia  <br />offers, VIE services is here to support you every step of the way. Whether you’re finalizing  <br />your choice or still weighing options, we provide expert guidance on course selection, <br /> application procedure visa requirements and preparing for your journey to Australia.</p>

      <div className="mb-16 md:mb-[185px] max-w-[1440px] mx-auto">
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
      
    </div>
  );
};

export default WhyChooseUs;