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
                autoplay={{delay: 1000}}
                effect="fade"
                className="size-full"
                >
                <SwiperSlide>
                    <img src="/images/projects/iniva/iniva.jpg" alt="Random" className="object-cover size-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/1400/1000" alt="Random" className="object-cover size-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/1600/1000" alt="Random" className="object-cover size-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/1300/1000" alt="Random" className="object-cover size-full"/>
                </SwiperSlide>
            </Swiper>
    )
}