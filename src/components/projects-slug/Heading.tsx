import Link from "next/link";
import NavigationButton from "@/components/global/NavigationButton";

interface Project {
    title: string;
    date: string;
    description: string;
    technos: string[];
    services: string[];
    context: string;
    url: string;
}

interface HeadingProps {
    project: Project;
    color?: string;
}

export default function Heading({ project, color = "#0156cf" }: HeadingProps) {
    const textStyle = { color };

    return (
        <>
            <div className="flex flex-col w-full">
                <NavigationButton
                    href="/work"
                    text="Retour"
                    color={color}
                    className="mb-4 md:mb-6 xl:mb-8"
                />
                <div className="mb-10 xl:mb-0">

                    {/* Title */}
                    <div className="flex gap-2 md:gap-2.5 xl:gap-3 items-start mb-8 md:mb-12">
                        <h1 style={textStyle} className="font-primary text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl uppercase tracking-tight font-medium">
                            {project.title}
                        </h1>
                        <p style={textStyle} className="font-secondary italic md:text-xl mt-1 xl:mt-2.5">
                            {project.date}
                        </p>
                    </div>

                    <div className="flex max-xl:flex-col justify-between">

                        {/* Desc */}
                        <p style={textStyle} className="font-primary md:text-lg md:leading-8 md:max-w-4xl xl:max-w-2xl 2xl:max-w-3xl uppercase mb-8 md:mb-12">
                            {project.description}
                        </p>

                        <div className="flex max-md:flex-col xl:justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-24 2xl:w-3/5">
                            <div className="flex flex-col">
                                <p style={textStyle} className="font-secondary md:text-lg uppercase italic mb-1.5 sm:mb-2 md:mb-2.5 xl:mb-3">
                                    Technologies
                                </p>
                                <p style={textStyle} className="flex items-center flex-wrap font-primary uppercase max-md:text-sm mb-1 md:mb-1.5">
                                    {project.technos.map((techno, index) => (
                                        <span key={index} className="flex items-center size-fit">
                                            {techno}
                                            {index < project.technos.length - 1 &&
                                                <span style={{backgroundColor: color }} className="inline-block size-1 md:size-1.5 mx-1.5 rounded-full"/> }
                                        </span>
                                    ))}
                                </p>
                            </div>

                            {/* Services */}
                            <div className="max-md:w-1/2 flex flex-col">
                                <p style={textStyle} className="font-secondary md:text-lg uppercase italic mb-1.5 sm:mb-2 md:mb-2.5 xl:mb-3">
                                    Services
                                </p>
                                {project.services.map((service: string, index: number) => (
                                    <p key={index} style={textStyle}
                                       className="font-primary uppercase max-md:text-sm mb-1 md:mb-1.5">
                                        {service}
                                    </p>
                                ))}
                            </div>

                            {/* Client */}
                            <div className="flex flex-col">
                                <p style={textStyle} className="font-secondary md:text-lg uppercase italic mb-1.5 sm:mb-2 md:mb-2.5 xl:mb-3">
                                    Contexte
                                </p>
                                <p style={textStyle} className="font-primary uppercase max-md:text-sm">
                                    {project.context}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <Link href={project.url} target="_blank"
                      className="group size-fit flex items-center gap-2 font-primary uppercase text-lg md:text-xl font-medium">
                    <span style={textStyle}>
                        Voir le projet
                    </span>
                    <svg style={textStyle}
                         className="shrink-0 rotate-45 size-6 md:size-[1.65rem] md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5 duration-300"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 82 82">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                              fill="currentColor"/>
                    </svg>
                </Link>

            </div>

            <span style={{backgroundColor: color }} className="block h-0.5 w-full mt-7 md:mt-10 mb-8 md:mb-14"></span>
        </>
    )
}