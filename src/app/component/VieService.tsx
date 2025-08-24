'use client'
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from "swiper/modules";
import flags from '../utils/data';
import Image from 'next/image';
import vie_logo from '../../../public/vie_logo.png';
import vie_bg from '../../../public/vie_bg.png';
import type { Swiper as SwiperClass } from 'swiper';

const VieService = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='mb-[160px]'>
            <div className="text-center my-6 bg-[#FBFBFB]">
                <h3 className=" text-[#533115] text-3xl font-medium  mb-5">
                    {flags[activeIndex]?.name}
                </h3>
                <div className='flex justify-center items-center gap-1 mb-3'> <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" /> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" /> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none"> <ellipse cx="3.40586" cy="2.5" rx="2.59434" ry="2.5" fill="#533115" /> </svg> </div>
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
                            <div className="flex items-center justify-center gap-4">
                                {/* Left button */}
                                <button onClick={() => swiperRef.current?.slidePrev()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
                                        <path d="M9 18L0 9L9 0V18Z" fill="#313131" />
                                    </svg>
                                </button>

                                {/* Image */}
                                <Image
                                    src={flags[activeIndex]?.image}
                                    alt={flags[activeIndex]?.name}
                                    width={83}
                                    height={83}
                                />
                                {/* Right button */}
                                <button onClick={() => swiperRef.current?.slideNext()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
                                        <path d="M0 18L9 9L0 0V18Z" fill="#313131" />
                                    </svg>
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <p className="mt-4 text-xl leading-normal text-[#2C2C2C] ">
                    Hello {flags[activeIndex]?.name}
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='relative'>
                    <h3 className='text-[37px] font-medium text-[#2C2C2C] lg:ps-[72px]'>At <span className='font-[900]'>VIE Services</span> we are dedicated to delivering high quality <br />  quality education counselling services to students & parents.</h3>
                    <Image className='absolute right-[-53px] top-8' src={vie_bg} alt="" />
                </div>
                <Image src={vie_logo} alt="" />
            </div>
        </div>
    );
};

export default VieService;
