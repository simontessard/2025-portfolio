import projects from "@/data/projectsData.json";
import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import GalleryMobile from "@/components/projects-slug/GalleryMobile";
import Heading from "@/components/projects-slug/Heading";
import FourImages from "@/components/projects-slug/FourImages";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";
import NavigationButton from "@/components/global/NavigationButton";
import {useEffect} from "react";
import useAppStore from "@/store/store";

export default function Project() {
    const project = projects[0];

    const mainImg = project.gallery.large[0];

    const desktopImg = [project.gallery.large[4], project.gallery.large[3], project.gallery.large[5]]
    const galleryFour = [project.gallery.large[6], project.gallery.large[3], project.gallery.large[5], project.gallery.large[8]]
    const phoneImg = [project.gallery.square[2], project.gallery.square[0], project.gallery.square[1], project.gallery.square[3]]

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#742e25');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>Iniva - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 ">
                <Heading project={project} color="#742e25"/>
                <MainImage img={mainImg}/>

                <GalleryDesktop gallery={desktopImg} title="Un site logique" color="#742e25"
                                desc="Il se caractérise par une page d'accueil fournie, qui invite le visiteur à découvrir les pages
                        détaillant un hôtel ou une activité. à travers différents clichés et vidéos, on y découvre facilement une
                        représentation du Gabon qui donne envie."/>

                <FourImages gallery={galleryFour}
                            title="Une invitation à découvrir, librement et facilement"
                            desc="Le site se démarque par de nombreuses sections d'illustrations, de magnifiques carousels, une carte interactive et une navigation latérale agréable.
                        Chaque détail a été réfléchi pour donner au visiteur une idée précise de ce qui l’attend sur place."/>

                <GalleryMobile gallery={phoneImg} title="L’Adaptation Mobile : Passage Obligé" color="#742e25"
                               desc="La version mobile est optimisée, notamment avec des carousels ajustés pour petits écrans, des images responsives et une navigation fluide via le menu par exemple.
                Chaque interaction est une invitation à découvrir, sans effort, les hôtels et activités proposés par Iniva."/>

                <NavigationButton href="/work" text="Retour aux projets" color="#742e25"/>
            </div>

            <Footer color="#742e25"/>
        </Curve>
    );
}
