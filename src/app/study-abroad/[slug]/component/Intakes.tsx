import { University } from "@/app/utils/data";
import React from "react";
import { motion } from "framer-motion";

type IProps = {
  data: University;
};

const Intakes: React.FC<IProps> = ({ data }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="mb-[50px]">
      <motion.p
        className="
     text-black
    font-bold
    text-4xl lg:text-[48px] mb-6
    font-[Creato Display]
     underline
    underline-offset-auto
    decoration-solid
    mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={itemVariants}
      >
        Intakes
      </motion.p>
      <motion.div
        className="text-2xl lg:text-[32px] text-black leading-normal"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        variants={itemVariants}
        dangerouslySetInnerHTML={{ __html: data.intakes || data.rankings }} 
      />
    </div>
  );
};

export default Intakes;