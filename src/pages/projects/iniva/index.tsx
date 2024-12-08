import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer";
import Link from "next/link";
import MainImage from "@/components/projects-slug/MainImage";
import Carousel from "@/components/projects-slug/Carousel";
import Heading from "@/components/projects-slug/Heading";

export default function Project() {
    const project = projects[0];

    return (
        <Curve>
            <span id="top" className="opacity-0">top</span>

            <div className="pt-32 md:pt-40 xl:pt-44 pb-12 px-4 md:px-6 ">
                <div className="flex max-xl:flex-col xl:justify-between w-full xl:items-end">

                    <Heading project={project}/>

                    <Link href="https://inivatourism.com/" target="_blank"
                          className="group size-fit max-xl:ml-auto flex items-center gap-2 uppercase md:text-lg xl:text-2xl text-primary font-medium">
                        Voir le site
                        <svg
                            className="shrink-0 -rotate-45 size-6 xl:size-7 md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5 duration-500"
                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>

                </div>

                <span className="block h-0.5 w-full bg-primary my-8 md:my-14"></span>

                {/* Content */}
                <MainImage project={project}/>
                <Carousel project={project}/>

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
