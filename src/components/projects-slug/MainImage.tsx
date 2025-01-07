import Fancybox from "@/components/global/Fancybox";

export default function MainImage({ img } : {img: any}) {
    return (
        <Fancybox>
            <a data-fancybox="gallery" href={img} className="cursor-zoom-in">
                <img className="object-cover md:h-[95dvh] w-full mb-16 md:mb-20 xl:mb-28"
                     src={img}
                     alt=""
                />
            </a>
        </Fancybox>
    )
}