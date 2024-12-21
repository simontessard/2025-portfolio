export default function MainImage({ project } : {project: any}) {
    return (
        <img className="object-cover md:h-[95dvh] w-full mb-16 md:mb-20 xl:mb-28"
             src={project.gallery[0]}
             alt={project.title}
        />
    )
}