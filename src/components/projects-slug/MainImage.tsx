import Fancybox from "@/components/global/Fancybox";
import Image from "next/image";

export default function MainImage({ img } : {img: any}) {
    return (
        <Fancybox>
            <div className="flex gap-4 md:gap-6 max-xl:flex-col xl:h-[95dvh] mb-16 md:mb-20 xl:mb-28">

                <a data-fancybox="gallery" href={img}
                   className="block overflow-hidden h-full xl:w-3/5">
                    <Image className="object-cover size-full"
                           src={img}
                           alt=""
                           width={1920}
                           height={1080}
                           loading="eager"
                    />
                </a>

                <div className="flex flex-col gap-4 md:gap-6 xl:w-2/5 h-full">
                    <a data-fancybox="gallery" href={img}
                       className="block overflow-hidden size-full">
                        <Image className="object-cover size-full"
                               src={img}
                               alt=""
                               width={1920}
                               height={1080}
                               loading="eager"
                        />
                    </a>
                    <a data-fancybox="gallery" href={img}
                       className="block overflow-hidden size-full">
                        <Image className="object-cover size-full"
                               src={img}
                               alt=""
                               width={1920}
                               height={1080}
                               loading="eager"
                        />
                    </a>
                </div>

            </div>
        </Fancybox>
    )
}