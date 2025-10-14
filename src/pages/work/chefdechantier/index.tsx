import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import Heading from "@/components/projects-slug/Heading";
import FourImages from "@/components/projects-slug/FourImages";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";
import NavigationButton from "@/components/global/NavigationButton";
import useAppStore from "@/store/store";
import {useEffect} from "react";
import { useTranslations } from 'next-intl';

export default function Project() {
    const t = useTranslations();
    const projectData = t.raw('projects.chefdechantier');

    const mainImg = [
        "/images/projects/cdc/large/desktop-1.jpg",
        "/images/projects/cdc/large/desktop-2.jpg",
        "/images/projects/cdc/large/desktop-3.jpg"
    ];

    const galleryDesktop = [
        "/images/projects/cdc/large/desktop-2.jpg",
        "/images/projects/cdc/large/desktop-1.jpg",
        "/images/projects/cdc/large/desktop-3.jpg"
    ];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#123378');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{projectData.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 px-4 md:px-6">
                <Heading project={projectData} color="#123378"/>
                <MainImage gallery={mainImg}/>
                <GalleryDesktop
                    color="#123378"
                    gallery={galleryDesktop}
                    title={projectData.sections.tunnel.title}
                    desc={projectData.sections.tunnel.description}
                />
            </div>

            <Footer color="#123378"/>
        </Curve>
    );
}