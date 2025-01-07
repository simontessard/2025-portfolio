"use client";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

export default function InfiniteCarousel() {
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
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4 xl:!w-1/5">
                <img src="/images/home/iniva.jpg" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4 xl:!w-1/5">
                <img src="/images/home/house.png" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4 xl:!w-1/5">
                <img src="/images/home/elephant.jpg" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4 xl:!w-1/5">
                <img src="/images/projects/iniva/square/phone-5.jpg" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4 xl:!w-1/5">
                <img src="/images/5.jpg" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4 xl:!w-1/5">
                <img src="/images/projects/iniva/square/desktop-1.jpg" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4 xl:!w-1/5">
                <img src="/images/4.jpg" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
        </Swiper>
    )
}