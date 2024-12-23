import Fancybox from "@/components/global/Fancybox";
import ImagesDesc from "@/components/projects-slug/ImagesDesc";

export default function TwoImages({ project }: {project: any}) {
    return (
        <Fancybox>

            <ImagesDesc title="Analog vision"
                        description="Bleu du Sud contains 29 film photographs spread over 48 pages, preserving this objective of a 100% physical medium"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">

                <a data-fancybox="gallery" href={project.gallery[1]}>
                    <img
                        className="object-cover size-full"
                        src={project.gallery[1]}
                        alt={project.title}
                    />
                </a>

                <a data-fancybox="gallery" href={project.gallery[5]}>
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