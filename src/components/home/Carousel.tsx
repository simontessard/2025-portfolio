"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Autoplay} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Carousel() {
    return (
            <Swiper
                modules={[EffectFade, Autoplay]}
                slidesPerView={1}
                autoplay={{delay: 500}}
                effect="fade"
                className="max-lg:h-1/2 w-full lg:w-2/5 lg:mt-20"
                >
                <SwiperSlide>
                    <img src="https://picsum.photos/1500/1000" alt="Random" className="object-cover w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/1400/1000" alt="Random" className="object-cover w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/1600/1000" alt="Random" className="object-cover w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/1300/1000" alt="Random" className="object-cover w-full h-full"/>
                </SwiperSlide>
            </Swiper>
    )
}