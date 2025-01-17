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
    const project = projects[2];

    const mainImg = project.gallery.large[0];
    const galleryDesktop = [project.gallery.large[1], project.gallery.large[3], project.gallery.large[2]]
    const galleryFour = [project.gallery.square[2], project.gallery.square[1], project.gallery.square[4], project.gallery.square[3]]

    return (
        <Curve>
            <Head>
                <title>Chefdechantier - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 pb-12 px-3.5 md:px-6 ">
                <Heading project={project}/>
                <MainImage img={mainImg}/>
                <GalleryDesktop gallery={galleryDesktop} title="Création d'un tunnel" desc="Le but de ce tunnel, connecté via un sous-domaine, est de récupérer de façon automatisé et précise les demandes de devis. L'entreprise et le client recoivent un mail généré de toutes les informations remplies dans les différentes étapes du formulaire."/>
                <FourImages gallery={galleryFour}/>
            </div>

            <Footer/>
        </Curve>
    );
}
