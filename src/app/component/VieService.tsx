// 'use client';
// import React, { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import { EffectFade, Autoplay } from 'swiper/modules';
// import Image from 'next/image';
// import vie_logo from '../../../public/vie_logo.png';
// import vie_bg from '../../../public/vie_bg.png';
// import type { Swiper as SwiperClass } from 'swiper';
// import { flags } from '../utils/data';
// import DotIndicator from './DotIndicator';
// import "swiper/css/autoplay";

// const VieService = () => {
//     const swiperRef = useRef<SwiperClass | null>(null);
//     const [activeIndex, setActiveIndex] = useState<number>(0);

//     return (
//         <div className='mb-20 g:mb-[160px]'>
//             <div className="text-center my-6 bg-[#FBFBFB]">
//                 <h3 className="text-[#533115] text-3xl font-medium mb-5">
//                     {flags[activeIndex]?.name}
//                 </h3>
//                 <div className='mb-3'>
//                     <DotIndicator direction="horizontal" width={5} spacing={5} height={5} bounceDistance={6}/>
//                 </div>
//                 <Swiper
//                     spaceBetween={30}
//                     effect={'fade'}
//                     modules={[EffectFade, Autoplay]}
//                     autoplay={{
//                         delay: 2000,
//                         disableOnInteraction: false,
//                     }}
//                     loop={true}
//                     className="mySwiper"
//                     onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                 >
//                     {flags.map((data) => (
//                         <SwiperSlide key={data.id}>
//                             <div className="flex items-center justify-center gap-4">
//                                 {/* Left button */}
//                                 <button onClick={() => swiperRef.current?.slidePrev()}>
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="9"
//                                         height="18"
//                                         viewBox="0 0 9 18"
//                                         fill="none"
//                                     >
//                                         <path d="M9 18L0 9L9 0V18Z" fill="#313131" />
//                                     </svg>
//                                 </button>

//                                 {/* Image */}
//                                 <Image
//                                     src={flags[activeIndex]?.image}
//                                     alt={flags[activeIndex]?.name || 'Flag Image'}
//                                     width={83}
//                                     height={83}
//                                 />
//                                 {/* Right button */}
//                                 <button onClick={() => swiperRef.current?.slideNext()}>
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         width="9"
//                                         height="18"
//                                         viewBox="0 0 9 18"
//                                         fill="none"
//                                     >
//                                         <path d="M0 18L9 9L0 0V18Z" fill="#313131" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 <div className='text-center flex flex-col items-center '>
//                     <p className="mt-4 text-xl leading-normal text-[#2C2C2C]">
//                         Hello {flags[activeIndex]?.name}
//                     </p>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="27" height="4" viewBox="0 0 27 4" fill="none">
//                         <path d="M0.933333 2C0.933333 2.5891 1.4109 3.06667 2 3.06667C2.5891 3.06667 3.06667 2.5891 3.06667 2C3.06667 1.4109 2.5891 0.933333 2 0.933333C1.4109 0.933333 0.933333 1.4109 0.933333 2ZM23.9333 2C23.9333 2.5891 24.4109 3.06667 25 3.06667C25.5891 3.06667 26.0667 2.5891 26.0667 2C26.0667 1.4109 25.5891 0.933333 25 0.933333C24.4109 0.933333 23.9333 1.4109 23.9333 2ZM2 2V2.2H25V2V1.8H2V2Z" fill="#2C2C2C" />
//                     </svg>
//                 </div>
//             </div>
//             <div className='flex lg:flex-row flex-col gap-6 justify-center lg:justify-between items-center lg:mx-0 mx-4'>
//                 <div className='relative'>
//                     <h3 className='text-xl lg:text-[37px] font-medium text-[#2C2C2C] lg:ps-[72px]'>
//                         At <span className='font-[900]'>VIE Services</span> we are dedicated to delivering high
//                         quality <br className='lg:block hidden' /> quality education counselling services to students & parents.
//                     </h3>
//                     <Image className='absolute lg:right-[-53px] top-8' src={vie_bg} alt="Background" />
//                 </div>
//                 <Image className='md:w-[464px] w-full' src={vie_logo} alt="VIE Logo" />
//             </div>
//         </div>
//     );
// };

// export default VieService;
'use client';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import vie_logo from '../../../public/vie_logo.png';
import vie_bg from '../../../public/vie_bg.png';
import type { Swiper as SwiperClass } from 'swiper';
import { flags } from '../utils/data';
import DotIndicator from './DotIndicator';
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const VieService = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className='mb-20 g:mb-[160px]'>
            <motion.div 
                className="text-center my-6 bg-[#FBFBFB]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.h3 
                    className="text-[#533115] text-3xl font-medium mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {flags[activeIndex]?.name}
                </motion.h3>
                <div className='mb-3'>
                    <DotIndicator direction="horizontal" width={5} spacing={5} height={5} bounceDistance={6}/>
                </div>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    modules={[EffectFade, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {flags.map((data) => (
                        <SwiperSlide key={data.id}>
                            <motion.div 
                                className="flex items-center justify-center gap-4"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                {/* Left button */}
                                <button onClick={() => swiperRef.current?.slidePrev()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
                                        <path d="M9 18L0 9L9 0V18Z" fill="#313131" />
                                    </svg>
                                </button>

                                {/* Image */}
                                <motion.div
                                    initial={{ rotate: -10, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Image
                                        src={flags[activeIndex]?.image}
                                        alt={flags[activeIndex]?.name || 'Flag Image'}
                                        width={83}
                                        height={83}
                                    />
                                </motion.div>

                                {/* Right button */}
                                <button onClick={() => swiperRef.current?.slideNext()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
                                        <path d="M0 18L9 9L0 0V18Z" fill="#313131" />
                                    </svg>
                                </button>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <motion.div 
                    className='text-center flex flex-col items-center '
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="mt-4 text-xl leading-normal text-[#2C2C2C]">
                        Hello {flags[activeIndex]?.name}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="4" viewBox="0 0 27 4" fill="none">
                        <path d="M0.933333 2C0.933333 2.5891 1.4109 3.06667 2 3.06667C2.5891 3.06667 3.06667 2.5891 3.06667 2C3.06667 1.4109 2.5891 0.933333 2 0.933333C1.4109 0.933333 0.933333 1.4109 0.933333 2ZM23.9333 2C23.9333 2.5891 24.4109 3.06667 25 3.06667C25.5891 3.06667 26.0667 2.5891 26.0667 2C26.0667 1.4109 25.5891 0.933333 25 0.933333C24.4109 0.933333 23.9333 1.4109 23.9333 2ZM2 2V2.2H25V2V1.8H2V2Z" fill="#2C2C2C" />
                    </svg>
                </motion.div>
            </motion.div>

            <motion.div 
                className='flex lg:flex-row flex-col gap-6 justify-center lg:justify-between items-center lg:mx-0 mx-4'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className='relative'>
                    <h3 className='text-xl lg:text-[37px] font-medium text-[#2C2C2C] lg:ps-[72px]'>
                        At <span className='font-[900]'>VIE Services</span> we are dedicated to delivering high
                        quality <br className='lg:block hidden' /> quality education counselling services to students & parents.
                    </h3>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Image className='absolute lg:right-[-53px] top-8' src={vie_bg} alt="Background" />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Image className='md:w-[464px] w-full' src={vie_logo} alt="VIE Logo" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default VieService;
