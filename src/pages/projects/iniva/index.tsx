import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import Carousel from "@/components/projects-slug/Carousel";
import Heading from "@/components/projects-slug/Heading";
import TwoImages from "@/components/projects-slug/TwoImages";
import ImagesDesc from "@/components/projects-slug/ImagesDesc";

export default function Project() {
    const project = projects[0];

    return (
        <Curve>
            <span id="top" className="opacity-0">top</span>

            <div className="pt-32 lg:pt-36 pb-12 px-3.5 md:px-6 ">

                {/* Content */}
                <Heading project={project}/>
                <MainImage project={project}/>
                <Carousel project={project}/>
                <ImagesDesc title="Analog vision"
                            description="Bleu du Sud contains 29 film photographs spread over 48 pages, preserving this objective of a 100% physical medium"
                />
                <TwoImages project={project}/>

            </div>
            <Footer/>
        </Curve>
    );
}
