import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from "next/image";

export default function Carousel() {
    const slides = [
        { src: "/images/projects/socbois/large/mockup.png", alt: "Socbois section carousel des projets" },
        { src: "/images/projects/cdc/large/mockup.png", alt: "ChefDeChantier.fr section projets" },
        { src: "/images/projects/daouad/large/mockup.png", alt: "Daouad.fr section carte des projets" },
        { src: "/images/projects/iniva/large/mockup-2.png", alt: "Iniva Tourism section découverte" },
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
                    <Image width={1500} height={1500} priority loading="eager" src={slide.src} alt={slide.alt} className="object-cover size-full" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
