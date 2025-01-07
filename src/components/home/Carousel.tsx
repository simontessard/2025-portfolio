import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Autoplay} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Carousel() {
    return (
            <Swiper
                modules={[EffectFade, Autoplay]}
                slidesPerView={1}
                autoplay={{delay: 1200}}
                loop={true}
                speed={1000}
                allowTouchMove={false}
                effect="fade"
                className="!size-full">
                <SwiperSlide>
                    <img src="/images/home/carousel-hotels.png" alt="Carousels des hôtels" className="object-cover size-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/home/iniva.jpg" alt="Iniva" className="object-cover size-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/home/elephant.jpg" alt="Images mobiles" className="object-cover size-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/home/house.png" alt="Maison" className="object-cover size-full"/>
                </SwiperSlide>
            </Swiper>
    )
}