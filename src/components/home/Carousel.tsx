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
                    <img src="/images/home/elephant.jpg" alt="Random" className="object-cover size-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/home/iniva.jpg" alt="Random" className="object-cover size-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/home/stairs.jpg" alt="Random" className="object-cover size-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/home/house.png" alt="Random" className="object-cover size-full"/>
                </SwiperSlide>
            </Swiper>
    )
}