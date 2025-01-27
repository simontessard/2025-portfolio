import Fancybox from "@/components/global/Fancybox";
import Image from "next/image";

export default function MainImage({ img } : {img: any}) {
    return (
        <Fancybox>
            <a data-fancybox="gallery" href={img} className="block overflow-hidden md:h-[95dvh] w-full mb-16 md:mb-20 xl:mb-28">
                <Image className="object-cover size-full"
                     src={img}
                     alt=""
                     width={1920}
                     height={1080}
                     loading="eager"
                />
            </a>
        </Fancybox>
    )
}