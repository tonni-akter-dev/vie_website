import { University } from "@/app/utils/data";
import React from "react";
import { motion } from "framer-motion";

type IProps = {
  data: University;
};

const RatingCards: React.FC<IProps> = ({ data }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center mb-[108px]">
      <motion.div
        className="bg-[#A5AC8A] py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={itemVariants}
      >
        <h3 className="text-black font-bold text-[40px] uppercase">
          {data?.acceptanceRate}
        </h3>
        <h3 className="text-black font-normal text-2xl uppercase">
          Acceptance Rate
        </h3>
      </motion.div>
      <motion.div
        className="bg-[#C2C4AC] py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        variants={itemVariants}
      >
        <h3 className="text-black font-bold text-[40px] uppercase">
          {data?.totalInternationalStudents}
        </h3>
        <h3 className="text-black font-normal text-2xl uppercase">
          Total International Students
        </h3>
      </motion.div>
      <motion.div
        className="bg-[#A5AC8A] py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.4}
        variants={itemVariants}
      >
        <h3 className="text-black font-bold text-[40px] uppercase">
          {data?.placementRate}
        </h3>
        <h3 className="text-black font-normal text-2xl uppercase">
          Placement Rate
        </h3>
      </motion.div>
      <motion.div
        className="bg-[#C2C4AC] py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.6}
        variants={itemVariants}
      >
        <h3 className="text-black font-bold text-[40px] uppercase">
          {data?.studentTeacherRatio}
        </h3>
        <h3 className="text-black font-normal text-2xl uppercase">
          Student Teacher Ratio
        </h3>
      </motion.div>
    </div>
  );
};

export default RatingCards;