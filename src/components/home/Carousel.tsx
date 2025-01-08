import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Carousel() {
    const slides = [
        { src: "/images/home/carousel-hotels.png", alt: "Iniva Tourism section carousel des hôtels du site web" },
        { src: "/images/projects/socbois/square/desktop-1.jpg", alt: "Iniva Tourism section carousel des hôtels du site web" },
        { src: "/images/projects/daouad/square/desktop-3.jpg", alt: "Daouad.fr section carte du site" },
        { src: "/images/projects/cdc/square/desktop-quality.jpg", alt: "ChefDeChantier.fr section Hero du site web" },
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
