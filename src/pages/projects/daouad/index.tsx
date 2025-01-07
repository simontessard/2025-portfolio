import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import GalleryMobile from "@/components/projects-slug/GalleryMobile";
import Heading from "@/components/projects-slug/Heading";
import FourImages from "@/components/projects-slug/FourImages";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";

export default function Project() {
    const project = projects[1];

    const mainImg = project.gallery.large[0];
    const desktopImg = [project.gallery.square[2], project.gallery.square[0], project.gallery.square[1]]
    const phoneImg = [project.gallery.square[3], project.gallery.square[4], project.gallery.square[5]]

    return (
        <Curve>
            <Head>
                <title>Daouad - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-28 md:pt-32 pb-12 px-3.5 md:px-6 ">
                <Heading project={project}/>
                <MainImage img={mainImg}/>
                <GalleryDesktop gallery={desktopImg}/>
                <GalleryMobile gallery={phoneImg}/>
            </div>

            <Footer/>
        </Curve>
    );
}
