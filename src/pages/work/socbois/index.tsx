import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import GalleryMobile from "@/components/projects-slug/GalleryMobile";
import Heading from "@/components/projects-slug/Heading";
import Head from 'next/head'
import NavigationButton from "@/components/global/NavigationButton";

export default function Project() {
    const project = projects[4];

    const mainImg = project.gallery.large[0];
    const phoneImg = [project.gallery.square[1], project.gallery.square[4], project.gallery.square[2], project.gallery.square[3]]

    return (
        <Curve>
            <Head>
                <title>Socbois - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
                <Heading project={project} color="#402915"/>
                <MainImage img={mainImg}/>
                <GalleryMobile gallery={phoneImg} title="Un projet « One page »" color="#402915"
                               desc="Cette vitrine propose sur une seule page des sections importantes à mettre en avant, tels que les domaines d'expertises et un formulaire de contact."/>
                <NavigationButton href="/work" text="Retour aux projets"/>
            </div>

            <Footer/>
        </Curve>
    );
}
