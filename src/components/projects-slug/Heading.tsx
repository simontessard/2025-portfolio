export default function Heading({project} : {project: any}) {
    return (
        <div className="mb-8 md:mb-12">
            {/* Title */}
            <div className="flex gap-2 font-primary items-start mb-8 md:mb-12">
                <h1 id="pageTitle"
                    className="text-4xl md:text-6xl xl:text-8xl uppercase text-primary font-semibold">
                    {project.title}
                </h1>
                <p className="editorial italic text-primary mt-1 xl:mt-2.5">{project.date}</p>
            </div>

            {/* Desc */}
            <p className="font-primary text-xl md:text-2xl md:leading-9 md:max-w-4xl 2xl:max-w-4xl uppercase text-primary">
                {project.description}
            </p>
        </div>
    )
}