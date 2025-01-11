import Fancybox from "@/components/global/Fancybox";
import Image from "next/image";

export default function MainImage({ img } : {img: any}) {
    return (
        <Fancybox>
            <a data-fancybox="gallery" href={img} className="cursor-zoom-in">
                <Image className="object-cover md:h-[95dvh] w-full mb-16 md:mb-20 xl:mb-28"
                     src={img}
                     alt=""
                     width={1920}
                     height={1080}
                />
            </a>
        </Fancybox>
    )
}