'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from "swiper/modules";

import banner1 from '../../../public/banner1.png';
import banner2 from '../../../public/banner2.png';
import banner3 from '../../../public/banner3.png';
import banner4 from '../../../public/banner4.png';
import banner5 from '../../../public/banner5.png';
import Image from 'next/image';



export default function Banner() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                effect={'fade'}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 1000, 
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <Image className="w-full object-cover" src={banner1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full object-cover" src={banner2} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full object-cover" src={banner3} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full object-cover" src={banner4} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full object-cover" src={banner5} alt='' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
