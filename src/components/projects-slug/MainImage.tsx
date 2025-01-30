import Fancybox from "@/components/global/Fancybox";
import Image from "next/image";

interface MainImageProps {
    gallery: string[];
}

export default function MainImage({ gallery = [] }: MainImageProps) {
    if (!Array.isArray(gallery) || gallery.length < 3) {
        console.warn('MainImage component needs an array of 3 images');
        return null;
    }

    return (
        <Fancybox>
            <div className="flex gap-4 md:gap-6 max-xl:flex-col xl:h-[95dvh] mb-16 md:mb-20 xl:mb-28">

                {/* Image principale à gauche */}
                <a data-fancybox="gallery" href={gallery[0]}
                   className="block overflow-hidden h-full xl:w-3/5">
                    <Image
                        className="object-cover size-full"
                        src={gallery[0]}
                        alt="Project main view"
                        width={1920}
                        height={1080}
                        loading="eager"
                    />
                </a>

                {/* Colonne de droite avec 2 images */}
                <div className="flex flex-col gap-4 md:gap-6 xl:w-2/5 h-full">
                    <a data-fancybox="gallery" href={gallery[1]}
                       className="block overflow-hidden size-full">
                        <Image
                            className="object-cover size-full"
                            src={gallery[1]}
                            alt="Project secondary view"
                            width={1920}
                            height={1080}
                            loading="eager"
                        />
                    </a>
                    <a data-fancybox="gallery" href={gallery[2]}
                       className="block overflow-hidden size-full">
                        <Image
                            className="object-cover size-full"
                            src={gallery[2]}
                            alt="Project tertiary view"
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