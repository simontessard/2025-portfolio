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

    const mainImg = projectData.gallery.large[0];
    const galleryDesktop = [
        projectData.gallery.large[1],
        projectData.gallery.large[3],
        projectData.gallery.large[2]
    ];
    const galleryFour = [
        projectData.gallery.square[2],
        projectData.gallery.square[1],
        projectData.gallery.square[4],
        projectData.gallery.square[3]
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

            <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
                <Heading project={projectData} color="#123378"/>
                <MainImage img={mainImg}/>
                <GalleryDesktop
                    color="#123378"
                    gallery={galleryDesktop}
                    title={projectData.sections.tunnel.title}
                    desc={projectData.sections.tunnel.description}
                />
                <FourImages
                    gallery={galleryFour}
                    title={projectData.sections.gallery.title}
                    desc={projectData.sections.gallery.description}
                />
                <NavigationButton
                    href="/work"
                    text={t('common.backToProjects')}
                    color="#123378"
                />
            </div>

            <Footer color="#123378"/>
        </Curve>
    );
}