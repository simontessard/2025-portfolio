import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Carousel() {
    const slides = [
        { src: "/images/home/carousel-hotels.png", alt: "Carousels des hôtels" },
        { src: "/images/home/iniva.jpg", alt: "Iniva" },
        { src: "/images/projects/daouad/square/desktop-3.jpg", alt: "Images mobiles" },
    ];

    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 1200 }}
            loop={true}
            speed={1000}
            allowTouchMove={false}
            effect="fade"
            className="!size-full"
        >
            {slides.map((slide : any, index : number) => (
                <SwiperSlide key={index}>
                    <img src={slide.src} alt={slide.alt} className="object-cover size-full" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
