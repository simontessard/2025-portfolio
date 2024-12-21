export default function TwoImages({ project }: { project: Project }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
            <img
                className="object-cover size-full"
                src={project.gallery[1]}
                alt={project.title}
            />
            <img
                className="object-cover size-full"
                src={project.gallery[5]}
                alt={project.title}
            />
        </div>
    )
}