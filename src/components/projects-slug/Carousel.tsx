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
                <button className="custom-prev-button enabled:md:hover:-translate-x-1 transition-transform duration-300 disabled:opacity-50">
                    <svg className="size-9 md:size-10 text-primary -rotate-90"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                              fill="currentColor"
                        />
                    </svg>
                </button>
                <button className="custom-next-button enabled:md:hover:translate-x-1 transition-transform duration-300 disabled:opacity-50">
                    <svg className="size-9 md:size-10 text-primary rotate-90"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                              fill="currentColor"
                        />
                    </svg>
                </button>
            </div>

        </div>
    );
}
