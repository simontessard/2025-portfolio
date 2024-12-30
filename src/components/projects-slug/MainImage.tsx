import Fancybox from "@/components/global/Fancybox";

export default function MainImage({ project } : {project: any}) {
    return (
        <Fancybox>
            <a data-fancybox="gallery" href={project.gallery[0]} className="cursor-zoom-in">
                <img className="object-cover md:h-[95dvh] w-full mb-16 md:mb-20 xl:mb-28"
                     src={project.gallery[0]}
                     alt={project.title}
                />
            </a>
        </Fancybox>
    )
}