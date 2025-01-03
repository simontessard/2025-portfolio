import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import GalleryMobile from "@/components/projects-slug/GalleryMobile";
import Heading from "@/components/projects-slug/Heading";
import FourImages from "@/components/projects-slug/FourImages";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";

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
                <GalleryDesktop project={project}/>
                <FourImages project={project}/>
                <GalleryMobile project={project}/>
            </div>

            <Footer/>
        </Curve>
    );
}
