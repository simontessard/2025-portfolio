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
            speed={10000}
            loop={true}
            autoplay={{delay: 1, disableOnInteraction: false, pauseOnMouseEnter: true, waitForTransition: true, stopOnLastSlide: false}}
            className="swiper-container-free-mode mb-16 md:mb-24 xl:mb-32"
        >
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4">
                <img src="https://picsum.photos/1500/1000" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4">
                <img src="https://picsum.photos/1400/1000" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4">
                <img src="https://picsum.photos/1600/1000" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4">
                <img src="https://picsum.photos/1300/1000" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4">
                <img src="https://picsum.photos/1000/1000" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4">
                <img src="https://picsum.photos/1100/1000" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
            <SwiperSlide className="!aspect-square !w-1/3 md:!w-1/4">
                <img src="https://picsum.photos/1400/1000" alt="Random" className="object-cover size-full"/>
            </SwiperSlide>
        </Swiper>
    )
}