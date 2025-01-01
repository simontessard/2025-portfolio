import Fancybox from "@/components/global/Fancybox";
import ImagesDesc from "@/components/projects-slug/ImagesDesc";

export default function FourImages({ project }: {project: any}) {
    return (
        <Fancybox>

            <ImagesDesc title="Une invitation à découvrir, librement et facilement"
                        description="Le site se démarque par de nombreuses sections d'illustrations, de magnifiques carousels, une carte interactive et une navigation latérale agréable.
                        Chaque détail a été réfléchi pour donner au visiteur une idée précise de ce qui l’attend sur place."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                <a data-fancybox="gallery" href={project.gallery[1]} className="cursor-zoom-in">
                    <img
                        className="object-cover size-full"
                        src={project.gallery[1]}
                        alt={project.title}
                    />
                </a>

                <a data-fancybox="gallery" href={project.gallery[7]} className="cursor-zoom-in">
                    <img
                        className="object-cover size-full"
                        src={project.gallery[7]}
                        alt={project.title}
                    />
                </a>

                <a data-fancybox="gallery" href={project.gallery[6]} className="cursor-zoom-in">
                    <img
                        className="object-cover size-full"
                        src={project.gallery[6]}
                        alt={project.title}
                    />
                </a>

                <a data-fancybox="gallery" href={project.gallery[5]} className="cursor-zoom-in">
                    <img
                        className="object-cover size-full"
                        src={project.gallery[5]}
                        alt={project.title}
                    />
                </a>

            </div>
        </Fancybox>
    )
}