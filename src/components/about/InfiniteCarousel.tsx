"use client";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

export default function InfiniteCarousel() {
    const images = [
        "/images/projects/iniva/square/desktop-1.jpg",
        "/images/projects/aj/square/desktop-1.jpg",
        "/images/projects/iniva/square/phone-5.jpg",
        "/images/projects/daouad/square/phone-1.jpg",
        "/images/projects/cdc/square/desktop-1.jpg",
        "/images/projects/iniva/square/phone-1.jpg",
        "/images/projects/daouad/square/desktop-3.jpg"
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={15}
            breakpoints={{
                768: {
                    spaceBetween: 30,
                },
            }}
            freeMode={true}
            speed={7000}
            loop={true}
            preventInteractionOnTransition={true}
            autoplay={{delay: 1, disableOnInteraction: false, pauseOnMouseEnter: true, waitForTransition: true, stopOnLastSlide: false}}
            className="swiper-container-free-mode mb-20 md:mb-24 xl:mb-32"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index} className="!aspect-square !w-2/5 md:!w-1/4 xl:!w-1/5">
                    <img src={src} alt={`Slide ${index + 1}`} className="object-cover size-full" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}