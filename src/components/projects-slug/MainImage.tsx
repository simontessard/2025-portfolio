export default function MainImage({ project } : {project: any}) {
    return (
        <img className="object-cover md:h-[95dvh] w-full mb-12 md:mb-20"
             src={project.gallery[0]}
             alt={project.title}
        />
    )
}