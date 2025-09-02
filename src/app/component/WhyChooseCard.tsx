'use client'
import React from 'react'
import { motion, easeOut, Easing } from 'framer-motion';

const WhyChooseCard = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: easeOut,
            },
        },
    };
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut' as Easing, // Explicitly type as Easing
            },
        },
    };

    return (
        <div>
            <h2 className='uppercase text-[#533115] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-[60px] mt-[185px]'>Why Choose Australia? </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:mx-[50px] 2xl:mx-[164px] gap-1.5 lg:mb-50 mx-4'>
                <motion.div
                    className=" mt-5 lg:mt-[60px] w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-[#C2C4AC] group  h-[418px] flex flex-col justify-center lg:rounded-tl-[50px] lg:rounded-bl-[50px]  cursor-pointer relative ps-[35px]"
                        variants={cardVariants}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <h1 className='text-[#533115] text-base 2xl:text-[25px] font-extrabold uppercase'>World <br />
                            Class <br />
                            Education</h1>
                        <div className='flex mt-5 gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="6" viewBox="0 0 87 6" fill="none">
                                <path d="M87 3L82 0.113249V5.88675L87 3ZM0 3V3.5H82.5V3V2.5H0V3Z" fill="white" />
                            </svg>
                            <span className='text-xs text-white'>See More</span>
                        </div>
                        <motion.div
                            className="absolute top-0 ps-[22px] left-0 w-full h-full bg-white pt-10 rounded-tl-[50px] rounded-bl-[50px] z-10 flex flex-col justify-center items-start" variants={overlayVariants}
                            initial="hidden"
                            animate="hidden"
                            whileHover="visible"
                        >
                            <div className='flex flex-col gap-1 mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="3.40586" cy="2.5" rx="2.59434" ry="2.5" fill="#533115" />
                                </svg>
                            </div>
                            <h1 className='text-[#533115]  text-[22px] font-bold'>
                                Home to globally <br /> ranked universities <br /> offering a ….. range of …..</h1>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className=" mt-5 lg:mt-[60px] w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-[#A5AC8A] group  h-[418px] flex flex-col justify-center   cursor-pointer relative ps-[35px]"
                        variants={cardVariants}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <h1 className='text-[#533115]  text-base 2xl:text-[25px] font-extrabold uppercase'>Innovation <br />
                            Learning <br />
                            Environment</h1>
                        <div className='flex mt-5 gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="6" viewBox="0 0 87 6" fill="none">
                                <path d="M87 3L82 0.113249V5.88675L87 3ZM0 3V3.5H82.5V3V2.5H0V3Z" fill="white" />
                            </svg>
                            <span className='text-xs text-white'>See More</span>
                        </div>
                        <motion.div
                            className="absolute top-0 ps-[22px] left-0 w-full h-full bg-white pt-10  z-10 flex flex-col justify-center items-start" variants={overlayVariants}
                            initial="hidden"
                            animate="hidden"
                            whileHover="visible"
                        >
                            <div className='flex flex-col gap-1 mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="3.40586" cy="2.5" rx="2.59434" ry="2.5" fill="#533115" />
                                </svg>
                            </div>
                            <h1 className='text-[#533115]  text-[22px] font-bold'>
                                Access …. research, modern facilities and industry relevant courses.</h1>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className=" mt-5 lg:mt-[60px] w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-[#C2C4AC] group  h-[418px] flex flex-col justify-center   cursor-pointer relative ps-[35px]"
                        variants={cardVariants}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <h1 className='text-[#533115]  text-base 2xl:text-[25px] font-extrabold uppercase'>Cultural <br />
                            Diversity
                        </h1>
                        <div className='flex mt-5 gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="6" viewBox="0 0 87 6" fill="none">
                                <path d="M87 3L82 0.113249V5.88675L87 3ZM0 3V3.5H82.5V3V2.5H0V3Z" fill="white" />
                            </svg>
                            <span className='text-xs text-white'>See More</span>
                        </div>
                        <motion.div
                            className="absolute top-0 ps-[22px] left-0 w-full h-full bg-white pt-10  z-10 flex flex-col justify-center items-start" variants={overlayVariants}
                            initial="hidden"
                            animate="hidden"
                            whileHover="visible"
                        >
                            <div className='flex flex-col gap-1 mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="3.40586" cy="2.5" rx="2.59434" ry="2.5" fill="#533115" />
                                </svg>
                            </div>
                            <h1 className='text-[#533115]  text-[22px] font-bold'>
                                Access …. research, modern facilities and industry relevant courses.</h1>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className=" mt-5 lg:mt-[60px] w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-[#A5AC8A] group  h-[418px] flex flex-col justify-center   cursor-pointer relative ps-[35px]"
                        variants={cardVariants}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <h1 className='text-[#533115]  text-base 2xl:text-[25px] font-extrabold uppercase'>Work <br />
                            Opportunities
                        </h1>
                        <div className='flex mt-5 gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="6" viewBox="0 0 87 6" fill="none">
                                <path d="M87 3L82 0.113249V5.88675L87 3ZM0 3V3.5H82.5V3V2.5H0V3Z" fill="white" />
                            </svg>
                            <span className='text-xs text-white'>See More</span>
                        </div>
                        <motion.div
                            className="absolute top-0 ps-[22px] left-0 w-full h-full bg-white pt-10  z-10 flex flex-col justify-center items-start" variants={overlayVariants}
                            initial="hidden"
                            animate="hidden"
                            whileHover="visible"
                        >
                            <div className='flex flex-col gap-1 mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="3.40586" cy="2.5" rx="2.59434" ry="2.5" fill="#533115" />
                                </svg>
                            </div>
                            <h1 className='text-[#533115]  text-[22px] font-bold'>
                                Experience a vibrant,  <br />multicultural society <br /> that welcomes <br /> international <br /> students.</h1>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className=" mt-5 lg:mt-[60px] w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-[#C2C4AC] group  h-[418px] flex flex-col justify-center   cursor-pointer relative ps-[35px]"
                        variants={cardVariants}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <h1 className='text-[#533115]  text-base 2xl:text-[25px] font-extrabold uppercase'>Quality of <br />
                            Life</h1>
                        <div className='flex mt-5 gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="6" viewBox="0 0 87 6" fill="none">
                                <path d="M87 3L82 0.113249V5.88675L87 3ZM0 3V3.5H82.5V3V2.5H0V3Z" fill="white" />
                            </svg>
                            <span className='text-xs text-white'>See More</span>
                        </div>
                        <motion.div
                            className="absolute top-0 ps-[22px] left-0 w-full h-full bg-white pt-10  z-10 flex flex-col justify-center items-start" variants={overlayVariants}
                            initial="hidden"
                            animate="hidden"
                            whileHover="visible"
                        >
                            <div className='flex flex-col gap-1 mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="3.40586" cy="2.5" rx="2.59434" ry="2.5" fill="#533115" />
                                </svg>
                            </div>
                            <h1 className='text-[#533115]  text-[22px] font-bold'>
                                Enjoy a safe, clean <br /> environment with <br /> excellent healthcare <br /> and lifestyle <br /> amenities.</h1>

                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className=" mt-5 lg:mt-[60px] w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-[#A5AC8A] group h-[418px] flex flex-col justify-center lg:rounded-tr-[50px] lg:rounded-br-[50px] cursor-pointer relative ps-[35px]"
                        variants={cardVariants}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <h1 className='text-[#533115]  text-base 2xl:text-[25px] font-extrabold uppercase'>Pathway of <br />
                            permanent <br />
                            residence</h1>
                        <div className='flex mt-5 gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="87" height="6" viewBox="0 0 87 6" fill="none">
                                <path d="M87 3L82 0.113249V5.88675L87 3ZM0 3V3.5H82.5V3V2.5H0V3Z" fill="white" />
                            </svg>
                            <span className='text-xs text-white'>See More</span>
                        </div>
                        <motion.div
                            className="absolute top-0 ps-[22px]  rounded-tr-[50px] rounded-br-[50px] left-0 w-full h-full bg-white pt-10  z-10 flex flex-col justify-center items-start" variants={overlayVariants}
                            initial="hidden"
                            animate="hidden"
                            whileHover="visible"
                        >
                            <div className='flex flex-col gap-1 mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="3.40586" cy="2.5" rx="2.59434" ry="2.5" fill="#533115" />
                                </svg>
                            </div>
                            <h1 className='text-[#533115]  text-[22px] font-bold'>
                                Explore options for <br /> long term settlement <br /> through education <br /> pathways.</h1>

                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div >
    )
}

export default WhyChooseCard