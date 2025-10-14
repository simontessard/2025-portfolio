import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import GalleryMobile from "@/components/projects-slug/GalleryMobile";
import Heading from "@/components/projects-slug/Heading";
import FourImages from "@/components/projects-slug/FourImages";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";
import {useEffect} from "react";
import useAppStore from "@/store/store";
import { useTranslations } from 'next-intl';

export default function Project() {
    const t = useTranslations();
    const projectsData = t.raw('projects');
    const project = projectsData.iniva;
    const projectData = t.raw('projects.iniva');

    const mainImg = [
        "/images/projects/iniva/large/iniva-main.png",
        "/images/projects/iniva/large/desktop-1.jpg",
        "/images/projects/iniva/large/desktop-2.jpg"
    ];

    const desktopImg = [
        "/images/projects/iniva/large/desktop-3.jpg",
        "/images/projects/iniva/large/desktop-2.jpg",
        "/images/projects/iniva/large/desktop-4.jpg"
    ];

    const galleryFour = [
        "/images/projects/iniva/large/desktop-5.jpg",
        "/images/projects/iniva/large/desktop-2.jpg",
        "/images/projects/iniva/large/desktop-4.jpg",
        "/images/projects/iniva/large/desktop-8.jpg"
    ];

    const phoneImg = [
        "/images/projects/iniva/square/phone-1.jpg",
        "/images/projects/iniva/square/phone-4.jpg",
        "/images/projects/iniva/square/phone-5.jpg",
        "/images/projects/iniva/square/phone-6.jpg"
    ];

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