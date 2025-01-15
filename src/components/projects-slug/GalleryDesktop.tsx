import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import ImagesDesc from "@/components/projects-slug/ImagesDesc";
import Fancybox from "@/components/global/Fancybox";
import 'swiper/css';
import 'swiper/css/navigation';

export default function GalleryDesktop({ gallery, title, desc }: { gallery: any, title? : string, desc? : string }) {
    return (
        <div className="relative mb-16 md:mb-20">

            <ImagesDesc title={title} description={desc}/>

            <Fancybox>
                <Swiper
                    className="swiper-gallery-desktop md:h-[80dvh]"
                    grabCursor={true}
                    modules={[Navigation, Scrollbar]}
                    freeMode={true}
                    scrollbar={{el: '.scrollbar-custom-2', draggable: true, snapOnRelease: false}}
                    navigation={{
                        prevEl: '.gallery-desktop-prev-button',
                        nextEl: '.gallery-desktop-next-button',
                    }}
                    spaceBetween={15}
                    breakpoints={{
                        768: {
                            spaceBetween: 30,
                            slidesPerView: 1.5,
                        },
                    }}
                    slidesPerView={1.25}
                >
                    {gallery.map((image: string, index: number) => (
                        <SwiperSlide key={index}>
                            <a data-fancybox="gallery" href={image} className="cursor-zoom-in">
                                <img
                                    className="object-cover size-full"
                                    src={image}
                                    alt=""
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Fancybox>

            <div className="flex items-end gap-5 md:gap-8 justify-between">
                <div className="scrollbar-custom-2 cursor-grab bg-primary/30 w-full h-2 md:h-1.5 md:hover:h-2 transition-transform mb-1"></div>
                <div className="flex gap-1.5 md:gap-2 mt-2 md:mt-4 w-fit">
                    <button
                        className="gallery-desktop-prev-button enabled:md:hover:-translate-x-1 transition-transform duration-300 disabled:opacity-50">
                        <svg className="size-9 md:size-10 text-primary -rotate-90"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                                  fill="currentColor"
                            />
                        </svg>
                    </button>
                    <button
                        className="gallery-desktop-next-button enabled:md:hover:translate-x-1 transition-transform duration-300 disabled:opacity-50">
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

        </div>
    );
}
