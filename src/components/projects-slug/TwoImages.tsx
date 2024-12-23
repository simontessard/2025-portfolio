import Fancybox from "@/components/global/Fancybox";

export default function TwoImages({ project }: {project: any}) {
    return (
        <Fancybox>
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
                        src={project.gallery[1]}
                        alt={project.title}
                    />
                </a>
            </div>
        </Fancybox>
    )
}