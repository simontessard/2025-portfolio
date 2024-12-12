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
                <div className="flex flex-col w-full ">

                    <Heading project={project}/>

                    <Link href="https://inivatourism.com/" target="_blank"
                          className="group size-fit flex items-center gap-2 font-primary uppercase text-lg md:text-xl xl:text-2xl text-primary font-semibold">
                        Visiter le site
                        <svg className="shrink-0 rotate-45 size-6 md:size-7 xl:size-8 md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5 duration-500"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12.252 41L41 12.252 69.749 41l-4.832 4.832-20.5-20.5v43.002h-6.834V25.331l-20.5 20.5L12.252 41z"
                                  fill="currentColor"
                            />
                        </svg>
                    </Link>

                </div>

                <span className="block h-0.5 w-full bg-primary my-8 md:my-14"></span>

                {/* Content */}
                <MainImage project={project}/>
                <Carousel project={project}/>

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

            </div>
            <Footer/>
        </Curve>
    );
}
