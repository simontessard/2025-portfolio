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
import { useTranslations } from 'next-intl';

export default function Project() {
    const t = useTranslations();
    const projectsData = t.raw('projects');
    const project = projectsData.iniva;
    const projectData = t.raw('projects.iniva');

    const mainImg = [project.gallery.large[0], project.gallery.large[1], project.gallery.large[3]];
    const desktopImg = [project.gallery.large[4], project.gallery.large[3], project.gallery.large[5]];
    const galleryFour = [project.gallery.large[6], project.gallery.large[3], project.gallery.large[5], project.gallery.large[8]];
    const phoneImg = [project.gallery.square[2], project.gallery.square[0], project.gallery.square[1], project.gallery.square[3]];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#742e25');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{project.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 px-4 md:px-6 ">
                <Heading project={project} color="#742e25"/>
                <MainImage gallery={mainImg}/>

                <GalleryDesktop
                    gallery={desktopImg}
                    title={projectData.sections.logical.title}
                    color="#742e25"
                    desc={projectData.sections.logical.description}
                />

                <FourImages
                    gallery={galleryFour}
                    title={projectData.sections.discover.title}
                    desc={projectData.sections.discover.description}
                />

                <GalleryMobile
                    gallery={phoneImg}
                    title={projectData.sections.mobile.title}
                    color="#742e25"
                    desc={projectData.sections.mobile.description}
                />

            </div>

            <Footer color="#742e25"/>
        </Curve>
    );
}