"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";

const HowcanweHelp = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <motion.div
      className="howtohelp_bg lg:mx-[130px] mb-[130px] lg:mt-[300px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="p-10 text-center" variants={containerVariants}>
        {/* Heading */}
        <motion.h3
          className="text-xl md:text-3xl lg:text-[48px] uppercase font-bold text-[#2C2C2C]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          viewport={{ once: true, amount: 0.3 }}
        >
          HOW CAN WE HELP?
        </motion.h3>

        {/* Input box */}
        <motion.div
          className="mt-7 relative lg:max-w-[1190px] mx-auto rounded-[18px] bg-white"
          style={{
            boxShadow: "0 1px 2px 1px rgba(0, 0, 0, 0.29)",
            backdropFilter: "blur(50px)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <input
            type="text"
            className="focus:outline-0 px-10 text-xl w-full h-[60px] lg:h-[87px] rounded-[18px] bg-white"
          />
          <div className="absolute right-6 top-4 lg:top-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path
                d="M9.9857 22.0126H11.5666L12.1269 21.4723C10.0979 19.1191 8.98275 16.1146 8.98513 13.0074C8.98513 10.4348 9.74801 7.91996 11.1773 5.7809C12.6066 3.64183 14.638 1.97464 17.0148 0.990138C19.3916 0.00563589 22.007 -0.251955 24.5302 0.24994C27.0534 0.751835 29.3711 1.99067 31.1902 3.80979C33.0093 5.62892 34.2482 7.94662 34.7501 10.4698C35.252 12.993 34.9944 15.6084 34.0099 17.9852C33.0254 20.362 31.3582 22.3934 29.2191 23.8227C27.08 25.252 24.5652 26.0149 21.9926 26.0149C18.7707 26.0149 15.809 24.8342 13.5277 22.8731L12.9874 23.4334V25.0143L2.9817 35L0 32.0183L9.9857 22.0126ZM21.9926 22.0126C26.9754 22.0126 30.9977 17.9903 30.9977 13.0074C30.9977 8.02459 26.9754 4.00229 21.9926 4.00229C17.0097 4.00229 12.9874 8.02459 12.9874 13.0074C12.9874 17.9903 17.0097 22.0126 21.9926 22.0126Z"
                fill="#353E2B"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HowcanweHelp;
