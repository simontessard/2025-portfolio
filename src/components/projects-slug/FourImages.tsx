import Fancybox from "@/components/global/Fancybox";
import ImagesDesc from "@/components/projects-slug/ImagesDesc";
import Image from "next/image";

export default function FourImages({ project }: {project: any}) {
    return (
        <Fancybox>

            <ImagesDesc title="Une invitation à découvrir, librement et facilement"
                        description="Le site se démarque par de nombreuses sections d'illustrations, de magnifiques carousels, une carte interactive et une navigation latérale agréable.
                        Chaque détail a été réfléchi pour donner au visiteur une idée précise de ce qui l’attend sur place."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">

                <a data-fancybox="gallery" href={project.gallery.large[1]} className="cursor-zoom-in">
                    <img
                        className="object-cover size-full"
                        src={project.gallery.large[1]}
                        alt={project.title}
                    />
                </a>

                <a data-fancybox="gallery" href={project.gallery.large[6]} className="cursor-zoom-in">
                    <img
                        className="object-cover size-full"
                        src={project.gallery.large[6]}
                        alt={project.title}
                    />
                </a>

                <a data-fancybox="gallery" href={project.gallery.large[7]} className="cursor-zoom-in">
                    <Image
                        width={1920}
                        height={1080}
                        className="object-cover size-full"
                        src={project.gallery.large[7]}
                        alt={project.title}
                    />
                </a>

                <a data-fancybox="gallery" href={project.gallery.large[8]} className="cursor-zoom-in">
                    <Image
                        width={1920}
                        height={1080}
                        className="object-cover size-full"
                        src={project.gallery.large[8]}
                        alt={project.title}
                    />
                </a>

            </div>
        </Fancybox>
    )
}