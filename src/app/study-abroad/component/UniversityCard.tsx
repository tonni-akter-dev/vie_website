import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface UniversityData {
  id: number;
  name: string;
  country: string;
  website: string;
  image: StaticImageData;
  logo: StaticImageData;
}
interface UniversityCardProps {
  datas: UniversityData;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const UniversityCard: React.FC<UniversityCardProps> = ({ datas }) => {
  return (
    <motion.div
      className="bg-[#FFF2DE] rounded-3xl lg:rounded-[60px] flex flex-col h-full lg:mt-0 mt-10"
      variants={cardVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Content */}
      <div className="lg:px-10 px-6 pt-12 flex-1 flex flex-col">
        <div className="flex justify-center mb-4">
          <div
            className="flex items-center justify-center flex-col gap-2.5"
            style={{
              mixBlendMode: "darken",
              aspectRatio: "107/68",
            }}
          >
            <Image
              className="h-[150px] lg:h-[214px] w-full object-contain"
              src={datas.image}
              alt={datas.name}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="176"
              height="2"
              viewBox="0 0 176 2"
              fill="none"
            >
              <path d="M0 1H176" stroke="#2C2C2C" strokeWidth="0.4" />
            </svg>
          </div>
        </div>

        <h2 className="text-[25px] font-medium text-[#2C2C2C] text-start mb-5">
          {datas.name}
        </h2>
        <div className="flex items-center text-start gap-3 mb-5">
          {datas.logo && (
            <Image
              className="w-[26px] h-5"
              src={datas.logo}
              alt={`${datas.name} logo`}
            />
          )}
          <span className="text-xl text-[#2C2C2C]">{datas.country}</span>
        </div>
        <p className="text-[#2C2C2C]  text-[20px] font-medium mb-11 hover:underline">
          <Link
            href={
              datas.website.startsWith("http")
                ? datas.website
                : `https://${datas.website}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {datas.website}
          </Link>
        </p>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-center items-center w-full">
        <Link
          href={`/study-abroad/${datas.id}`}
          className="bg-[#084F3D] group  text-[26px] font-medium text-[#FFF2DE] px-[30px] hover:bg-white hover:text-[#084f3d] 
          rounded-bl-3xl lg:rounded-bl-[60px] py-5 lg:py-[42px] w-full"
        >
          <button className="text-base group-hover:text-[#084F3D] lg:text-[26px] font-medium text-[#FFF2DE]">
            Know More
          </button>
        </Link>

        <div className="w-1 h-full bg-[#F4F4F4]"></div>
        <Link
          href={`/study-abroad/${datas.id}`}
          className="bg-[#084F3D] group  text-[26px] font-medium text-[#FFF2DE] px-[30px] hover:bg-white hover:text-[#084f3d] rounded-br-3xl lg:rounded-br-[60px] py-5 lg:py-[42px] w-full"
        >
          <button className="text-base group-hover:text-[#084F3D] lg:text-[26px] font-medium text-[#FFF2DE]">
            Apply Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default UniversityCard;
