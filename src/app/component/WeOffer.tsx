'use client'
import React from 'react';
import Image from 'next/image';
import { offers } from '../utils/data';
import { motion } from "framer-motion";

const WeOffer = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.6 },
    }),
  };

  return (
    <div className='max-w-[1740px] px-5 py-10 lg:py-[120px] mx-auto'>
      <div className='text-center'>
        <motion.p
          className='text-[#2C2C2C] text-3xl md:text-4xl lg:text-[64px] font-extrabold mb-5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={itemVariants}
        >
          What We Offer?
        </motion.p>
        <motion.p
          className='text-[#2C2C2C] text-xl md:text-2xl lg:text-[32px] mb-6 lg:mb-[100px]'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={itemVariants}
        >
          We provide a full range of services designed to make your study abroad process simple,
          efficient, and stress-free:
        </motion.p>
      </div>

      <div className='flex flex-wrap justify-center gap-[50px]'>
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className={`group max-w-[525px] px-10 py-[53px] transition-all duration-300 ease-in ${index % 2 === 0 ? "bg-[#C2C4AC] shadow-[0_1px_0_0_rgba(0,0,0,0.25)]" : "bg-[#A5AC8A] shadow-[0_1px_0_0_rgba(0,0,0,0.25)]"
              }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4 + index * 0.2}
            variants={itemVariants}
          >
            <div className="relative w-[65px] h-[70px] mb-2.5">
              <Image
                src={offer.pic.src}
                alt={offer.title}
                fill
                className="object-contain group-hover:hidden"
              />
              <Image
                src={offer.hoverPic.src}
                alt={`${offer.title} hover`}
                fill
                className="object-contain hidden group-hover:block"
              />
            </div>

            <motion.p
              className='text-[#1F2519] text-[25px] font-bold uppercase mb-2.5'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
            >
              {offer.title}
            </motion.p>
            <motion.p
              className='text-[#1F2519] text-[22px]'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
            >
              {offer.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WeOffer;