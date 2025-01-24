import Fancybox from "@/components/global/Fancybox";
import ImagesDesc from "@/components/projects-slug/ImagesDesc";
import Image from "next/image";

export default function FourImages({ gallery, title, desc }: { gallery: any, title? : string, desc? : string }) {
    return (
        <Fancybox>

            <ImagesDesc title={title} description={desc} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">

                {gallery.map((image: string, index: number) => (
                    <a key={index} data-fancybox="gallery" href={image} className="cursor-zoom-in">
                        <Image
                            className="object-cover size-full"
                            loading="eager"
                            src={image}
                            alt=""
                            width={1520}
                            height={900}
                        />
                    </a>
                ))}

            </div>
        </Fancybox>
    )
}