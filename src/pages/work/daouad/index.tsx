import Curve from "@/components/utils/Curve";
import Footer from "@/components/global/Footer/Footer";
import MainImage from "@/components/projects-slug/MainImage";
import GalleryMobile from "@/components/projects-slug/GalleryMobile";
import Heading from "@/components/projects-slug/Heading";
import Head from 'next/head'
import GalleryDesktop from "@/components/projects-slug/GalleryDesktop";
import NavigationButton from "@/components/global/NavigationButton";
import useAppStore from "@/store/store";
import {useEffect} from "react";
import { useTranslations } from 'next-intl';

export default function Project() {
    const t = useTranslations();
    const projectData = t.raw('projects.daouad');

    const mainImg = projectData.gallery.large[0];
    const desktopImg = [
        projectData.gallery.square[2],
        projectData.gallery.square[0],
        projectData.gallery.square[1]
    ];
    const phoneImg = [
        projectData.gallery.square[3],
        projectData.gallery.square[4],
        projectData.gallery.square[5]
    ];

    const setColor = useAppStore((state) => state.setColor);

    useEffect(() => {
        setColor('#3a6961');
        return () => setColor('#0156cf');
    }, []);

    return (
        <Curve>
            <Head>
                <title>{projectData.title} - Simon TESSARD</title>
            </Head>

            <span id="top" className="opacity-0">top</span>

            <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 ">
                <Heading project={projectData} color="#3a6961"/>
                <MainImage img={mainImg}/>
                <GalleryDesktop
                    gallery={desktopImg}
                    color="#3a6961"
                    title={projectData.sections.desktop.title}
                    desc={projectData.sections.desktop.description}
                />
                <GalleryMobile
                    gallery={phoneImg}
                    color="#3a6961"
                    title={projectData.sections.mobile.title}
                    desc={projectData.sections.mobile.description}
                />
                <NavigationButton
                    href="/work"
                    text={t('common.backToProjects')}
                    color="#3a6961"
                />
            </div>

            <Footer color="#3a6961"/>
        </Curve>
    );
}