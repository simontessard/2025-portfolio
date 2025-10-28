import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from "next/image";

export default function Carousel() {
    const slides = [
        { src: "/images/projects/iniva/large/mockup-2.png", alt: "Iniva Tourism" },
        { src: "/images/projects/maxim/logo.png", alt: "Logo Maxim" },
        { src: "/images/projects/pixelbank/pixelbank-cover.jpg", alt: "PixelBank couverture" },
        { src: "/images/projects/cdc/large/mockup.png", alt: "CDC couverture" },
        { src: "/images/projects/freelance/square/hero.jpg", alt: "Freelance couverture" },
    ];

    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 1700 }}
            loop={true}
            speed={1300}
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
