import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import Carousel from "@/components/projects-slug/Carousel";
import Heading from "@/components/projects-slug/Heading";
import FourImages from "@/components/projects-slug/FourImages";
import TwoImages from "@/components/projects-slug/TwoImages";
import Head from 'next/head'

export default function Project() {
    const project = projects[0];

    return (
        <Curve>
            <Head>
                <title>Iniva - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-28 md:pt-32 pb-12 px-3.5 md:px-6 ">
                <Heading project={project}/>
                <MainImage project={project}/>
                <TwoImages project={project}/>
                <FourImages project={project}/>
                <Carousel project={project}/>
            </div>

            <Footer/>
        </Curve>
    );
}
