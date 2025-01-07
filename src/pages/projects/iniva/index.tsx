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
    const project = projects[0];

    const mainImg = project.gallery.large[0];

    const desktopImg = [project.gallery.large[4], project.gallery.large[3], project.gallery.large[5]]
    const phoneImg = [project.gallery.square[2], project.gallery.square[0], project.gallery.square[1], project.gallery.square[3]]

    return (
        <Curve>
            <Head>
                <title>Iniva - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-28 md:pt-32 pb-12 px-3.5 md:px-6 ">
                <Heading project={project}/>
                <MainImage img={mainImg}/>

                <GalleryDesktop gallery={desktopImg} title="Un site logique"
                                desc="Il se caractérise par une page d'accueil fournie, qui invite le visiteur à découvrir les pages
                        détaillant un hôtel ou une activité. à travers différents clichés et vidéos, on y découvre facilement une
                        représentation du Gabon qui donne envie."/>

                <FourImages project={project}/>

                <GalleryMobile gallery={phoneImg} title="L’Adaptation Mobile : Passage Obligé"
                               desc="La version mobile est optimisée, notamment avec des carousels ajustés pour petits écrans, des images responsives et une navigation fluide via le menu par exemple.
                Chaque interaction est une invitation à découvrir, sans effort, les hôtels et activités proposés par Iniva."/>
            </div>

            <Footer/>
        </Curve>
    );
}
