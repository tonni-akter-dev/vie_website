"use client";
import React, { useState } from "react";
import playbtn from "../../../public/playbutton.svg";
import Image from "next/image";
import UniversityCard from "./component/UniversityCard";
import { universityData } from "../utils/data";
import DotIndicator from "../component/DotIndicator";
import CountrySelect from "./component/CountrySelect";
import Search from "./component/Search";
import { motion } from "framer-motion";

const StudyAbroad = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(universityData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = universityData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Parent (stagger effect)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

  // Child (individual card animation)
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle pagination + scroll top
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="lg:mx-[38px] mx-4 py-[60px] lg:py-[120px]">
      {/* Play Button */}
      <div className="mx-auto flex justify-center mb-[-20px]">
        <button>
          <Image src={playbtn} alt="Play Button" />
        </button>
      </div>

      <div
        className="lg:pt-[153px] lg:pb-[90px] py-[60px] lg:px-[64px] px-4 bg-[#FEFEFE] rounded-2xl lg:rounded-[58px]"
        style={{ boxShadow: "0 0 4.6px 0 rgba(0, 0, 0, 0.25)" }}
      >
        {/* Heading */}
        <motion.div
          className="mb-4 lg:mb-[62px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#2C2C2C] text-xl md:text-3xl lg:text-[60px] leading-normal text-center font-[900] mb-[26px]">
            Best Universities Around the World for Overseas Education
          </h2>
          <p className="text-base md:text-2xl lg:text-[32px] text-[#918F8F] mb-[62px] text-center">
            Choose a university that fuels your passion & purpose and that
            quenches your academic & career pursuits
          </p>
          <DotIndicator />
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex items-center lg:flex-row flex-col lg:gap-0 gap-5 justify-between lg:mb-[120px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="lg:block hidden w-[250px]"></div>
          <CountrySelect />
          <Search />
        </motion.div>

        {/* Cards Grid with animation */}
        <motion.div
          key={currentPage} // 👈 re-mounts grid when page changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[50px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible" // 👈 animate instead of whileInView
        >
          {currentData.map((uni) => (
            <motion.div
              key={uni.id}
              variants={cardVariants}
              initial="hidden" // 👈 ensure restart
              animate="visible" // 👈 ensure restart
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <UniversityCard datas={uni} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-[100px]">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="prev_next"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page ? " text_active" : "text_inactive"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="prev_next"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
