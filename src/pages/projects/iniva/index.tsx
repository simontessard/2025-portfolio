import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import Carousel from "@/components/projects-slug/Carousel";
import Heading from "@/components/projects-slug/Heading";

export default function Project() {
    const project = projects[0];

    return (
        <Curve>
            <span id="top" className="opacity-0">top</span>

            <div className="pt-32 lg:pt-36 pb-12 px-4 md:px-6 ">

                {/* Content */}
                <Heading project={project}/>
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
