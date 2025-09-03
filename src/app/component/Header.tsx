// import Image from 'next/image'
// import React from 'react'
// import logo from '../../../public/logo.png';
// import qr from '../../../public/qr-code.svg';
// import qrWhite from '../../../public/qr-white.svg';
// import blackSearch from '../../../public/black-search.png';
// import whiteSearch from '../../../public/white-search.png';
// import profile from '../../../public/profile.png';

// const Header = () => {
//     return (
//         <nav className="bg-white ps-[60px] pe-[72px] py-9 border-b border-[#084F3D] flex items-center justify-between">
//             <div className="flex items-center space-x-6">
//                 <div className=" flex items-center  lg:gap-[165px]">
//                     <Image src={logo} alt="Logo" className="w-[75px] h-[70px]" />
//                     <div className='flex gap-[107px]'>
//                         <a href="#" className="text-[#533115] text-[26px] font-extrabold border-b border-b-white hover:border-b-[#084F3D] hover:text-[#084F3D]">
//                             About Us
//                         </a>
//                         <a href="#" className=" text-[#533115] text-[26px] font-extrabold border-b border-b-white hover:border-b-[#084F3D]  hover:text-[#084F3D] ">
//                             Study Abroad
//                         </a>
//                         <a href="#" className="text-[#533115] text-[26px] font-extrabold border-b border-b-white hover:border-b-[#084F3D] hover:text-[#084F3D]">
//                             Our Services
//                         </a>
//                         <a href="#" className="text-[#533115] text-[26px] font-extrabold border-b border-b-white hover:border-b-[#084F3D] hover:text-[#084F3D]">
//                             Book Consultation
//                         </a>
//                         <a href="#" className="text-[#533115] text-[26px] font-extrabold border-b border-b-white hover:border-b-[#084F3D] hover:text-[#084F3D]">
//                             Apply Now
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-center space-x-4">
//                 <button className="group size-[38px] p-[11px] border border-[#16AA83] hover:bg-[#084F3D] rounded-full search_btn cursor-pointer">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="17"
//                         height="17"
//                         viewBox="0 0 17 17"
//                         fill="none"
//                         className="transition-colors duration-200"
//                     >
//                         <path
//                             d="M12.1498 10.6918H11.3819L11.1098 10.4294C12.0953 9.2864 12.6369 7.82711 12.6358 6.3179C12.6358 5.06834 12.2653 3.84684 11.571 2.80786C10.8768 1.76889 9.8901 0.95911 8.73565 0.480924C7.58121 0.00273743 6.31089 -0.122378 5.08534 0.121399C3.85979 0.365177 2.73404 0.966898 1.85047 1.85047C0.966898 2.73404 0.365177 3.85979 0.121399 5.08534C-0.122378 6.31089 0.00273743 7.58121 0.480924 8.73565C0.95911 9.8901 1.76889 10.8768 2.80786 11.571C3.84684 12.2653 5.06834 12.6358 6.3179 12.6358C7.88279 12.6358 9.32133 12.0623 10.4294 11.1098L10.6918 11.3819V12.1498L15.5517 17L17 15.5517L12.1498 10.6918ZM6.3179 10.6918C3.89766 10.6918 1.94397 8.73814 1.94397 6.3179C1.94397 3.89766 3.89766 1.94397 6.3179 1.94397C8.73814 1.94397 10.6918 3.89766 10.6918 6.3179C10.6918 8.73814 8.73814 10.6918 6.3179 10.6918Z"
//                             className="fill-[#2C2C2C] group-hover:fill-white transition-colors duration-200"
//                         />
//                     </svg>
//                 </button>
//                 <button className="group size-[38px] p-[11px] border border-[#16AA83] hover:bg-[#084F3D] rounded-full search_btn cursor-pointer flex items-center justify-center">
//                     <Image
//                         src={qr}
//                         alt="QR"
//                         className="block group-hover:hidden transition-opacity duration-300"
//                     />
//                     <Image
//                         src={qrWhite}
//                         alt="QR White"
//                         className="hidden group-hover:block transition-opacity duration-300"
//                     />
//                 </button>
//                 <button className="group size-[38px] p-[11px] border border-[#16AA83] hover:bg-[#084F3D] rounded-full search_btn cursor-pointer flex items-center justify-center">
//                     <Image
//                         src={blackSearch}
//                         alt="QR"
//                         className="block group-hover:hidden transition-opacity duration-300"
//                     />
//                     <Image
//                         src={whiteSearch}
//                         alt="QR White"
//                         className="hidden group-hover:block transition-opacity duration-300"
//                     />
//                 </button>
//                 {/* <div className='w-[68px] h-[38px] bg-[#084F3D]  rounded-[19px]'>
//                     <div className=''>

//                     </div>
//                 </div> */}
//                 <Image src={profile} alt="" />


//             </div>
//         </nav>
//     )
// }

// export default Header

"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import qr from "../../../public/qr-code.svg";
import qrWhite from "../../../public/qr-white.svg";
import blackSearch from "../../../public/black-search.png";
import whiteSearch from "../../../public/white-search.png";
import profile from "../../../public/profile.png";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white px-6 md:px-5 lg:px-10  py-5 md:py-7 lg:py-9 border-b border-[#084F3D] flex gap-10 items-center justify-between relative">
            <div className="flex items-center justify-between w-full xl:w-auto">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="w-[55px] h-[50px] md:w-[65px] md:h-[60px] lg:w-[75px] lg:h-[70px]"
                    />
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="xl:hidden block md:mr-5 text-[#084F3D] focus:outline-none"
                >
                    {isOpen ? (
                        // Close Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Hamburger Icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div className="hidden nav_items xl:flex items-center gap-6 2xl:gap-[107px] ">
                {[
                    "About Us",
                    "Study Abroad",
                    "Our Services",
                    "Book Consultation",
                    "Apply Now",
                ].map((item, idx) => (
                    <a
                        key={idx}
                        href="#"
                        className=" text-[#533115]   text-[16px] md:text-[18px] 2xl:text-[26px]  font-extrabold hover:text-[#084F3D]  hover:underline 
    decoration-[#084F3D] decoration-[12%] underline-offset-[4px] transition">
                        {item}
                    </a>
                ))}
            </div>
            <div className="hidden xl:flex items-center space-x-3 lg:space-x-4">
                <button className="group size-[34px] lg:size-[38px] p-[9px] lg:p-[11px] border border-[#16AA83] hover:bg-[#084F3D] rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        className="transition-colors duration-200"
                    >
                        <path
                            d="M12.1498 10.6918H11.3819L11.1098 10.4294C12.0953 9.2864 12.6369 7.82711 12.6358 6.3179C12.6358 5.06834 12.2653 3.84684 11.571 2.80786C10.8768 1.76889 9.8901 0.95911 8.73565 0.480924C7.58121 0.00273743 6.31089 -0.122378 5.08534 0.121399C3.85979 0.365177 2.73404 0.966898 1.85047 1.85047C0.966898 2.73404 0.365177 3.85979 0.121399 5.08534C-0.122378 6.31089 0.00273743 7.58121 0.480924 8.73565C0.95911 9.8901 1.76889 10.8768 2.80786 11.571C3.84684 12.2653 5.06834 12.6358 6.3179 12.6358C7.88279 12.6358 9.32133 12.0623 10.4294 11.1098L10.6918 11.3819V12.1498L15.5517 17L17 15.5517L12.1498 10.6918ZM6.3179 10.6918C3.89766 10.6918 1.94397 8.73814 1.94397 6.3179C1.94397 3.89766 3.89766 1.94397 6.3179 1.94397C8.73814 1.94397 10.6918 3.89766 10.6918 6.3179C10.6918 8.73814 8.73814 10.6918 6.3179 10.6918Z"
                            className="fill-[#2C2C2C] group-hover:fill-white transition-colors duration-200"
                        />
                    </svg>
                </button>
                <button className="group md:w-[64px] md:h-[36px] lg:size-[38px]  lg:p-[11px] border border-[#16AA83] hover:bg-[#084F3D] rounded-full flex items-center justify-center">
                    <Image
                        src={qr}
                        alt="QR"
                        className="block group-hover:hidden size-[18px] transition-opacity duration-300"
                    />
                    <Image
                        src={qrWhite}
                        alt="QR White"
                        className="hidden group-hover:block size-[18px] transition-opacity duration-300"
                    />
                </button>
                <button className="group size-[34px] lg:size-[38px] p-[9px] lg:p-[11px] border border-[#16AA83] hover:bg-[#084F3D] rounded-full flex items-center justify-center">
                    <Image
                        src={blackSearch}
                        alt="Search"
                        className="block group-hover:hidden transition-opacity duration-300"
                    />
                    <Image
                        src={whiteSearch}
                        alt="Search White"
                        className="hidden group-hover:block transition-opacity duration-300"
                    />
                </button>
                <Image
                    src={profile}
                    alt="Profile"
                    className="w-[34px] h-[34px] lg:w-[38px] lg:h-[38px]"
                />
            </div>
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-[#084F3D] flex flex-col items-start px-6 py-4 space-y-4 xl:hidden z-50">
                    {[
                        "About Us",
                        "Study Abroad",
                        "Our Services",
                        "Book Consultation",
                        "Apply Now",
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="block text-[#533115] text-lg font-semibold hover:text-[#084F3D]"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 w-full">
                        <Image src={profile} alt="Profile" className="w-[32px] h-[32px]" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
