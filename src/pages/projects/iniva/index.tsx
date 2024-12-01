import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer";
import Link from "next/link";

export default function Project() {
    const project = projects[0];

    return (
        <Curve>
            <div className="min-h-screen pt-32 md:pt-40 xl:pt-44 pb-12 px-4 md:px-6">

                <div className="flex max-xl:flex-col xl:justify-between w-full xl:items-end">

                    <div className="max-xl:mb-8">
                        {/* Title */}
                        <div className="flex gap-1.5 items-start mb-8 md:mb-12">
                            <h1 className="text-3xl md:text-6xl xl:text-8xl uppercase text-primary font-semibold">
                                {project.title}
                            </h1>
                            <p className="font-medium italic text-primary mt-1 xl:mt-2.5">2024</p>
                        </div>

                        {/* Desc */}
                        <p className="text-xl md:text-2xl md:leading-9 md:max-w-4xl 2xl:max-w-4xl uppercase text-primary font-medium">
                            {project.description}
                        </p>
                    </div>

                    <Link href="https://inivatourism.com/" target="_blank"
                          className="group size-fit max-xl:ml-auto flex items-center gap-2 uppercase md:text-lg xl:text-2xl text-primary font-medium">
                        Voir le site
                        <svg className="shrink-0 -rotate-45 size-6 xl:size-7 md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5 duration-500"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>

                </div>

                <span className="block h-0.5 w-full bg-primary my-8 md:my-14"></span>

                {/* Content */}
                <img className="object-cover md:h-[90dvh] w-full mb-12 md:mb-20"
                     src={project.gallery[0]}
                     alt={project.title}/>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-20">
                    <img
                        className="aspect-square object-cover size-full"
                        src={project.gallery[4]}
                        alt={project.title}
                    />
                    <img
                        className="aspect-square object-cover size-full"
                        src={project.gallery[2]}
                        alt={project.title}
                    />
                    <img
                        className="aspect-square object-cover size-full"
                        src={project.gallery[3]}
                        alt={project.title}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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

            </div>
            <Footer/>
        </Curve>
    );
}
