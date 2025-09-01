// import React from 'react';
// import playbtn from '../../../public/playbutton.svg';
// import Image from 'next/image';
// import DotCompo from '../component/DotCompo';
// import UniversityCard from './component/UniversityCard';
// import { universityData } from '../utils/data';


// const StudyAbroad = () => {
//   return (
//     <div className='mx-[38px]  my-[120px]'>
//       <div className='mx-auto flex justify-center  mb-[-20px]'>
//         <button><Image src={playbtn} alt="" /></button>
//       </div>
//       <div className='pt-[153px] px-[64px] bg-[#FEFEFE]  rounded-[58px] ' style={{ boxShadow: '0 0 4.6px 0 rgba(0, 0, 0, 0.25)' }}>
//         <div>
//           <h2 className='text-[#2C2C2C] text-[60px] text-center font-[900] mb-[26px]'>Best Universities Around the World for Overseas Education</h2>
//           <p className='text-[32px] text-[#918F8F] mb-[62px] text-center'>Choose a university that fuels your passion & purpose and that quenches your academic & career pursuits</p>
//           <DotCompo />
//         </div>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]'>
//           {
//             universityData.map(uni => (
//               <div key={uni.id}>
//                 <UniversityCard
//                   datas={uni}
//                 />
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StudyAbroad
"use client";
import React, { useState } from "react";
import playbtn from "../../../public/playbutton.svg";
import Image from "next/image";
import DotCompo from "../component/DotCompo";
import UniversityCard from "./component/UniversityCard";
import { universityData } from "../utils/data";
import CountrySelect from "./CountrySelect";

const StudyAbroad = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(universityData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = universityData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mx-[38px] my-[120px]">
      {/* Play Button */}
      <div className="mx-auto flex justify-center mb-[-20px]">
        <button>
          <Image src={playbtn} alt="Play Button" />
        </button>
      </div>

      {/* Main Section */}
      <div
        className="pt-[153px] px-[64px] bg-[#FEFEFE] rounded-[58px]"
        style={{ boxShadow: "0 0 4.6px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <div>
          <h2 className="text-[#2C2C2C] text-[60px] text-center font-[900] mb-[26px]">
            Best Universities Around the World for Overseas Education
          </h2>
          <p className="text-[32px] text-[#918F8F] mb-[62px] text-center">
            Choose a university that fuels your passion & purpose and that
            quenches your academic & career pursuits
          </p>
          <DotCompo />
        </div>


        {/* select */}

        <CountrySelect/>
        {/* select */}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
          {currentData.map((uni) => (
            <div key={uni.id}>
              <UniversityCard datas={uni} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {/* Prev Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? "bg-[#084F3D] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
