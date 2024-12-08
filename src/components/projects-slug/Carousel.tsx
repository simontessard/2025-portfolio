"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function Carousel({ project }: { project: any }) {
    return (
        <div className="relative mb-10 md:mb-12">

            <Swiper
                className="swiper-carousel-content"
                grabCursor={true}
                modules={[Navigation]}
                navigation={{
                    prevEl: '.custom-prev-button',
                    nextEl: '.custom-next-button',
                }}
                spaceBetween={15}
                breakpoints={{
                    768: {
                        spaceBetween: 30,
                        slidesPerView: 3.5,
                    },
                }}
                slidesPerView={1.5}
            >
                <SwiperSlide>
                    <img
                        className="aspect-square object-cover size-full"
                        src={project.gallery[4]}
                        alt={project.title}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="aspect-square object-cover size-full"
                        src={project.gallery[3]}
                        alt={project.title}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="aspect-square object-cover size-full"
                        src={project.gallery[2]}
                        alt={project.title}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="aspect-square object-cover size-full"
                        src={project.gallery[3]}
                        alt={project.title}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="aspect-square object-cover size-full"
                        src={project.gallery[4]}
                        alt={project.title}
                    />
                </SwiperSlide>
            </Swiper>

            <div className="flex gap-1.5 md:gap-2 mt-2 md:mt-4 justify-end">
                <button className="custom-prev-button enabled:md:hover:-translate-x-1 transition-transform duration-500 disabled:opacity-50">
                    <svg className="size-9 md:size-10 rotate-180 stroke-primary"
                         width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className="custom-next-button enabled:md:hover:translate-x-1 transition-transform duration-500 disabled:opacity-50">
                    <svg className="size-9 md:size-10 stroke-primary"
                         width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

        </div>
    );
}
