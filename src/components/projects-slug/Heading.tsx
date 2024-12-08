export default function Heading({project} : {project: any}) {
    return (
        <div className="max-xl:mb-8">
            {/* Title */}
            <div className="flex gap-2 items-start mb-8 md:mb-12">
                <h1 id="pageTitle"
                    className="text-3xl md:text-6xl xl:text-8xl uppercase text-primary font-semibold">
                    {project.title}
                </h1>
                <p className="font-medium italic text-primary mt-1 xl:mt-2.5">{project.date}</p>
            </div>

            {/* Desc */}
            <p className="text-xl md:text-2xl md:leading-9 md:max-w-4xl 2xl:max-w-4xl uppercase text-primary font-medium">
                {project.description}
            </p>
        </div>
    )
}